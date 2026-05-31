import React from 'react';

const ComicBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    {/* Animated color orbs */}
    <div className="orb orb-cyan animate-orb-drift" style={{ top: '10%', left: '-5%', width: '40vw', height: '40vw' }} />
    <div className="orb orb-magenta animate-orb-drift-reverse" style={{ bottom: '5%', right: '-10%', width: '50vw', height: '50vw' }} />
    <div className="orb orb-purple animate-orb-pulse" style={{ top: '45%', left: '35%', width: '30vw', height: '30vw' }} />

    {/* Perspective grid */}
    <div className="comic-grid absolute inset-0 opacity-[0.035]" />

    {/* Halftone corners */}
    <div className="absolute top-0 right-0 w-48 h-48 halftone-corner rotate-180 opacity-30" />
    <div className="absolute bottom-0 left-0 w-64 h-64 halftone-corner opacity-20" />

    {/* Film grain */}
    <div className="film-grain absolute inset-0 opacity-[0.04]" />
  </div>
);

export default ComicBackground;
