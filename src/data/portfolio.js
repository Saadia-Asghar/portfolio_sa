export const CONTACT = {
  name: 'Saadia Asghar',
  location: 'Islamabad, Pakistan',
  email: 'saadianigah@gmail.com',
  phone: '+92 315 912 7771',
  linkedin: 'https://www.linkedin.com/in/saadia-asghar',
  github: 'https://github.com/Saadia-Asghar',
  instagram: 'https://www.instagram.com/s._bytes',
  resumePath: '/Saadia_Asghar_Resume.png',
  profileImage: '/saadia-profile.png',
  designPortfolio: 'https://design-portfolio-rouge-five.vercel.app/',
};

export const PROFILE = {
  title: 'Data Science · Product Design · Full-Stack',
  subtitle: 'B.Sc. Data Science @ GIKI · Islamabad, PK',
  heroGreeting: "Hey, I'm Saadia Asghar",
  heroTagline:
    'Data Science student at GIKI. I ship hackathon products, design UI in Figma, and run campus marketing.',
  intro:
    'Three tracks: engineering (React, Python, ML), product design (Figma, case studies), and marketing (LinkedIn, Instagram, campus campaigns).',
  heroLine: 'Build · Design · Grow',
  designBlurb:
    'Design book on this site — Vyrothon, CallPilot, PreMed.PK, ACM & MLSA work with Figma links.',
  quote: 'GIKI Data Science · Hackathon placements · Open to internships',
  storyIntro:
    'B.Sc. Data Science at GIKI (2024–2028). I build ML notebooks and deployable apps, compete in hackathons, and lead marketing for student societies.',
  storyBody:
    'Coursework and projects cover survey analysis, clustering, probabilistic models, and full-stack deployment. Outside class: 2nd at Hack@GIKI, Top 10 MIT Hack Nation, Top 5 Vyrothon, Director of Marketing at UROG.',
  badges: 'Hack@GIKI 2nd · MIT Hack Nation Top 10 · Vyrothon Top 5 · GIKI \'28',
};

/** Upfront hiring intent — mirrors Behance “Creative Services” clarity */
export const HIRE_FOR = {
  headline: 'Open for internships',
  roles: [
    'Product design & UI/UX',
    'Full-stack & AI engineering',
    'Data science & analytics',
    'Marketing & content',
  ],
  summary:
    'Internships and part-time roles in engineering, design, data, or marketing. Each path below has repos and case studies.',
};

/** Job-search strip — internships, full-time, freelance */
export const JOB_SEEKER = {
  status: 'Available for hire',
  headline: 'Internships · part-time · full-time · freelance',
  types: ['Product Design', 'Data / AI Engineering', 'Marketing & Growth'],
  locations: ['Remote', 'Hybrid', 'Pakistan'],
  targetRoles: [
    'Product Designer (UI/UX)',
    'Junior Full-Stack / AI Engineer',
    'Marketing Associate / Content Lead',
    'Data Science Intern',
  ],
};

/** Rotating hero roles — common pattern in top dev portfolios */
export const HERO_ROLES = [
  'Product Designer',
  'Full-Stack Developer',
  'Data Science Student',
  'Marketing Lead',
];

/** Homepage stats — scannable proof for recruiters */
export const PORTFOLIO_STATS = [
  { value: '4', label: 'Hackathon placements' },
  { value: '10+', label: 'Shipped projects' },
  { value: '3,635+', label: 'LinkedIn followers' },
  { value: '4', label: 'Leadership roles' },
];

/** Featured work on home — curated like Brittany Chiang / dev-portfolios best practice */
export const FEATURED_HOME = [
  {
    id: 'skill-issue',
    track: 'build',
    title: 'Skill Issue',
    year: '2026',
    placement: '2nd · Hack@GIKI',
    description:
      'Arcade-style AI learning platform — persona synthesis, realtime 1v1 Blitz, Study Rooms, and a global Elo leaderboard.',
    tech: ['Next.js', 'Supabase', 'Clerk', 'Groq', 'TypeScript'],
    image: null,
    github: 'https://github.com/Saadia-Asghar/Skill_issue',
    live: 'https://skill-issue-s1oh.vercel.app/',
  },
  {
    id: 'vyrothon',
    track: 'design',
    title: 'Vyrothon',
    year: '2026',
    placement: '1st · Top 5 Finalist',
    description:
      'Immersive product-design prototype — gamified storytelling UI that won Round 1 and reached national Top 5.',
    tech: ['Figma', 'Prototyping', 'Immersive UI'],
    image: '/design/vyrothon.png',
    live: '#design',
    github: null,
  },
  {
    id: 'callpilot',
    track: 'build',
    title: 'CallPilot',
    year: '2026',
    placement: 'Top 10 · MIT Hack Nation',
    description:
      'Agentic voice AI for appointment scheduling — tool-calling, explainable dashboard, WebSocket voice demos.',
    tech: ['FastAPI', 'React', 'OpenAI', 'ElevenLabs'],
    image: '/design/callpilot.png',
    github: 'https://github.com/Saadia-Asghar/callpilot-control',
    live: null,
  },
  {
    id: 'giki-connect',
    track: 'build',
    title: 'GIKI-Connect',
    year: '2025',
    placement: 'Live deploy',
    description:
      'Campus silo research for 3,000 students — K-Means tribes, statistical tests, and a Flask app with model artifacts.',
    tech: ['Python', 'scikit-learn', 'Flask', 'K-Means'],
    image: null,
    github: 'https://github.com/Saadia-Asghar/Giki-Connect',
    live: 'https://saadia-asghar.github.io/Giki-Connect/',
  },
];

/** Engineering case studies on Build path (data science has its own section) */
export const FLAGSHIP_BUILD_IDS = ['skill-issue', 'callpilot'];

/** Data science projects — shown in a dedicated section before other categories */
export const DATA_SCIENCE_PROJECT_IDS = [
  'giki-connect',
  'data-modeling',
  'water-potability',
  'movie-taste-agent',
];

/** Hackathon cards shown by default — weakest work stays off the main grid */
export const HACKATHON_SHOWCASE_IDS = ['vyrothon', 'skill-issue', 'callpilot', 'chainticket'];

/** Campus ambassador roles — featured on home */
export const FEATURED_AMBASSADORS = [
  {
    id: 'devsinc',
    org: 'Devsinc',
    role: 'Campus Ambassador',
    period: 'Feb 2025 — Apr 2026',
    present: false,
    summary: '10+ workshops for 300+ students · 200+ qualified signups.',
    highlight: 'Workshops & campus outreach',
    link: 'https://www.devsinc.com/',
  },
  {
    id: 'atomcamp',
    org: 'Atomcamp',
    role: 'Campus Ambassador · Content',
    period: 'Present',
    present: true,
    summary: 'Educational reels on data science, AI ethics, and technical roadmaps.',
    highlight: 'Video content & campus reach',
    link: 'https://atomcamp.com/',
  },
  {
    id: 'replit',
    org: 'Replit',
    role: 'Campus Ambassador',
    period: 'Present',
    present: true,
    summary: 'Developer community engagement and campus outreach at GIKI.',
    highlight: 'Dev community & events',
    link: 'https://replit.com/',
  },
];

