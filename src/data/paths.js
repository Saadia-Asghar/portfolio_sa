import { Code2, Palette, Megaphone, Home } from 'lucide-react';
import { DESIGN_BOOK_TABS } from './designBook';

export const DESIGN_TAB_IDS = DESIGN_BOOK_TABS.map((t) => t.id);

export const PORTFOLIO_PATHS = {
  home: {
    id: 'home',
    label: 'Home',
    hash: '',
    icon: Home,
  },
  build: {
    id: 'build',
    label: 'Build',
    hash: 'build',
    icon: Code2,
    accent: 'build',
    title: 'Engineering & Product',
    recruiter: 'Engineering & product roles',
    tagline: 'Shipped hackathon products, full-stack builds, and the tools behind them.',
    proof: ['Hack@GIKI 2nd · Skill Issue', 'MIT Hack Nation Top 10', 'Next.js · Python · Supabase'],
    sections: [
      { id: 'projects', label: 'Projects', hash: 'projects' },
      { id: 'hackathons', label: 'Hackathons', hash: 'hackathons' },
      { id: 'tech', label: 'Stack', hash: 'tech' },
      { id: 'resume', label: 'Résumé', hash: 'build-resume' },
    ],
    volume: {
      spine: 'BUILD · VOL. I',
      tabs: [
        {
          id: 'projects',
          roman: 'I',
          label: 'Projects',
          title: 'Projects',
          subtitle: 'Data science, AI agents, Web3, and full-stack — links to GitHub with README detail.',
          hash: 'projects',
        },
        {
          id: 'hackathons',
          roman: 'II',
          label: 'Hackathons',
          title: 'Competitions',
          subtitle: 'Hackathon wins and product challenges with placement, stack, and live links.',
          hash: 'hackathons',
        },
        {
          id: 'tech',
          roman: 'III',
          label: 'Stack',
          title: 'Technologies',
          subtitle: 'Tools across data science, design systems, and full-stack development.',
          hash: 'tech',
        },
        {
          id: 'resume',
          roman: 'IV',
          label: 'Résumé',
          title: 'Credentials',
          subtitle: 'Education, certifications, and downloadable CV.',
          hash: 'build-resume',
        },
      ],
    },
  },
  design: {
    id: 'design',
    label: 'Design',
    hash: 'design',
    icon: Palette,
    accent: 'design',
    title: 'Product & Visual Design',
    recruiter: 'Design & brand roles',
    tagline: 'Case studies, Figma systems, and campus-to-client visual work.',
    proof: ['Vyrothon 1st · Top 5 nationally', 'PreMed.PK +40% engagement', 'ACM & MLSA collateral'],
    sections: DESIGN_BOOK_TABS.map((t) => ({ id: t.id, label: t.label, hash: t.id === 'cover' ? 'design' : t.id })),
    volume: {
      spine: 'DESIGN · VOL. I',
    },
  },
  grow: {
    id: 'grow',
    label: 'Grow',
    hash: 'grow',
    icon: Megaphone,
    accent: 'grow',
    title: 'Marketing & Leadership',
    recruiter: 'Marketing & leadership roles',
    tagline: 'Campaign strategy, community growth, and content with clear metrics.',
    proof: ['3,635+ LinkedIn followers', 'Director of Marketing · UROG', 'Atomcamp & generative AI content'],
    sections: [
      { id: 'marketing', label: 'Marketing', hash: 'marketing' },
      { id: 'experience', label: 'Experience', hash: 'grow-experience' },
      { id: 'achievements', label: 'Recognition', hash: 'achievements' },
      { id: 'resume', label: 'Résumé', hash: 'grow-resume' },
    ],
    volume: {
      spine: 'GROW · VOL. I',
      tabs: [
        {
          id: 'marketing',
          roman: 'I',
          label: 'Marketing',
          title: 'Digital Storytelling',
          subtitle: 'Content strategy, personal branding, and campus marketing leadership.',
          hash: 'marketing',
        },
        {
          id: 'experience',
          roman: 'II',
          label: 'Timeline & Roles',
          title: 'Timeline of Wins, Roles & Societies',
          subtitle: 'Chronological journey of achievements and categorized leadership roles.',
          hash: 'grow-experience',
        },
        {
          id: 'achievements',
          roman: 'III',
          label: 'Recognition',
          title: 'Highlights',
          subtitle: 'Build wins and marketing leadership — equal weight.',
          hash: 'achievements',
        },
        {
          id: 'resume',
          roman: 'IV',
          label: 'Résumé',
          title: 'Credentials',
          subtitle: 'Education, certifications, and downloadable CV.',
          hash: 'grow-resume',
        },
      ],
    },
  },
};

