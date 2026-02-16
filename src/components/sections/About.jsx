import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const About = () => {
    return (
        <Section id="about" className="py-32 bg-[#f9f9f9] relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    <div className="lg:w-1/2">
                        <span className="text-[#ff4d00] font-bold tracking-widest uppercase text-sm mb-4 block">About Pixelog</span>
                        <h3 className="text-4xl md:text-6xl font-black font-unbounded leading-[1.1] tracking-tight text-black mb-8">
                            We build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff4d00] to-orange-400">startups</span> and growing brands.
                        </h3>
                        <p className="text-black/60 text-lg leading-relaxed max-w-xl font-sora font-medium">
                            We blend design, development, and marketing to help businesses stand
                            out online with clarity and confidence. From branding to web
                            development, everything we create is crafted with purpose.
                        </p>
                    </div>

                    <div className="lg:w-1/2 flex flex-col gap-6 w-full mt-10 lg:mt-0">
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-black/5 hover:border-[#ff4d00]/20 transition-all duration-300"
                        >
                            <h4 className="text-2xl font-bold mb-4 font-unbounded text-black">Mission</h4>
                            <p className="text-zinc-500 text-lg leading-relaxed font-sora">To help startups and growing businesses build a strong digital identity through creative design and reliable technology.</p>
                        </motion.div>

                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="bg-black text-white p-10 rounded-[2.5rem] shadow-xl shadow-black/10"
                        >
                            <h4 className="text-2xl font-bold mb-4 font-unbounded text-[#ff4d00]">Vision</h4>
                            <p className="text-zinc-400 text-lg leading-relaxed font-sora">To become a trusted digital partner for businesses worldwide by delivering meaningful and growth-focused digital experiences.</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default About;
