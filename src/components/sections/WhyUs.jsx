import React from "react";
import Section from "../ui/Section";
import { motion } from "framer-motion";

const whyus = [
    {
        title: "Creative Thinking",
        para: "We blend imagination with real-world strategy to give your brand the edge it deserves.",
    },
    {
        title: "Tailored Solutions",
        para: "No templates, no shortcuts — everything we deliver is crafted around your goals.",
    },
    {
        title: "Startup-Friendly",
        para: "We understand growing businesses, and we build solutions that fit your budget, speed, and vision.",
    },
    {
        title: "Clear Communication",
        para: "We keep things clear, transparent, and collaborative from start to finish.",
    },
    {
        title: "Quality Trusted",
        para: "Every project goes through a careful process to ensure clean designs and results.",
    },
    {
        title: "Future Ready",
        para: "We adapt quickly, work efficiently, and deliver solutions built for long-term growth.",
    },
];

const WhyUs = () => {
    return (
        <Section id="whyus" className="py-32 bg-transparent relative">
            <div className="max-w-7xl mx-auto px-5">
                <div className="mb-20 text-center md:text-left">
                    <span className="text-[#FFE600] font-bold tracking-widest uppercase text-sm mb-4 block">Values</span>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black font-unbounded text-white leading-tight"
                    >
                        Why Choose Us<span className="text-[#FFE600]">.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {whyus.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            key={index}
                            className="bg-zinc-900/40 border border-white/5 p-10 rounded-[2rem] hover:bg-zinc-900 hover:border-[#FFE600]/30 transition-all duration-300 group cursor-default"
                        >
                            <div className="text-4xl font-black text-[#FFE600] mb-6 font-unbounded">0{index + 1}</div>
                            <h3 className="text-2xl font-bold mb-4 font-sora text-white group-hover:text-[#FFE600] transition-colors">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed font-sora text-sm group-hover:text-zinc-300">{item.para}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default WhyUs;
