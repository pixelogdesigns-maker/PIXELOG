import React from "react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
    const { scrollY } = useScroll();

    // Parallax Effects
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);
    const scale = useTransform(scrollY, [0, 500], [1, 1.2]);
    const rotate = useTransform(scrollY, [0, 800], [0, 45]);

    return (
        <Section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-white">

            {/* --- Animated Shapes (Orange & Clean) --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Large Orange Circle */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-[#ff4d00] blur-[120px] opacity-20"
                />
                {/* Secondary Shape */}
                <motion.div
                    style={{ y: y2, x: y1 }}
                    className="absolute bottom-[10%] left-[-5%] w-[40vh] h-[40vh] rounded-full bg-yellow-400 blur-[100px] opacity-20"
                />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="z-10 relative flex flex-col items-center justify-center w-full px-4 text-center">

                {/* Top Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 overflow-hidden"
                >
                    <span className="inline-block py-2 px-4 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-sm font-bold tracking-widest uppercase font-sora text-zinc-600 shadow-sm">
                        Digital Creative Agency
                    </span>
                </motion.div>

                {/* Main Headline - Massive & Swiss Style */}
                <div className="relative mb-8 z-20">
                    <motion.h1
                        initial={{ y: 100, opacity: 0, rotate: 5 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-unbounded font-black text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tighter text-black select-none"
                    >
                        PIXELOG
                    </motion.h1>

                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-2xl text-lg md:text-2xl text-zinc-600 font-medium font-sora leading-relaxed mb-10"
                >
                    We build <span className="text-black font-bold underline decoration-[#ff4d00] decoration-4 underline-offset-4">brands that matter</span> with design, motion, and technology.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="primary" className="bg-black text-white hover:bg-[#ff4d00] hover:scale-110 border-none shadow-2xl shadow-black/20">
                        Start Your Project
                    </Button>
                    <Button variant="secondary" className="bg-white text-black border-2 border-black/5 hover:border-black hover:bg-black hover:text-white">
                        View Showreel
                    </Button>
                </motion.div>

            </div>

            {/* Floating Elements / 3D Abstract representation */}
            <motion.div
                style={{ y: y1, rotate: rotate }}
                className="absolute right-[5%] bottom-[20%] w-24 h-24 md:w-40 md:h-40 bg-black rounded-[2rem] z-0 flex items-center justify-center shadow-2xl shadow-orange-500/40"
            >
                <div className="w-12 h-12 bg-[#ff4d00] rounded-full"></div>
            </motion.div>
            <motion.div
                style={{ y: y2 }}
                className="absolute left-[5%] top-[30%] w-16 h-16 md:w-24 md:h-24 border-[8px] border-[#ff4d00] rounded-full z-0 opacity-80"
            />

        </Section>
    );
};

export default Hero;
