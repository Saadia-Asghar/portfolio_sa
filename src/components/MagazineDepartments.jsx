import React from 'react';
import { PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';
import { DESIGN_BOOK_TABS } from '../data/designBook';
import HighlightHeading from './HighlightHeading';

function articlesForPath(pathId) {
  if (pathId === 'design') {
    return DESIGN_BOOK_TABS.map((t) => ({ id: t.id, label: t.label, roman: t.roman }));
  }
  return PORTFOLIO_PATHS[pathId].volume.tabs.map((t) => ({
    id: t.id,
    label: t.label,
    roman: t.roman,
  }));
}

const MagazineDepartments = ({ onSelectPath }) => (
  <section className="mag-toc folio-align-wide" aria-labelledby="mag-toc-heading">
    <HighlightHeading as="h2" id="mag-toc-heading" tone="lemon" className="mag-toc-heading">
      Table of contents
    </HighlightHeading>
    <p className="mag-toc-lead">Three departments. Each article opens on its own page — no endless scroll.</p>

    <div className="mag-toc-grid">
      {PATH_IDS.map((pathId) => {
        const meta = PORTFOLIO_PATHS[pathId];
        const articles = articlesForPath(pathId);

        return (
          <article key={pathId} className={`mag-toc-dept mag-toc-dept-${meta.accent}`}>
            <header className="mag-toc-dept-head">
              <span className="mag-toc-dept-label">{meta.label} department</span>
              <HighlightHeading as="h3" tone={meta.accent} className="mag-toc-dept-title">
                {meta.title}
              </HighlightHeading>
              <p className="mag-toc-dept-tagline">{meta.tagline}</p>
              <button type="button" onClick={() => onSelectPath(pathId)} className="mag-toc-enter">
                Read department →
              </button>
            </header>
            <ol className="mag-toc-articles">
              {articles.map((article) => (
                <li key={article.id}>
                  <button
                    type="button"
                    onClick={() => onSelectPath(pathId, article.id)}
                    className="mag-toc-article"
                  >
                    <span className="mag-toc-roman">{article.roman}</span>
                    <span className="mag-toc-article-label">{article.label}</span>
                  </button>
                </li>
              ))}
            </ol>
          </article>
        );
      })}
    </div>
  </section>
);

export default MagazineDepartments;
