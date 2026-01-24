import React from 'react';
import { motion } from 'framer-motion';

const SpiderWeb = ({ position = "top-left", color = "#00f3ff", size = 400, type = "corner" }) => {
    const isTop = position.includes('top');
    const isLeft = position.includes('left');

    if (type === "hanging") {
        return (
            <div
                className={`fixed ${isTop ? 'top-0' : 'bottom-0'} pointer-events-none z-0 opacity-20`}
                style={{ left: position === "top-center" ? "50%" : isLeft ? "15%" : "85%", transform: "translateX(-50%)", width: 100, height: size }}
            >
                <svg viewBox="0 0 50 200" className="w-full h-full">
                    {/* Primary vertical thread */}
                    <motion.line
                        x1="25" y1="0" x2="25" y2="180"
                        stroke={color} strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2 }}
                    />
                    {/* Organic horizontal threads */}
                    {[40, 80, 120, 160].map((y, i) => (
                        <motion.path
                            key={i}
                            d={`M10,${y} Q25,${y + 10} 40,${y}`}
                            stroke={color} strokeWidth="0.5" fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                        />
                    ))}
                    {/* Droplets/Glitches */}
                    <motion.circle
                        cx="25" cy="180" r="2" fill={color}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0], scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </svg>
            </div>
        );
    }

    return (
        <div
            className={`fixed ${isTop ? 'top-0' : 'bottom-0'} ${isLeft ? 'left-0' : 'right-0'} pointer-events-none z-0 opacity-20 transition-opacity hover:opacity-40`}
            style={{ width: size, height: size }}
        >
            <svg
                viewBox="0 0 200 200"
                className={`w-full h-full ${!isTop && 'rotate-180'} ${!isLeft && 'scale-x-[-1]'}`}
            >
                {/* Structural Radiating Lines - Organic, slightly broken */}
                {[0, 15, 30, 45, 60, 75, 90].map((angle, i) => (
                    <motion.path
                        key={`rad-${i}`}
                        d={`M0,0 L${200 * Math.cos((angle * Math.PI) / 180)},${200 * Math.sin((angle * Math.PI) / 180)}`}
                        stroke={color}
                        strokeWidth={i % 2 === 0 ? "0.8" : "0.4"}
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: i * 0.1, ease: "easeOut" }}
                    />
                ))}

                {/* Spiraling Rings - Variable segments for 'torn' look */}
                {[30, 60, 90, 120, 150, 180].map((radius, i) => (
                    <motion.path
                        key={`ring-${i}`}
                        d={`M${radius},0 C${radius},${radius / 2} ${radius / 2},${radius} 0,${radius}`}
                        stroke={color}
                        strokeWidth="0.5"
                        fill="none"
                        strokeDasharray={i % 2 === 0 ? "none" : "4,2"}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{ duration: 1.5, delay: 0.5 + i * 0.15 }}
                    />
                ))}

                {/* Dynamic Glitch Fragments */}
                <motion.path
                    d="M20,10 L40,5 M100,20 L120,40 M10,150 L30,170"
                    stroke={color}
                    strokeWidth="2"
                    opacity="0.3"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.4, 0.1, 0.5, 0],
                        x: [0, 5, -5, 2, 0]
                    }}
                    transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                />

                {/* Micro-threads */}
                <motion.path
                    d="M0,45 L45,45 M45,0 L45,45 M80,20 C100,50 50,100 20,80"
                    stroke={color}
                    strokeWidth="0.1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 4 }}
                />
            </svg>
        </div>
    );
};

export default SpiderWeb;