/** Grow path — flagship scenes only */
export const GROW_SHOWCASE_SCENES = ['01', '02', '03'];

export const MARKETING_PORTFOLIO = {
  url: 'https://marketing-portfolio-liart.vercel.app/',
  repo: 'https://github.com/Saadia-Asghar/marketing_portfolio__',
  creativeVideo:
    'https://marketing-portfolio-liart.vercel.app/assets/videos/creative-highlight.mp4',
};

export const SOCIAL_METRICS = [
  { value: '3,635', label: 'Followers' },
  { value: '1,000+', label: 'Search Impressions · Daily' },
  { value: '6,000', label: 'Avg Impressions · Per Post' },
];

export const MARKETING_HIGHLIGHTS = [
  {
    tag: 'CREATIVE HIGHLIGHT · GENERATIVE AI',
    title: 'Generative AI Lab',
    desc: 'Generative AI experiments for storyboards and visual drafts.',
    anchor: 'creative-lab',
  },
  {
    tag: 'CREATIVE & COMMUNITY',
    title: 'Content & Campus Communities',
    desc: 'Campus society content and outreach on LinkedIn and Instagram.',
  },
  {
    tag: 'HACKATHON WINNER',
    title: 'Competition Track Record',
    desc: 'Vyrothon Top 5 · MIT HackNation Top 10 · BASE Web3 3rd · HackaGIKI 2nd',
  },
  {
    tag: 'NEXT CHAPTER · INSTAGRAM',
    title: '@s._bytes',
    desc: 'Tech reels, carousels, and behind-the-scenes of building in data science & AI.',
    link: 'https://www.instagram.com/s._bytes',
    linkLabel: 'Follow',
  },
];

export const ATOMCAMP_REELS = [
  {
    title: 'atomcamp reel 1',
    embed: 'https://www.instagram.com/reel/DXyJ-QIsOAT/embed',
  },
  {
    title: 'atomcamp reel 2',
    embed: 'https://www.instagram.com/reel/DVn0uZPjL4J/embed',
  },
  {
    title: 'atomcamp reel 3',
    embed: 'https://www.instagram.com/reel/DXHudedEkCD/embed',
  },
];

export const MARKETING_SCENES = [
  {
    scene: '01',
    title: 'Personal Branding',
    icon: 'Megaphone',
    body: 'LinkedIn posts on data science and hackathon results. Instagram @s._bytes for short-form tech content.',
    period: '2024 — Present',
    location: 'LinkedIn · Instagram',
    link: 'https://www.linkedin.com/in/saadia-asghar',
    linkLabel: 'View LinkedIn Profile',
  },
  {
    scene: '02',
    title: 'Atomcamp — Campus Ambassador',
    icon: 'Video',
    body: 'Campus Ambassador — educational reels on data science, AI ethics, and career roadmaps.',
    period: '2025 — Present',
    location: 'GIKI',
  },
  {
    scene: '03',
    title: 'Director of Marketing — UROG',
    icon: 'TrendingUp',
    role: 'Executive Council @ UROG',
    body: "Promoted to the Executive Council to lead the marketing team. Handle and manage the society's Instagram and LinkedIn accounts, planning content and driving academic support.",
    period: 'May 2026 — Present',
    location: 'GIKI · Topi',
  },
  {
    scene: '04',
    title: 'Head of Marketing — MLSA',
    icon: 'Users',
    role: 'Microsoft Club GIKI',
    body: "Lead marketing for GIKI's Microsoft Learn Student Ambassadors chapter — managing the club's Instagram and LinkedIn presence, content planning, and community outreach across platforms.",
    period: 'Oct. 2025 — Present',
    location: 'GIKI',
    link: 'https://www.instagram.com/microsoftclubgiki',
    linkLabel: '@microsoftclubgiki',
  },
  {
    scene: '05',
    title: 'Ambassadorships & Growth',
    icon: 'Sparkles',
    body: 'Campus Ambassador for Replit, Devsinc, and Remotebase — workshops, tours, and campus-wide outreach driving hundreds of signups and applicants.',
    period: '2025 — 2026',
    location: 'GIKI',
    metrics: ['10+ Workshops', '300+ Students Reached', '200+ Qualified Signups'],
  },
  {
    scene: '06',
    title: 'Design & Visual Strategy',
    icon: 'Megaphone',
    body: '1st in Product Design at Vyrothon (500+ entries) and Graphic Design Associate at PreMed.PK — 30+ assets, 40% engagement lift, 25% faster delivery.',
    period: '2025 — Present',
    location: 'NSTP · Remote',
    metrics: ['Vyrothon R1 · 1st', 'PreMed.PK · Associate'],
  },
];

export const CREATIVE_LAB = {
  subtitle: 'Generative AI for content',
  desc: 'Using generative AI for storyboards and visual drafts before publishing to social channels.',
  steps: [
    {
      title: 'Prompt & Concept',
      desc: 'Seed the story — mood, hook, visual direction.',
    },
    {
      title: 'Storyboard',
      desc: 'Generative AI frames the narrative arc.',
    },
    {
      title: 'Render & Refine',
      desc: 'Motion, polish, ready for the feed.',
    },
  ],
};

export const DESIGN_PORTFOLIO = {
  url: 'https://design-portfolio-rouge-five.vercel.app/',
  tagline: 'A designer\'s book of work',
  featured: {
    title: 'Vyrothon — Product Design Submission',
    badge: '1st · Product Design Round · Top 5 Finalist',
    event: 'Product Design & Innovation · Apr. 2026',
    summary:
      'High-fidelity interactive prototype at NSTP — user presence and gamified storytelling. Ranked 1st in Round 1, Top 5 nationally in Round 2.',
    tools: ['Figma', 'Immersive UI', 'Storytelling UX', 'Prototyping'],
  },
  stats: [
    { value: '500+', label: 'Vyrothon applicants nationally' },
    { value: '30+', label: 'Visual assets at PreMed.PK' },
    { value: '40%', label: 'Engagement lift on PreMed assets' },
    { value: '10+', label: 'Workshops led or supported' },
  ],
  chapters: [
    {
      id: 'product',
      chapter: 'Chapter I',
      title: 'Product Design',
      desc: 'Figma · interactive prototypes · hi-fi UI — Vyrothon, CallPilot, ChaInTicket+, PrivyHealth, MoodMaze.',
      tags: ['Figma', 'Dashboards', 'Healthtech'],
    },
    {
      id: 'acm',
      chapter: 'Chapter II',
      title: 'ACM · GIKI',
      desc: 'Posters, event identities, and marketing collateral for the ACM chapter.',
      tags: ['Posters', 'Campaign', 'WIC'],
    },
    {
      id: 'mlsa',
      chapter: 'Chapter III',
      title: 'MLSA · Microsoft Club',
      desc: 'Visual identity, certificates, carousels, and event collateral for MLSA at GIKI.',
      tags: ['Identity', 'Certificates', 'Social'],
    },
    {
      id: 'premed',
      chapter: 'Chapter IV',
      title: 'PreMed.PK',
      desc: 'Graphic Design Associate — visual identity, education slides, and delivery systems.',
      tags: ['Canva', 'Figma', 'Education'],
    },
  ],
  capabilities: [
    'Product design',
    'Immersive UI',
    'Storytelling-based UI',
    'Wireframing & prototyping',
    'Visual identity',
    'Dashboard design',
    'Graphic design',
    'Community design',
  ],
};

