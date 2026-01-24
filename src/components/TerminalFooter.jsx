import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const TerminalFooter = () => {
    const skills = ["C++", "Python", "React", "Azure", "SQL", "Microsoft Office", "Google Sheets", "Google Docs", "NumPy", "Pandas"];

    return (
        <footer className="bg-spider-black border-t border-white/10 py-16 px-6 font-tech overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="w-full md:w-1/2">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-spider-magenta" />
                        <div className="w-3 h-3 rounded-full bg-spider-yellow" />
                        <div className="w-3 h-3 rounded-full bg-spider-cyan" />
                        <span className="ml-2 text-gray-500 text-xs font-mono">saadia@multiverse: ~</span>
                    </div>

                    <div className="bg-white/5 p-8 rounded-xl border border-white/5 font-mono text-sm relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-30 transition-opacity">
                            <Github size={100} />
                        </div>

                        <p className="text-spider-cyan mb-4">{`> initializing technical_stack...`}</p>
                        <div className="flex flex-wrap gap-x-6 gap-y-3 text-white text-xs">
                            {skills.map((skill, i) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:text-spider-cyan transition-colors"
                                >
                                    [{skill.toUpperCase()}]
                                </motion.span>
                            ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-white/5 space-y-2">
                            <p className="text-spider-magenta font-bold">{`> status: OPTIMIZED_FOR_INNOVATION`}</p>
                            <p className="text-spider-yellow">{`> current_node: GIKI_ARCHIVE_SEC_A`}</p>
                            <p className="text-gray-600 text-[10px] mt-4 tracking-widest uppercase">System logs: All creative modules loaded. Deployment successful.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-1/3 flex flex-col gap-10">
                    <div>
                        <h4 className="text-spider-cyan text-lg font-bold mb-6 tracking-widest flex items-center gap-2 border-b border-spider-cyan/20 pb-2">
                            OBVIOUS_CONNECTS <div className="w-1 h-1 bg-spider-cyan animate-ping" />
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { name: 'Github', icon: <Github size={18} />, link: "https://github.com/Saadia-Asghar", color: 'hover:text-spider-cyan' },
                                { name: 'LinkedIn', icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/saadia-asghar", color: 'hover:text-spider-magenta' },
                                { name: 'Email', icon: <Mail size={18} />, link: "mailto:saadianigah@gmail.com", color: 'hover:text-spider-yellow' },
                                { name: 'Instagram', icon: <Instagram size={18} />, link: "https://www.instagram.com/s._bytes", color: 'hover:text-purple-500' }
                            ].map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    className={`flex items-center gap-3 text-gray-400 font-mono text-xs transition-all ${social.color}`}
                                >
                                    <span className="p-2 glass-card border-none bg-white/5 rounded-lg">{social.icon}</span>
                                    {social.name.toUpperCase()}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 glass-card border-l-2 border-spider-magenta bg-spider-magenta/5">
                        <h5 className="text-[10px] font-bold text-spider-magenta mb-2 tracking-[0.3em]">CREATIVE_ARCHITECT</h5>
                        <p className="text-xs text-gray-400 leading-relaxed font-tech">
                            Blending <span className="text-spider-cyan">Data Science</span> with <span className="text-spider-magenta">Visual Design</span> to create impactful digital experiences.
                        </p>
                    </div>

                    <div className="text-[10px] text-gray-700 leading-relaxed uppercase tracking-[0.4em] font-mono mt-auto">
                        © 2026 SAADIA ASGHAR. SAADIA_OS_MULTIVERSE.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default TerminalFooter;
