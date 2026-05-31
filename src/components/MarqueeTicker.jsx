import React from 'react';
import { motion } from 'framer-motion';
import { MARQUEE_ITEMS } from '../data/portfolio';

const MarqueeTicker = () => (
  <div className="relative w-full overflow-hidden border-y border-white/10 bg-black/60 backdrop-blur-sm py-3">
    <div className="absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-spider-black to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-spider-black to-transparent z-10 pointer-events-none" />

    <motion.div
      className="flex whitespace-nowrap gap-0"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
    >
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
          <span className="font-accent text-sm md:text-base text-white/90 px-6 md:px-10 tracking-wide">
            {item}
          </span>
          <span className="text-spider-magenta font-black text-lg select-none" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </motion.div>
  </div>
);

export default MarqueeTicker;