export const MARQUEE_ITEMS = [
  'HACK@GIKI 2ND · SKILL ISSUE',
  'VYROTHON R1 1ST · R2 TOP 5',
  'MIT HACK NATION TOP 10',
  'BASED PAKISTAN 3RD',
  'MICROSOFT IMAGINE CUP',
  '3,635+ LINKEDIN FOLLOWERS',
  'DIRECTOR OF MARKETING · UROG',
  'HEAD OF MARKETING · MS CLUB',
  'PREMED.PK · 40% ENGAGEMENT',
  'DESIGN PORTFOLIO · FIGMA',
  'OPEN FOR ROLES',
];

/** Dedicated hackathon & competition wins — equal prominence */
export const HACKATHON_WINS = [
  {
    id: 'vyrothon',
    project: 'Vyrothon',
    placement: 'Round 1 · 1st · Round 2 · Top 5',
    event: 'Product Design & Innovation',
    role: 'Lead Product Designer',
    period: 'Apr. 2026',
    highlight: '1st place in product design (Round 1); among 5 finalists in Round 2.',
    detail: 'Immersive 3D environment with gamified storytelling — high-fidelity prototype built at NSTP.',
    tech: ['Figma', 'Prototyping', 'Immersive UI', 'Storytelling UX'],
    tier: 'gold',
  },
  {
    id: 'skill-issue',
    project: 'Skill Issue',
    placement: '2nd Place',
    event: 'Hack@GIKI AI Challenge',
    role: 'Full-Stack · Product',
    period: '2026',
    highlight: 'Arcade-style AI learning platform — personas, gauntlets, realtime 1v1 battles.',
    detail: 'Next.js 15, Supabase realtime, Clerk auth, multi-LLM routing, global Elo leaderboard.',
    tech: ['Next.js', 'Supabase', 'Clerk', 'TypeScript', 'AI SDK'],
    tier: 'silver',
    github: 'https://github.com/Saadia-Asghar/Skill_issue',
    link: 'https://skill-issue-s1oh.vercel.app/',
  },
  {
    id: 'callpilot',
    project: 'CallPilot',
    placement: 'Top 10',
    event: 'MIT Hack Nation',
    role: 'Product · Full-Stack Development',
    period: 'Jan. 2026',
    highlight: 'AI-driven task automation platform ranked Top 10 globally.',
    detail: 'End-to-end architecture with React frontend and Python automation backend.',
    tech: ['React', 'Python', 'AI Automation', 'Product Design'],
    tier: 'top10',
  },
  {
    id: 'chainticket',
    project: 'ChainTicket+',
    placement: '3rd Place',
    event: 'BASED Pakistan · Web3 Hackathon',
    role: 'Backend · Dashboard Development',
    period: 'Dec. 2025',
    highlight: 'Blockchain QR verification for secure ticketing — 1,000+ attendees tracked.',
    detail: 'Realtime dashboards and on-chain proofs for event access control.',
    tech: ['Blockchain', 'TypeScript', 'QR Verification', 'Dashboards'],
    tier: 'bronze',
    github: 'https://github.com/Saadia-Asghar/Chain_ticket',
  },
  {
    id: 'ecobite',
    project: 'EcoBite',
    placement: 'Participant',
    event: 'Microsoft Imagine Cup',
    role: 'Full-Stack · Product Design',
    period: 'Aug. 2025 — Present',
    highlight: 'Food donation platform — 5 user roles, 500+ meals, 30% donation frequency increase.',
    detail: 'Azure AD B2C, SQL, and Maps API for logistics across NGOs, donors, and recyclers.',
    tech: ['Azure', 'React', 'SQL', 'Maps API'],
    tier: 'participant',
    github: 'https://github.com/Saadia-Asghar/Ecobite_',
  },
];

