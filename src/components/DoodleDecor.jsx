import React from 'react';

const SCRIBBLES = [
  { className: 'doodle-scribble doodle-scribble-1', d: 'M0 20 Q30 0 60 20 T120 18' },
  { className: 'doodle-scribble doodle-scribble-2', d: 'M0 15 C20 35 40 0 60 15 S100 30 120 10' },
  { className: 'doodle-scribble doodle-scribble-3', d: 'M0 25 Q40 5 80 25 Q60 45 20 30' },
];

const DoodleDecor = () => (
  <div className="doodle-decor-layer" aria-hidden>
    {SCRIBBLES.map((s, i) => (
      <svg key={i} className={s.className} viewBox="0 0 120 40" fill="none">
        <path d={s.d} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ))}

    <span className="doodle-float-star doodle-star-a">✺</span>
    <span className="doodle-float-star doodle-star-b">★</span>
    <span className="doodle-float-star doodle-star-c">✦</span>
    <span className="doodle-float-star doodle-star-d">◇</span>

    <svg className="doodle-corner doodle-corner-tl" viewBox="0 0 80 80" fill="none">
      <path d="M5 75 Q5 5 75 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    </svg>
    <svg className="doodle-corner doodle-corner-br" viewBox="0 0 80 80" fill="none">
      <path d="M75 5 Q75 75 5 75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.2" />
    </svg>
  </div>
);

export default DoodleDecor;
