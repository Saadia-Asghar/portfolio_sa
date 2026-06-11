import React from 'react';

const ACCENT_BORDER = {
  default: 'border-white/10',
  build: 'border-accent-build/25',
  grow: 'border-accent-grow/25',
  design: 'border-accent-design/25',
};

const Card = ({ children, className = '', accent = 'default', padding = true }) => (
  <div
    className={`surface-card ${ACCENT_BORDER[accent] || ACCENT_BORDER.default} ${
      padding ? 'p-5 md:p-6' : ''
    } ${className}`}
  >
    {children}
  </div>
);

export default Card;
