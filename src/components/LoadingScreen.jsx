import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onFinish }) => {
    const [percent, setPercent] = useState(0);
    const [logs, setLogs] = useState([]);

    const loadingLogs = [
        "> INITIALIZING SAADIA_OS V1.0...",
        "> LOADING NEURAL NETWORK CORES...",
        "> ESTABLISHING MULTIVERSAL LINK...",
        "> CALIBRATING CHROMATIC ABERRATION...",
        "> SYNCING DATA SCIENCE MODULES...",
        "> ACCESS GRANTED: SAADIA ASGHAR",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 1000);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 1;
            });
        }, 150);

        const logInterval = setInterval(() => {
            setLogs((prev) => {
                if (prev.length < loadingLogs.length) {
                    return [...prev, loadingLogs[prev.length]];
                }
                return prev;
            });
        }, 400);

        return () => {
            clearInterval(interval);
            clearInterval(logInterval);
        };
    }, [onFinish]);

    return (
        <motion.div
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-spider-black z-[10000] flex flex-col items-center justify-center p-6 font-mono"
        >
            <div className="w-full max-w-md">
                <div className="flex justify-between items-end mb-2">
                    <motion.h2
                        animate={{ opacity: [1, 0.5, 1] }}
                        transition={{ duration: 0.1, repeat: Infinity }}
                        className="text-spider-cyan text-xl font-bold italic"
                    >
                        SAADIA_OS
                    </motion.h2>
                    <span className="text-spider-magenta text-sm">{Math.min(percent, 100)}%</span>
                </div>

                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mb-8">
                    <motion.div
                        className="h-full bg-spider-cyan shadow-[0_0_10px_#00f3ff]"
                        animate={{ width: `${percent}%` }}
                    />
                </div>

                <div className="space-y-1">
                    {logs.map((log, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-[10px] md:text-sm text-gray-500"
                        >
                            {log}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative Glitch Circles */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 0.9, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 0.2, repeat: Infinity, ease: "steps(2)" }}
                className="absolute inset-0 pointer-events-none flex items-center justify-center"
            >
                <div className="w-64 h-64 border-2 border-spider-magenta/20 rounded-full" />
                <div className="absolute w-80 h-80 border-2 border-spider-cyan/20 rounded-full" />
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
