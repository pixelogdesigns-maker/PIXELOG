import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="relative bg-white text-black pt-32 pb-10 overflow-hidden border-t border-black/5">
            <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">

                {/* Brand Area */}
                <div className="flex flex-col space-y-6 md:w-1/3">
                    <div className="text-3xl font-black font-unbounded tracking-tighter">PIXELOG<span className="text-[#ff4d00]">.</span></div>
                    <p className="text-zinc-500 text-lg leading-relaxed font-sora">
                        We build digital products, brands, and experiences that turn simple ideas into powerful reality.
                    </p>

                    {/* Newsletter / Input */}
                    <div className="pt-6">
                        <div className="flex bg-[#f5f5f5] rounded-full p-2 pl-6">
                            <input type="email" placeholder="Email Address" className="bg-transparent text-black placeholder:text-zinc-400 outline-none w-full font-sora text-sm" />
                            <button className="bg-black text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#ff4d00] transition-colors">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Links Area */}
                <div className="flex flex-wrap gap-16 md:gap-32 w-full md:w-auto">
                    <div>
                        <h4 className="font-bold text-black text-lg mb-8 font-unbounded">Explore</h4>
                        <ul className="space-y-4 text-zinc-500 font-medium">
                            {['Home', 'Services', 'Work', 'About', 'Contact'].map((item) => (
                                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:text-[#ff4d00] transition-colors">{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-black text-lg mb-8 font-unbounded">Socials</h4>
                        <ul className="space-y-4 font-medium text-zinc-500">
                            <li>
                                <a href="https://www.instagram.com/pixelog.in" target="_blank" className="flex items-center gap-2 hover:text-[#ff4d00] transition-colors">
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@TheVloggingKid" target="_blank" className="flex items-center gap-2 hover:text-[#ff4d00] transition-colors">
                                    <FaYoutube /> YouTube
                                </a>
                            </li>
                            <li>
                                <a href="mailto:support@pixelog.in" target="_blank" className="flex items-center gap-2 hover:text-[#ff4d00] transition-colors">
                                    <MdAlternateEmail /> Email Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-5 mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-medium tracking-wide font-sora">
                <p>© 2025 Pixelog. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link to="/privacy-policy" className="hover:text-black">Privacy Policy</Link>
                    <Link to="/terms-of-service" className="hover:text-black">Terms of Service</Link>
                </div>
            </div>

            {/* Giant Watermark */}
            <h1 className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 text-[25vw] leading-none font-black font-unbounded text-black/[0.03] select-none pointer-events-none whitespace-nowrap">
                PIXELOG
            </h1>
        </footer>
    )
}
export default Footer;
