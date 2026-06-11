import React from 'react';
import DoodleDecor from './DoodleDecor';

const PageBackground = () => (
  <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden>
    <div className="doodle-paper-grid" />
    <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-accent-build/6 blur-[120px]" />
    <div className="absolute -bottom-[15%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-accent-grow/5 blur-[120px]" />
    <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-accent-design/4 blur-[100px]" />
    <DoodleDecor />
  </div>
);

export default PageBackground;
