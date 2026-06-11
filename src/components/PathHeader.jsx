import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_PATHS } from '../data/paths';

const PathHeader = ({ path, onBack, onSection }) => {
  const meta = PORTFOLIO_PATHS[path];
  if (!meta || path === 'home') return null;
  const Icon = meta.icon;

  return (
    <div className={`path-header-bar path-header-${meta.accent}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8 md:py-10">
        <button type="button" onClick={onBack} className="path-back-btn">
          <ArrowLeft size={15} /> Back to paths
        </button>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-5">
          <div className="flex items-start gap-4">
            <span className={`path-header-icon path-header-icon-${meta.accent}`}>
              <Icon size={18} />
            </span>
            <div>
              <p className="pro-eyebrow">{meta.label} track</p>
              <h1 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mt-1">
                {meta.title}
              </h1>
              <p className="text-sm text-zinc-400 mt-2 max-w-xl leading-relaxed">{meta.tagline}</p>
            </div>
          </div>

          {meta.sections.length > 1 && (
            <nav className="path-subnav" aria-label={`${meta.label} sections`}>
              {meta.sections.map((s) => (
                <button key={s.id} type="button" onClick={() => onSection(s.id)} className="path-subnav-link">
                  {s.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export default PathHeader;
