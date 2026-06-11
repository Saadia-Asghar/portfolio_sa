import React from 'react';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import DesignBookSection from './components/DesignBookSection';
import MarketingSection from './components/MarketingSection';
import HackathonSection from './components/HackathonSection';
import AchievementsSection from './components/AchievementsSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ContentStrategy';
import ResumeSection from './components/ResumeSection';
import TechStackSection from './components/TechStackSection';
import ContactForm from './components/ContactForm';
import TerminalFooter from './components/TerminalFooter';
import PageBackground from './components/PageBackground';
import SectionHeader from './components/SectionHeader';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';
import { CONTACT, SKILL_GROUPS, PROFILE, OPEN_TO } from './data/portfolio';

const skillTagMap = {
  'spider-cyan': 'skill-tag-build',
  'spider-magenta': 'skill-tag-grow',
  'spider-yellow': 'skill-tag-design',
  'spider-purple': 'skill-tag-dev',
};

function App() {
  return (
    <div className="page-shell pb-20 xl:pb-0">
      <PageBackground />
      <SiteNav />

      <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-2">
        {[
          { icon: Github, link: CONTACT.github, label: 'GitHub' },
          { icon: Linkedin, link: CONTACT.linkedin, label: 'LinkedIn' },
          { icon: Instagram, link: CONTACT.instagram, label: 'Instagram' },
          { icon: Mail, link: `mailto:${CONTACT.email}`, label: 'Email' },
        ].map(({ icon: Icon, link, label }) => (
          <a
            key={label}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2.5 doodle-icon-btn border border-white/10 bg-surface/80 text-zinc-500 hover:text-white hover:border-accent-build/40 transition-colors"
          >
            <Icon size={18} />
          </a>
        ))}
      </aside>

      <main className="relative z-10">
        <Hero />

        <section id="about" className="section-block-wide">
          <SectionHeader
            index="About"
            title="About Me"
            subtitle={PROFILE.subtitle}
            accent="build"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed">{PROFILE.intro}</p>
              <p className="text-sm text-zinc-500 leading-relaxed">{PROFILE.designBlurb}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
                  View GitHub
                </a>
                <a href="#connect" className="btn-secondary text-sm">
                  Contact me
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="dual-track-bar">
                <div className="dual-track-half">
                  <span className="track-pill track-build w-fit mb-2">Build</span>
                  <span className="dual-track-desc">Hackathons · full-stack · product</span>
                </div>
                <div className="dual-track-half">
                  <span className="track-pill track-grow w-fit mb-2">Grow</span>
                  <span className="dual-track-desc">Marketing · content · leadership</span>
                </div>
                <div className="dual-track-half">
                  <span className="track-pill track-design w-fit mb-2">Design</span>
                  <span className="dual-track-desc">Figma · identity · storytelling UI</span>
                </div>
              </div>

              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">{group.label}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <span key={s} className={`skill-tag ${skillTagMap[group.accent] || 'skill-tag-dev'}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProjectSection />
        <DesignBookSection />
        <MarketingSection />
        <HackathonSection />
        <ExperienceSection />
        <AchievementsSection />
        <TechStackSection />
        <ResumeSection />

        <section id="connect" className="section-block max-w-2xl">
          <SectionHeader
            index="Contact"
            title="Get in Touch"
            subtitle="Collaborations, internships, hackathons, or roles across data, design, and marketing."
            accent="grow"
            align="center"
          />
          <ContactForm />
          <ul className="mt-10 pt-8 border-t border-white/10 space-y-2">
            <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Open to</p>
            {OPEN_TO.map((item) => (
              <li key={item} className="text-sm text-zinc-500 flex gap-2">
                <span className="text-accent-build">·</span> {item}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <TerminalFooter />
    </div>
  );
}

export default App;
