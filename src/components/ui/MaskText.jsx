import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MaskText = ({ children, className = "" }) => {
    const { ref, inView } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    const animation = {
        initial: { y: "100%" },
        enter: (i) => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }

    return (
        <div ref={ref} className={`overflow-hidden ${className}`}>
            <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""} className="inline-block">
                {children}
            </motion.div>
        </div>
    );
};

export default MaskText;
