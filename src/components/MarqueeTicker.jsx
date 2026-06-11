import React from 'react';
import { motion } from 'framer-motion';
import { MARQUEE_ITEMS } from '../data/portfolio';

const ITEM_COLORS = [
  'text-spider-cyan',
  'text-spider-magenta',
  'text-spider-yellow',
  'text-spider-lime',
  'text-spider-purple',
  'text-spider-orange',
  'text-spider-pink',
];

const SEP_COLORS = ['text-spider-cyan/80', 'text-spider-magenta/80', 'text-spider-yellow/80'];

const MarqueeTicker = () => (
  <div className="relative w-full overflow-hidden border-y-2 border-white/10 bg-gradient-to-r from-spider-magenta/10 via-black to-spider-cyan/10 py-4">
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-spider-black to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-spider-black to-transparent z-10 pointer-events-none" />

    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
    >
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
          <span
            className={`font-display text-sm md:text-base px-8 md:px-10 tracking-wider uppercase ${ITEM_COLORS[i % ITEM_COLORS.length]} animate-marquee-glow`}
          >
            {item}
          </span>
          <span className={`${SEP_COLORS[i % SEP_COLORS.length]} text-lg select-none font-display`} aria-hidden>
            ★
          </span>
        </span>
      ))}
    </motion.div>
  </div>
);

export default MarqueeTicker;
