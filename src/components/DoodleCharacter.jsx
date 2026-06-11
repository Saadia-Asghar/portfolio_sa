import React from 'react';
import { motion } from 'framer-motion';

/** Hand-drawn mascot — designer with tablet & stylus */
const DoodleCharacter = ({ className = '' }) => (
  <motion.div
    className={`doodle-character-wrap ${className}`}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div className="doodle-character-frame">
      <svg
        viewBox="0 0 320 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="doodle-character-svg"
        aria-label="Doodle mascot — Saadia the designer"
        role="img"
      >
        {/* floating doodles */}
        <motion.g
          animate={{ y: [0, -6, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path
            d="M40 60 Q55 45 70 58"
            stroke="#fbbf24"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="250" y="55" fill="#f472b6" fontSize="22" fontFamily="Caveat, cursive">
            ✦
          </text>
        </motion.g>

        <motion.g
          animate={{ rotate: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '280px 120px' }}
        >
          <path
            d="M265 100 L295 115 L270 125 Z"
            stroke="#38bdf8"
            strokeWidth="2.5"
            fill="none"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* hair bun */}
        <ellipse cx="160" cy="108" rx="52" ry="48" fill="#1e293b" stroke="#fafafa" strokeWidth="2.5" />
        <circle cx="198" cy="78" r="22" fill="#1e293b" stroke="#fafafa" strokeWidth="2.5" />
        <path
          d="M118 95 Q130 130 145 155"
          stroke="#fafafa"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />

        {/* face */}
        <ellipse cx="160" cy="125" rx="38" ry="42" fill="#fde68a" stroke="#fafafa" strokeWidth="2.5" />

        {/* eyes */}
        <ellipse cx="145" cy="122" rx="7" ry="9" fill="#1e293b" />
        <ellipse cx="175" cy="122" rx="7" ry="9" fill="#1e293b" />
        <circle cx="147" cy="119" r="2.5" fill="#fff" />
        <circle cx="177" cy="119" r="2.5" fill="#fff" />

        {/* smile */}
        <path
          d="M148 142 Q160 152 172 142"
          stroke="#1e293b"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />

        {/* blush */}
        <ellipse cx="132" cy="135" rx="8" ry="5" fill="#f472b6" opacity="0.35" />
        <ellipse cx="188" cy="135" rx="8" ry="5" fill="#f472b6" opacity="0.35" />

        {/* body — oversized hoodie */}
        <path
          d="M95 168 Q160 155 225 168 L240 290 Q160 310 80 290 Z"
          fill="#0c4a6e"
          stroke="#fafafa"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        {/* hoodie pocket doodle */}
        <path
          d="M130 220 Q160 235 190 220"
          stroke="#38bdf8"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />

        {/* arms */}
        <path
          d="M95 175 Q60 200 55 240"
          stroke="#fde68a"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <motion.path
          d="M225 175 Q270 195 275 230"
          stroke="#fde68a"
          strokeWidth="14"
          strokeLinecap="round"
          animate={{ d: ['M225 175 Q270 195 275 230', 'M225 175 Q275 185 280 215', 'M225 175 Q270 195 275 230'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* tablet */}
        <rect x="108" y="248" width="104" height="72" rx="8" fill="#111114" stroke="#fafafa" strokeWidth="2.5" />
        <rect x="116" y="256" width="88" height="52" rx="4" fill="#38bdf8" opacity="0.25" />
        <path d="M130 270 L150 290 L175 262" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="195" cy="268" r="6" fill="#f472b6" opacity="0.8" />

        {/* stylus in hand */}
        <motion.g
          animate={{ rotate: [-5, 8, -5] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '275px 230px' }}
        >
          <line x1="275" y1="230" x2="305" y2="200" stroke="#fafafa" strokeWidth="3" strokeLinecap="round" />
          <circle cx="305" cy="200" r="5" fill="#f472b6" stroke="#fafafa" strokeWidth="1.5" />
        </motion.g>

        {/* legs */}
        <path d="M125 290 L115 350" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
        <path d="M195 290 L205 350" stroke="#1e293b" strokeWidth="16" strokeLinecap="round" />
        <ellipse cx="115" cy="355" rx="18" ry="10" fill="#fafafa" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="205" cy="355" rx="18" ry="10" fill="#fafafa" stroke="#38bdf8" strokeWidth="2" />

        {/* speech bubble */}
        <motion.g
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '248px 175px' }}
        >
          <path
            d="M210 155 Q280 140 290 175 Q295 205 250 210 L235 225 L238 205 Q200 200 210 155 Z"
            fill="#fef9c3"
            stroke="#fafafa"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <text x="228" y="182" fill="#0c4a6e" fontSize="13" fontFamily="Caveat, cursive" fontWeight="700">
            let&apos;s
          </text>
          <text x="222" y="198" fill="#0c4a6e" fontSize="13" fontFamily="Caveat, cursive" fontWeight="700">
            design!
          </text>
        </motion.g>

        {/* ground scribble */}
        <path
          d="M60 365 Q160 378 260 365"
          stroke="#fafafa"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.25"
          strokeDasharray="6 8"
        />
      </svg>

      <span className="doodle-character-label">your friendly designer ✎</span>
    </div>
  </motion.div>
);

export default DoodleCharacter;
