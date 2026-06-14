import { useEffect } from 'react';
import { personJsonLd, webSiteJsonLd, portfolioItemListJsonLd } from '../data/seo';

const JsonLd = () => {
  useEffect(() => {
    const id = 'portfolio-jsonld';
    let script = document.getElementById(id);
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [personJsonLd(), webSiteJsonLd(), portfolioItemListJsonLd()],
    });
  }, []);

  return null;
};

export default JsonLd;
