import { useState, useEffect, useCallback } from 'react';
import { PATH_IDS, PORTFOLIO_PATHS, resolveHash, hashForPath } from '../data/paths';

function defaultScrollForPath(nextPath) {
  if (nextPath === 'design') return 'cover';
  if (nextPath === 'build' || nextPath === 'grow') {
    return PORTFOLIO_PATHS[nextPath]?.volume?.tabs?.[0]?.id ?? null;
  }
  return null;
}

export function usePortfolioPath() {
  const [path, setPathState] = useState(() => resolveHash(window.location.hash).path);
  const [scrollTarget, setScrollTarget] = useState(() => resolveHash(window.location.hash).scroll);

  const scrollToId = useCallback((id) => {
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const applyRoute = useCallback(
    (nextPath, section = null, { scrollTop = true } = {}) => {
      const valid = nextPath === 'home' || PATH_IDS.includes(nextPath);
      if (!valid) return;

      const tab = section ?? defaultScrollForPath(nextPath);
      const hash = hashForPath(nextPath, tab);
      const base = window.location.pathname + window.location.search;
      const nextUrl = hash ? `${base}#${hash}` : base;

      if (window.location.pathname + window.location.search + window.location.hash !== nextUrl) {
        window.history.pushState(null, '', nextUrl);
      }

      setPathState(nextPath);
      setScrollTarget(tab);

      if (scrollTop) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      if (nextPath === 'home' && tab) {
        setTimeout(() => scrollToId(tab), scrollTop ? 320 : 80);
      }
    },
    [scrollToId],
  );

  const setPath = useCallback(
    (nextPath, section = null) => {
      applyRoute(nextPath, section, { scrollTop: true });
    },
    [applyRoute],
  );

  const goToSection = useCallback(
    (sectionId) => {
      const route = resolveHash(sectionId);
      applyRoute(route.path, route.scroll, { scrollTop: route.path !== 'home' });
    },
    [applyRoute],
  );

  useEffect(() => {
    const syncFromHash = () => {
      const { path: p, scroll } = resolveHash(window.location.hash);
      setPathState(p);
      setScrollTarget(scroll);
      if (scroll && p === 'home') {
        setTimeout(() => scrollToId(scroll), 120);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    window.addEventListener('popstate', syncFromHash);
    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      window.removeEventListener('popstate', syncFromHash);
    };
  }, [scrollToId]);

  return { path, setPath, goToSection, scrollTarget };
}
