import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import GlitchText from './GlitchText';
import { Github, ExternalLink, Info, Award, Binary, TrendingUp } from 'lucide-react';

const ProjectCard = ({ title, desc, tech, type, color, status, link, github, achievement, impact }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            data-cursor={type}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="glass-card group relative p-8 flex flex-col justify-between min-h-[550px] overflow-hidden cursor-none"
        >
            <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                    <span className={`text-[9px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${color.replace('text-', 'text-opacity-70 ')} tracking-widest`}>
                        {status}
                    </span>
                    <Binary size={14} className="text-gray-600 opacity-40" />
                </div>

                <h3 className="mb-2">
                    <GlitchText text={title} className={`text-2xl md:text-3xl font-bold font-tech ${color}`} />
                </h3>

                {achievement && (
                    <div className="flex items-center gap-2 mb-3 bg-white/5 border border-white/10 p-2 rounded-lg">
                        <Award size={14} className="text-spider-yellow" />
                        <span className="text-[10px] font-mono text-spider-yellow font-bold uppercase tracking-tighter">
                            {achievement}
                        </span>
                    </div>
                )}

                <p className="text-gray-400 font-tech text-sm leading-relaxed mt-1 h-24 overflow-y-auto custom-scrollbar pr-2 mb-4">
                    {desc}
                </p>

                {impact && (
                    <div className="mb-4 p-3 bg-spider-cyan/5 border-l-2 border-spider-cyan rounded-r-lg">
                        <div className="flex items-center gap-2 mb-1">
                            <TrendingUp size={12} className="text-spider-cyan" />
                            <span className="text-[9px] font-mono text-spider-cyan uppercase font-bold tracking-widest">Recruiter_Insight</span>
                        </div>
                        <p className="text-[10px] text-white/80 font-tech italic">{impact}</p>
                    </div>
                )}

                <div className="mt-auto flex flex-wrap gap-2">
                    {tech.map((t, i) => (
                        <span key={i} className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded border border-white/10 uppercase text-gray-400 group-hover:text-white transition-colors">
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div style={{ transform: "translateZ(50px)" }} className="relative z-10 space-y-3 mt-6 pt-6 border-t border-white/5">
                <div className="flex gap-4">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/5 hover:bg-spider-cyan/20 border border-white/10 text-center py-3 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2">
                            <Github size={14} /> EXPLORE_BUILD
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-spider-magenta/20 hover:bg-spider-magenta/40 border border-spider-magenta/30 text-center py-3 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2">
                            <ExternalLink size={14} /> LIVE_DEMO
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectSection = () => {
    const projects = [
        {
            title: "EcoBite",
            desc: "Developed an AI platform to solve food waste using automated logistic chains and demand forecasting.",
            impact: "Demonstrates full-stack proficiency and Azure cloud data integration.",
            tech: ["Azure SQL", "Python", "React", "AI Logics"],
            type: "data",
            color: "text-spider-cyan",
            status: "MARKET_READY",
            github: "https://github.com/Saadia-Asghar/Ecobite_"
        },
        {
            title: "ChainTicket+",
            desc: "On-chain ticketing solution project focused on secure transaction proofs and immutable data ownership.",
            impact: "Hackathon-winning logic showcase in decentralized architecture.",
            tech: ["Solidity", "TypeScript", "Web3", "Blockchain"],
            type: "data",
            color: "text-spider-cyan",
            status: "HACKATHON_WINNER",
            achievement: "3rd Place @ Nationwide Web3 Hackathon by Base",
            github: "https://github.com/Saadia-Asghar/Chain_ticket"
        },
        {
            title: "MoodMaze",
            desc: "Recommendation engine mapping cinematic content to emotional data sets.",
            impact: "Proves competency in algorithmic data mapping and UX psychology.",
            tech: ["React", "Data Structures", "Algo Modeling"],
            type: "data",
            color: "text-spider-cyan",
            status: "ALGO_PREVIEW",
            github: "https://github.com/Saadia-Asghar/Mood_Maze"
        },
        {
            title: "Effort Scope",
            desc: "High-precision web utility for quantitative productivity tracking and effort data visualization.",
            impact: "Displays strong UI/UX design sense paired with technical logic.",
            tech: ["HTML5", "CSS3", "JS Engine"],
            type: "design",
            color: "text-spider-magenta",
            status: "SYSTEM_SYNCED",
            link: "https://saadia-asghar.github.io/Effort_Scope/",
            github: "https://github.com/Saadia-Asghar/Effort_Scope"
        },
        {
            title: "Code Blaster",
            desc: "Algorithmic game engine developed to teach C++ fundamentals through interactive gamified logic.",
            impact: "Strong showcase of object-oriented programming (OOP) foundations.",
            tech: ["C++ Core", "Graphics Logic", "OOP"],
            type: "data",
            color: "text-spider-cyan",
            status: "LEGACY_CONSTRUCT",
            github: "https://github.com/Saadia-Asghar/Code-Blaster"
        },
        {
            title: "Bunk Spot",
            desc: "Strategic marketing campaign engine. Conceptualized brand outreach and digital dissemination assets.",
            impact: "Evidence of marketing strategy and active team participation.",
            tech: ["Marketing Strat", "Design Direction", "Analytics"],
            type: "design",
            color: "text-spider-yellow",
            status: "OUTREACH_ACTIVE"
        }
    ];

    return (
        <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center mb-16 space-y-4">
                <motion.div
                    className="w-20 h-1 bg-gradient-to-r from-spider-cyan to-spider-magenta"
                    animate={{ width: [60, 100], opacity: [0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                />
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-accent text-white italic tracking-tighter uppercase text-center">
                    PROJECT_PORTFOLIO
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-[9px] font-mono text-gray-500 tracking-[0.4em] font-bold uppercase text-center">
                    <span>Validation_In_Progress: Portolio_Index</span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                    >
                        <ProjectCard {...p} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
