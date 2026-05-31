import React from 'react';
import { motion } from 'framer-motion';
import { MARQUEE_ITEMS } from '../data/portfolio';

const MarqueeTicker = () => (
  <div className="relative w-full overflow-hidden border-y border-white/10 bg-gradient-to-r from-black via-spider-black to-black py-3.5">
    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-spider-black to-transparent z-10 pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-spider-black to-transparent z-10 pointer-events-none" />

    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
    >
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
          <span className="font-mono text-xs md:text-sm text-gray-400 px-8 md:px-12 tracking-wider uppercase">
            {item}
          </span>
          <span className="text-spider-cyan/60 text-xs select-none" aria-hidden>◆</span>
        </span>
      ))}
    </motion.div>
  </div>
);

export default MarqueeTicker;
