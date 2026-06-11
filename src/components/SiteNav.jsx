import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const PRIMARY_LINKS = [
  { href: '#projects', label: 'My Work' },
  { href: '#about', label: 'About' },
  { href: '#connect', label: 'Contact' },
];

const MORE_LINKS = [
  { href: '#design', label: 'Design' },
  { href: '#marketing', label: 'Marketing' },
  { href: '#hackathons', label: 'Hackathons' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#resume', label: 'Resume' },
];

const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
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
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ${
          scrolled ? 'bg-black/85 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg tracking-wide logo-text hover:opacity-80 transition-opacity"
          >
            SAADIA
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {PRIMARY_LINKS.map((link) => (
              <button key={link.href} type="button" onClick={() => navigate(link.href)} className="nav-link">
                {link.label}
              </button>
            ))}
            <div className="relative group">
              <button type="button" className="nav-link">More</button>
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-black/95 border border-white/10 rounded-xl py-2 min-w-[160px] shadow-xl">
                  {MORE_LINKS.map((link) => (
                    <button
                      key={link.href}
                      type="button"
                      onClick={() => navigate(link.href)}
                      className="block w-full text-left px-4 py-2 text-[11px] font-mono uppercase tracking-wider text-gray-400 hover:text-spider-cyan hover:bg-white/5"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="flex items-center gap-2 px-4 py-2 rounded-lg btn-primary text-[10px] !py-2 !px-4"
            >
              <Download size={14} /> Resume
            </a>
          </nav>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 top-[60px] z-[199] lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 max-h-[80vh] overflow-y-auto"
          >
            <nav className="flex flex-col gap-1">
              {[...PRIMARY_LINKS, ...MORE_LINKS].map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => navigate(link.href)}
                  className="text-left text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-spider-cyan py-3 border-b border-white/5"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={CONTACT.resumePath}
                download="Saadia_Asghar_Resume.png"
                className="mt-4 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-spider-cyan text-black font-tech font-black text-xs uppercase tracking-widest"
              >
                <Download size={16} /> Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SiteNav;
