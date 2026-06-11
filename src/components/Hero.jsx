import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Code2, Palette, Megaphone, ArrowUpRight } from 'lucide-react';
import { CONTACT, PROFILE } from '../data/portfolio';
import { PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';
import DoodleCharacter from './DoodleCharacter';

const PATH_ICONS = { build: Code2, design: Palette, grow: Megaphone };

const Hero = ({ onSelectPath, onGoContact }) => (
  <section className="relative pt-28 pb-14 md:pt-32 md:pb-16">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="pro-eyebrow">{PROFILE.heroGreeting}</p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-[3.25rem] font-semibold tracking-tight text-white leading-[1.08] mt-3">
            Saadia Asghar
          </h1>

          <p className="mt-4 text-base md:text-lg text-zinc-300 font-medium leading-snug max-w-xl mx-auto lg:mx-0">
            {PROFILE.title}
          </p>

          <p className="mt-4 text-sm md:text-base text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {PROFILE.heroTagline}
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
            <span className="track-pill track-muted inline-flex items-center gap-1.5">
              <MapPin size={12} /> {CONTACT.location}
            </span>
          </div>

          <p className="pro-label-hand mt-10 mb-3">Choose a path</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PATH_IDS.map((id) => {
              const p = PORTFOLIO_PATHS[id];
              const Icon = PATH_ICONS[id];
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => onSelectPath(id)}
                  className={`hero-path-card hero-path-card-${p.accent}`}
                >
                  <span className="hero-path-card-icon">
                    <Icon size={17} />
                  </span>
                  <span className="hero-path-card-label">{p.label}</span>
                  <span className="hero-path-card-hint">{p.title}</span>
                  <ArrowUpRight size={14} className="hero-path-card-arrow" />
                </button>
              );
            })}
          </div>

          <button type="button" onClick={onGoContact} className="btn-ghost mt-6 text-sm">
            Contact directly
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <DoodleCharacter />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
