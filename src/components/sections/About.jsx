import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Section id="about" className="py-32 bg-zinc-950/40 border-y border-white/5 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    <div className="lg:w-1/2">
                        <span className="text-[#FFE600] font-bold tracking-widest uppercase text-sm mb-4 block">About Pixelog</span>
                        <h3 className="text-4xl md:text-6xl font-black font-unbounded leading-[1.1] tracking-tight text-white mb-8">
                            We build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE600] to-yellow-500">startups</span> and growing brands.
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl font-sora font-medium">
                            We blend design, development, and marketing to help businesses stand
                            out online with clarity and confidence. From branding to web
                            development, everything we create is crafted with purpose.
                        </p>
                    </div>

                    <div className="lg:w-1/2 flex flex-col gap-6 w-full mt-10 lg:mt-0">
                        {/* Mission Card - Dark Bento */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-zinc-900/40 p-10 rounded-[2.5rem] shadow-sm border border-white/5 hover:border-[#FFE600]/20 transition-all duration-300"
                        >
                            <h4 className="text-2xl font-bold mb-4 font-unbounded text-white">Mission</h4>
                            <p className="text-zinc-400 text-lg leading-relaxed font-sora">To help startups and growing businesses build a strong digital identity through creative design and reliable technology.</p>
                        </motion.div>

                        {/* Vision Card - Solid Yellow Brutalist */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-[#FFE600] text-black p-10 rounded-[2.5rem] shadow-2xl shadow-yellow-500/5"
                        >
                            <h4 className="text-2xl font-bold mb-4 font-unbounded text-black">Vision</h4>
                            <p className="text-black/80 text-lg leading-relaxed font-sora font-medium">To become a trusted digital partner for businesses worldwide by delivering meaningful and growth-focused digital experiences.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About;
