import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Work' },
  { href: '#design', label: 'Design' },
  { href: '#marketing', label: 'Marketing' },
  { href: '#connect', label: 'Contact' },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = (href) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-canvas/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="logo-text doodle-logo text-sm"
          >
            <span className="doodle-logo-mark">✎</span> Saadia Asghar
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => (
              <button key={link.href} type="button" onClick={() => navigate(link.href)} className="nav-link">
                {link.label}
              </button>
            ))}
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="btn-secondary !py-2 !px-4 text-xs inline-flex items-center gap-2"
            >
              <Download size={14} /> Resume
            </a>
          </nav>

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
            {LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigate(link.href)}
                className="text-left py-3 text-sm text-zinc-300 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default SiteNav;
