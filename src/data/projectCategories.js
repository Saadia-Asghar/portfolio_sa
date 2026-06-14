/** Section metadata — drives visual accent + recruiter-facing copy */
export const PROJECT_CATEGORY_META = {
  datascience: {
    id: 'datascience',
    index: '01',
    title: 'Data Science & Machine Learning',
    description:
      'Survey analysis, hypothesis tests, clustering, and probabilistic models — Jupyter notebooks and model artifacts on GitHub.',
    accent: 'datascience',
    recruiterHook: 'Notebooks · pickles · README setup steps',
  },
  'ai-agents': {
    id: 'ai-agents',
    index: '02',
    title: 'AI Agents & LLM Products',
    description:
      'Autonomous agents with tool calling, voice interfaces, and multi-step reasoning — production-style MVPs built for hackathons and coursework.',
    accent: 'ai',
    recruiterHook: 'README · clone and run locally',
  },
  web3: {
    id: 'web3',
    index: '03',
    title: 'Web3 & Blockchain',
    description:
      'On-chain ticketing and health-tech prototypes on Base/Ethereum L2 — NFT minting, wallet flows, and QR verification dashboards.',
    accent: 'web3',
    recruiterHook: 'Smart contracts + Next.js · demo mode in README',
  },
  fullstack: {
    id: 'fullstack',
    index: '04',
    title: 'Full-Stack Products',
    description:
      'Shipped platforms with real users in mind — Azure cloud, Firebase, maps, and multi-role dashboards from Imagine Cup and side projects.',
    accent: 'fullstack',
    recruiterHook: 'Clone repo · follow setup in README',
    githubLink: 'https://github.com/Saadia-Asghar',
  },
  design: {
    id: 'design',
    index: '05',
    title: 'UI Design & Product',
    description:
      'Figma systems, immersive prototypes, and live frontends — competition-winning product design with case studies in the design book.',
    accent: 'design',
    recruiterHook: 'Figma + live demos · full design book linked',
    externalLink: '#design',
    externalLabel: 'Design book',
  },
  marketing: {
    id: 'marketing',
    index: '06',
    title: 'Marketing & Content',
    description:
      'Personal brand, campus campaigns, and educational reels — metrics-backed storytelling across LinkedIn and Instagram.',
    accent: 'marketing',
    recruiterHook: 'Live channels · marketing portfolio',
    externalLink: 'https://marketing-portfolio-liart.vercel.app/',
    externalLabel: 'Marketing portfolio',
  },
};

export const PROJECT_CATEGORY_ORDER = [
  'datascience',
  'ai-agents',
  'web3',
  'fullstack',
  'design',
  'marketing',
];
