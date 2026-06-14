import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';
import { DESIGN_BOOK_TABS } from '../data/designBook';

function pathSections(pathId) {
  if (pathId === 'design') {
    return DESIGN_BOOK_TABS.map((t) => ({ id: t.id, label: t.label }));
  }
  return PORTFOLIO_PATHS[pathId].volume.tabs.map((t) => ({ id: t.id, label: t.label }));
}

const PathHub = ({ onSelectPath }) => (
  <section id="paths" className="folio-section folio-align-wide" aria-labelledby="path-hub-heading">
    <h2 id="path-hub-heading" className="folio-heading">
      Choose a path
    </h2>
    <p className="folio-body folio-section-intro">
      Three focused tracks — each section opens one topic at a time so nothing piles up on one page.
    </p>

    <div className="folio-hub-list">
      {PATH_IDS.map((id, i) => {
        const p = PORTFOLIO_PATHS[id];
        const Icon = p.icon;
        const sections = pathSections(id);

        return (
          <motion.article
            key={id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`folio-hub-card folio-hub-card-${p.accent}`}
          >
            <button
              type="button"
              onClick={() => onSelectPath(id)}
              className="folio-hub-card-main"
            >
              <span className={`folio-hub-icon folio-hub-icon-${p.accent}`}>
                <Icon size={20} />
              </span>
              <span className="folio-hub-card-copy">
                <span className="folio-path-recruiter">{p.recruiter}</span>
                <span className="folio-hub-card-title">{p.title}</span>
                <span className="folio-path-tagline">{p.tagline}</span>
              </span>
              <ArrowRight size={18} className="folio-hub-arrow" />
            </button>

            <ul className="folio-hub-links">
              {sections.map((s) => (
                <li key={s.id}>
                  <button type="button" onClick={() => onSelectPath(id, s.id)} className="folio-hub-link">
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.article>
        );
      })}
    </div>
  </section>
);

export default PathHub;
