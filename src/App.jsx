import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CustomCursor from './components/CustomCursor';
import SiteNav from './components/SiteNav';
import Hero3D from './components/Hero3D';
import HackathonSection from './components/HackathonSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ContentStrategy';
import ResumeSection from './components/ResumeSection';
import TerminalFooter from './components/TerminalFooter';
import ComicBackground from './components/ComicBackground';
import SectionHeader from './components/SectionHeader';
import LoadingScreen from './components/LoadingScreen';
import { Linkedin, Instagram, Mail } from 'lucide-react';
import { CONTACT, SKILL_GROUPS, PROFILE, OPEN_TO } from './data/portfolio';

const accentMap = {
  'spider-cyan': 'skill-tag-cyan',
  'spider-magenta': 'skill-tag-magenta',
  'spider-yellow': 'skill-tag-yellow',
  'spider-purple': 'skill-tag-purple',
};

const SocialHUD = () => (
  <div className="fixed left-3 top-1/2 -translate-y-1/2 z-[90] hidden xl:flex flex-col gap-2">
    {[
      { icon: <Linkedin size={18} />, link: CONTACT.linkedin, label: 'LinkedIn' },
      { icon: <Instagram size={18} />, link: CONTACT.instagram, label: 'Instagram' },
      { icon: <Mail size={18} />, link: `mailto:${CONTACT.email}`, label: 'Email' },
    ].map((item) => (
      <a
        key={item.label}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={item.label}
        className="p-2.5 rounded-lg border border-white/10 bg-black/50 text-gray-400 hover:text-white hover:border-white/25 transition-colors"
      >
        {item.icon}
      </a>
    ))}
  </div>
);

const MobileSocialBar = () => (
  <div className="fixed bottom-0 inset-x-0 z-[90] xl:hidden flex justify-around py-3 px-4 bg-black/95 border-t border-white/10 safe-area-pb">
    {[
      { icon: <Linkedin size={20} />, link: CONTACT.linkedin, label: 'LinkedIn' },
      { icon: <Instagram size={20} />, link: CONTACT.instagram, label: 'Instagram' },
      { icon: <Mail size={20} />, link: `mailto:${CONTACT.email}`, label: 'Email' },
    ].map((item) => (
      <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.label} className="p-3 text-gray-400 hover:text-white">
        {item.icon}
      </a>
    ))}
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen relative spider-bg selection:bg-spider-magenta selection:text-white overflow-x-hidden pb-20 xl:pb-0">
      <AnimatePresence>{isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}</AnimatePresence>

      <div className="scanline opacity-[0.03]" />
      <SiteNav />
      <SocialHUD />
      <MobileSocialBar />
      <ComicBackground />
      <CustomCursor />

      <main className="relative z-10 w-full">
        <Hero3D />

        {/* About — dual track intro */}
        <section id="about" className="py-20 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
          <SectionHeader
            index="01 · ABOUT"
            title={PROFILE.title}
            subtitle={PROFILE.subtitle}
            accent="cyan"
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <p className="text-gray-300 font-tech text-base md:text-lg leading-relaxed">{PROFILE.intro}</p>

            <div className="space-y-5">
              <div className="dual-track-bar">
                <div className="dual-track-half dual-track-build">
                  <span className="dual-track-label">Build</span>
                  <span className="dual-track-desc">Hackathons · full-stack · product design</span>
                </div>
                <div className="dual-track-half dual-track-grow">
                  <span className="dual-track-label">Grow</span>
                  <span className="dual-track-desc">Marketing · content · campus leadership</span>
                </div>
              </div>

              <div className="space-y-4">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s) => (
                        <span key={s} className={`skill-tag ${accentMap[group.accent]}`}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <HackathonSection />
        <AchievementsSection />
        <ProjectSection />
        <ExperienceSection />

        <ResumeSection />

        <section id="connect" className="py-20 md:py-24 max-w-3xl mx-auto px-4 scroll-mt-24 text-center">
          <SectionHeader index="07 · CONNECT" title="Let's Work Together" subtitle={PROFILE.subtitle} />
          <p className="text-gray-500 font-mono text-xs -mt-4 mb-8">{CONTACT.email} · {CONTACT.phone}</p>

          <ul className="text-left max-w-md mx-auto space-y-2 mb-10">
            {OPEN_TO.map((item) => (
              <li key={item} className="text-sm text-gray-400 font-tech flex gap-2">
                <span className="text-spider-cyan">·</span> {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: 'LinkedIn', href: CONTACT.linkedin, className: 'btn-secondary' },
              { label: '@s._bytes', href: CONTACT.instagram, className: 'btn-secondary' },
              { label: 'Resume', href: CONTACT.resumePath, download: true, className: 'btn-primary' },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                download={btn.download ? 'Saadia_Asghar_Resume.png' : undefined}
                target={btn.download ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={btn.className}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <TerminalFooter />
    </div>
  );
}

export default App;
