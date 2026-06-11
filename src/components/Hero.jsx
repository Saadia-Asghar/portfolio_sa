import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';
import { CONTACT, PROFILE } from '../data/portfolio';
import DoodleCharacter from './DoodleCharacter';

const Hero = () => (
  <section className="relative pt-28 pb-16 md:pt-32 md:pb-20">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <p className="doodle-hand text-lg text-accent-design mb-3">{PROFILE.heroGreeting}</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05] doodle-title">
            Saadia Asghar
          </h1>

          <p className="mt-4 text-lg text-zinc-400 font-medium doodle-subtitle">{PROFILE.title}</p>

          <p className="mt-5 text-base text-zinc-500 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {PROFILE.heroTagline}
          </p>

          <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-2">
            {['Build', 'Grow', 'Design'].map((track) => (
              <span key={track} className={`track-pill track-${track.toLowerCase()}`}>
                {track}
              </span>
            ))}
            <span className="track-pill track-muted inline-flex items-center gap-1">
              <MapPin size={12} /> {CONTACT.location}
            </span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <a href="#connect" className="btn-primary">
              Contact me
            </a>
            <a href="#projects" className="btn-secondary inline-flex items-center justify-center gap-2">
              View my work <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <DoodleCharacter />
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
