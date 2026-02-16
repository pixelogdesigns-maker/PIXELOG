import React, { useRef } from "react";
import Section from "../ui/Section";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

const services = [
    {
        title: "Branding",
        head: "Build a brand people remember.",
        tag: "Identity",
        tail: "We craft unique identities that define who you are, what you stand for, and why customers should choose you.",
        img: "/services/branding.jpg",
    },
    {
        title: "Influencer Marketing",
        head: "Connect with audiences.",
        tag: "Growth",
        tail: "We partner with the right creators to amplify your brand and drive real engagement & conversions.",
        img: "/services/influencer.jpg",
    },
    {
        title: "Social Media",
        head: "Grow your presence.",
        tag: "Social",
        tail: "Strategic content and campaigns designed to engage, inspire, and turn followers into loyal customers.",
        img: "/services/social_media.jpg",
    },
    {
        title: "Web Development",
        head: "Websites that perform.",
        tag: "Tech",
        tail: "Modern, responsive and conversion-focused websites built to elevate your digital presence.",
        img: "/websites/sudhanovelties.png",
    },
    {
        title: "Editing Services",
        head: "Visuals that tell stories.",
        tag: "Content",
        tail: "High-quality video, photo & creative editing to make your brand stand out and communicate with impact.",
        img: "/services/editing.jpg",
    },
    {
        title: "Meta AD's",
        head: "Reach the right audience.",
        tag: "Ads",
        tail: "Data-driven Facebook & Instagram ad campaigns tailored to maximize ROI and scale your business.",
        img: "/services/meta_ads.jpg",
    },
    {
        title: "SEO Research",
        head: "Rank higher.",
        tag: "Search",
        tail: "Deep keyword research and optimization strategies that improve visibility and attract organic traffic.",
        img: "/services/seo.jpg",
    },
    {
        title: "Media Promotions",
        head: "Boost your brand.",
        tag: "PR",
        tail: "We promote your brand through targeted media placements and strategic promotions that increase visibility.",
        img: "/services/media.jpg",
    },
];

const Services = () => {
    return (
        <Section id="services" className="py-32 relative bg-white border-t border-black/5">
            <div className="max-w-7xl mx-auto px-5">
                <div className="mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#ff4d00] font-bold tracking-widest uppercase text-sm mb-4 block"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-black font-unbounded text-black leading-tight"
                    >
                        Comprehensive <br />
                        <span className="text-zinc-400">Digital Solutions.</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <ServiceCard key={index} item={service} index={index} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

const ServiceCard = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-[#f9f9f9] rounded-[2rem] p-6 h-[400px] flex flex-col justify-between overflow-hidden hover:bg-black hover:text-white transition-colors duration-500 cursor-pointer"
        >
            {/* Hover Image Background */}
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale" />
            </div>

            <div className="relative z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 text-xl font-bold border border-black/5 group-hover:bg-[#ff4d00] group-hover:text-white transition-colors">
                    {index + 1}
                </div>
                <h3 className="text-2xl font-bold font-sora mb-2 group-hover:text-white">{item.title}</h3>
                <p className="text-sm font-medium text-zinc-500 group-hover:text-zinc-400">{item.head}</p>
            </div>

            <div className="relative z-10 pt-10 border-t border-black/5 group-hover:border-white/10 mt-auto">
                <p className="text-sm leading-relaxed text-zinc-600 group-hover:text-zinc-300">
                    {item.tail}
                </p>
                <div className="absolute bottom-6 right-0 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-[#ff4d00] text-4xl">→</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Services;
