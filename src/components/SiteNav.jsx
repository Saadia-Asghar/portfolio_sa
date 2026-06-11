import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { CONTACT } from '../data/portfolio';
import { PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';

const SiteNav = ({ activePath, onSelectPath, onGoContact }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goHome = () => {
    setOpen(false);
    onSelectPath('home');
  };

  const pickPath = (id) => {
    setOpen(false);
    if (id === 'design') {
      onSelectPath('design', 'cover');
      return;
    }
    onSelectPath(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <button type="button" onClick={goHome} className="logo-text text-sm shrink-0">
            <span className="logo-mark" aria-hidden>◆</span> Saadia Asghar
          </button>

          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full border border-white/10 bg-surface/60">
            <button
              type="button"
              onClick={goHome}
              className={`path-nav-pill ${activePath === 'home' ? 'path-nav-pill-active' : ''}`}
            >
              Home
            </button>
            {PATH_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => pickPath(id)}
                className={`path-nav-pill path-nav-pill-${PORTFOLIO_PATHS[id].accent} ${
                  activePath === id ? 'path-nav-pill-active' : ''
                }`}
              >
                {PORTFOLIO_PATHS[id].label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button type="button" onClick={onGoContact} className="nav-link">
              Contact
            </button>
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="btn-secondary !py-2 !px-4 text-xs inline-flex items-center gap-2"
            >
              <Download size={14} /> Resume
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="md:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-x-0 top-[60px] z-40 md:hidden bg-canvas/95 backdrop-blur-md border-b border-white/10 px-6 py-5">
          <nav className="flex flex-col gap-1">
            <button type="button" onClick={goHome} className="text-left py-3 text-sm text-zinc-300 border-b border-white/5">
              Home
            </button>
            {PATH_IDS.map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => pickPath(id)}
                className={`text-left py-3 text-sm border-b border-white/5 ${
                  activePath === id ? 'text-white font-semibold' : 'text-zinc-300'
                }`}
              >
                {PORTFOLIO_PATHS[id].label} — {PORTFOLIO_PATHS[id].title}
              </button>
            ))}
            <button type="button" onClick={() => { setOpen(false); onGoContact(); }} className="text-left py-3 text-sm text-zinc-300">
              Contact
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default SiteNav;
