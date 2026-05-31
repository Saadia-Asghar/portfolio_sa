import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import SiteNav from './components/SiteNav';
import Hero3D from './components/Hero3D';
import MarketingSection from './components/MarketingSection';
import ProjectSection from './components/ProjectSection';
import ContentStrategy from './components/ContentStrategy';
import ResumeSection from './components/ResumeSection';
import NeuralExperience from './components/NeuralExperience';
import TerminalFooter from './components/TerminalFooter';
import ComicBackground from './components/ComicBackground';
import ComicPanel from './components/ComicPanel';
import SectionHeader from './components/SectionHeader';
import StoryDivider from './components/StoryDivider';
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
  Megaphone,
  Palette,
  Code2,
} from 'lucide-react';
import { CONTACT, SKILL_GROUPS, PROFILE } from './data/portfolio';

const accentMap = {
  'spider-cyan': 'bg-spider-cyan/10 border-spider-cyan/30 text-spider-cyan',
  'spider-magenta': 'bg-spider-magenta/10 border-spider-magenta/30 text-spider-magenta',
  'spider-yellow': 'bg-spider-yellow/10 border-spider-yellow/30 text-spider-yellow',
  'spider-purple': 'bg-spider-purple/10 border-spider-purple/30 text-spider-purple',
};

const SocialHUD = () => {
  const connects = [
    { icon: <Linkedin size={18} />, label: 'LinkedIn', link: CONTACT.linkedin, color: 'hover:text-spider-magenta border-spider-magenta text-spider-magenta' },
    { icon: <Instagram size={18} />, label: 'Instagram', link: CONTACT.instagram, color: 'hover:text-purple-400 border-purple-400 text-purple-400' },
    { icon: <Github size={18} />, label: 'GitHub', link: CONTACT.github, color: 'hover:text-spider-cyan border-spider-cyan text-spider-cyan' },
    { icon: <Mail size={18} />, label: 'Email', link: `mailto:${CONTACT.email}`, color: 'hover:text-spider-yellow border-spider-yellow text-spider-yellow' },
  ];

  return (
    <div className="fixed left-2 md:left-4 top-1/2 -translate-y-1/2 z-[90] hidden xl:flex flex-col gap-3 p-2">
      <div className="w-px h-12 bg-gradient-to-t from-white/10 to-transparent mx-auto" />
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
      <div className="w-px h-12 bg-gradient-to-b from-white/10 to-transparent mx-auto" />
    </div>
  );
};

const MobileSocialBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-[90] xl:hidden flex justify-around items-center py-3 px-4 bg-black/90 backdrop-blur-xl border-t border-white/10 safe-area-pb">
    {[
      { icon: <Linkedin size={20} />, link: CONTACT.linkedin, label: 'LinkedIn' },
      { icon: <Instagram size={20} />, link: CONTACT.instagram, label: 'Instagram' },
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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const pillars = [
    { icon: <Megaphone className="text-spider-magenta" />, title: 'Marketing', desc: 'Content strategy, personal branding, social growth.', accent: 'magenta' },
    { icon: <Palette className="text-spider-yellow" />, title: 'Design', desc: 'Figma, storytelling UI, visual identity at scale.', accent: 'yellow' },
    { icon: <Cpu className="text-spider-cyan" />, title: 'Data Science', desc: 'Python, SQL, analytics — insight to narrative.', accent: 'cyan' },
    { icon: <Code2 className="text-spider-purple" />, title: 'Build', desc: 'React, Next.js, hackathon ships from idea to live.', accent: 'purple' },
  ];

  return (
    <div className="min-h-screen relative spider-bg selection:bg-spider-magenta selection:text-white overflow-x-hidden pb-20 xl:pb-0">
      <AnimatePresence>{isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}</AnimatePresence>

      <div className="scanline opacity-[0.04]" />
      <SiteNav />
      <SocialHUD />
      <MobileSocialBar />
      <ComicBackground />

      <SpiderWeb position="top-left" color="#00f3ff" size={400} />
      <SpiderWeb position="bottom-right" color="#ff0055" size={380} />

      <CustomCursor />

      <main className="relative z-10 w-full">
        {/* ACT I — Opening */}
        <Hero3D />

        {/* ACT II — Identity */}
        <section id="about" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
          <SectionHeader
            index="01 · IDENTITY"
            title="Two Worlds, One Story"
            subtitle="Technical builder meets digital storyteller"
            accent="cyan"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {pillars.map((p, i) => (
                <ComicPanel key={p.title} accent={p.accent} tilt={i % 2 ? 1 : -1}>
                  <div className="space-y-2">
                    <div className="p-2 w-fit rounded-lg bg-white/5">{p.icon}</div>
                    <h4 className="font-display text-lg text-white uppercase tracking-wide">{p.title}</h4>
                    <p className="text-xs text-gray-500 font-tech leading-relaxed">{p.desc}</p>
                  </div>
                </ComicPanel>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <ComicPanel accent="magenta" tilt={0.5}>
                <h4 className="font-display text-spider-magenta text-xl uppercase mb-4">Skills Manifest</h4>
                <div className="space-y-5">
                  {SKILL_GROUPS.map((group) => (
                    <div key={group.label}>
                      <p className="text-[9px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-2">{group.label}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {group.skills.map((s) => (
                          <span key={s} className={`px-2 py-0.5 text-[9px] font-mono rounded border ${accentMap[group.accent]}`}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-dashed border-white/10 space-y-2">
                  {[
                    'Hack@GIKI 2nd · Skill Issue',
                    'Vyrothon Top 5 · MIT Hack Nation Top 10',
                    'Director of Marketing · UROG Exec',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-spider-yellow shrink-0 mt-0.5" />
                      <span className="text-[10px] font-mono text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </ComicPanel>
            </motion.div>
          </div>
        </section>

        <StoryDivider act="ACT II" label="Marketing & storytelling" />

        {/* Marketing narrative — from marketing portfolio */}
        <MarketingSection />

        <StoryDivider act="ACT III" label="Tech builds & hackathons" />

        <ProjectSection />

        <StoryDivider act="ACT IV" label="Leadership & experience" />

        <ContentStrategy />

        <StoryDivider act="ACT V" label="Resume & credentials" />

        <ResumeSection />

        <StoryDivider act="ACT VI" label="Campus network" />

        <NeuralExperience />

        <section className="py-24 text-center max-w-3xl mx-auto px-4 scroll-mt-24">
          <SectionHeader
            index="07 · CONNECT"
            title="Start a Scene"
            subtitle={PROFILE.subtitle}
            accent="magenta"
          />
          <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-10 -mt-6">
            {CONTACT.email} · {CONTACT.phone}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-sticker bg-spider-magenta/30 text-white px-8 py-4 font-tech font-black text-sm uppercase tracking-widest hover:bg-spider-magenta/50 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="comic-sticker bg-purple-500/30 text-white px-8 py-4 font-tech font-black text-sm uppercase tracking-widest hover:bg-purple-500/50 transition-colors"
            >
              @s._bytes
            </a>
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="comic-sticker bg-spider-cyan text-black px-8 py-4 font-tech font-black text-sm uppercase tracking-widest"
            >
              Resume
            </a>
          </div>
        </section>
      </main>

      <TerminalFooter />
    </div>
  );
}

export default App;
