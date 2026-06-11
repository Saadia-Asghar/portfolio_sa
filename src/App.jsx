import React from 'react';
import SiteNav from './components/SiteNav';
import Hero from './components/Hero';
import PathHub from './components/PathHub';
import BuildVolume from './components/BuildVolume';
import GrowVolume from './components/GrowVolume';
import DesignBookSection from './components/DesignBookSection';
import ResumeSection from './components/ResumeSection';
import ContactForm from './components/ContactForm';
import TerminalFooter from './components/TerminalFooter';
import PageBackground from './components/PageBackground';
import SectionHeader from './components/SectionHeader';
import { Linkedin, Instagram, Mail, Github } from 'lucide-react';
import { CONTACT, OPEN_TO } from './data/portfolio';
import { usePortfolioPath } from './hooks/usePortfolioPath';

function App() {
  const { path, setPath, goToSection, scrollTarget } = usePortfolioPath();

  return (
    <div className="page-shell pb-20 xl:pb-0">
      <PageBackground />
      <SiteNav activePath={path} onSelectPath={setPath} onGoContact={() => goToSection('connect')} />

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
        {path === 'home' && (
          <>
            <Hero onSelectPath={setPath} onGoContact={() => goToSection('connect')} />
            <PathHub onSelectPath={setPath} onGoContact={() => goToSection('connect')} />
            <ResumeSection />
          </>
        )}

        {path === 'build' && (
          <BuildVolume onBack={() => setPath('home')} initialSection={scrollTarget} />
        )}

        {path === 'design' && (
          <DesignBookSection embedded onBack={() => setPath('home')} initialSection={scrollTarget} />
        )}

        {path === 'grow' && (
          <GrowVolume onBack={() => setPath('home')} initialSection={scrollTarget} />
        )}

        <section
          id="connect"
          className={`section-block max-w-2xl ${path !== 'home' ? 'volume-contact-compact' : ''}`}
        >
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
