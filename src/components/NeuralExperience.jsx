import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { COMMUNITY_NODES } from '../data/portfolio';

const Node = ({ label, impact, color, x, y, onHover, onClick, isActive }) => {
    return (
        <motion.div
            className="absolute bg-spider-black border-2 rounded-full flex items-center justify-center cursor-pointer z-50"
            style={{
                left: `${x}%`,
                top: `${y}%`,
                width: 'clamp(60px, 8vw, 80px)',
                height: 'clamp(60px, 8vw, 80px)',
                borderColor: color,
                boxShadow: isActive ? `0 0 25px ${color}` : `0 0 10px ${color}`,
                scale: isActive ? 1.1 : 1
            }}
            whileHover={{ scale: 1.1, boxShadow: `0 0 20px ${color}` }}
            onMouseEnter={() => onHover({ label, impact, color })}
            onMouseLeave={() => onHover(null)}
            onClick={() => onClick({ label, impact, color })}
        >
            <span className="text-[7px] md:text-[8px] font-bold text-center px-1 font-tech uppercase tracking-tighter leading-tight pointer-events-none">{label}</span>

            {/* Pulse effect */}
            <motion.div
                className="absolute inset-0 rounded-full"
                style={{ border: `1px solid ${color}` }}
                animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
        </motion.div>
    );
};

const NeuralExperience = () => {
    const [activeNode, setActiveNode] = useState(null);
    const [lockedNode, setLockedNode] = useState(null);
    const timeoutRef = React.useRef(null);

    const nodes = COMMUNITY_NODES;

    const displayNode = activeNode || lockedNode;

    const handleHover = (node) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (node) {
            setActiveNode(node);
        } else {
            timeoutRef.current = setTimeout(() => {
                setActiveNode(null);
            }, 300); // 300ms grace period to move mouse or keep "holding" the view
        }
    };

    return (
        <section id="community" className="py-20 md:py-28 px-4 md:px-8 max-w-6xl mx-auto relative min-h-[600px] md:min-h-[700px] scroll-mt-24">
            <SectionHeader
                index="06 · NETWORK"
                title="Campus Network"
                subtitle="Societies · ambassadorships · outreach"
                accent="purple"
                align="left"
            />

            <div className="relative w-full h-[450px] md:h-[550px] comic-panel comic-panel-purple shadow-[8px_8px_0_rgba(122,0,255,0.2)]">
                <div className="comic-panel-inner h-full !p-0 relative overflow-hidden rounded-none">
                {/* SVG Connections omitted for brevity in search, but kept in code */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
                    <defs>
                        <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00f3ff" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#ff0055" stopOpacity="0.2" />
                        </linearGradient>
                    </defs>
                    {nodes.map((node, i) => (
                        nodes.slice(i + 1).map((target, j) => (
                            <motion.line
                                key={`${i}-${j}`}
                                x1={`${node.x + 4}%`}
                                y1={`${node.y + 6}%`}
                                x2={`${target.x + 4}%`}
                                y2={`${target.y + 6}%`}
                                stroke="url(#line-grad)"
                                strokeWidth="0.5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ duration: 2 }}
                            />
                        ))
                    ))}
                </svg>

                {nodes.map((node, i) => (
                    <Node
                        key={i}
                        {...node}
                        onHover={handleHover}
                        onClick={(node) => {
                            if (lockedNode?.label === node.label) {
                                setLockedNode(null);
                            } else {
                                setLockedNode(node);
                                setActiveNode(null);
                            }
                        }}
                        isActive={displayNode?.label === node.label}
                    />
                ))}

                {/* Info Panel - Optimized for mobile/smaller screens */}
                <AnimatePresence>
                    {displayNode && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 10 }}
                            onMouseEnter={() => {
                                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                            }}
                            onMouseLeave={() => handleHover(null)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 glass-card border-t-2 z-[100] max-w-xs md:max-w-sm w-[85%] shadow-[0_0_40px_rgba(0,0,0,0.8)] backdrop-blur-xl pointer-events-none md:pointer-events-auto"
                            style={{ borderColor: displayNode.color }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-8 h-8 rounded-lg border flex items-center justify-center font-bold text-sm" style={{ borderColor: displayNode.color, color: displayNode.color }}>
                                    OS
                                </div>
                                <h4 className="text-lg md:text-xl font-bold font-tech truncate" style={{ color: displayNode.color }}>
                                    {displayNode.label}
                                </h4>
                                {lockedNode?.label === displayNode.label && (
                                    <button
                                        className="ml-auto pointer-events-auto text-xs text-white/30 hover:text-white transition-colors"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setLockedNode(null);
                                        }}
                                    >
                                        [CLOSE]
                                    </button>
                                )}
                            </div>
                            <p className="text-gray-300 font-tech text-xs md:text-sm leading-relaxed bg-white/5 p-4 border border-white/5 rounded-xl">
                                {displayNode.impact}
                            </p>
                            <div className="mt-4 flex justify-between items-center text-[7px] md:text-[8px] font-mono text-gray-500 uppercase tracking-widest">
                                <span className="text-spider-cyan/60">{lockedNode?.label === displayNode.label ? 'PINNED_VIEW' : 'SCANNING_ACTIVE'}</span>
                                <span>SYNC_OK</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default NeuralExperience;
