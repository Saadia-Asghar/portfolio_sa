import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail } from 'lucide-react';
import { CONTACT } from '../data/portfolio';
import { PATH_IDS, PORTFOLIO_PATHS, HOME_SECTIONS } from '../data/paths';
import VolumeSubNav from './VolumeSubNav';

const SiteNav = ({ activePath, onSelectPath, goToSection, onGoContact, scrollTarget }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('paths');
  const onVolume = activePath !== 'home';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
      { rootMargin: '-40% 0px -45% 0px', threshold: [0, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activePath]);

  const goHome = () => {
    setOpen(false);
    onSelectPath('home');
  };

  const pickPath = (id) => {
    setOpen(false);
    onSelectPath(id);
  };

  const pickSection = (hash) => {
    setOpen(false);
    goToSection(hash);
  };

  const contact = () => {
    setOpen(false);
    if (activePath === 'home') onGoContact?.();
    else onSelectPath('home', 'connect');
  };

  return (
    <>
      <header
        className={`folio-nav ${scrolled || onVolume ? 'folio-nav-scrolled' : ''} ${onVolume ? 'folio-nav-volume' : ''}`}
      >
        <div className="folio-nav-inner">
          <button type="button" onClick={goHome} className="folio-nav-logo">
            Saadia Asghar
          </button>

          <nav className="folio-nav-links" aria-label="Primary">
            {activePath === 'home' ? (
              HOME_SECTIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => pickSection(s.hash)}
                  className={`folio-nav-link ${activeSection === s.id ? 'folio-nav-link-active' : ''}`}
                >
                  {s.label}
                </button>
              ))
            ) : (
              <button type="button" onClick={goHome} className="folio-nav-link">
                Home
              </button>
            )}

            <span className="folio-nav-divider" aria-hidden />

            {PATH_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => pickPath(id)}
                className={`folio-nav-link folio-nav-path folio-nav-path-${PORTFOLIO_PATHS[id].accent} ${
                  activePath === id ? 'folio-nav-link-active' : ''
                }`}
              >
                {PORTFOLIO_PATHS[id].label}
              </button>
            ))}
          </nav>

          <div className="folio-nav-actions">
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="folio-btn-ghost hidden sm:inline-flex !py-2 !px-3 !text-xs"
            >
              <Download size={14} /> Résumé
            </a>
            <button type="button" onClick={contact} className="folio-btn-primary !py-2 !px-3 !text-xs">
              <Mail size={14} /> Hire me
            </button>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="folio-nav-menu-btn"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {onVolume && (
        <VolumeSubNav activePath={activePath} scrollTarget={scrollTarget} onSelectPath={onSelectPath} />
      )}

      {open && (
        <div className="folio-mobile-menu md:hidden">
          <button type="button" onClick={goHome}>
            Home
          </button>
          {HOME_SECTIONS.map((s) => (
            <button key={s.id} type="button" onClick={() => pickSection(s.hash)}>
              {s.label}
            </button>
          ))}
          <p className="folio-mobile-label">Paths</p>
          {PATH_IDS.map((id) => (
            <button key={id} type="button" onClick={() => pickPath(id)}>
              {PORTFOLIO_PATHS[id].label}
            </button>
          ))}
          <button type="button" onClick={contact}>
            Contact
          </button>
        </div>
      )}
    </>
  );
};

export default SiteNav;
