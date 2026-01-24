import React from 'react';
import { motion } from 'framer-motion';
import { Share2, HeartPulse, MessageCircle } from 'lucide-react';

const StrategyCard = ({ society, role, impact, metrics, color, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -5, scale: 1.02 }}
        className="p-6 md:p-8 glass-card border-none bg-white/5 relative overflow-hidden group h-full flex flex-col"
    >
        <div className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-5 blur-3xl group-hover:opacity-20 transition-opacity`} style={{ backgroundColor: color }} />

        <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-white/5 border border-white/10`} style={{ color: color }}>
                    <Icon size={24} />
                </div>
                <div className="text-[9px] font-mono opacity-40 uppercase tracking-[0.2em] whitespace-nowrap">Exp_Log: 0{Math.floor(Math.random() * 9) + 1}</div>
            </div>

            <h3 className="text-xl md:text-2xl font-tech font-bold text-white mb-2 leading-tight uppercase">{society}</h3>
            <p className="text-spider-yellow text-[10px] font-mono mb-4 uppercase tracking-[0.2em] font-black">{role}</p>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {impact}
            </p>

            <div className="space-y-2 mt-auto pt-6 border-t border-white/5">
                <h5 className="text-[8px] font-mono text-gray-600 uppercase tracking-widest mb-3">Key_Contributions:</h5>
                {metrics.map((m, i) => (
                    <div key={i} className="flex items-center gap-2 text-[9px] font-mono text-gray-400 group-hover:text-white transition-colors">
                        <div className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: color }} />
                        <span className="truncate">{m}</span>
                    </div>
                ))}
            </div>
        </div>
    </motion.div>
);

const ContentStrategy = () => {
    const experiences = [
        {
            society: "MS Club GIKI",
            role: "Content Strategist",
            impact: "Managed professional digital identity and technical outreach for GIKI's Microsoft student community. Bridged technical event news with relatable community storytelling.",
            metrics: ["Brand Identity MGMT", "Strategic Dissemination", "Cross-Team Synergy"],
            color: "#f9ff00",
            icon: MessageCircle
        },
        {
            society: "ACM GIKI",
            role: "Outreach Lead",
            impact: "Directed visual asset generation for nationwide technical competitions. Ensured brand consistency across multiple communication protocols and handles.",
            metrics: ["Marketing Intelligence", "Visual Scaling", "Direct Response Design"],
            color: "#00f3ff",
            icon: Share2
        },
        {
            society: "Pre-Medical Archive",
            role: "Design Lead",
            impact: "Transformed complex biological and medical curricula into high-engagement educational graphics for a nationwide student platform.",
            metrics: ["Content Visualization", "Information Design", "Educational Scaling"],
            color: "#ff0055",
            icon: HeartPulse
        }
    ];

    return (
        <section className="py-32 relative overflow-hidden px-4 md:px-8 bg-black/20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spider-cyan/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-7xl font-accent text-white italic tracking-tighter leading-none">
                            PROFESSIONAL_SYNC
                        </h2>
                        <p className="text-gray-500 font-tech text-[10px] md:text-xs uppercase tracking-[0.5em] max-w-lg">
                            Demonstrating Leadership, Communication, and Active Participation through society involvement.
                        </p>
                    </div>


                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="h-full"
                        >
                            <StrategyCard {...exp} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentStrategy;
