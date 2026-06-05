import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[3px] bg-[#FFE600] z-[99999] origin-left shadow-[0_0_10px_#FFE600]"
            style={{ scaleX }}
        />
    );
};

export default ScrollProgress;
