import { useState, useEffect, useCallback } from 'react';
import { PATH_IDS, HASH_ROUTES } from '../data/paths';

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '').toLowerCase();
  if (!raw) return { path: 'home', scroll: null };
  if (PATH_IDS.includes(raw)) return { path: raw, scroll: raw === 'design' ? 'cover' : null };
  const route = HASH_ROUTES[raw];
  if (route) return route;
  return { path: 'home', scroll: raw || null };
}

export function usePortfolioPath() {
  const [path, setPathState] = useState(() => parseHash().path);
  const [scrollTarget, setScrollTarget] = useState(() => parseHash().scroll);

  const scrollToId = useCallback((id) => {
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const setPath = useCallback(
    (nextPath, section = null) => {
      const valid = nextPath === 'home' || PATH_IDS.includes(nextPath);
      if (!valid) return;

      const tab =
        section ??
        (nextPath === 'design' ? 'cover' : null);

      if (nextPath === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        const hash = nextPath === 'design' && tab === 'cover' ? 'design' : tab || nextPath;
        const nextHash = `#${hash}`;
        if (window.location.hash !== nextHash) {
          window.location.hash = hash;
        }
      }

      setPathState(nextPath);
      setScrollTarget(tab);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (section && nextPath === 'home') {
        setTimeout(() => scrollToId(section), 320);
      }
    },
    [scrollToId]
  );

  const goToSection = useCallback(
    (sectionId) => {
      const route = HASH_ROUTES[sectionId];
      if (route) {
        setPathState(route.path);
        setScrollTarget(route.scroll);
        window.location.hash = sectionId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      window.location.hash = sectionId;
      scrollToId(sectionId);
    },
    [scrollToId]
  );

  useEffect(() => {
    const syncFromHash = () => {
      const { path: p, scroll } = parseHash();
      setPathState(p);
      setScrollTarget(scroll);
      if (scroll && p === 'home') setTimeout(() => scrollToId(scroll), 100);
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
