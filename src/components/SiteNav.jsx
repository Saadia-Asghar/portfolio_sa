import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#community', label: 'Community' },
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
          scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="comic-sticker bg-spider-yellow text-black font-display text-lg md:text-xl tracking-widest px-3 py-1 hover:scale-105 transition-transform"
          >
            SAADIA<span className="text-spider-magenta">.</span>ASGHAR
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => navigate(link.href)}
                className="text-[11px] font-mono uppercase tracking-[0.2em] text-gray-400 hover:text-spider-cyan transition-colors"
              >
                {link.label}
              </button>
            ))}
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="comic-sticker bg-spider-cyan text-black flex items-center gap-2 px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest hover:scale-105 transition-transform"
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
            className="fixed inset-x-0 top-[60px] z-[199] lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6"
          >
            <nav className="flex flex-col gap-4">
              {LINKS.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => navigate(link.href)}
                  className="text-left text-sm font-mono uppercase tracking-widest text-gray-300 hover:text-spider-cyan py-2"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={CONTACT.resumePath}
                download="Saadia_Asghar_Resume.png"
                className="mt-2 inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-spider-cyan text-black font-tech font-black text-xs uppercase tracking-widest"
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
