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
        <Section id="projects" className="py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-5 mb-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-[#ff4d00] font-bold tracking-widest uppercase text-sm mb-4 block">Selected Works</span>
                        <h2 className="text-5xl md:text-8xl font-black font-unbounded text-black uppercase tracking-tighter">
                            Featured <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-zinc-500">Projects.</span>
                        </h2>
                    </motion.div>

                    <a href="https://www.instagram.com/pixelog.in" target="_blank" className="group flex items-center gap-4 text-black font-bold text-lg uppercase tracking-wide cursor-pointer">
                        <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#ff4d00] group-hover:text-white transition-all">
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
                            <div className="w-full h-full bg-black rounded-[2rem] overflow-hidden relative shadow-2xl shadow-black/10 transition-transform duration-500 group-hover:-translate-y-4">
                                <video
                                    src={`/work/${item}.mp4`}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
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
                    <span className="text-[#ff4d00] font-bold tracking-widest uppercase text-sm mb-4 block">Web development</span>
                    <h2 className="text-5xl md:text-7xl font-black font-unbounded text-black">
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
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-black/10 border-y border-black/10">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.2 }}
                            className="py-16 flex flex-col items-center justify-center text-center group hover:bg-[#f5f5f5] transition-colors"
                        >
                            <h3 className="text-6xl md:text-8xl font-black text-black group-hover:text-[#ff4d00] transition-colors font-unbounded mb-4">{stat.val}</h3>
                            <p className="text-zinc-500 font-bold tracking-[0.3em] text-sm uppercase">{stat.label}</p>
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
            className="group w-full bg-white rounded-[2.5rem] p-4 md:p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 border border-black/5"
        >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 h-full">

                {/* Image Container - Floating Effect */}
                <div className="lg:w-3/5 relative overflow-hidden rounded-[2rem] bg-[#f0f0f0]">
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
                            <span key={i} className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-black/5 text-black">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold font-unbounded text-black mb-6 leading-tight group-hover:text-[#ff4d00] transition-colors">{title}</h3>
                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 font-sora">{description}</p>

                    <div>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <Button variant="primary" className="bg-black text-white hover:bg-[#ff4d00] w-full md:w-auto shadow-xl shadow-black/10">
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
