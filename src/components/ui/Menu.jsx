import React from "react";
import { motion } from "framer-motion";

const links = [
    { title: "Home", href: "#home" },
    { title: "Services", href: "#services" },
    { title: "Projects", href: "#projects" },
    { title: "About", href: "#about" },
    { title: "Contact", href: "#contact" },
];

const menuVariants = {
    initial: { scaleY: 0 },
    animate: { scaleY: 1, transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] } },
    exit: { scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const linkVariants = {
    initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
    open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
};

const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
}

const Menu = ({ isOpen, toggleMenu }) => {
    return (
        <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen bg-black text-white origin-top z-[40] flex flex-col justify-center items-center overflow-hidden"
        >
            <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-2 items-center justify-center text-center"
            >
                {links.map((link, index) => (
                    <div key={index} className="overflow-hidden">
                        <motion.a
                            variants={linkVariants}
                            href={link.href}
                            onClick={toggleMenu}
                            className="text-4xl md:text-6xl font-unbounded font-black block text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 hover:to-[#ff4d00] transition-all duration-300"
                        >
                            {link.title}
                        </motion.a>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Menu;
