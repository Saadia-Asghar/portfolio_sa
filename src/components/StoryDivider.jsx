import React from 'react';
import { motion } from 'framer-motion';
import { ZigzagStrip } from './ComicGraphics';

const StoryDivider = ({ act, label }) => (
  <div className="relative py-8 md:py-12 flex flex-col items-center justify-center overflow-hidden gap-4" aria-hidden>
    <ZigzagStrip className="max-w-4xl opacity-60" />
    <div className="absolute inset-0 flex items-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-spider-cyan/30 via-spider-magenta/30 to-transparent" />
    </div>
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="relative z-10 px-8 py-3 bg-spider-black/90 border-2 border-white/15 rounded-full font-display text-xs md:text-sm uppercase tracking-[0.2em] whitespace-nowrap shadow-[0_0_24px_rgba(0,243,255,0.15)]"
    >
      <span className="text-spider-magenta">{act}</span>
      <span className="mx-3 text-spider-yellow">★</span>
      <span className="story-divider-burst">{label}</span>
    </motion.span>
    <ZigzagStrip className="max-w-4xl opacity-60 rotate-180" />
  </div>
);

export default StoryDivider;
