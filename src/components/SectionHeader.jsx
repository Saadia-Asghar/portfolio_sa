import React from 'react';
import { motion } from 'framer-motion';

const ACCENT_TEXT = {
  build: 'text-accent-build',
  grow: 'text-accent-grow',
  design: 'text-accent-design',
  muted: 'text-zinc-500',
};

const SectionHeader = ({ index, title, subtitle, align = 'left', accent = 'muted' }) => {
  const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.header
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-2 mb-10 md:mb-12 ${alignClass}`}
    >
      {index && (
        <span className={`text-xs font-medium uppercase tracking-widest ${ACCENT_TEXT[accent] || ACCENT_TEXT.muted}`}>
          {index}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{title}</h2>
      <div className={`section-line ${align === 'center' ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className="text-sm text-zinc-500 leading-relaxed max-w-2xl mt-1">{subtitle}</p>
      )}
    </motion.header>
  );
};

export default SectionHeader;
