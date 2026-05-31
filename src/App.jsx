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
import ComicBackground from './components/ComicBackground';
import ComicPanel from './components/ComicPanel';
import SectionHeader from './components/SectionHeader';
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

const BackgroundGraphics = () => null;

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
      <ComicBackground />
      <BackgroundGraphics />

      <SpiderWeb position="top-left" color="#00f3ff" size={400} />
      <SpiderWeb position="bottom-right" color="#ff0055" size={380} />

      <CustomCursor />

      <main className="relative z-10 w-full">
        <Hero3D />

        <section id="about" className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24 relative">
          <div className="absolute -right-10 top-20 w-48 h-48 halftone-corner opacity-10 pointer-events-none hidden lg:block" />

          <SectionHeader
            index="01 · ABOUT"
            title="Who I Am"
            subtitle="Data science student · product designer · hackathon builder"
            accent="cyan"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="comic-speech text-base md:text-lg font-tech text-gray-300 leading-relaxed space-y-4">
                <p>
                  I work where <span className="text-spider-cyan font-bold">data</span>,{' '}
                  <span className="text-spider-magenta font-bold">design</span>, and{' '}
                  <span className="text-white font-bold">code</span> meet — from{' '}
                  <span className="text-spider-yellow font-bold">2nd at Hack@GIKI</span> (Skill Issue) to
                  Vyrothon, MIT Hack Nation Top 10, and Microsoft Imagine Cup work on EcoBite.
                </p>
                <p>
                  Graphic Design Associate at PreMed.PK · active across GIKI societies.{' '}
                  <span className="text-spider-cyan underline underline-offset-4 decoration-wavy">Open to internships</span>{' '}
                  in data science, UI/UX, product, and full-stack.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {valueProps.map((uvp, i) => (
                  <motion.div
                    key={uvp.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <ComicPanel accent={['cyan', 'magenta', 'yellow', 'purple'][i]} tilt={i % 2 ? 1.5 : -1.5}>
                      <div className="p-1 space-y-2">
                        <div className="p-2 w-fit rounded-lg bg-white/5 border border-white/10">{uvp.icon}</div>
                        <h4 className="font-display text-white text-lg tracking-wide uppercase">{uvp.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-tech">{uvp.desc}</p>
                      </div>
                    </ComicPanel>
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
              <ComicPanel accent="cyan" tilt={1} stamp="★">
                <span className="comic-sticker bg-spider-cyan text-black absolute -top-3 right-6 text-[9px] font-mono font-black px-3 py-1 uppercase tracking-widest rotate-3 z-20">
                  Available
                </span>

                <h4 className="font-display text-spider-cyan text-2xl tracking-wider uppercase mb-6">Skills</h4>

                <div className="space-y-6">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.label} className="space-y-3">
                      <p className="text-[9px] font-mono text-gray-500 tracking-[0.3em] uppercase">{group.label}</p>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((s) => (
                          <span
                            key={s}
                            className={`px-2.5 py-1 text-[10px] font-mono rounded border ${accentMap[group.accent]}`}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-dashed border-white/10 space-y-3">
                  {[
                    'B.Sc. Data Science — GIKI (2028)',
                    'Skill Issue — 2nd @ Hack@GIKI AI Challenge',
                    'Vyrothon Top 5 · MIT Hack Nation Top 10',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-spider-yellow shrink-0 mt-0.5" />
                      <span className="text-[11px] font-mono text-white/70 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </ComicPanel>
            </motion.div>
          </div>
        </section>

        <ProjectSection />
        <ContentStrategy />
        <ResumeSection />
        <NeuralExperience />

        <section className="py-24 text-center max-w-3xl mx-auto px-4 scroll-mt-24">
          <SectionHeader
            index="06 · CONNECT"
            title="Let's Talk"
            subtitle="Internships · collaborations · freelance design"
            accent="magenta"
          />
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-10 -mt-8">
            {CONTACT.email} · {CONTACT.phone}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="comic-sticker bg-spider-magenta/20 text-white px-10 py-4 font-tech font-black text-sm uppercase tracking-widest hover:bg-spider-magenta/40 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              data-cursor="interactive"
              className="comic-sticker bg-spider-cyan text-black px-10 py-4 font-tech font-black text-sm uppercase tracking-widest hover:shadow-[4px_4px_0_rgba(0,243,255,0.4)] transition-shadow"
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
