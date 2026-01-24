import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import Hero3D from './components/Hero3D';
import ProjectSection from './components/ProjectSection';
import ContentStrategy from './components/ContentStrategy';
import NeuralExperience from './components/NeuralExperience';
import TerminalFooter from './components/TerminalFooter';
import SpiderWeb from './components/SpiderWeb';
import LoadingScreen from './components/LoadingScreen';
import { Github, Linkedin, Mail, Instagram, Sparkles, BookOpen, Rocket, CheckCircle2, Cpu, BarChart3, Fingerprint } from 'lucide-react';

const SocialHUD = () => {
  const connects = [
    { icon: <Github size={18} />, label: "GITHUB", link: "https://github.com/Saadia-Asghar", color: "hover:text-spider-cyan border-spider-cyan text-spider-cyan" },
    { icon: <Linkedin size={18} />, label: "LINKEDIN", link: "https://www.linkedin.com/in/saadia-asghar", color: "hover:text-spider-magenta border-spider-magenta text-spider-magenta" },
    { icon: <Mail size={18} />, label: "EMAIL", link: "mailto:saadianigah@gmail.com", color: "hover:text-spider-yellow border-spider-yellow text-spider-yellow" },
    { icon: <Instagram size={18} />, label: "INSTAGRAM", link: "https://www.instagram.com/s._bytes", color: "hover:text-purple-500 border-purple-500 text-purple-400" }
  ];

  return (
    <div className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-[100] hidden 2xl:flex flex-col gap-4 p-2">
      <div className="w-px h-16 bg-gradient-to-t from-white/10 to-transparent mx-auto" />
      {connects.map((c, i) => (
        <motion.a
          key={i}
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: 5 }}
          className={`p-2.5 glass-card border-none bg-white/5 border-l-2 ${c.color} transition-all flex items-center gap-3 group shadow-xl`}
        >
          <span className="force-glow group-hover:scale-110 transition-transform">{c.icon}</span>
          <span className="text-[9px] font-mono font-bold tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">{c.label}</span>
        </motion.a>
      ))}
      <div className="w-px h-16 bg-gradient-to-b from-white/10 to-transparent mx-auto" />
    </div>
  );
}

