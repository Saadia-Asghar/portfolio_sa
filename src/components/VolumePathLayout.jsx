import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PORTFOLIO_PATHS } from '../data/paths';
import HighlightHeading from './HighlightHeading';

const VolumePathLayout = ({ path, onBack, children }) => {
  const meta = PORTFOLIO_PATHS[path];
  if (!meta) return null;

  return (
    <section className={`mag-dept volume-zone volume-zone-${meta.accent} scroll-mt-24`}>
      <header className="mag-dept-header">
        <div className="mag-dept-header-inner">
          {onBack && (
            <button type="button" onClick={onBack} className="mag-dept-back">
              <ArrowLeft size={15} /> Back to index
            </button>
          )}
          <p className="mag-dept-kicker">{meta.label} department</p>
          <HighlightHeading as="h1" tone={meta.accent} className="mag-dept-title">
            {meta.title}
          </HighlightHeading>
          <p className="mag-dept-dek">{meta.tagline}</p>
          <ul className="mag-dept-credits">
            {meta.proof.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>
      </header>

      <div className="mag-dept-body volume-zone-inner">{children}</div>
    </section>
  );
};

export default VolumePathLayout;
