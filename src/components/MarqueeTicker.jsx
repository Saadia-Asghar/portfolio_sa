import React from 'react';
import { motion } from 'framer-motion';
import { MARQUEE_ITEMS } from '../data/portfolio';

const MarqueeTicker = () => (
  <div className="marquee-bar">
    <motion.div
      className="flex whitespace-nowrap"
      animate={{ x: ['0%', '-50%'] }}
      transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
    >
      {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
        <span key={i} className="inline-flex items-center shrink-0 px-8 text-xs text-zinc-600 uppercase tracking-widest">
          {item}
          <span className="mx-8 text-zinc-700">·</span>
        </span>
      ))}
    </motion.div>
  </div>
);

export default MarqueeTicker;
