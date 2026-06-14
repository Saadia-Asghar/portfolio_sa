import { PORTFOLIO_PATHS, PATH_IDS } from './paths';
import { DESIGN_BOOK_TABS } from './designBook';
import { ALL_PROJECTS } from './portfolio';

export const POPULAR_QUERIES = [
  'ambassador',
  'devsinc',
  'giki connect',
  'clustering',
  'product design',
  'hackathons',
  'marketing',
  'resume',
  'vyrothon',
  'contact',
];

export function buildSearchIndex() {
  const items = [];

  PATH_IDS.forEach((pathId) => {
    const meta = PORTFOLIO_PATHS[pathId];

    items.push({
      id: `${pathId}-dept`,
      title: meta.title,
      dept: meta.label,
      deptId: pathId,
      path: pathId,
      section: pathId === 'design' ? 'cover' : meta.volume?.tabs?.[0]?.id,
      keywords: [meta.label, meta.title, meta.recruiter, meta.tagline, ...(meta.proof || [])]
        .join(' ')
        .toLowerCase(),
      snippet: meta.tagline,
    });

    if (pathId === 'design') {
      DESIGN_BOOK_TABS.forEach((tab) => {
        items.push({
          id: `design-${tab.id}`,
          title: tab.label,
          dept: 'Design',
          deptId: 'design',
          path: 'design',
          section: tab.id,
          keywords: `design ${tab.label} figma product visual`.toLowerCase(),
          snippet: `${tab.label} — from the Design department.`,
        });
      });
    } else {
      meta.volume.tabs.forEach((tab) => {
        items.push({
          id: `${pathId}-${tab.id}`,
          title: tab.title || tab.label,
          dept: meta.label,
          deptId: pathId,
          path: pathId,
          section: tab.id,
          keywords: [meta.label, tab.label, tab.title, tab.subtitle].join(' ').toLowerCase(),
          snippet: tab.subtitle,
        });
      });
    }
  });

  items.push(
    {
      id: 'home-ambassadors',
      title: 'Campus ambassadorships',
      dept: 'Index',
      deptId: 'home',
      path: 'home',
      section: 'ambassadors',
      keywords: 'ambassador devsinc atomcamp replit campus outreach workshops',
      snippet: 'Campus Ambassador for Devsinc, Atomcamp, and Replit.',
    },
    {
      id: 'home-wins',
      title: 'Competition wins',
      dept: 'Index',
      deptId: 'home',
      path: 'home',
      section: 'wins',
      keywords: 'hackathons wins vyrothon skill issue callpilot chainticket mit giki competitions',
      snippet: 'Hackathon and product competition placements on the home page.',
    },
    {
      id: 'home-about',
      title: "Editor's note — About",
      dept: 'Index',
      deptId: 'home',
      path: 'home',
      section: 'about',
      keywords: 'about bio giki data science student editor',
      snippet: 'Short background and links into each department.',
    },
    {
      id: 'home-contact',
      title: 'Correspondence — Contact',
      dept: 'Index',
      deptId: 'home',
      path: 'home',
      section: 'connect',
      keywords: 'contact hire email collaborate internship freelance',
      snippet: 'Open for internships, collaborations, and roles.',
    },
  );

  ALL_PROJECTS.filter((p) => p.category === 'datascience').forEach((p) => {
    items.push({
      id: `ds-${p.id}`,
      title: p.title,
      dept: 'Build',
      deptId: 'build',
      path: 'build',
      section: 'projects',
      keywords: `data science machine learning ${p.title} ${p.tech?.join(' ')} ${p.highlight} ${p.desc}`.toLowerCase(),
      snippet: p.desc?.slice(0, 120),
    });
  });

  return items;
}

export const SEARCH_INDEX = buildSearchIndex();

export function searchPortfolio(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const tokens = q.split(/\s+/).filter(Boolean);

  return SEARCH_INDEX.map((item) => {
    const hay = `${item.title} ${item.dept} ${item.keywords} ${item.snippet}`.toLowerCase();
    let score = 0;
    tokens.forEach((token) => {
      if (item.title.toLowerCase().includes(token)) score += 4;
      if (item.dept.toLowerCase().includes(token)) score += 2;
      if (hay.includes(token)) score += 1;
    });
    return { ...item, score };
  })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8);
}
