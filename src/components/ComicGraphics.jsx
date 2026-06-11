import React from 'react';
import { motion } from 'framer-motion';

const COLORS = {
  cyan: '#00f3ff',
  magenta: '#ff0055',
  yellow: '#f9ff00',
  purple: '#7a00ff',
  orange: '#ff6b00',
  lime: '#b8ff00',
  pink: '#ff2d95',
};

export const ComicBurst = ({ color = 'yellow', className = '', size = 120 }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={`pointer-events-none ${className}`}
    aria-hidden
  >
    <polygon
      points="50,2 58,32 88,18 68,42 98,50 68,58 88,82 58,68 50,98 42,68 12,82 32,58 2,50 32,42 12,18 42,32"
      fill={COLORS[color] || COLORS.yellow}
      opacity="0.85"
    />
    <polygon
      points="50,12 56,34 76,24 62,44 84,50 62,56 76,76 56,66 50,88 44,66 24,76 38,56 16,50 38,44 24,24 44,34"
      fill="#050505"
      opacity="0.92"
    />
  </svg>
);

export const StarBurst = ({ className = '', size = 48, color = 'cyan' }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} aria-hidden>
    <path
      d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z"
      fill={COLORS[color] || COLORS.cyan}
    />
  </svg>
);

export const ZigzagStrip = ({ className = '' }) => (
  <svg viewBox="0 0 200 12" className={`w-full h-3 ${className}`} preserveAspectRatio="none" aria-hidden>
    <path
      d="M0,6 L10,0 L20,6 L30,0 L40,6 L50,0 L60,6 L70,0 L80,6 L90,0 L100,6 L110,0 L120,6 L130,0 L140,6 L150,0 L160,6 L170,0 L180,6 L190,0 L200,6 L200,12 L0,12 Z"
      fill="url(#zigzag-grad)"
    />
    <defs>
      <linearGradient id="zigzag-grad" x1="0" y1="0" x2="200" y2="0">
        <stop offset="0%" stopColor="#00f3ff" />
        <stop offset="33%" stopColor="#ff0055" />
        <stop offset="66%" stopColor="#f9ff00" />
        <stop offset="100%" stopColor="#7a00ff" />
      </linearGradient>
    </defs>
  </svg>
);

export const SpeedLines = ({ className = '', flip = false }) => (
  <svg
    viewBox="0 0 120 80"
    className={`opacity-20 ${flip ? 'scale-x-[-1]' : ''} ${className}`}
    aria-hidden
  >
    {[0, 12, 24, 36, 48, 60].map((y, i) => (
      <line
        key={y}
        x1="0"
        y1={y + 10}
        x2={100 - i * 8}
        y2={y + 10}
        stroke={i % 2 === 0 ? '#00f3ff' : '#ff0055'}
        strokeWidth="2"
      />
    ))}
  </svg>
);

const FLOATING_STICKERS = [
  { text: 'POW!', bg: 'bg-spider-yellow text-black', rotate: -12, top: '18%', left: '8%', delay: 0 },
  { text: '✦ BUILD', bg: 'bg-spider-cyan text-black', rotate: 8, top: '28%', right: '6%', delay: 0.5 },
  { text: 'ZAP!', bg: 'bg-spider-magenta text-white', rotate: -6, bottom: '32%', left: '5%', delay: 1 },
  { text: "GIKI '28", bg: 'bg-spider-purple text-white', rotate: 10, bottom: '22%', right: '8%', delay: 1.5 },
  { text: '★ DESIGN', bg: 'bg-spider-lime text-black', rotate: -14, top: '42%', left: '3%', delay: 0.8 },
  { text: 'GROW!', bg: 'bg-spider-orange text-black', rotate: 6, top: '55%', right: '4%', delay: 1.2 },
];

export const FloatingStickers = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block" aria-hidden>
    {FLOATING_STICKERS.map((s) => (
      <motion.span
        key={s.text}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: s.delay + 0.8, duration: 0.5 }}
        className={`floating-sticker ${s.bg}`}
        style={{
          top: s.top,
          left: s.left,
          right: s.right,
          bottom: s.bottom,
          '--sticker-rotate': `${s.rotate}deg`,
        }}
      >
        {s.text}
      </motion.span>
    ))}
  </div>
);

const SECTION_DECOR = {
  about: [
    { type: 'burst', color: 'cyan', className: 'absolute -top-8 -right-4 opacity-40', size: 90 },
    { type: 'star', color: 'magenta', className: 'absolute bottom-4 -left-2 animate-star-spin', size: 36 },
  ],
  design: [
    { type: 'burst', color: 'yellow', className: 'absolute top-0 left-1/4 opacity-30', size: 100 },
    { type: 'star', color: 'yellow', className: 'absolute bottom-8 right-8 opacity-60', size: 28 },
  ],
  marketing: [
    { type: 'burst', color: 'magenta', className: 'absolute -top-6 right-12 opacity-35', size: 80 },
    { type: 'star', color: 'pink', className: 'absolute bottom-12 left-6', size: 32 },
  ],
  hackathons: [
    { type: 'burst', color: 'orange', className: 'absolute top-4 right-4 opacity-40', size: 70 },
    { type: 'star', color: 'lime', className: 'absolute bottom-6 left-1/3', size: 40 },
  ],
  default: [
    { type: 'star', color: 'cyan', className: 'absolute top-6 right-6 opacity-50', size: 24 },
  ],
};

export const SectionGraphics = ({ variant = 'default' }) => {
  const items = SECTION_DECOR[variant] || SECTION_DECOR.default;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {items.map((item, i) =>
        item.type === 'burst' ? (
          <ComicBurst key={i} color={item.color} className={item.className} size={item.size} />
        ) : (
          <StarBurst key={i} color={item.color} className={item.className} size={item.size} />
        )
      )}
      <SpeedLines className="absolute top-1/2 -left-8 w-32 h-20" />
      <SpeedLines className="absolute bottom-1/4 -right-8 w-32 h-20" flip />
    </div>
  );
};

export const StarField = ({ count = 40 }) => {
  const stars = React.useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 3 + 1,
        color: ['cyan', 'magenta', 'yellow', 'purple', 'lime'][i % 5],
        delay: Math.random() * 4,
      })),
    [count]
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <span
          key={s.id}
          className={`star-dot star-dot-${s.color}`}
          style={{
            left: s.left,
            top: s.top,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ComicBurst;
