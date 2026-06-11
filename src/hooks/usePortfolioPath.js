import { useState, useEffect, useCallback } from 'react';
import { PATH_IDS, HASH_ROUTES } from '../data/paths';

function parseHash() {
  const raw = window.location.hash.replace(/^#/, '').toLowerCase();
  if (!raw) return { path: 'home', scroll: null };
  if (PATH_IDS.includes(raw)) return { path: raw, scroll: null };
  const route = HASH_ROUTES[raw];
  if (route) return route;
  return { path: 'home', scroll: raw || null };
}

export function usePortfolioPath() {
  const [path, setPathState] = useState(() => parseHash().path);

  const scrollToId = useCallback((id) => {
    if (!id) return;
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const setPath = useCallback(
    (nextPath, scrollTarget = null) => {
      const valid = nextPath === 'home' || PATH_IDS.includes(nextPath);
      if (!valid) return;

      if (nextPath === 'home') {
        window.history.pushState(null, '', window.location.pathname);
      } else {
        window.location.hash = nextPath;
      }

      setPathState(nextPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      if (scrollTarget) {
        setTimeout(() => scrollToId(scrollTarget), 320);
      }
    },
    [scrollToId]
  );

  const goToSection = useCallback(
    (sectionId) => {
      window.location.hash = sectionId;
      scrollToId(sectionId);
    },
    [scrollToId]
  );

  useEffect(() => {
    const onHashChange = () => {
      const { path: p, scroll } = parseHash();
      setPathState(p);
      if (scroll) setTimeout(() => scrollToId(scroll), 100);
    };

    const { path: initial, scroll } = parseHash();
    setPathState(initial);
    if (scroll) setTimeout(() => scrollToId(scroll), 400);

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [scrollToId]);

  return { path, setPath, goToSection };
}
