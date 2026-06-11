import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_PATHS } from '../data/paths';

const VolumePathLayout = ({ path, onBack, children, embedded = true }) => {
  const meta = PORTFOLIO_PATHS[path];
  if (!meta) return null;
  const Icon = meta.icon;

  return (
    <section className={`volume-zone volume-zone-${meta.accent} scroll-mt-24 ${embedded ? 'volume-zone-embedded' : ''}`}>
      <div className="volume-zone-header">
        <div className="volume-zone-header-inner volume-zone-inner relative z-10">
          {onBack && (
            <button type="button" onClick={onBack} className="volume-back-btn">
              <ArrowLeft size={15} /> Back to paths
            </button>
          )}

          <div className="flex items-start gap-3 md:gap-4 volume-zone-header-row">
            <span className={`volume-header-icon volume-header-icon-${meta.accent}`}>
              <Icon size={18} />
            </span>
            <div>
              <p className="volume-eyebrow">{meta.label} track</p>
              <h1 className="volume-title font-display">{meta.title}</h1>
              <p className="volume-tagline">{meta.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="volume-zone-body volume-zone-inner relative z-10">{children}</div>

      <div className="book-cloud book-cloud-1" aria-hidden />
      <div className="book-cloud book-cloud-2" aria-hidden />
    </section>
  );
};

export default VolumePathLayout;
