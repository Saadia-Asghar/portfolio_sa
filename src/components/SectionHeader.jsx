import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ index, title, subtitle, accent = 'cyan', align = 'center' }) => {
  const accentColors = {
    cyan: { sticker: 'bg-spider-cyan text-black', glow: 'text-spider-cyan', line: 'from-spider-cyan' },
    magenta: { sticker: 'bg-spider-magenta text-white', glow: 'text-spider-magenta', line: 'from-spider-magenta' },
    yellow: { sticker: 'bg-spider-yellow text-black', glow: 'text-spider-yellow', line: 'from-spider-yellow' },
    purple: { sticker: 'bg-spider-purple text-white', glow: 'text-spider-purple', line: 'from-spider-purple' },
  };
  const c = accentColors[accent] || accentColors.cyan;
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-4 mb-14 md:mb-16 ${alignClass}`}
    >
      {index && (
        <span
          className={`comic-sticker ${c.sticker} text-[10px] md:text-xs font-black font-mono tracking-[0.3em] px-4 py-1.5 -rotate-2 shadow-lg`}
        >
          {index}
        </span>
      )}

      <div className="relative">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-accent italic tracking-tighter text-white leading-none">
          {title}
        </h2>
        <span
          className={`absolute -inset-1 ${c.glow} opacity-[0.12] blur-md font-accent italic text-4xl md:text-6xl lg:text-7xl tracking-tighter pointer-events-none select-none`}
          aria-hidden
        >
          {title}
        </span>
      </div>

      {subtitle && (
        <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-[0.35em] max-w-lg leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className={`h-1 w-24 md:w-32 bg-gradient-to-r ${c.line} via-spider-magenta to-transparent rounded-full`} />
    </motion.div>
  );
};

export default SectionHeader;
