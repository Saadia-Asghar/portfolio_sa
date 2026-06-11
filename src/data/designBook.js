/** Design portfolio — synced from design_portfolio repo / design-portfolio-rouge-five.vercel.app */

const FIGMA = {
  vyrothon:
    'https://www.figma.com/design/E9IKt31asTEeVyKS595YX3/Vyro?node-id=4-17&t=jjLeblvLTYZQ2yTd-1',
  callpilot:
    'https://www.figma.com/design/yw4reHaM5S3p0WADMxoo2X/Call-Pilot?node-id=11-2&t=9ir8e8FNP0r0qLEj-1',
  chainticket:
    'https://www.figma.com/design/ZZ259rh7azNEfkHnmRLywl/ChainTicket?node-id=0-1&t=EadmwPrVzE99VRTb-1',
  privyhealth:
    'https://www.figma.com/design/Oe9j3rJoPVx18SFIPENJE9/Privy-Health?node-id=0-1&t=Em4bdeQzkCb5OnMf-1',
  moodmaze:
    'https://www.figma.com/design/HlnuZL5J1Wk8q6xaAseJ8F/Mood-Maze?t=b3mlhQ4jSQqs94QJ-1',
};

export const DESIGN_BOOK = {
  edition: 'Vol. I · MMXXVI',
  tagline: "A designer's book of work — 2026 edition",
  heroLine:
    'Bringing creative to design — across product, brand, and student communities.',

  marqueeWords: [
    'Product Design',
    'Immersive UI',
    'Storytelling-based UI',
    'Wireframing',
    'Prototyping',
    'Visual Identity',
    'Dashboards',
    'Graphic Design',
    'Community Design',
    'Healthtech',
  ],

  manifesto: {
    quote:
      'I believe the best products feel like good stationery — calm, confident, and quietly delightful.',
    bio: 'B.Sc. Data Science student at GIKI and Graphic Design Associate at PreMed.PK. Participated in Vyrothon in the Product Design category — 1st in the opening round, Top 5 Finalist out of 500+ applicants nationally. Top 10 at MIT Hack Nation with CallPilot, 3rd at BASED Pakistan with ChaInTicket+.',
    principles: [
      { n: '01', text: 'Clarity is a form of kindness.' },
      { n: '02', text: 'Design like a writer — every pixel earns its place.' },
      { n: '03', text: 'Ship, watch, edit. Great work is a second draft.' },
      { n: '04', text: 'A system beats a stroke of genius, every time.' },
    ],
  },

  stats: [
    { value: '500+', label: 'Vyrothon applicants nationally — Top 5 Finalist' },
    { value: '30+', label: 'Visual assets at PreMed.PK' },
    { value: '40%', label: 'Engagement lift on PreMed.PK assets' },
    { value: '10+', label: 'Workshops led or supported' },
  ],

  vyrothon: {
    title: 'Vyrothon — Product Design Submission',
    badge: '1st · Product Design Round · Top 5 Finalist nationally',
    event: 'Vyrothon · Product Design & Innovation · April 2026',
    summary:
      'High-fidelity interactive prototype focused on user presence and gamified storytelling — built and shown at the National Science & Technology Park (NSTP).',
    image: '/design/vyrothon.png',
    figmaUrl: FIGMA.vyrothon,
    problem:
      'The brief asked for a considered product-design response to a design-and-innovation challenge. The work had to read clearly on its own — so anyone opening the file could understand the idea without a live pitch.',
    approach: [
      'Framed the opportunity around user presence, not features — what would make someone feel inside the product, not on top of it.',
      'Sketched core moments on paper before opening Figma; complex screens have to earn their complexity.',
      'Built a high-fidelity interactive prototype at NSTP with gamified storytelling interfaces.',
      'Reviewed the file end-to-end and removed anything that did not support the core idea.',
    ],
    outcome:
      'Ranked 1st in the Product Design round and advanced to Top 5 Finalist out of 500+ applicants nationally. The prototype carried the idea — no pitch required.',
    metrics: [
      { value: '500+', label: 'Applicants nationally' },
      { value: '1st', label: 'Product Design Round' },
      { value: 'Top 5', label: 'Final standing' },
      { value: 'Product', label: 'Design category' },
    ],
    tools: ['Figma', 'Immersive UI', 'Storytelling UX', 'Prototyping'],
  },

  productWork: [
    {
      id: 'callpilot',
      title: 'CallPilot — AI Operations Console',
      badge: 'Top 10 · MIT Hack Nation',
      role: 'Product · React + Python · Jan 2026',
      desc: 'AI-driven task automation platform ranked Top 10 globally.',
      image: '/design/callpilot.png',
      link: FIGMA.callpilot,
      linkLabel: 'Open in Figma',
      tags: ['Product', 'AI', 'Auth'],
    },
    {
      id: 'chainticket',
      title: 'ChaInTicket+ — Blockchain Ticketing',
      badge: '3rd · BASED Pakistan',
      role: 'Product + Dashboard · Dec 2025',
      desc: "Pakistan's first on-chain ticketing concept with realtime dashboards.",
      image: '/design/chainticket.png',
      link: FIGMA.chainticket,
      linkLabel: 'Open in Figma',
      tags: ['Product', 'Blockchain', 'Hero'],
    },
    {
      id: 'privyhealth',
      title: 'PrivyHealth — Patient-Owned Records',
      badge: 'Entangled Hackathon 2026',
      role: 'Healthtech product surface',
      desc: 'Patient-owned encrypted medical record layer — full product surface.',
      image: '/design/privyhealth.png',
      link: FIGMA.privyhealth,
      linkLabel: 'Open in Figma',
      tags: ['Healthtech', 'Dashboard'],
    },
    {
      id: 'moodmaze',
      title: 'MoodMaze — The Cinematic Engine',
      badge: 'Independent concept',
      role: 'Cinematic interface',
      desc: "Mood-driven storytelling interface — 'Stop scrolling. Start watching.'",
      image: '/design/moodmaze.png',
      link: FIGMA.moodmaze,
      linkLabel: 'Open in Figma',
      tags: ['Concept', 'Storytelling', 'Cinema'],
    },
  ],

  acmWork: [
    {
      id: 'acm-wic',
      title: 'Women in Computing — Poster',
      subtitle: 'Event poster · Canva',
      link: 'https://canva.link/e92p1vc5liwinkp',
      linkLabel: 'View on Canva',
      tags: ['Poster', 'WIC'],
    },
    {
      id: 'acm-apsc',
      title: 'All-Pakistan Software Competition',
      subtitle: 'Campaign collateral',
      link: 'https://canva.link/at2vzf2pdvwjy8r',
      linkLabel: 'View on Canva',
      tags: ['Campaign'],
    },
    {
      id: 'acm-carbonteq',
      title: 'Carbonteq — Sponsor Collateral',
      subtitle: 'Industry partner deliverable',
      link: 'https://canva.link/obnr96908orfwio',
      linkLabel: 'View on Canva',
      tags: ['Sponsor'],
    },
    {
      id: 'acm-induction',
      title: 'ACM Induction',
      subtitle: 'Member onboarding visual',
      link: 'https://canva.link/nllc230n1faj0h6',
      linkLabel: 'View on Canva',
      tags: ['Induction'],
    },
  ],

  mlsaWork: [
    {
      id: 'mlsa-linkedin',
      title: 'Microsoft LinkedIn — Carousel',
      subtitle: 'Social carousel for community LinkedIn',
      link: 'https://canva.link/jiy8mij69zge9ps',
      linkLabel: 'View on Canva',
      tags: ['Social', 'LinkedIn'],
    },
    {
      id: 'mlsa-ldp',
      title: 'Learning & Development Session',
      subtitle: 'Session poster',
      link: 'https://canva.link/27cdkido37176p0',
      linkLabel: 'View on Canva',
      tags: ['Poster'],
    },
    {
      id: 'mlsa-datacamp',
      title: 'Datacamp & Code Series',
      subtitle: 'Series identity poster',
      link: 'https://canva.link/otu10gcpgs1uild',
      linkLabel: 'View on Canva',
      tags: ['Series', 'Education'],
    },
    {
      id: 'mlsa-card',
      title: 'Microsoft — Member Card',
      subtitle: 'Member card visual',
      link: 'https://canva.link/nni270xk4980970',
      linkLabel: 'View on Canva',
      tags: ['Identity'],
    },
    {
      id: 'mlsa-info',
      title: 'Info Session',
      subtitle: 'Event poster',
      link: 'https://canva.link/y7y0b9un3uyj6sc',
      linkLabel: 'View on Canva',
      tags: ['Event'],
    },
    {
      id: 'mlsa-cert',
      title: 'Member Certificate',
      subtitle: 'Certificate template',
      link: 'https://canva.link/et94srh8680cbzs',
      linkLabel: 'View on Canva',
      tags: ['Certificate'],
    },
    {
      id: 'mlsa-induct',
      title: 'Inductions',
      subtitle: 'Onboarding visuals',
      link: 'https://canva.link/m3zy4dqfvnbzw7u',
      linkLabel: 'View on Canva',
      tags: ['Induction'],
    },
    {
      id: 'mlsa-panaflex',
      title: 'Panaflex',
      subtitle: 'Large-format event signage',
      link: 'https://canva.link/nfvzr08alsqq9r9',
      linkLabel: 'View on Canva',
      tags: ['Print', 'Signage'],
    },
  ],

  premedWork: [
    {
      id: 'premed-system',
      title: 'Visual-Identity Asset System',
      subtitle: '30+ assets · Canva + Figma',
      desc: '40% lift in digital engagement',
      tags: ['Visual Identity'],
    },
    {
      id: 'premed-workflow',
      title: 'Design-to-Delivery Workflow',
      subtitle: 'Template standardization',
      desc: '25% faster turnaround on recurring assets',
      tags: ['Systems'],
    },
    {
      id: 'premed-edu-1',
      title: 'Education Slides — Series I',
      subtitle: 'Slide deck · Canva',
      link: 'https://canva.link/2gr7145jlbx0ttr',
      linkLabel: 'View on Canva',
      tags: ['Slides', 'Education'],
    },
    {
      id: 'premed-edu-2',
      title: 'Education Slides — Series II',
      subtitle: 'Slide deck · Canva',
      link: 'https://canva.link/yxt9f7vlj7zs2ex',
      linkLabel: 'View on Canva',
      tags: ['Slides', 'Education'],
    },
    {
      id: 'premed-edu-3',
      title: 'Education Slides — Series III',
      subtitle: 'Slide deck · Canva',
      link: 'https://canva.link/dvrkgp6zobfwh9k',
      linkLabel: 'View on Canva',
      tags: ['Slides', 'Education'],
    },
  ],

  process: [
    {
      step: '01',
      title: 'Understand',
      desc: "Read the brief twice and write the problem in my own words. If I can't say it in one sentence, I'm not ready to design yet.",
    },
    {
      step: '02',
      title: 'Sketch',
      desc: 'Sketch on paper before opening Figma. The first draft is for me — quick, loose, and honest.',
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Move into Figma (and Canva, Affinity) with a consistent type, spacing, and colour system.',
    },
    {
      step: '04',
      title: 'Review',
      desc: "Read the file start to finish and remove anything that doesn't earn its place. Editing is part of the work.",
    },
  ],

  awards: [
    {
      title: '1st · Product Design Round',
      context: 'Vyrothon · 500+ applicants',
      period: 'Apr 2026',
      link: FIGMA.vyrothon,
    },
    {
      title: 'Top 5 Finalist (National)',
      context: 'Vyrothon · Product Design',
      period: 'Apr 2026',
    },
    {
      title: 'Top 10 Globally',
      context: 'MIT Hack Nation · CallPilot',
      period: 'Jan 2026',
      link: FIGMA.callpilot,
    },
    {
      title: '3rd Place',
      context: 'BASED Pakistan · ChaInTicket+',
      period: 'Dec 2025',
      link: FIGMA.chainticket,
    },
    {
      title: 'Microsoft Imagine Cup',
      context: 'EcoBite · food-waste platform',
      period: 'Aug 2025',
    },
    {
      title: 'Promoted to Associate',
      context: 'PreMed.PK · Graphic Design',
      period: 'May 2025',
    },
    {
      title: 'Student Education Officer',
      context: 'UROG · GIKI',
      period: '2024 – Present',
    },
    {
      title: 'Core Design & Marketing',
      context: 'ACM · GIKI',
      period: '2024 – Present',
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
    'Community & outreach',
  ],

  designTools: ['Figma', 'Canva', 'Affinity'],
  techStack: ['Python', 'SQL', 'C++', 'React', 'HTML/CSS', 'Azure', 'Firebase', 'Git/GitHub'],
  designCerts: [
    'AI Agents Intensive — Kaggle / Google',
    'GitHub Foundations — Microsoft',
    'Data Science — DataCamp',
    'Graphic Design — DigiSkills',
    'Hackfest 3.0 Participation — Remotebase',
  ],
};

export const DESIGN_BOOK_TABS = [
  { id: 'cover', label: 'Cover', roman: '✦' },
  { id: 'manifesto', label: 'Manifesto', roman: 'I' },
  { id: 'vyrothon', label: 'Vyrothon', roman: 'II' },
  { id: 'product', label: 'Product', roman: 'III' },
  { id: 'acm', label: 'ACM', roman: 'IV' },
  { id: 'mlsa', label: 'MLSA', roman: 'V' },
  { id: 'premed', label: 'PreMed', roman: 'VI' },
  { id: 'process', label: 'Process', roman: 'VII' },
  { id: 'awards', label: 'Awards', roman: 'VIII' },
];
