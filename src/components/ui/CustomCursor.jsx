import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 35, stiffness: 350, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);

        const handleMouseOver = (e) => {
            const target = e.target;
            if (!target) return;
            
            const isClickable = 
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.closest(".cursor-pointer") ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA";
            
            setHovered(!!isClickable);
        };

        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#FFE600] rounded-full pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 hidden lg:block shadow-[0_0_10px_#FFE600]"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-[#FFE600] rounded-full pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 hidden lg:block"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
                animate={{
                    scale: hovered ? 1.8 : 1,
                    backgroundColor: hovered ? "rgba(255, 230, 0, 0.15)" : "rgba(255, 230, 0, 0)",
                    borderColor: hovered ? "#FFE600" : "rgba(255, 230, 0, 0.4)",
                    borderWidth: hovered ? "2px" : "1px",
                }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
        </>
    );
};

export default CustomCursor;
