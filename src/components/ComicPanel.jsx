import React from 'react';

const ComicPanel = ({ children, className = '', accent = 'cyan', tilt = 0, stamp }) => {
  const accents = {
    cyan: 'comic-panel-cyan',
    magenta: 'comic-panel-magenta',
    yellow: 'comic-panel-yellow',
    purple: 'comic-panel-purple',
  };

  return (
    <div
      className={`comic-panel ${accents[accent] || accents.cyan} ${className}`}
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      {stamp && (
        <span className="comic-index-stamp" aria-hidden>
          {stamp}
        </span>
      )}
      <div className="comic-panel-inner">{children}</div>
    </div>
  );
};

export default ComicPanel;
