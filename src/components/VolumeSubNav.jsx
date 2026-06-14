import React from 'react';
import { PORTFOLIO_PATHS } from '../data/paths';
import { DESIGN_BOOK_TABS } from '../data/designBook';

function tabsForPath(pathId) {
  if (pathId === 'design') {
    return DESIGN_BOOK_TABS.map((t) => ({
      id: t.id,
      label: t.label,
      hash: t.id === 'cover' ? 'design' : t.id,
    }));
  }
  return PORTFOLIO_PATHS[pathId]?.volume?.tabs?.map((t) => ({
    id: t.id,
    label: t.label,
    hash: t.hash,
  }));
}

const VolumeSubNav = ({ activePath, scrollTarget, onSelectPath }) => {
  const tabs = tabsForPath(activePath);
  if (!tabs?.length) return null;

  const activeId =
    activePath === 'grow' && scrollTarget === 'grow-experience'
      ? 'experience'
      : activePath === 'grow' && scrollTarget === 'grow-resume'
        ? 'resume'
        : activePath === 'build' && scrollTarget === 'build-resume'
          ? 'resume'
          : scrollTarget || tabs[0].id;

  return (
    <nav className="folio-subnav" aria-label={`${PORTFOLIO_PATHS[activePath]?.label} sections`}>
      <div className="folio-subnav-inner">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onSelectPath(activePath, tab.id)}
            className={`folio-subnav-tab folio-subnav-tab-${PORTFOLIO_PATHS[activePath]?.accent} ${
              activeId === tab.id ? 'folio-subnav-tab-active' : ''
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default VolumeSubNav;