export const PATH_IDS = ['build', 'design', 'grow'];

/** Home scroll targets — hub-first (minimal) */
export const HOME_SECTIONS = [
  { id: 'paths', label: 'Index', hash: 'paths' },
  { id: 'about', label: 'About', hash: 'about' },
  { id: 'connect', label: 'Contact', hash: 'connect' },
];

/** One-click destinations for recruiters */
export const QUICK_DESTINATIONS = [
  { id: 'wins', label: 'Competition wins', path: 'home', section: 'wins', hash: 'wins' },
  { id: 'eng', label: 'Engineering & projects', path: 'build', section: 'projects', hash: 'projects' },
  { id: 'design', label: 'Product & UI design', path: 'design', section: 'cover', hash: 'design' },
  { id: 'marketing', label: 'Marketing & growth', path: 'grow', section: 'marketing', hash: 'marketing' },
  { id: 'hackathons', label: 'Hackathon wins', path: 'build', section: 'hackathons', hash: 'hackathons' },
  { id: 'stack', label: 'Tech stack', path: 'build', section: 'tech', hash: 'tech' },
  { id: 'resume', label: 'Résumé', path: 'build', section: 'resume', hash: 'build-resume' },
];

/** Map section hashes to a path + optional in-page tab/section */
const BASE_HASH_ROUTES = {
  connect: { path: 'home', scroll: 'connect' },
  about: { path: 'home', scroll: 'about' },
  paths: { path: 'home', scroll: 'paths' },
  wins: { path: 'home', scroll: 'wins' },
  ambassadors: { path: 'home', scroll: 'ambassadors' },
  featured: { path: 'build', scroll: 'projects' },
  experience: { path: 'grow', scroll: 'experience' },
  'stack-preview': { path: 'build', scroll: 'tech' },
  resume: { path: 'build', scroll: 'resume' },
  build: { path: 'build', scroll: 'projects' },
  projects: { path: 'build', scroll: 'projects' },
  hackathons: { path: 'build', scroll: 'hackathons' },
  tech: { path: 'build', scroll: 'tech' },
  'build-resume': { path: 'build', scroll: 'resume' },
  design: { path: 'design', scroll: 'cover' },
  grow: { path: 'grow', scroll: 'marketing' },
  marketing: { path: 'grow', scroll: 'marketing' },
  'grow-experience': { path: 'grow', scroll: 'experience' },
  achievements: { path: 'grow', scroll: 'achievements' },
  'grow-resume': { path: 'grow', scroll: 'resume' },
};

const DESIGN_HASH_ROUTES = Object.fromEntries(
  DESIGN_TAB_IDS.filter((id) => id !== 'cover').map((id) => [id, { path: 'design', scroll: id }]),
);

export const HASH_ROUTES = { ...BASE_HASH_ROUTES, ...DESIGN_HASH_ROUTES };

export function resolveHash(hash) {
  const raw = (hash || '').replace(/^#/, '').toLowerCase();
  if (!raw) return { path: 'home', scroll: null };
  if (PATH_IDS.includes(raw)) {
    const meta = PORTFOLIO_PATHS[raw];
    const defaultScroll =
      raw === 'design' ? 'cover' : meta.volume?.tabs?.[0]?.id ?? null;
    return { path: raw, scroll: defaultScroll };
  }
  const route = HASH_ROUTES[raw];
  if (route) return route;
  return { path: 'home', scroll: raw || null };
}

export function hashForPath(path, scroll) {
  if (path === 'home') {
    if (!scroll) return '';
    return scroll;
  }
  if (path === 'build') {
    const tab = PORTFOLIO_PATHS.build.volume.tabs.find((t) => t.id === scroll);
    return tab?.hash || scroll || 'build';
  }
  if (path === 'grow') {
    const tab = PORTFOLIO_PATHS.grow.volume.tabs.find((t) => t.id === scroll);
    return tab?.hash || scroll || 'grow';
  }
  if (path === 'design') {
    if (!scroll || scroll === 'cover') return 'design';
    return scroll;
  }
  return path;
}
