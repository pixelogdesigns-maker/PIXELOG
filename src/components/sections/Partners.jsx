import React from "react";
import Section from "../ui/Section";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const Partners = () => {
    return (
        <Section className="py-32 bg-transparent">
            <div className="max-w-7xl mx-auto px-5">
                <span className="text-[#FFE600] font-bold tracking-widest uppercase text-sm mb-4 block text-center">Partners</span>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-black mb-16 font-unbounded text-white text-center"
                >
                    Advertising Partner
                </motion.h2>

                <div className="flex flex-col md:flex-row items-center gap-12 bg-zinc-900/30 rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-2xl">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="w-full md:w-1/3 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border-2 border-dashed border-[#FFE600]/30">
                            <div className="w-full h-full rounded-full overflow-hidden border-4 border-zinc-950 shadow-2xl">
                                <img src="/TVK.png" alt="The Vlogging Kid" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full md:w-2/3 space-y-8 text-center md:text-left">
                        <div>
                            <h3 className="text-4xl font-black font-unbounded text-white mb-2">The Vlogging Kid</h3>
                            <p className="text-[#FFE600] font-bold font-sora">Official Media Partner</p>
                        </div>

                        <p className="text-zinc-400 leading-relaxed text-lg font-sora font-medium">
                            We proudly collaborate with The Vlogging Kid. With a strong and engaged audience
                            across social platforms, he helps amplify brand stories and
                            connect them with the right audience.
                        </p>

                        <div className="flex justify-center md:justify-start gap-12 py-6 border-y border-white/5">
                            <div className="text-center">
                                <span className="block text-4xl font-black text-white font-unbounded">31K+</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Instagram</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-4xl font-black text-white font-unbounded">26K+</span>
                                <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">YouTube</span>
                            </div>
                        </div>

                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="https://www.instagram.com/the_vlogging_kid_" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-[#FFE600] text-black rounded-full font-bold flex items-center gap-2 hover:bg-white transition-colors shadow-lg shadow-yellow-500/5">
                                <FaInstagram size={20} /> Instagram
                            </a>
                            <a href="https://www.youtube.com/@TheVloggingKid" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-transparent border border-white/10 text-white rounded-full font-bold flex items-center gap-2 hover:bg-red-600 hover:text-white hover:border-red-600 transition-colors">
                                <FaYoutube size={20} /> YouTube
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Partners;
