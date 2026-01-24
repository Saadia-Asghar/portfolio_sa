import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursor = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [hoverType, setHoverType] = useState(null); // 'design' or 'data' or 'interactive'

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target.closest('[data-cursor]') || e.target.closest('a') || e.target.closest('button');
            if (target) {
                setIsHovering(true);
                setHoverType(target.getAttribute('data-cursor') || 'interactive');
            } else {
                setIsHovering(false);
                setHoverType(null);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 pointer-events-none z-[9999]">
            <motion.div
                className="relative"
                animate={{
                    x: mousePos.x - 16,
                    y: mousePos.y - 16,
                }}
                transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.5 }}
            >
                {/* Outer Ring */}
                <motion.div
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${hoverType === 'design' ? 'border-spider-magenta bg-spider-magenta/10' :
                            hoverType === 'interactive' ? 'border-spider-yellow bg-spider-yellow/10' :
                                'border-spider-cyan bg-spider-cyan/10'
                        }`}
                    animate={{
                        scale: isHovering ? 2 : 1,
                        rotate: isHovering ? 180 : 0,
                    }}
                >
                    {/* Inner Targeter */}
                    <motion.div
                        animate={{ scale: isHovering ? 0 : 1 }}
                        className={`w-1 h-1 rounded-full ${hoverType === 'design' ? 'bg-spider-magenta' :
                                hoverType === 'interactive' ? 'bg-spider-yellow' :
                                    'bg-spider-cyan'
                            }`}
                    />

                    {/* Interaction Crosshair */}
                    <AnimatePresence>
                        {isHovering && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className={`w-full h-px absolute pointer-events-none ${hoverType === 'design' ? 'bg-spider-magenta' : hoverType === 'interactive' ? 'bg-spider-yellow' : 'bg-spider-cyan'}`} />
                                <div className={`h-full w-px absolute pointer-events-none ${hoverType === 'design' ? 'bg-spider-magenta' : hoverType === 'interactive' ? 'bg-spider-yellow' : 'bg-spider-cyan'}`} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* HUD Legend */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 35 }}
                            exit={{ opacity: 0, x: 20 }}
                            className={`absolute top-0 left-full ml-2 font-tech text-[10px] whitespace-nowrap px-2 py-1 rounded bg-black/80 backdrop-blur-md border ${hoverType === 'design' ? 'border-spider-magenta text-spider-magenta' :
                                    hoverType === 'interactive' ? 'border-spider-yellow text-spider-yellow' :
                                        'border-spider-cyan text-spider-cyan'
                                }`}
                        >
                            <div className="flex items-center gap-2">
                                <span className="animate-pulse">▶</span>
                                <span>TYPE: {hoverType?.toUpperCase()}</span>
                            </div>
                            <div className="flex items-center gap-2 mt-1 opacity-70">
                                <span>COORD: {Math.round(mousePos.x)}, {Math.round(mousePos.y)}</span>
                            </div>
                            <div className="mt-1 font-bold animate-pulse text-[8px] tracking-[0.2em]">ACTION_REQUIRED</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default CustomCursor;
