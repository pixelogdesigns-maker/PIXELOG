import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram, FaYoutube, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./ui/Menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Animation for the navbar dropping down
  const navContainer = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
      <motion.nav
        variants={navContainer}
        initial="hidden"
        animate="show"
        className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 text-black"
      >
        {/* Note: mix-blend-difference makes it visible on both black and white, giving a cool effect. 
              Since the bg is white, it will appear black/inverted. */}
        <div className="w-full max-w-7xl flex justify-between items-center py-3 px-6 bg-white/70 backdrop-blur-md rounded-full shadow-sm border border-black/5">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Pixelog Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* Desktop Links - Minimal */}
          <div className="hidden lg:flex items-center gap-10">
            {["Home", "Services", "Projects", "About", "Contact"].map((item, index) => {
              if (item === "Projects") {
                return (
                  <div key={index} className="relative group">
                    <button className="font-sora text-sm font-medium hover:text-[#ff4d00] transition-colors flex items-center gap-1 relative py-4">
                      {item}
                      <FaChevronDown className="text-[10px] group-hover:rotate-180 transition-transform duration-300" />
                      <span className="absolute bottom-3 left-0 w-0 h-[2px] bg-[#ff4d00] transition-all group-hover:w-full" />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top min-w-[200px]">
                      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-black/5 p-2 flex flex-col gap-1 overflow-hidden">
                        {[
                          { title: "Videos Works", href: "#projects" },
                          { title: "Websites", href: "#web-development" },
                          { title: "Meta Ads Results", href: "#meta-ads" },
                          { title: "Logos & Designs", href: "#logos" }
                        ].map((subItem, subIndex) => {
                          const href = isHome ? subItem.href : `/${subItem.href}`;
                          return (
                            <a
                              key={subIndex}
                              href={href}
                              className="block px-4 py-3 text-sm font-medium text-zinc-600 hover:text-black hover:bg-black/5 rounded-xl transition-colors text-center whitespace-nowrap"
                            >
                              {subItem.title}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }
              return (
                <a
                  href={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                  key={index}
                  className="font-sora text-sm font-medium hover:text-[#ff4d00] transition-colors relative group py-4"
                >
                  {item}
                  <span className="absolute bottom-3 left-0 w-0 h-[2px] bg-[#ff4d00] transition-all group-hover:w-full" />
                </a>
              );
            })}
          </div>

          {/* Menu Button */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 font-bold font-unbounded text-sm hover:text-[#ff4d00] transition-colors uppercase tracking-widest"
            >
              Menu
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                {isMenuOpen ? <FaTimes /> : <FaBars />}
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && <Menu isOpen={isMenuOpen} toggleMenu={() => setIsMenuOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
