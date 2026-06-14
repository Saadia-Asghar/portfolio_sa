import { CONTACT, PROFILE } from './portfolio';
import { PATH_IDS, PORTFOLIO_PATHS } from './paths';

/** Set VITE_SITE_URL in production to your live domain (e.g. https://yoursite.vercel.app) */
export const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://saadia-asghar.github.io/portfolio_sa';

export const SITE = {
  name: 'Saadia Asghar',
  brand: 'Prism Field',
  defaultTitle: 'Saadia Asghar | Data Science · Product Design · Marketing Portfolio',
  defaultDescription:
    'Saadia Asghar — B.Sc. Data Science @ GIKI. Portfolio across Build (engineering & hackathons), Design (Figma & product UI), and Grow (marketing & brand). Vyrothon Top 5, MIT HackNation Top 10.',
  keywords: [
    'Saadia Asghar',
    'GIKI portfolio',
    'data science portfolio',
    'product designer Pakistan',
    'UI UX portfolio',
    'hackathon projects',
    'full stack developer student',
    'marketing portfolio',
    'Figma case studies',
  ].join(', '),
  locale: 'en_US',
  image: `${SITE_URL}/saadia-profile.png`,
  twitter: '@s._bytes',
};

export const PATH_SEO = {
  home: {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  build: {
    title: 'Build Track · Engineering & Projects | Saadia Asghar',
    description:
      'Hackathon wins, full-stack repos, data science & AI agent projects — GIKI-Connect, Web3 builds, and GitHub-backed engineering proof.',
  },
  design: {
    title: 'Design Track · Product & Visual Portfolio | Saadia Asghar',
    description:
      'Product design case studies, Figma prototypes, Vyrothon UI, ACM & MLSA collateral, and PreMed.PK visual systems by Saadia Asghar.',
  },
  grow: {
    title: 'Grow Track · Marketing & Brand | Saadia Asghar',
    description:
      'Campus marketing, content strategy, social growth metrics, and brand campaigns — growth portfolio for Saadia Asghar.',
  },
};

export function getPathSeo(path) {
  return PATH_SEO[path] || PATH_SEO.home;
}

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: CONTACT.name,
    jobTitle: PROFILE.title,
    description: PROFILE.intro,
    email: CONTACT.email,
    url: SITE_URL,
    image: SITE.image,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Islamabad',
      addressCountry: 'PK',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Ghulam Ishaq Khan Institute (GIKI)',
    },
    sameAs: [CONTACT.github, CONTACT.linkedin, CONTACT.instagram, CONTACT.designPortfolio],
    knowsAbout: [
      'Data Science',
      'Product Design',
      'UI/UX Design',
      'Digital Marketing',
      'Full-Stack Development',
      'Hackathons',
    ],
  };
}

export function webSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${SITE.name} — ${SITE.brand}`,
    url: SITE_URL,
    description: SITE.defaultDescription,
    author: { '@type': 'Person', name: CONTACT.name },
    inLanguage: 'en',
  };
}

export function portfolioItemListJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Portfolio paths',
    itemListElement: PATH_IDS.map((id, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: PORTFOLIO_PATHS[id].title,
      description: PORTFOLIO_PATHS[id].tagline,
      url: `${SITE_URL}/#${id}`,
    })),
  };
}
