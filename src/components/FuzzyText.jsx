import React, { useEffect, useRef } from "react";

const FuzzyText = ({
  children,
  fontSize = "clamp(3rem, 9vw, 6rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;

      let numericFontSize;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        numericFontSize = parseFloat(window.getComputedStyle(temp).fontSize);
        document.body.removeChild(temp);
      }

      const text = React.Children.toArray(children).join("");

      /* ---------- OFFSCREEN CANVAS ---------- */
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";

      const metrics = offCtx.measureText(text);

      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textWidth = Math.ceil(actualLeft + actualRight);
      const textHeight = Math.ceil(actualAscent + actualDescent);

      const padding = 10;
      offscreen.width = textWidth + padding;
      offscreen.height = textHeight;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.fillStyle = color;
      offCtx.fillText(text, padding / 2 - actualLeft, actualAscent);

      /* ---------- MAIN CANVAS ---------- */
      const horizontalMargin = 50;
      canvas.width = offscreen.width + horizontalMargin * 2;
      canvas.height = offscreen.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width *= dpr;
      canvas.height *= dpr;
      ctx.scale(dpr, dpr);

      ctx.translate(horizontalMargin, 0);

      const fuzzRange = isIOS ? 15 : 30;
      let isHovering = false;

      const interactiveLeft = horizontalMargin;
      const interactiveRight = interactiveLeft + textWidth;
      const interactiveTop = 0;
      const interactiveBottom = textHeight;

      const isInsideTextArea = (x, y) =>
        x >= interactiveLeft &&
        x <= interactiveRight &&
        y >= interactiveTop &&
        y <= interactiveBottom;

      const run = () => {
        if (isCancelled) return;

        ctx.clearRect(
          -fuzzRange,
          -fuzzRange,
          offscreen.width + fuzzRange * 2,
          offscreen.height + fuzzRange * 2
        );

        const intensity = isIOS
          ? baseIntensity
          : isHovering
          ? hoverIntensity
          : baseIntensity;

        const step = isIOS ? 2 : 1;

        for (let y = 0; y < textHeight; y += step) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            y,
            offscreen.width,
            step,
            dx,
            y,
            offscreen.width,
            step
          );
        }

        // Throttle FPS for iOS
        setTimeout(
          () => {
            animationFrameId = requestAnimationFrame(run);
          },
          isIOS ? 33 : 16
        );
      };

      run();

      /* ---------- EVENTS ---------- */
      const handleMouseMove = (e) => {
        if (!enableHover || isIOS) return;
        const rect = canvas.getBoundingClientRect();
        isHovering = isInsideTextArea(
          e.clientX - rect.left,
          e.clientY - rect.top
        );
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      if (enableHover && !isIOS) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
      }

      canvas.cleanupFuzzyText = () => {
        cancelAnimationFrame(animationFrameId);
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      };
    };

    init();

    return () => {
      isCancelled = true;
      cancelAnimationFrame(animationFrameId);
      if (canvas?.cleanupFuzzyText) canvas.cleanupFuzzyText();
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full cursor-pointer"
      style={{
        transform: "translateZ(0)",
        willChange: "transform",
      }}
    />
  );
};

export default FuzzyText;
