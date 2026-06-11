/** Section metadata — drives visual accent + recruiter-facing copy */
export const PROJECT_CATEGORY_META = {
  datascience: {
    id: 'datascience',
    index: '01',
    title: 'Data Science & Machine Learning',
    description:
      'Survey research, statistical inference, clustering, and probabilistic models — notebooks, pickles, and deployable pipelines recruiters can audit on GitHub.',
    accent: 'datascience',
    recruiterHook: 'Reproducible analysis · model artifacts in repo',
  },
  'ai-agents': {
    id: 'ai-agents',
    index: '02',
    title: 'AI Agents & LLM Products',
    description:
      'Autonomous agents with tool calling, voice interfaces, and multi-step reasoning — production-style MVPs built for hackathons and coursework.',
    accent: 'ai',
    recruiterHook: 'Open README · run locally · inspect agent prompts & tools',
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
    externalLink: 'https://design-portfolio-rouge-five.vercel.app/',
    externalLabel: 'Open design book',
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
