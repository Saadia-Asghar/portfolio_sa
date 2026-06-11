import { Code2, Palette, Megaphone, Home } from 'lucide-react';

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
      { id: 'projects', label: 'Projects' },
      { id: 'hackathons', label: 'Hackathons' },
      { id: 'tech', label: 'Tech stack' },
      { id: 'resume', label: 'Résumé' },
    ],
    volume: {
      spine: 'BUILD · VOL. I · MMXXVI',
      tabs: [
        {
          id: 'projects',
          roman: 'I',
          label: 'Projects',
          title: 'Projects',
          subtitle: 'Data science, AI agents, Web3, and full-stack — each card links to the GitHub repo with README-backed detail.',
        },
        {
          id: 'hackathons',
          roman: 'II',
          label: 'Hackathons',
          title: 'Competitions',
          subtitle: 'Hackathon wins and product challenges with placement, stack, and live links.',
        },
        {
          id: 'tech',
          roman: 'III',
          label: 'Stack',
          title: 'Technologies',
          subtitle: 'Tools across data science, design systems, and full-stack development.',
        },
        {
          id: 'resume',
          roman: 'IV',
          label: 'Résumé',
          title: 'Credentials',
          subtitle: 'Education, certifications, and downloadable CV.',
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
    sections: [{ id: 'design', label: 'Design book' }],
    volume: {
      spine: 'DESIGN · VOL. I · MMXXVI',
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
      { id: 'marketing', label: 'Marketing' },
      { id: 'experience', label: 'Experience' },
      { id: 'achievements', label: 'Recognition' },
      { id: 'resume', label: 'Résumé' },
    ],
    volume: {
      spine: 'GROW · VOL. I · MMXXVI',
      tabs: [
        {
          id: 'marketing',
          roman: 'I',
          label: 'Marketing',
          title: 'Digital Storytelling',
          subtitle: 'Content strategy, personal branding, and campus marketing leadership.',
        },
        {
          id: 'experience',
          roman: 'II',
          label: 'Experience',
          title: 'Roles & Leadership',
          subtitle: 'Marketing, design ambassadorships, and community-facing roles.',
        },
        {
          id: 'achievements',
          roman: 'III',
          label: 'Recognition',
          title: 'Highlights',
          subtitle: 'Build wins and marketing leadership — equal weight.',
        },
        {
          id: 'resume',
          roman: 'IV',
          label: 'Résumé',
          title: 'Credentials',
          subtitle: 'Education, certifications, and downloadable CV.',
        },
      ],
    },
  },
};

export const PATH_IDS = ['build', 'design', 'grow'];

/** Map legacy section hashes to a path + optional scroll target */
export const HASH_ROUTES = {
  connect: { path: 'home', scroll: 'connect' },
  about: { path: 'home', scroll: 'about' },
  projects: { path: 'build', scroll: 'projects' },
  hackathons: { path: 'build', scroll: 'hackathons' },
  tech: { path: 'build', scroll: 'tech' },
  resume: { path: 'build', scroll: 'resume' },
  design: { path: 'design', scroll: 'design' },
  marketing: { path: 'grow', scroll: 'marketing' },
  experience: { path: 'grow', scroll: 'experience' },
  achievements: { path: 'grow', scroll: 'achievements' },
};