const BackgroundGraphics = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
      backgroundSize: '100px 100px',
      transform: 'perspective(1000px) rotateX(60deg) translateY(-30%) scale(2)',
    }} />
    <svg className="absolute inset-0 w-full h-full opacity-[0.08]">
      <motion.path
        d="M-50,300 Q400,100 800,500 T1600,300"
        stroke="white" strokeWidth="0.5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
    </svg>
    <div className="absolute top-1/4 -left-20 w-64 h-64 bg-halftone opacity-5 rotate-12" />
    <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-halftone opacity-5 -rotate-12" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen relative spider-bg selection:bg-spider-magenta selection:text-white overflow-x-hidden">
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="scanline opacity-[0.04]" />
      <SocialHUD />
      <BackgroundGraphics />

      {/* Primary Corner Webs */}
      <SpiderWeb position="top-left" color="#00f3ff" size={450} />
      <SpiderWeb position="bottom-right" color="#ff0055" size={450} />
      <SpiderWeb position="top-right" color="#f9ff00" size={300} />
      <SpiderWeb position="bottom-left" color="#7a00ff" size={250} />

      {/* New Hanging "Draped" Webs */}
      <SpiderWeb position="top-center" color="#ff0055" size={300} type="hanging" />
      <SpiderWeb position="top-left" color="#00f3ff" size={400} type="hanging" />
      <SpiderWeb position="top-right" color="#7a00ff" size={350} type="hanging" />

      <CustomCursor />

      <main className="relative z-10 w-full overflow-hidden">
        <Hero3D />

        {/* Recruiter-Centric Profile Overview */}
        <section id="about" className="py-32 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Left Column: Mission & Identity */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-7 space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-accent text-spider-yellow -rotate-1 origin-left break-words max-w-full">
                  PROFILE_SUMMARY
                </h2>
                <p className="text-xl md:text-3xl font-tech text-white font-black leading-tight tracking-tight uppercase">
                  Data Science Student | <span className="text-spider-cyan">Creative Designer</span> | MarTech Enthusiast
                </p>
              </div>

              <div className="h-0.5 w-full bg-gradient-to-r from-spider-cyan to-transparent opacity-20" />

              <div className="space-y-6 text-lg md:text-xl font-tech text-gray-400 leading-relaxed font-light">
                <p>
                  I am a <span className="text-white font-bold">multi-disciplinary student</span> bridging the gap between data analytics
                  and brand strategy. My goal is to work at the intersection of
                  <span className="text-spider-cyan font-bold italic"> analytical reasoning</span> and
                  <span className="text-spider-magenta font-bold italic"> creative execution</span>.
                </p>
                <p>
                  I am <span className="text-spider-yellow font-bold uppercase underline underline-offset-8">Open for Roles</span> in Tech and Marketing, Graphic Designing, Data Science, AI, and beyond—applying advanced methodologies to real-world business challenges.
                </p>
              </div>

              {/* Unique Value Propositions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {[
                  { icon: <Cpu className="text-spider-cyan" />, title: "TECHNICAL_SKILLS", desc: "Solid foundation in SQL, C++, and Python analytics." },
                  { icon: <BarChart3 className="text-spider-magenta" />, title: "DATA_INSIGHTS", desc: "Turning complex metrics into actionable insights." },
                  { icon: <Fingerprint className="text-spider-yellow" />, title: "VISUAL_DESIGN", desc: "Combining UI/UX principles with creative design." },
                  { icon: <BookOpen className="text-purple-400" />, title: "ADAPTABILITY", desc: "Rapidly learning new tech stacks and industry trends." }
                ].map((uvp, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-5 glass-card border-none bg-white/5 space-y-3"
                  >
                    <div className="p-2 w-fit rounded-lg bg-white/5">{uvp.icon}</div>
                    <h4 className="text-white font-black text-xs tracking-widest">{uvp.title}</h4>
                    <p className="text-[10px] text-gray-500 leading-relaxed">{uvp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Skills & Social Proof */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div className="glass-card p-10 relative bg-black/40 border-white/5 backdrop-blur-3xl shadow-2xl">
                <div className="absolute -top-4 -right-4 bg-spider-cyan text-black font-tech font-black px-8 py-3 rotate-6 text-sm shadow-xl z-20 uppercase">
                  HIRE_STATUS: ACTIVE
                </div>

                <h4 className="text-spider-cyan font-tech text-xs font-bold tracking-[0.4em] mb-10 pb-4 border-b border-white/10 uppercase">SKILLS_OVERVIEW</h4>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-[9px] font-mono text-gray-500 tracking-[0.4em] uppercase">Data & Analytics</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                      {["Python", "SQL", "Pandas", "NumPy", "Google Sheets", "Statistics"].map(s => (
                        <span key={s} className="px-3 py-1 bg-spider-cyan/10 border border-spider-cyan/30 text-spider-cyan rounded-md">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[9px] font-mono text-gray-500 tracking-[0.4em] uppercase">Creative & Office</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                      {["Graphic Design", "Canva", "Microsoft Office", "Google Docs", "Brand Identity", "UI/UX Architecture"].map(s => (
                        <span key={s} className="px-3 py-1 bg-spider-magenta/10 border border-spider-magenta/30 text-spider-magenta rounded-md">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[9px] font-mono text-gray-500 tracking-[0.4em] uppercase">Development Tools</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                      {["C++", "React", "Git/Github", "Data Visualization", "TailwindCSS"].map(s => (
                        <span key={s} className="px-3 py-1 bg-spider-yellow/10 border border-spider-yellow/30 text-spider-yellow rounded-md">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-white/10 space-y-6">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-spider-yellow" />
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest font-black">GIKI Data Science Excellence</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 size={18} className="text-spider-yellow" />
                    <span className="text-[10px] font-mono text-white/70 uppercase tracking-widest font-black">Multidisciplinary Project Lead</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact HUD */}
              <div className="grid grid-cols-2 gap-4">
                <a href="mailto:saadianigah@gmail.com" className="p-6 glass-card border-none bg-spider-cyan/5 hover:bg-spider-cyan/10 transition-all text-center group">
                  <Mail className="mx-auto mb-3 text-spider-cyan group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-spider-cyan font-black uppercase tracking-widest">Inquire_Now</span>
                </a>
                <a href="https://www.linkedin.com/in/saadia-asghar" target="_blank" className="p-6 glass-card border-none bg-spider-magenta/5 hover:bg-spider-magenta/10 transition-all text-center group">
                  <Linkedin className="mx-auto mb-3 text-spider-magenta group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono text-spider-magenta font-black uppercase tracking-widest">Connect_Pro</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <ProjectSection />

        <ContentStrategy />

        <NeuralExperience />

        {/* Global Connection Portal */}
        <section className="py-24 text-center max-w-5xl mx-auto relative mb-20 lg:mb-32 overflow-hidden px-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/10 to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            <div className="relative inline-block max-w-full">
              <h2 className="text-4xl md:text-6xl lg:text-[7rem] font-accent text-white italic leading-none break-words">
                CONNECT_SYNC
              </h2>
              <h2 className="absolute inset-0 text-spider-magenta opacity-10 blur-[3px] translate-x-1 -z-10 select-none pointer-events-none">CONNECT_SYNC</h2>
            </div>

            <p className="text-gray-600 font-mono tracking-[0.3em] text-[10px] uppercase italic max-w-lg mx-auto">Open for roles in Tech, Marketing, Design, Data Science & AI</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 lg:gap-8">
              <motion.a
                href="https://www.linkedin.com/in/saadia-asghar"
                target="_blank"
                whileHover={{ scale: 1.05, rotate: -0.5 }}
                className="px-10 py-5 glass-card bg-spider-magenta/5 border-spider-magenta/30 text-white font-tech font-black rounded-xl shadow-[0_0_20px_-10px_#ff0055] transition-all uppercase tracking-widest text-sm"
              >
                LinkedIn_Profile
              </motion.a>
              <motion.a
                href="/Saadia_Asghar_Resume.png"
                download="Saadia_Asghar_Resume.png"
                whileHover={{ scale: 1.05, rotate: 0.5 }}
                className="px-10 py-5 glass-card bg-spider-cyan/5 border-spider-cyan/30 text-white font-tech font-black rounded-xl shadow-[0_0_20px_-10px_#00f3ff] transition-all border-dashed uppercase tracking-widest text-sm"
              >
                Download_Resume
              </motion.a>
            </div>
          </motion.div>
        </section>
      </main>

      <TerminalFooter />
    </div>
  );
}

export default App;