/** Equal-weight achievements — build (tech) and grow (marketing/leadership) */
export const ACHIEVEMENTS = [
  {
    id: 'skill-issue',
    track: 'build',
    title: 'Skill Issue',
    badge: '2nd Place · Hack@GIKI AI Challenge',
    detail: 'Arcade-style AI learning app — personas, study rooms, realtime 1v1 battles.',
    period: '2026',
    link: 'https://skill-issue-s1oh.vercel.app/',
    linkLabel: 'Live demo',
  },
  {
    id: 'vyrothon',
    track: 'build',
    title: 'Vyrothon',
    badge: 'Round 1 · 1st Product Design · Round 2 · Top 5 Finalist',
    detail: 'Lead Product Designer — 1st in product design Round 1, among 5 finalists in Round 2.',
    period: 'Apr. 2026',
  },
  {
    id: 'callpilot',
    track: 'build',
    title: 'CallPilot',
    badge: 'Top 10 · MIT Hack Nation',
    detail: 'AI task automation platform — React frontend, Python backend, end-to-end architecture.',
    period: 'Jan. 2026',
  },
  {
    id: 'ecobite',
    track: 'build',
    title: 'EcoBite',
    badge: 'Participant · Microsoft Imagine Cup',
    detail: 'Food donation platform — 5 roles, Azure, 500+ meals. 30% donation frequency increase via analytics.',
    period: '2025 — Present',
    link: 'https://github.com/Saadia-Asghar/Ecobite_',
    linkLabel: 'GitHub',
  },
  {
    id: 'chainticket',
    track: 'build',
    title: 'ChainTicket+',
    badge: '3rd Place · BASED Pakistan',
    detail: 'Blockchain QR ticketing with realtime dashboards for 1,000+ attendees.',
    period: 'Dec. 2025',
    link: 'https://github.com/Saadia-Asghar/Chain_ticket',
    linkLabel: 'GitHub',
  },
  {
    id: 'effort-scope',
    track: 'build',
    title: 'Effort Scope',
    badge: 'Live Product',
    detail: 'Productivity tracking utility — UI/UX design with front-end logic.',
    link: 'https://saadia-asghar.github.io/Effort_Scope/',
    linkLabel: 'Live',
  },
  {
    id: 'moodmaze',
    track: 'build',
    title: 'MoodMaze',
    badge: 'Algorithm Project',
    detail: 'Recommendation engine mapping content to emotional datasets.',
    link: 'https://github.com/Saadia-Asghar/Mood_Maze',
    linkLabel: 'GitHub',
  },
  {
    id: 'code-blaster',
    track: 'build',
    title: 'Code Blaster',
    badge: 'C++ Learning Engine',
    detail: 'Gamified programming fundamentals through interactive OOP logic.',
    link: 'https://github.com/Saadia-Asghar/Code-Blaster',
    linkLabel: 'GitHub',
  },
  {
    id: 'design-portfolio',
    track: 'grow',
    title: 'Design Portfolio',
    badge: 'Product Designer · Vol. I',
    detail: 'Case studies, Vyrothon prototype, ACM & MLSA collateral, PreMed.PK systems — full design book online.',
    link: 'https://design-portfolio-rouge-five.vercel.app/',
    linkLabel: 'View design book',
  },
  {
    id: 'linkedin-growth',
    track: 'grow',
    title: 'LinkedIn Presence',
    badge: '3,635+ Followers',
    detail: 'Building in public — data science insights, hackathon wins, learning journeys.',
    link: 'https://www.linkedin.com/in/saadia-asghar',
    linkLabel: 'Profile',
  },
  {
    id: 'linkedin-reach',
    track: 'grow',
    title: 'Content Reach',
    badge: '1,000+ Daily Search Impressions',
    detail: 'Consistent LinkedIn content driving discovery and professional visibility.',
  },
  {
    id: 'linkedin-engagement',
    track: 'grow',
    title: 'Post Performance',
    badge: '6,000 Avg Impressions / Post',
    detail: 'High-engagement technical storytelling and career narrative content.',
  },
  {
    id: 'instagram',
    track: 'grow',
    title: 'Instagram @s._bytes',
    badge: 'Tech Content Creator',
    detail: 'Reels, carousels, and behind-the-scenes of building in data science & AI.',
    link: 'https://www.instagram.com/s._bytes',
    linkLabel: 'Follow',
  },
  {
    id: 'premed',
    track: 'grow',
    title: 'PreMed.PK',
    badge: 'Graphic Design Associate',
    detail: '30+ assets in Figma/Canva — 40% engagement increase, 25% faster delivery.',
    period: 'May 2025 — Present',
  },
  {
    id: 'urog',
    track: 'grow',
    title: 'UROG GIKI',
    badge: 'Director of Marketing · Exec Council',
    detail: 'Lead Instagram & LinkedIn strategy, content planning, academic support campaigns.',
    period: 'May 2026 — Present',
  },
  {
    id: 'msclub',
    track: 'grow',
    title: 'Microsoft Club GIKI',
    badge: 'Head of Marketing · MLSA',
    detail: 'Club social presence, content planning, and community outreach.',
    period: 'Oct. 2025 — Present',
    link: 'https://www.instagram.com/microsoftclubgiki',
    linkLabel: 'Instagram',
  },
  {
    id: 'devsinc',
    track: 'grow',
    title: 'Devsinc',
    badge: 'Campus Ambassador',
    detail: '10+ workshops for 300+ students — 200+ qualified campaign signups.',
    period: 'Feb. 2025 — Apr. 2026',
  },
  {
    id: 'remotebase',
    track: 'grow',
    title: 'Remotebase',
    badge: 'Campus Ambassador',
    detail: 'Hackfest 3.0 outreach — 300+ applicants, primary campus liaison.',
    period: 'Feb. — Jul. 2025',
  },
  {
    id: 'replit',
    track: 'grow',
    title: 'Replit',
    badge: 'Campus Ambassador',
    detail: 'Developer community engagement and campus outreach.',
    period: '2025',
  },
  {
    id: 'atomcamp',
    track: 'grow',
    title: 'Atomcamp',
    badge: 'Campus Ambassador · Content',
    detail: 'Educational reels on data science, AI ethics, and technical roadmaps.',
    period: '2025 — Present',
  },
  {
    id: 'societies',
    track: 'grow',
    title: 'GIKI Societies',
    badge: 'ACM · GDGoC · UROG · MS Club',
    detail: 'Softcom\'25 design, AI/web workshops for 100+ participants, academic bootcamps.',
    period: 'Oct. 2024 — Present',
  },
  {
    id: 'generative-ai',
    track: 'grow',
    title: 'Generative AI Lab',
    badge: 'Content & Storyboarding',
    detail: 'AI-assisted storyboards and visual prototypes — prompt to pixel, frame by frame.',
  },
];

export { PROJECT_CATEGORY_META, PROJECT_CATEGORY_ORDER } from './projectCategories';

