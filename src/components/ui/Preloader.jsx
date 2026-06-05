import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const words = ["CREATIVE", "DIGITAL", "GROWTH", "STRATEGY", "PIXELOG"];

const Preloader = ({ setLoading }) => {
    const [index, setIndex] = useState(0);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (index === words.length - 1) return;
        const timeout = setTimeout(
            () => {
                setIndex((prev) => prev + 1);
            },
            index === 0 ? 1000 : 150
        );
        return () => clearTimeout(timeout);
    }, [index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setWidth(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            })
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0d0d0d] text-white"
        >
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                key={index}
                className="text-5xl md:text-7xl font-black tracking-tighter font-unbounded text-white"
            >
                {words[index]}<span className="text-[#FFE600]">.</span>
            </motion.p>

            <div className="absolute bottom-10 right-10 flex flex-col items-end">
                <span className="text-6xl font-black font-unbounded text-[#FFE600]">
                    {width}%
                </span>
            </div>
        </motion.div>
    );
};

export default Preloader;
