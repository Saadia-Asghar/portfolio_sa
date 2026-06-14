import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';
import { DESIGN_BOOK_TABS } from '../data/designBook';
import { HERO_ROLES, JOB_SEEKER, PROFILE } from '../data/portfolio';

function pathSections(pathId) {
  if (pathId === 'design') {
    return DESIGN_BOOK_TABS.map((t) => ({
      id: t.id,
      label: t.label,
    }));
  }
  return PORTFOLIO_PATHS[pathId].volume.tabs.map((t) => ({
    id: t.id,
    label: t.label,
  }));
}

const IntroHero = ({ onSelectPath }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % HERO_ROLES.length);
    }, 2800);
    const cursorTimer = setInterval(() => setShowCursor((v) => !v), 530);
    return () => {
      clearInterval(roleTimer);
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <header className="folio-intro">
      <p className="folio-intro-eyebrow">{JOB_SEEKER.headline}</p>
      <h1 className="folio-intro-title">Saadia Asghar</h1>
      <p className="folio-intro-roles" aria-live="polite">
        <span className="folio-intro-role">{HERO_ROLES[roleIndex]}</span>
        <span className="folio-intro-cursor" aria-hidden>
          {showCursor ? '|' : ' '}
        </span>
      </p>
      <p className="folio-intro-tagline">{PROFILE.heroTagline}</p>
      <p className="folio-intro-status">
        <span className="folio-status-dot" aria-hidden />
        {JOB_SEEKER.status}
      </p>
      <div className="folio-intro-paths">
        {PATH_IDS.map((id) => {
          const p = PORTFOLIO_PATHS[id];
          const Icon = p.icon;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelectPath(id)}
              className={`folio-intro-path-btn folio-intro-path-${p.accent}`}
            >
              <Icon size={16} />
              {p.label}
              <ArrowRight size={14} />
            </button>
          );
        })}
      </div>
    </header>
  );
};

export default IntroHero;
