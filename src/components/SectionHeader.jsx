import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ index, title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`flex flex-col gap-2 mb-10 md:mb-12 ${alignClass}`}
    >
      {index && (
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.35em]">
          {index}
        </span>
      )}

      <h2 className="text-3xl md:text-4xl font-tech font-bold text-white tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="text-sm text-gray-500 font-tech max-w-xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
