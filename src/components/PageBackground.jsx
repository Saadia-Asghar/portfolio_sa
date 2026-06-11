import React from 'react';

const PageBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-build/8 blur-[120px]" />
    <div className="absolute -bottom-[15%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-accent-grow/6 blur-[120px]" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_50%)]" />
  </div>
);

export default PageBackground;
