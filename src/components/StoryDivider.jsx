import React from 'react';
import { motion } from 'framer-motion';

const StoryDivider = ({ act, label }) => (
  <div className="relative py-10 md:py-14 flex items-center justify-center overflow-hidden" aria-hidden>
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </div>
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative z-10 px-6 py-2 bg-spider-black border border-white/10 rounded-full font-mono text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-gray-400 whitespace-nowrap"
    >
      <span className="text-spider-magenta font-bold">{act}</span>
      <span className="mx-3 text-white/20">·</span>
      <span className="text-spider-cyan">{label}</span>
    </motion.span>
  </div>
);

export default StoryDivider;
