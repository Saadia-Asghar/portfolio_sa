import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import SiteNav from './components/SiteNav';
import Hero3D from './components/Hero3D';
import ProjectSection from './components/ProjectSection';
import ContentStrategy from './components/ContentStrategy';
import ResumeSection from './components/ResumeSection';
import NeuralExperience from './components/NeuralExperience';
import TerminalFooter from './components/TerminalFooter';
import SpiderWeb from './components/SpiderWeb';
import LoadingScreen from './components/LoadingScreen';
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  CheckCircle2,
  Cpu,
  BarChart3,
  Fingerprint,
  Palette,
} from 'lucide-react';
import { CONTACT, SKILL_GROUPS } from './data/portfolio';

const accentMap = {
  'spider-cyan': 'bg-spider-cyan/10 border-spider-cyan/30 text-spider-cyan',
  'spider-magenta': 'bg-spider-magenta/10 border-spider-magenta/30 text-spider-magenta',
  'spider-yellow': 'bg-spider-yellow/10 border-spider-yellow/30 text-spider-yellow',
};

const SocialHUD = () => {
  const connects = [
    { icon: <Github size={18} />, label: 'GitHub', link: CONTACT.github, color: 'hover:text-spider-cyan border-spider-cyan text-spider-cyan' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', link: CONTACT.linkedin, color: 'hover:text-spider-magenta border-spider-magenta text-spider-magenta' },
    { icon: <Mail size={18} />, label: 'Email', link: `mailto:${CONTACT.email}`, color: 'hover:text-spider-yellow border-spider-yellow text-spider-yellow' },
    { icon: <Instagram size={18} />, label: 'Instagram', link: CONTACT.instagram, color: 'hover:text-purple-400 border-purple-400 text-purple-400' },
  ];

  return (
    <div className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-[90] hidden xl:flex flex-col gap-3 p-2">
      <motion.div className="w-px h-12 bg-gradient-to-t from-white/10 to-transparent mx-auto" />
      {connects.map((c) => (
        <a
          key={c.label}
          href={c.link}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="interactive"
          className={`p-2.5 glass-card border-none bg-white/5 border-l-2 ${c.color} transition-all flex items-center gap-3 group`}
          aria-label={c.label}
        >
          <span className="group-hover:scale-110 transition-transform">{c.icon}</span>
          <span className="text-[9px] font-mono font-bold tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {c.label}
          </span>
        </a>
      ))}
      <motion.div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mx-auto" />
    </div>
  );
};

const MobileSocialBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-[90] xl:hidden flex justify-around items-center py-3 px-4 bg-black/90 backdrop-blur-xl border-t border-white/10 safe-area-pb">
    {[
      { icon: <Github size={20} />, link: CONTACT.github, label: 'GitHub' },
      { icon: <Linkedin size={20} />, link: CONTACT.linkedin, label: 'LinkedIn' },
      { icon: <Mail size={20} />, link: `mailto:${CONTACT.email}`, label: 'Email' },
    ].map((item) => (
      <a
        key={item.label}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        className="p-3 text-gray-400 hover:text-spider-cyan transition-colors"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const BackgroundGraphics = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <div
      className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage:
          'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        transform: 'perspective(1000px) rotateX(60deg) translateY(-30%) scale(2)',
      }}
    />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const valueProps = [
    { icon: <Cpu className="text-spider-cyan" />, title: 'Data & ML', desc: 'Python, SQL, Pandas, NumPy — analytics to insight.' },
    { icon: <Palette className="text-spider-magenta" />, title: 'UI/UX & Product', desc: 'Figma prototypes, immersive UI, storytelling-led design.' },
    { icon: <BarChart3 className="text-spider-yellow" />, title: 'Full-Stack', desc: 'React, Azure, Firebase — from hackathons to production.' },
    { icon: <Fingerprint className="text-purple-400" />, title: 'Leadership', desc: 'Campus ambassador & society roles across GIKI.' },
  ];

  return (
    <div className="min-h-screen relative spider-bg selection:bg-spider-magenta selection:text-white overflow-x-hidden pb-20 xl:pb-0">
      <AnimatePresence>{isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}</AnimatePresence>

      <div className="scanline opacity-[0.04]" />
      <SiteNav />
      <SocialHUD />
      <MobileSocialBar />
      <BackgroundGraphics />

      <SpiderWeb position="top-left" color="#00f3ff" size={450} />
      <SpiderWeb position="bottom-right" color="#ff0055" size={450} />
      <SpiderWeb position="top-right" color="#f9ff00" size={300} />
      <SpiderWeb position="bottom-left" color="#7a00ff" size={250} />
      <SpiderWeb position="top-center" color="#ff0055" size={300} type="hanging" />

      <CustomCursor />

      <main className="relative z-10 w-full">
        <Hero3D />

        <section id="about" className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <motion.div className="space-y-3">
                <h2 className="text-3xl md:text-5xl font-accent text-spider-yellow -rotate-1 origin-left">About</h2>
                <p className="text-lg md:text-2xl font-tech text-white font-bold leading-tight">
                  Data Science @ GIKI · <span className="text-spider-cyan">Product Designer</span> ·{' '}
                  <span className="text-spider-magenta">Builder</span>
                </p>
              </motion.div>

              <div className="h-px w-full bg-gradient-to-r from-spider-cyan/40 to-transparent" />

              <div className="space-y-5 text-base md:text-lg font-tech text-gray-400 leading-relaxed">
                <p>
                  I work where <span className="text-white font-semibold">data</span>,{' '}
                  <span className="text-white font-semibold">design</span>, and{' '}
                  <span className="text-white font-semibold">code</span> meet — from{' '}
                  <span className="text-spider-cyan font-semibold">2nd at Hack@GIKI</span> (Skill Issue) to
                  Vyrothon, MIT Hack Nation Top 10, and Microsoft Imagine Cup work on EcoBite.
                </p>
                <p>
                  Currently a <span className="text-spider-yellow font-bold">Graphic Design Associate</span> at
                  PreMed.PK and active across GIKI societies.{' '}
                  <span className="text-spider-cyan underline underline-offset-4">Open to internships</span> in
                  data science, UI/UX, product, and full-stack development.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {valueProps.map((uvp) => (
                  <motion.div
                    key={uvp.title}
                    whileHover={{ x: 6 }}
                    className="p-5 glass-card border-none bg-white/5 space-y-2"
                  >
                    <div className="p-2 w-fit rounded-lg bg-white/5">{uvp.icon}</div>
                    <h4 className="text-white font-bold text-xs tracking-widest uppercase">{uvp.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{uvp.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <div className="glass-card p-8 relative bg-black/40 border-white/5">
                <div className="absolute -top-3 right-4 bg-spider-cyan text-black font-tech font-black px-5 py-2 text-[10px] uppercase tracking-widest rotate-2">
                  Available
                </div>

                <h4 className="text-spider-cyan font-mono text-[10px] font-bold tracking-[0.35em] mb-8 uppercase border-b border-white/10 pb-4">
                  Skills
                </h4>

                <div className="space-y-7">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.label} className="space-y-3">
                      <p className="text-[9px] font-mono text-gray-500 tracking-[0.3em] uppercase">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((s) => (
                          <span
                            key={s}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded-md border ${accentMap[group.accent]}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
                  {[
                    'B.Sc. Data Science — GIKI (2028)',
                    'Skill Issue — 2nd @ Hack@GIKI AI Challenge',
                    'Vyrothon Top 5 global · MIT Hack Nation Top 10',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-spider-yellow shrink-0 mt-0.5" />
                      <span className="text-[11px] font-mono text-white/70 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <ProjectSection />
        <ContentStrategy />
        <ResumeSection />
        <NeuralExperience />

        <section className="py-20 text-center max-w-3xl mx-auto px-4 scroll-mt-24">
          <h2 className="text-3xl md:text-5xl font-accent text-white italic mb-4">Let&apos;s connect</h2>
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-8">
            {CONTACT.email} · {CONTACT.phone}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="px-8 py-4 rounded-xl glass-card border-spider-magenta/30 text-white font-tech font-bold text-sm uppercase tracking-widest hover:bg-spider-magenta/10 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              data-cursor="interactive"
              className="px-8 py-4 rounded-xl glass-card border-spider-cyan/30 text-white font-tech font-bold text-sm uppercase tracking-widest hover:bg-spider-cyan/10 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </section>
      </main>

      <TerminalFooter />
    </div>
  );
}

export default App;
