import { useEffect } from 'react';
import { getPathSeo, SITE, SITE_URL } from '../data/seo';

const setMeta = (attr, key, value) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
};

const setLink = (rel, href) => {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const SeoHead = ({ path = 'home' }) => {
  useEffect(() => {
    const { title, description } = getPathSeo(path);
    const canonical = path === 'home' ? SITE_URL : `${SITE_URL}/#${path}`;

    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', SITE.keywords);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', SITE.image);
    setMeta('property', 'og:site_name', SITE.brand);
    setMeta('property', 'og:locale', SITE.locale);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', SITE.image);
    setLink('canonical', canonical);
  }, [path]);

  return null;
};

export default SeoHead;
