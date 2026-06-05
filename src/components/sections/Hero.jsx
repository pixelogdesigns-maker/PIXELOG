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
        <Section id="home" className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-transparent">

            {/* --- Animated Shapes (Yellow & Clean) --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Large Yellow Glow */}
                <motion.div
                    style={{ y: y1 }}
                    className="absolute top-[-10%] right-[-10%] w-[60vh] h-[60vh] rounded-full bg-[#FFE600] blur-[150px] opacity-[0.08]"
                />
                {/* Secondary White Glow */}
                <motion.div
                    style={{ y: y2, x: y1 }}
                    className="absolute bottom-[10%] left-[-5%] w-[40vh] h-[40vh] rounded-full bg-white blur-[120px] opacity-[0.04]"
                />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="z-10 relative flex flex-col items-center justify-center w-full px-4 text-center">

                {/* Top Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-6 overflow-hidden"
                >
                    <span className="inline-block py-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-bold tracking-widest uppercase font-sora text-zinc-400 shadow-sm">
                        Digital Creative Agency
                    </span>
                </motion.div>

                {/* Main Headline - Massive & Swiss Style */}
                <div className="relative mb-8 z-20">
                    <motion.h1
                        initial={{ y: 100, opacity: 0, rotate: 5 }}
                        animate={{ y: 0, opacity: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="font-unbounded font-black text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tighter text-white select-none"
                    >
                        PIXELOG<span className="text-[#FFE600]">.</span>
                    </motion.h1>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="max-w-2xl text-lg md:text-2xl text-zinc-400 font-medium font-sora leading-relaxed mb-10"
                >
                    We build <span className="text-white font-bold underline decoration-[#FFE600] decoration-4 underline-offset-4">brands that people crave !!</span>
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Button variant="primary" className="bg-[#FFE600] text-black hover:bg-white hover:scale-105 border-none shadow-2xl shadow-yellow-500/10">
                        Start Your Project
                    </Button>
                    <Button variant="secondary" className="hover:border-[#FFE600] hover:text-[#FFE600]">
                        View Showreel
                    </Button>
                </motion.div>

            </div>

            {/* Floating Elements / 3D Abstract representation */}
            <motion.div
                style={{ y: y1, rotate: rotate }}
                className="absolute right-[5%] bottom-[20%] w-24 h-24 md:w-40 md:h-40 bg-zinc-900/30 border border-white/5 backdrop-blur-sm rounded-[2rem] z-0 flex items-center justify-center shadow-2xl"
            >
                <div className="w-12 h-12 bg-[#FFE600] rounded-full shadow-[0_0_20px_rgba(255,230,0,0.4)]"></div>
            </motion.div>
            <motion.div
                style={{ y: y2 }}
                className="absolute left-[5%] top-[30%] w-16 h-16 md:w-24 md:h-24 border-[8px] border-[#FFE600] rounded-full z-0 opacity-60 shadow-[0_0_15px_rgba(255,230,0,0.2)]"
            />

        </Section>
    );
};

export default Hero;
