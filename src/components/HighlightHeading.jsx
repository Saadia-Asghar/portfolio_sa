import React from 'react';
import { motion } from 'framer-motion';

const TONES = ['accent', 'build', 'design', 'grow', 'rose', 'lemon'];
const HighlightHeading = ({
  as: Tag = 'h2',
  children,
  tone = 'accent',
  className = '',
  block = true,
  id,
}) => {
  const safeTone = TONES.includes(tone) ? tone : 'accent';

  return (
    <Tag id={id} className={`hl-heading ${block ? 'hl-heading-block' : ''} ${className}`.trim()}>
      <span className="hl-heading-inner">
        <span className="hl-heading-text">{children}</span>
        <motion.span
          className={`hl-stroke hl-stroke-${safeTone}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-8%' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          aria-hidden
        />
      </span>
    </Tag>
  );
};

export default HighlightHeading;
