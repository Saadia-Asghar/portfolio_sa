import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = "" }) => {
    return (
        <span className={`relative inline-block ${className}`}>
            <motion.span
                className="relative z-10 block"
                animate={{
                    x: [0, -2, 2, -1, 0],
                    y: [0, 1, -1, 0],
                }}
                transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "steps(2)"
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute inset-0 z-0 text-spider-cyan opacity-50 select-none"
                animate={{
                    x: [0, 2, -2, 0],
                    opacity: [0, 0.5, 0],
                    clipPath: [
                        "inset(0 0 0 0)",
                        "inset(20% 0 50% 0)",
                        "inset(80% 0 10% 0)",
                        "inset(0 0 0 0)",
                    ]
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 3,
                }}
            >
                {text}
            </motion.span>
            <motion.span
                className="absolute inset-0 z-0 text-spider-magenta opacity-50 select-none"
                animate={{
                    x: [0, -2, 2, 0],
                    opacity: [0, 0.5, 0],
                    clipPath: [
                        "inset(0 0 0 0)",
                        "inset(50% 0 20% 0)",
                        "inset(10% 0 80% 0)",
                        "inset(0 0 0 0)",
                    ]
                }}
                transition={{
                    duration: 0.2,
                    repeat: Infinity,
                    repeatDelay: 3.1,
                }}
            >
                {text}
            </motion.span>
        </span>
    );
};

export default GlitchText;
