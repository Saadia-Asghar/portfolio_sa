import React from 'react';
import { StarField } from './ComicGraphics';

const ComicBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <div className="orb orb-cyan animate-orb-drift" style={{ top: '8%', left: '-8%', width: '42vw', height: '42vw' }} />
    <div className="orb orb-magenta animate-orb-drift-reverse" style={{ bottom: '0%', right: '-12%', width: '55vw', height: '55vw' }} />
    <div className="orb orb-purple animate-orb-pulse" style={{ top: '40%', left: '30%', width: '32vw', height: '32vw' }} />
    <div className="orb orb-orange animate-orb-drift" style={{ top: '65%', left: '-5%', width: '28vw', height: '28vw', animationDelay: '-4s' }} />
    <div className="orb orb-lime animate-orb-drift-reverse" style={{ top: '15%', right: '10%', width: '22vw', height: '22vw', animationDelay: '-7s' }} />
    <div className="orb orb-pink animate-orb-pulse" style={{ bottom: '25%', right: '25%', width: '20vw', height: '20vw', animationDelay: '-3s' }} />

    <div className="comic-grid absolute inset-0 opacity-[0.05]" />
    <div className="comic-dots-bg absolute inset-0 opacity-[0.04]" />

    <StarField count={50} />

    <div className="absolute top-0 right-0 w-56 h-56 halftone-corner rotate-180 opacity-40" />
    <div className="absolute bottom-0 left-0 w-72 h-72 halftone-corner opacity-30" />
    <div className="absolute top-1/3 left-0 w-40 h-40 halftone-corner opacity-20 rotate-90" />

    <div className="film-grain absolute inset-0 opacity-[0.05]" />

    <svg className="absolute top-[12%] right-[8%] w-24 h-24 opacity-[0.12] animate-star-spin" viewBox="0 0 100 100" aria-hidden>
      <polygon points="50,2 58,32 88,18 68,42 98,50 68,58 88,82 58,68 50,98 42,68 12,82 32,58 2,50 32,42 12,18 42,32" fill="#f9ff00" />
    </svg>
    <svg className="absolute bottom-[20%] left-[6%] w-16 h-16 opacity-[0.15] animate-color-pulse" viewBox="0 0 100 100" aria-hidden>
      <polygon points="50,2 58,32 88,18 68,42 98,50 68,58 88,82 58,68 50,98 42,68 12,82 32,58 2,50 32,42 12,18 42,32" fill="#ff0055" />
    </svg>
  </div>
);

export default ComicBackground;
