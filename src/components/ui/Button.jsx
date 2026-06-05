import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyle = "px-8 py-4 rounded-full font-sora font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden active:scale-95";

    const variants = {
        primary: "bg-[#FFE600] text-black hover:bg-white hover:scale-105 shadow-lg shadow-yellow-500/10 border border-transparent",
        secondary: "bg-transparent text-white border border-white/20 hover:border-[#FFE600] hover:text-[#FFE600] hover:scale-105",
        dark: "bg-black text-white hover:bg-[#FFE600] hover:text-black border border-white/10 hover:border-[#FFE600] hover:scale-105"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyle} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
};

export default Button;
