import { motion } from "framer-motion";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
    const baseStyle = "px-8 py-4 rounded-full font-sora font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden active:scale-95";

    const variants = {
        primary: "", // Colors handled by parent
        secondary: "",
        dark: "bg-black text-white hover:bg-[#ff4d00]"
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
