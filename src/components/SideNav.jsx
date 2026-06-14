import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { CONTACT, PROFILE, JOB_SEEKER } from '../data/portfolio';
import { HOME_SECTIONS, PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';
import { DESIGN_BOOK_TABS } from '../data/designBook';

const SOCIAL = [
  { icon: Github, href: CONTACT.github, label: 'GitHub' },
  { icon: Linkedin, href: CONTACT.linkedin, label: 'LinkedIn' },
  { icon: Instagram, href: CONTACT.instagram, label: 'Instagram' },
  { icon: Mail, href: `mailto:${CONTACT.email}`, label: 'Email' },
];

function volumeSections(path) {
  if (path === 'build') return PORTFOLIO_PATHS.build.volume.tabs;
  if (path === 'grow') return PORTFOLIO_PATHS.grow.volume.tabs;
  if (path === 'design') return DESIGN_BOOK_TABS;
  return [];
}

const SideNav = ({ activePath, onSelectPath, goToSection, scrollTarget }) => {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    if (activePath !== 'home') return undefined;

    const ids = HOME_SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0, 0.2, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activePath]);

  const sections = activePath === 'home' ? HOME_SECTIONS : volumeSections(activePath);

  return (
    <aside className="bc-sidebar hidden lg:flex" aria-label="Site navigation">
      <div className="bc-sidebar-inner">
        <div className="bc-sidebar-brand">
          <button type="button" onClick={() => onSelectPath('home')} className="bc-sidebar-logo">
            SA
          </button>
          <div>
            <p className="bc-sidebar-name">{CONTACT.name}</p>
            <p className="bc-sidebar-title">{PROFILE.title}</p>
          </div>
        </div>

        <p className="bc-sidebar-status">
          <span className="bc-sidebar-status-dot" aria-hidden />
          {JOB_SEEKER.status} · {JOB_SEEKER.headline}
        </p>

        {activePath === 'home' ? (
          <nav className="bc-sidebar-nav" aria-label="Sections">
            {HOME_SECTIONS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => goToSection(s.hash)}
                className={`bc-nav-link ${activeSection === s.id ? 'bc-nav-link-active' : ''}`}
              >
                <span className="bc-nav-num">{String(i + 1).padStart(2, '0')}.</span>
                {s.label}
              </button>
            ))}
          </nav>
        ) : (
          <nav className="bc-sidebar-nav" aria-label="Volume sections">
            <button type="button" onClick={() => onSelectPath('home')} className="bc-nav-link">
              <span className="bc-nav-num">←</span> Back home
            </button>
            <p className="bc-nav-path-label">{PORTFOLIO_PATHS[activePath]?.label} path</p>
            {sections.map((s, i) => {
              const tabId = s.id;
              const isActive = scrollTarget === tabId;
              return (
                <button
                  key={tabId}
                  type="button"
                  onClick={() => onSelectPath(activePath, tabId)}
                  className={`bc-nav-link ${isActive ? 'bc-nav-link-active' : ''}`}
                >
                  <span className="bc-nav-num">{s.roman || String(i + 1).padStart(2, '0')}.</span>
                  {s.label}
                </button>
              );
            })}
          </nav>
        )}

        {activePath === 'home' && (
          <nav className="bc-sidebar-paths" aria-label="Deep dive paths">
            <p className="bc-nav-path-label">Explore paths</p>
            {PATH_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => onSelectPath(id)}
                className={`bc-path-chip bc-path-chip-${id}`}
              >
                {PORTFOLIO_PATHS[id].label}
              </button>
            ))}
          </nav>
        )}

        <div className="bc-sidebar-footer">
          <a href={`mailto:${CONTACT.email}`} className="bc-sidebar-email">
            {CONTACT.email}
          </a>
          <div className="bc-sidebar-social">
            {SOCIAL.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
