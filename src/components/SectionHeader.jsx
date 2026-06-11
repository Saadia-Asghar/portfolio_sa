import React from 'react';
import { motion } from 'framer-motion';
import { StarBurst } from './ComicGraphics';

const ACCENT_GLOW = {
  cyan: 'text-spider-cyan',
  magenta: 'text-spider-magenta',
  yellow: 'text-spider-yellow',
  purple: 'text-spider-purple',
  orange: 'text-spider-orange',
  lime: 'text-spider-lime',
};

const SectionHeader = ({ index, title, subtitle, align = 'center', accent = 'cyan', display = true }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';
  const accentClass = ACCENT_GLOW[accent] || ACCENT_GLOW.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative flex flex-col gap-2 mb-10 md:mb-12 ${alignClass}`}
    >
      {index && (
        <span className={`text-[10px] font-mono uppercase tracking-[0.35em] ${accentClass}`}>
          ✦ {index}
        </span>
      )}

      <div className={`flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        {align === 'left' && <StarBurst color={accent} size={20} className="opacity-70 shrink-0 hidden sm:block" />}
        <h2
          className={`text-3xl md:text-4xl lg:text-[2.85rem] font-bold text-white tracking-tight ${
            display ? 'section-header-display uppercase' : 'font-tech'
          }`}
        >
          {title}
        </h2>
        {align === 'center' && <StarBurst color={accent} size={20} className="opacity-70 shrink-0 hidden sm:block" />}
      </div>

      <div className={`section-title-accent ${align === 'center' ? 'mx-auto' : ''}`} />

      {subtitle && (
        <p className="text-sm text-gray-400 font-tech max-w-xl leading-relaxed mt-1">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