export const TECH_STACK = [
  { name: 'Python', slug: 'python', color: '3776AB' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: 'ffffff' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'Figma', slug: 'figma', color: 'F24E1E' },
  { name: 'Tailwind', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Supabase', slug: 'supabase', color: '3FCF8E' },
  { name: 'Azure', slug: 'microsoftazure', color: '0078D4' },
  { name: 'SQL', slug: 'postgresql', color: '4169E1' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'GitHub', slug: 'github', color: 'ffffff' },
  { name: 'Canva', slug: 'canva', color: '00C4CC' },
];

export const ALL_PROJECTS = [
  {
    id: 'giki-connect',
    title: 'GIKI-Connect',
    category: 'datascience',
    role: 'Theory of Data Science · GIKI',
    achievement: 'May 2025 – Present',
    highlight: '~3,000 students · custom Silo Index · K-Means tribes',
    desc: 'Campus social-silo study at GIKI: Chi-square (society × silo band), Pearson (hours vs silo), K-Means clustering into interest tribes. Web app loads the same model artifacts as the notebook and suggests peers and events.',
    repoNote: 'README documents model verification, admin events API, and notebook retrain flow.',
    tech: ['Python', 'scikit-learn', 'K-Means', 'Chi-Square', 'Flask', 'Jupyter'],
    github: 'https://github.com/Saadia-Asghar/Giki-Connect',
    link: 'https://saadia-asghar.github.io/Giki-Connect/',
    featured: true,
    showcase: 'flagship',
    caseStudy: {
      problem:
        'Campus communities form invisible “silos” — students needed a way to see where they sit socially and what drives isolation.',
      myRole: 'Theory of Data Science · end-to-end analysis + deployable web app',
      approach: [
        'Surveyed ~3,000 students and ran Chi-square + Pearson tests on society vs. silo bands.',
        'Trained K-Means (tribes 0–7) with the same feature vector used in production.',
        'Shipped Flask app loading scaler.pkl + kmeans.pkl so results match the notebook.',
      ],
      outcome:
        'Live campus tool with reproducible notebook, model artifacts, and admin events API — recruiters can audit the full pipeline on GitHub.',
      metrics: [
        { value: '3,000', label: 'Students surveyed' },
        { value: 'K-Means', label: 'Tribe clustering' },
        { value: 'Live', label: 'GitHub Pages deploy' },
      ],
    },
  },
  {
    id: 'water-potability',
    title: 'Water Potability Prediction',
    category: 'datascience',
    role: 'Probabilistic ML · IoT-ready JSON',
    achievement: 'May 2026',
    highlight: 'Naive Bayes + PGM · 9 chemical parameters · seed 42',
    desc: 'Predicts when a water filter needs replacement from drifting quality — not a calendar. Notebook trains on 800 Kaggle samples and exports structured JSON for sensor/alert pipelines.',
    repoNote: 'Full notebook, figures/, and results.json committed for reproducibility.',
    tech: ['Python', 'Naive Bayes', 'PGM', 'Jupyter', 'kagglehub', 'EDA'],
    github: 'https://github.com/Saadia-Asghar/water-probability-project',
    showcase: 'standard',
  },
  {
    id: 'data-modeling',
    title: 'GIKI-Connect — Analysis & Modeling',
    category: 'datascience',
    role: 'Theory of Data Science · Notebook pipeline',
    achievement: 'May 2025 – Present',
    highlight: 'Chi-square · Pearson · K-Means · cluster_profiles.json',
    desc: 'Notebook-first repo for the GIKI-Connect study: data cleaning, Silo Index feature engineering, statistical tests, K-Means training (K=4 tribes), and exported model artifacts (scaler.pkl, kmeans.pkl, cluster_profiles.json).',
    repoNote: 'Companion to the Giki-Connect web app — same training pipeline documented in README.',
    tech: ['Python', 'Jupyter', 'scikit-learn', 'Pandas', 'Chi-Square', 'K-Means'],
    github: 'https://github.com/Saadia-Asghar/Data-Modeling',
    showcase: 'standard',
  },
  {
    id: 'movie-taste-agent',
    title: 'AI Movie Taste Agent',
    category: 'datascience',
    role: 'Gemini · Recommendation prototype',
    achievement: 'Jupyter / Colab',
    highlight: '3 favorites in → taste paragraph + 3 picks out',
    desc: 'Notebook widget that takes three favorite films, calls Google Gemini to summarize viewing taste, and returns three justified recommendations. Built with ipywidgets for interactive demos.',
    repoNote: 'Requires Google AI Studio API key — README documents setup.',
    tech: ['Python', 'Gemini', 'ipywidgets', 'Jupyter'],
    github: 'https://github.com/Saadia-Asghar/Movie-Recommendation-Agent',
    showcase: 'standard',
  },
  {
    id: 'skill-issue',
    title: 'Skill Issue',
    category: 'ai-agents',
    role: 'Full-Stack · AI Product',
    achievement: '2nd · Hack@GIKI',
    highlight: 'Groq Llama 3.3 · Elo leaderboard · persona synthesis engine',
    desc: 'Gamified cognitive arena: influencer persona engine, Comprehension Gauntlet, 1v1 Blitz, Study Rooms, spaced-repetition flashcards, and Professor Radio (ElevenLabs). Tracks a learning fingerprint on a global Elo board.',
    repoNote: 'GitHub description + README cover Next.js 16, Supabase realtime, Clerk, and multi-LLM routing.',
    tech: ['Next.js', 'Supabase', 'Clerk', 'Groq', 'ElevenLabs', 'TypeScript'],
    github: 'https://github.com/Saadia-Asghar/Skill_issue',
    link: 'https://skill-issue-s1oh.vercel.app/',
    featured: true,
    showcase: 'flagship',
    caseStudy: {
      problem:
        'Students binge passive content but rarely retain concepts — the brief was an arcade-style arena that makes learning competitive and social.',
      myRole: 'Full-stack · product · AI routing',
      approach: [
        'Designed persona synthesis + Comprehension Gauntlet flows before wiring LLM calls.',
        'Built realtime 1v1 Blitz and Study Rooms on Supabase with Clerk auth.',
        'Tracked a global Elo leaderboard and spaced-repetition flashcards for return visits.',
      ],
      outcome:
        '2nd place at Hack@GIKI — live demo with Groq Llama 3.3, ElevenLabs Professor Radio, and README recruiters can run locally.',
      metrics: [
        { value: '2nd', label: 'Hack@GIKI' },
        { value: 'Realtime', label: 'Supabase battles' },
        { value: 'Live', label: 'Vercel deploy' },
      ],
    },
  },
  {
    id: 'callpilot',
    title: 'CallPilot',
    category: 'ai-agents',
    role: 'Agentic Voice AI · MIT Hack Nation',
    achievement: 'Top 10 globally',
    highlight: 'LLM tool-calling agent · FastAPI + React dashboard',
    desc: 'Autonomous appointment scheduling: OpenAI/Gemini function calling, SQLite persistence, Google Calendar sync, ElevenLabs TTS, WebSocket voice, auto-triage, and explainable AI reasoning in the dashboard.',
    repoNote: 'Monorepo README lists every API route, tool functions, and demo-mode setup.',
    tech: ['FastAPI', 'React', 'OpenAI', 'Gemini', 'ElevenLabs', 'SQLite'],
    github: 'https://github.com/Saadia-Asghar/callpilot-control',
    featured: true,
    showcase: 'flagship',
    caseStudy: {
      problem:
        'Appointment scheduling breaks when voice agents cannot explain decisions — MIT Hack Nation needed trustworthy autonomous scheduling.',
      myRole: 'Agentic voice AI · full-stack architecture',
      approach: [
        'Mapped tool-calling flows for calendar sync, triage, and persistence in SQLite.',
        'Paired FastAPI backend with React dashboard showing explainable AI reasoning.',
        'Integrated ElevenLabs TTS + WebSocket voice for demo-ready interviews.',
      ],
      outcome:
        'Top 10 globally at MIT Hack Nation — monorepo README documents every API route and demo-mode setup.',
      metrics: [
        { value: 'Top 10', label: 'MIT Hack Nation' },
        { value: 'Voice', label: 'WebSocket agent' },
        { value: 'Open', label: 'README + routes' },
      ],
    },
  },
  {
    id: 'healthcare-maps',
    title: 'Agentic Healthcare Maps',
    category: 'ai-agents',
    role: 'MIT Hackathon · Challenge 03',
    achievement: 'Serving A Nation',
    highlight: '10k Indian facilities · ChromaDB · trust scoring',
    desc: 'Reads messy hospital records, scores trustworthiness, finds medical deserts, and answers NL queries like “nearest ICU in rural Bihar.” Gemini reasoning agent with chain-of-thought and row-level citations.',
    repoNote: 'README includes full stack diagram, warmup scripts, and example crisis queries.',
    tech: ['FastAPI', 'ChromaDB', 'Gemini', 'Next.js', 'Folium', 'Pandas'],
    github: 'https://github.com/Saadia-Asghar/Building-Agentic-Healthcare-Maps-',
    showcase: 'archive',
  },
  {
    id: 'donorbridge',
    title: 'DonorBridge',
    category: 'ai-agents',
    role: 'Healthcare DB · Streamlit + Assistant',
    achievement: '3NF Prototype',
    highlight: 'PostgreSQL · reporting views · rule-based chatbot',
    desc: 'Rule-based SQL chatbot for healthcare resource queries — regex intent matching, parameterized SELECTs on a 3NF SQLite schema, Flask API, and Streamlit UI. No LLM; full audit logging.',
    repoNote: 'Main chatbot repo: Chatbot. Schema prototype: DonorBridge.',
    tech: ['PostgreSQL', 'Streamlit', 'FastAPI', 'Python', '3NF Schema'],
    github: 'https://github.com/Saadia-Asghar/Chatbot',
    link: 'https://github.com/Saadia-Asghar/DonorBridge',
    showcase: 'archive',
  },
  {
    id: 'chainticket',
    title: 'ChainTicket+',
    category: 'web3',
    role: 'Backend · Web3 Dashboards',
    achievement: '3rd · BASED Pakistan',
    highlight: 'NFT tickets on Base L2 · MetaMask · QR verify',
    desc: 'Decentralized event ticketing: mint NFT tickets on Base, organizer dashboards, hybrid Firebase + localStorage persistence, and dynamic QR verification — includes gas-free demo mode in README.',
    repoNote: 'README documents wagmi/viem stack, demo wallet address, and Hardhat contracts.',
    tech: ['Next.js', 'Solidity', 'Base', 'Wagmi', 'Firebase', 'Framer Motion'],
    github: 'https://github.com/Saadia-Asghar/Chain_ticket',
    featured: true,
    showcase: 'standard',
  },
  {
    id: 'privy-health',
    title: 'PrivyHealth Chain',
    category: 'web3',
    role: 'Health-tech · Web3 Prototype',
    achievement: 'Product concept',
    highlight: 'Investor pitch + on-chain health prototype',
    desc: 'PrivyHealth Pakistan — blockchain-backed health data prototype with investor pitch deck repo. Explores secure, patient-owned health records on chain.',
    repoNote: 'Companion repos: PrivyHealth-Pitch and privy_health for deck + app code.',
    tech: ['JavaScript', 'Web3', 'Healthtech', 'Replit'],
    github: 'https://github.com/Saadia-Asghar/Privy-Health-Chain',
    link: 'https://github.com/Saadia-Asghar/PrivyHealth-Pitch',
    showcase: 'archive',
  },
  {
    id: 'ecobite',
    title: 'EcoBite',
    category: 'fullstack',
    role: 'Imagine Cup · Azure Social Impact',
    achievement: 'Participant · 500+ meals',
    highlight: 'Azure AI Vision freshness · EcoPoints · 5 roles',
    desc: 'Food-waste platform connecting donors and NGOs: Azure AI Vision quality scoring, Azure Maps logistics, Entra ID auth, EcoPoints rewards, and manual payment verification (JazzCash/EasyPaisa).',
    repoNote: 'README covers SDG alignment, multi-role dashboards, and Azure service map.',
    tech: ['React', 'Azure SQL', 'Azure Maps', 'Azure Vision', 'Express'],
    github: 'https://github.com/Saadia-Asghar/Ecobite_',
    showcase: 'standard',
  },
  {
    id: 'moodmaze',
    title: 'MoodMaze',
    category: 'fullstack',
    role: 'DSA · Cinematic Recommendations',
    achievement: 'Max-Heap engine',
    highlight: 'Rule of Three UX · TMDB · Firebase sync',
    desc: 'Mood-quiz movie picker using a custom Max-Heap priority queue and weighted scoring heuristic — O(1) peek for best match, Hash Set for rejects, 3D flip cards, and cloud library via Firestore.',
    repoNote: 'README details dsa.js heap implementation and scoring formula.',
    tech: ['React', 'Vite', 'Firebase', 'TMDB API', 'Framer Motion', 'Zustand'],
    github: 'https://github.com/Saadia-Asghar/Mood_Maze',
    showcase: 'archive',
  },
  {
    id: 'code-blaster',
    title: 'Code Blaster',
    category: 'fullstack',
    role: 'C++ · SFML Game',
    achievement: 'Early project',
    highlight: 'Gamified C++ fundamentals',
    desc: 'C++ and SFML game teaching OOP and language fundamentals through arcade-style levels.',
    repoNote: 'Compact game repo — good for systems/programming breadth.',
    tech: ['C++', 'SFML', 'OOP'],
    github: 'https://github.com/Saadia-Asghar/Code-Blaster',
    showcase: 'archive',
  },
  {
    id: 'vyrothon',
    title: 'Vyrothon',
    category: 'design',
    role: 'Lead Product Designer',
    achievement: '1st · Top 5 Finalist',
    highlight: '500+ applicants · immersive 3D storytelling UI',
    desc: 'High-fidelity Figma prototype for Vyrothon — 1st in Round 1, Top 5 nationally (500+ applicants).',
    repoNote: 'Full case study + Figma links in the design book.',
    tech: ['Figma', 'Prototyping', 'Immersive UI', 'Storytelling UX'],
    link: '#design',
    featured: true,
    showcase: 'flagship',
  },
  {
    id: 'effort-scope',
    title: 'Effort Scope',
    category: 'design',
    role: 'UI/UX · Frontend',
    achievement: 'Live on GitHub Pages',
    highlight: 'Productivity · effort visualization',
    desc: 'Lightweight productivity tracker with intentional UI for logging and visualizing effort over time.',
    repoNote: 'Static site + source in GitHub — quick to inspect.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://saadia-asghar.github.io/Effort_Scope/',
    github: 'https://github.com/Saadia-Asghar/Effort_Scope',
    showcase: 'archive',
  },
  {
    id: 'linkedin-brand',
    title: 'LinkedIn Personal Brand',
    category: 'marketing',
    role: 'Content · Strategy',
    achievement: '3,635+ Followers',
    highlight: '1,000+ daily search impressions · 6k avg/post',
    desc: 'LinkedIn: data science posts and hackathon updates. 3,635+ followers, 1,000+ daily search impressions.',
    tech: ['Content Strategy', 'Scriptwriting', 'Community'],
    link: 'https://www.linkedin.com/in/saadia-asghar',
    featured: true,
    showcase: 'flagship',
  },
  {
    id: 'instagram-bytes',
    title: 'Instagram @s._bytes',
    category: 'marketing',
    role: 'Tech Content Creator',
    achievement: 'Reels & Carousels',
    highlight: 'DS · AI tools · behind-the-scenes builds',
    desc: 'Short-form tech storytelling — reels and carousels that make complex topics approachable.',
    tech: ['Reels', 'Video', 'Instagram'],
    link: 'https://www.instagram.com/s._bytes',
    showcase: 'archive',
  },
  {
    id: 'atomcamp-reels',
    title: 'Atomcamp Reels',
    category: 'marketing',
    role: 'Campus Ambassador · Content',
    achievement: 'Educational Video',
    highlight: 'AI ethics · DS roadmaps · campus reach',
    desc: 'Educational reels on data science, AI ethics, and technical roadmaps produced as atomcamp Campus Ambassador.',
    tech: ['Video Ideation', 'Scriptwriting', 'DS Education'],
    link: 'https://marketing-portfolio-liart.vercel.app/',
    showcase: 'archive',
  },
];

export const EDUCATION = {
  school: 'Ghulam Ishaq Khan Institute of Engineering Sciences & Technology (GIKI)',
  location: 'Swabi, Pakistan',
  degree: 'B.Sc. Data Science',
  period: 'Sept. 2024 – June 2028 (Expected)',
};

export const EXPERIENCE = [
  {
    org: 'Najoomi',
    role: 'Artificial Intelligence Intern',
    period: 'July 2026 — Present',
    location: 'Remote / Hybrid',
    summary: 'Building and optimizing AI pipelines with a focus on Natural Language Processing (NLP) and Retrieval-Augmented Generation (RAG) models.',
  },
  {
    org: 'Canva & Canva Community GIKI',
    role: 'GIKI Campus Ambassador & Community Lead',
    period: 'June 2026 — Present',
    location: 'GIKI',
    summary: 'Leading the Canva student creator network on campus, hosting design thinking labs, training sessions, and template hackathons.',
  },
  {
    org: 'UROG GIKI',
    role: 'Marketing Director & Exec Council (formerly Officer Education & Member Bootcamp)',
    period: 'Jul. 2025 — Present',
    location: 'GIKI',
    summary: 'Led council operations and marketing team, coordinated public outreach, managed lead generation, and completed Bootcamp training.',
  },
  {
    org: 'Microsoft Club GIKI',
    role: 'Head of Marketing · MLSA (formerly Outreach, Logikal, Web Dev, Member)',
    period: 'Dec. 2024 — Present',
    location: 'GIKI',
    summary: 'Managing external relations, corporate linkages, and partnership outreach. Handled campaign logic, visual branding systems, and frontend layouts.',
  },
  {
    org: 'PreMed.PK',
    role: 'Graphic Design Associate (formerly Design Intern)',
    period: 'May 2025 — Dec. 2025',
    location: 'Remote',
    summary: 'Led visual identity creation, producing 30+ assets using Figma and Canva, increasing engagement by 40% and design delivery by 25%.',
  },
  {
    org: 'Atomcamp',
    role: 'Campus Ambassador · Content Creator',
    period: 'Feb. 2026 — Present',
    location: 'GIKI',
    summary: 'Ideated and produced educational reels on data science, AI ethics, and technical roadmaps on campus.',
  },
  {
    org: 'Devsinc',
    role: 'Campus Ambassador',
    period: 'Feb. 2025 — May 2026',
    location: 'GIKI',
    summary: 'Organized 10+ workshops and educational tours for 300+ students, generating 200+ signups.',
  },
  {
    org: 'Remotebase',
    role: 'Campus Ambassador',
    period: 'Feb. — Jul. 2025',
    location: 'GIKI',
    summary: 'Outreach for Hackfest 3.0, managing event logistics and applications for 300+ candidates.',
  },
  {
    org: 'Replit',
    role: 'Campus Ambassador',
    period: 'May 2026 — Present',
    location: 'GIKI',
    summary: 'Developer community engagement, building sprints, and campus outreach.',
  },
  {
    org: 'ACM Student GIKI Chapter',
    role: 'Member, Design Team & Volunteer',
    period: 'Oct. 2024 — Present',
    location: 'GIKI',
    summary: 'Designed event assets, supported Softcom\'25 and ACM/ICPC C++ basic workshops.',
  },
  {
    org: 'Google Developer Group GIKI',
    role: 'Core Team & Community Member',
    period: 'Nov. 2024 — Present',
    location: 'GIKI',
    summary: 'Core team member organizing study jams and community member supporting event execution.',
  },
  {
    org: 'Team Techno GIKI',
    role: 'Society Member',
    period: 'Oct. 2025 — Feb. 2026',
    location: 'GIKI',
    summary: 'Engaged in technology promotions and community sessions.',
  },
  {
    org: 'Leadership & Entrepreneurial Society (LES) GIKI',
    role: 'Organizing Volunteer',
    period: 'Sep. 2024 — Oct. 2024',
    location: 'GIKI',
    summary: 'Volunteered at GIKI\'s national All Pakistan Event, managing participant registration and logistics.',
  },
  {
    org: 'Ggdoc',
    role: 'Community Member',
    period: '2025 — Present',
    location: 'GIKI',
    summary: 'Collaborating with community developer networks and student tech groups.',
  },
];

export const TIMELINE_WINS_AND_ROLES = [
  {
    date: 'July 2026 — Present',
    title: 'Artificial Intelligence Intern',
    org: 'Najoomi',
    type: 'role',
    category: 'experience',
    description: 'Building and optimizing AI pipelines with a focus on Natural Language Processing (NLP) and Retrieval-Augmented Generation (RAG) models.',
    location: 'Remote / Hybrid'
  },
  {
    date: 'June 2026 — Present',
    title: 'GIKI Campus Ambassador & Community Lead',
    org: 'Canva & Canva Community GIKI',
    type: 'role',
    category: 'ambassadorship',
    description: 'Leading the Canva student creator network on campus, hosting design thinking labs, training sessions, and template hackathons.',
    location: 'GIKI'
  },
  {
    date: 'May 2026 — Present',
    title: 'Director of Marketing · Exec Council',
    org: 'UROG GIKI',
    type: 'role',
    category: 'leadership',
    description: 'Instagram & LinkedIn strategy, content planning, academic support campaigns.',
    location: 'GIKI'
  },
  {
    date: 'May 2026',
    title: '1st in Product Design & Top 5 Finalist',
    org: 'Vyrothon (NSTP)',
    type: 'win',
    category: 'hackathon',
    description: 'Lead Product Designer — 1st place in product design round out of 500+ national entries; among 5 finalists in Round 2. Built an immersive 3D gamified storytelling prototype.',
    location: 'National Science & Technology Park'
  },
  {
    date: 'May 2026 — Present',
    title: 'Campus Ambassador',
    org: 'Replit',
    type: 'role',
    category: 'ambassadorship',
    description: 'Fostering developer community engagement, building sprints, and campus outreach.',
    location: 'GIKI'
  },
  {
    date: 'April 2026',
    title: 'Top 10 Team Finalist',
    org: 'MIT HackNation',
    type: 'win',
    category: 'hackathon',
    description: 'Product & Full-Stack Developer for CallPilot, an autonomous voice AI scheduler. Ranked Top 10 globally.',
    location: 'Global Hub'
  },
  {
    date: 'February 2026 — Present',
    title: 'Campus Ambassador · Content Creator',
    org: 'Atomcamp',
    type: 'role',
    category: 'ambassadorship',
    description: 'Creating educational video reels on data science, AI ethics, and technical roadmaps.',
    location: 'GIKI'
  },
  {
    date: '2026',
    title: '2nd Place Winner',
    org: 'Hack@GIKI AI Challenge',
    type: 'win',
    category: 'hackathon',
    description: 'Full-stack & product lead for Skill Issue, an arcade-style AI learning platform.',
    location: 'GIKI'
  },
  {
    date: 'December 2025',
    title: '3rd Place Winner',
    org: 'BASED Pakistan · Web3 Hackathon',
    type: 'win',
    category: 'hackathon',
    description: 'Backend & Dashboard Developer for ChainTicket+, building a blockchain QR ticketing platform.',
    location: 'Pakistan'
  },
  {
    date: 'November 2025 — Present',
    title: 'Core Team Member',
    org: 'Google Developer Group GIKI',
    type: 'role',
    category: 'society',
    description: 'Core team member organizing study jams and community member supporting event execution.',
    location: 'GIKI'
  },
  {
    date: 'October 2025 — Present',
    title: 'Head of Marketing · MLSA',
    org: 'Microsoft Club GIKI',
    type: 'role',
    category: 'leadership',
    description: 'Leading visual design, content planning, and community outreach for the MLSA chapter.',
    location: 'GIKI'
  },
  {
    date: 'October 2025 — February 2026',
    title: 'Society Member',
    org: 'Team Techno GIKI',
    type: 'role',
    category: 'society',
    description: 'Supporting community technology sessions and outreach programs.',
    location: 'GIKI'
  },
  {
    date: 'August 2025 — Present',
    title: 'Microsoft Imagine Cup Participant',
    org: 'EcoBite',
    type: 'win',
    category: 'project',
    description: 'Full-stack developer and designer for a food waste reduction platform connecting NGOs and donors.',
    location: 'GIKI'
  },
  {
    date: 'May 2025 — Dec 2025',
    title: 'Graphic Design Associate (formerly Design Intern)',
    org: 'PreMed.PK',
    type: 'role',
    category: 'experience',
    description: 'Leading brand asset creation in Figma and Canva, resulting in a 40% engagement increase and 25% faster delivery.',
    location: 'Remote'
  },
  {
    date: 'February 2025 — May 2026',
    title: 'Campus Ambassador',
    org: 'Devsinc',
    type: 'role',
    category: 'ambassadorship',
    description: 'Organized 10+ workshops for 300+ GIKI students, generating 200+ qualified signups.',
    location: 'GIKI'
  },
  {
    date: 'February 2025 — July 2025',
    title: 'Campus Ambassador',
    org: 'Remotebase',
    type: 'role',
    category: 'ambassadorship',
    description: 'Liaison for Hackfest 3.0, driving outreach and coordinating 300+ campus applications.',
    location: 'GIKI'
  },
  {
    date: '2025 — Present',
    title: 'Community Member',
    org: 'Ggdoc',
    type: 'role',
    category: 'society',
    description: 'Collaborating with community developer networks and student tech groups.',
    location: 'GIKI'
  },
  {
    date: 'November 2024 — November 2025',
    title: 'Community Member',
    org: 'Google Developer Group GIKI',
    type: 'role',
    category: 'society',
    description: 'Participated in study jams, tech sessions, and supported developer event execution.',
    location: 'GIKI'
  },
  {
    date: 'October 2024 — Present',
    title: 'Member, Design Team & Volunteer',
    org: 'ACM GIKI Student Chapter',
    type: 'role',
    category: 'society',
    description: 'Designed event assets, supported Softcom\'25 and ACM/ICPC C++ basic workshops.',
    location: 'GIKI'
  },
  {
    date: 'September 2024 — October 2024',
    title: 'Event Organizing Volunteer',
    org: 'Leadership & Entrepreneurial Society (LES)',
    type: 'role',
    category: 'society',
    description: 'Supported event logistics and participant registration at GIKI\'s All Pakistan Event.',
    location: 'GIKI'
  }
];

export const SKILL_GROUPS = [
  {
    label: 'Data & Analytics',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Statistics', 'Matplotlib'],
    accent: 'spider-cyan',
  },
  {
    label: 'Marketing & Content',
    skills: ['Social Media', 'Content Strategy', 'Scriptwriting', 'Video Ideation', 'Community Outreach'],
    accent: 'spider-magenta',
  },
  {
    label: 'Design & UI/UX',
    skills: ['Figma', 'Canva', 'Affinity', 'Wireframing', 'Storytelling UI', 'Prototyping'],
    accent: 'spider-yellow',
  },
  {
    label: 'Development',
    skills: ['React', 'Next.js', 'TypeScript', 'Azure', 'Supabase', 'Git/GitHub'],
    accent: 'spider-purple',
  },
];

export const CERTIFICATIONS = [
  'AI Agents Intensive (Kaggle / Google)',
  'GitHub Foundations (Microsoft)',
  'Data Science (DataCamp)',
  'Graphic Design (DigiSkills)',
  'Hackfest 3.0 Participation (Remotebase)',
];

export const OPEN_TO = [
  'Product Designer · UI/UX internships (Figma, design systems)',
  'Junior Full-Stack Developer · React, Next.js, Python, AI agents',
  'Data Science Intern · ML pipelines, analytics, research projects',
  'Marketing Associate · content strategy, social, campus campaigns',
  'Freelance · brand identity, slides, and product UI',
  'Remote, hybrid, or on-site in Pakistan',
];

export const COMMUNITY_NODES = [
  { label: 'ACM GIKI', impact: 'Design & marketing for Softcom\'25. Nationwide competition assets.', color: '#00f3ff', x: 12, y: 18 },
  { label: 'GDGoC GIKI', impact: 'AI & web dev workshops for 100+ participants.', color: '#7a00ff', x: 78, y: 18 },
  { label: 'Devsinc', impact: '10+ workshops · 300+ students · 200+ signups.', color: '#ff0055', x: 82, y: 62 },
  { label: 'Microsoft Club', impact: 'Head of Marketing — MLSA content & outreach.', color: '#f9ff00', x: 42, y: 38 },
  { label: 'UROG', impact: 'Director of Marketing on Executive Council.', color: '#ff0055', x: 58, y: 78 },
  { label: 'Remotebase', impact: 'Hackfest 3.0 — 300+ applicants facilitated.', color: '#ff0055', x: 14, y: 72 },
];
