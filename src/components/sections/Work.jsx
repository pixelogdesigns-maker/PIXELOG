import React from "react";
import Section from "../ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import { FaExternalLinkAlt } from "react-icons/fa";

// Stats array
const stats = [
    { val: "150+", label: "PROJECTS" },
    { val: "100%", label: "SATISFACTION" },
    { val: "48+", label: "RETURNING" },
];

const Work = () => {
    return (
        <Section id="projects" className="py-32 bg-transparent overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-5 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#FFE600] font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
                        <h2 className="text-5xl md:text-8xl font-black font-unbounded text-white uppercase tracking-tighter">
                            Featured <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">Projects.</span>
                        </h2>
                    </motion.div>

                    <a href="https://www.instagram.com/pixelog.in" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-white font-bold text-lg uppercase tracking-wide cursor-pointer">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#FFE600] group-hover:text-black group-hover:border-[#FFE600] transition-all duration-300">
                            ↗
                        </div>
                        See Instagram
                    </a>
                </div>
            </div>

            {/* Carousel */}
            <div id="video-works" className="w-full pl-5 md:pl-[10vw]">
                <Swiper
                    grabCursor={true}
                    slidesPerView={'auto'}
                    spaceBetween={30}
                    loop={true}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="w-full overflow-visible"
                >
                    {[0, 1, 2, 3, 4, 5, 6].map((item) => (
                        <SwiperSlide key={item} className="!w-[300px] md:!w-[400px] h-[500px] md:h-[600px] relative pt-10 group">
                            <div className="w-full h-full bg-zinc-950 border border-white/5 rounded-[2rem] overflow-hidden relative shadow-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:border-[#FFE600]/30 group-hover:shadow-[0_10px_40px_rgba(255,230,0,0.05)]">
                                <video
                                    src={`/work/${item}.mp4`}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-sora font-bold text-lg">Work Sample 0{item + 1}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Web development Projects Section */}
            <div id="web-development" className="max-w-7xl mx-auto px-5 mt-32">
                <div className="mb-20 text-center">
                    <span className="text-[#FFE600] font-bold tracking-widest uppercase text-sm mb-4 block">Web development</span>
                    <h2 className="text-5xl md:text-7xl font-black font-unbounded text-white">
                        Digital Experiences.
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12">
                    <ProjectCard
                        title="Sudha Novelties"
                        description="A premium e-commerce platform designed for elegance and functionality. Featuring a modern seamless shopping experience."
                        image="/websites/sudhanovelties.png"
                        link="https://www.sudhanovelties.com"
                        tags={["E-Commerce", "UI/UX", "Development"]}
                    />
                </div>
            </div>

            {/* Stats - Brutalist Layout */}
            <div className="max-w-7xl mx-auto px-5 mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="py-16 flex flex-col items-center justify-center text-center group hover:bg-zinc-900/20 transition-colors duration-300"
                        >
                            <h3 className="text-6xl md:text-8xl font-black text-white group-hover:text-[#FFE600] group-hover:scale-105 transition-all duration-300 font-unbounded mb-4">{stat.val}</h3>
                            <p className="text-zinc-400 font-bold tracking-[0.3em] text-sm uppercase">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

        </Section >
    );
};

const ProjectCard = ({ title, description, image, link, tags }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group w-full bg-zinc-900/30 rounded-[2.5rem] p-4 md:p-6 shadow-2xl transition-all duration-500 border border-white/5 hover:border-[#FFE600]/20"
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">

                {/* Image Container - Floating Effect */}
                <div className="lg:w-3/5 relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-white/5">
                    <div className="w-full h-[300px] md:h-[500px] overflow-hidden group-hover:scale-[0.98] transition-transform duration-500 ease-out">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/5 flex flex-col justify-center py-4 lg:py-10 pr-6">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map((tag, i) => (
                            <span key={i} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFE600]/10 text-[#FFE600] border border-[#FFE600]/10">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold font-unbounded text-white mb-6 leading-tight group-hover:text-[#FFE600] transition-colors duration-300">{title}</h3>
                    <p className="text-zinc-400 text-lg leading-relaxed mb-10 font-sora">{description}</p>

                    <div>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="bg-[#FFE600] text-black hover:bg-white w-full md:w-auto shadow-xl shadow-yellow-500/5">
                                Visit Website <FaExternalLinkAlt className="ml-2 text-xs" />
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Work;
