import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
    text: string;
    className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
    return (
        <div className={`relative inline-block group ${className}`}>
            <span className="relative z-10">{text}</span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-primary-500 opacity-0 group-hover:opacity-70"
                animate={{
                    x: [-2, 2, -2],
                    y: [1, -1, 1],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
                    transform: "translate(-2px, -2px)",
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70"
                animate={{
                    x: [2, -2, 2],
                    y: [-1, 1, -1],
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: 0.4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 0.1,
                }}
                style={{
                    clipPath: "polygon(0 60%, 100% 60%, 100% 100%, 0 100%)",
                    transform: "translate(2px, 2px)",
                }}
            >
                {text}
            </motion.span>
        </div>
    );
};

export default GlitchText;
