import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { CONTACT, PROFILE, HERO_ROLES, JOB_SEEKER } from '../data/portfolio';
import PrismScene3D from './PrismScene3D';

const Hero = ({ onGoContact, onViewWork }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % HERO_ROLES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero-redesign relative min-h-[88vh] flex items-center pt-24 pb-16" aria-label="Introduction">
      <div className="hero-redesign-glow" aria-hidden />
      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
        <div className="hero-redesign-grid">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="hero-redesign-eyebrow">
              <span className="hero-status-pill">
                <span className="hero-status-dot" aria-hidden />
                {JOB_SEEKER.status}
              </span>
            </p>

            <h1 className="hero-redesign-name font-display">
              Saadia
              <br />
              <span className="hero-redesign-name-accent">Asghar</span>
            </h1>

            <p className="hero-redesign-role">
              I&apos;m a{' '}
              <span className="hero-role-rotate" aria-live="polite">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={HERO_ROLES[roleIndex]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-accent-build"
                  >
                    {HERO_ROLES[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <br className="hidden sm:block" />
              <span className="text-zinc-400"> building products that win hackathons & land with people.</span>
            </p>

            <p className="hero-redesign-sub">{PROFILE.heroTagline}</p>

            <div className="hero-redesign-meta">
              <span>
                <MapPin size={13} aria-hidden /> {CONTACT.location}
              </span>
              <span>GIKI Data Science &apos;28</span>
              <span>{JOB_SEEKER.headline}</span>
            </div>

            <div className="hero-redesign-cta">
              <button type="button" onClick={onViewWork} className="btn-primary gap-2">
                View my work <ArrowRight size={16} />
              </button>
              <button type="button" onClick={onGoContact} className="btn-secondary">
                Hire me
              </button>
              <a
                href={CONTACT.resumePath}
                download="Saadia_Asghar_Resume.png"
                className="btn-ghost gap-2"
              >
                <Download size={15} /> Résumé
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-redesign-visual"
          >
            <PrismScene3D className="hero-redesign-canvas" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
