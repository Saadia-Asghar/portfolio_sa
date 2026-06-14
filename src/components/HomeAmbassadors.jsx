import React from 'react';
import { Megaphone, ArrowRight, ExternalLink } from 'lucide-react';
import { FEATURED_AMBASSADORS } from '../data/portfolio';
import HighlightHeading from './HighlightHeading';

const HomeAmbassadors = ({ onSelectPath }) => (
  <section id="ambassadors" className="mag-ambassadors folio-align-wide" aria-labelledby="home-ambassadors-heading">
    <HighlightHeading as="h2" id="home-ambassadors-heading" tone="grow" className="mag-ambassadors-heading">
      Campus ambassadorships
    </HighlightHeading>
    <p className="mag-ambassadors-lead">
      Official campus ambassador for Devsinc, Atomcamp, and Replit at GIKI.
    </p>

    <ul className="mag-ambassadors-grid">
      {FEATURED_AMBASSADORS.map((item) => (
        <li key={item.id} className="mag-ambassador-card">
          <div className="mag-ambassador-head">
            <span className="mag-ambassador-icon" aria-hidden>
              <Megaphone size={14} />
            </span>
            {item.present && <span className="mag-ambassador-present">Present</span>}
          </div>
          <h3 className="mag-ambassador-org">{item.org}</h3>
          <p className="mag-ambassador-role">{item.role}</p>
          {!item.present && <p className="mag-ambassador-period">{item.period}</p>}
          <p className="mag-ambassador-highlight">{item.highlight}</p>
          <p className="mag-ambassador-summary">{item.summary}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="mag-ambassador-link">
              <ExternalLink size={13} /> {item.org}
            </a>
          )}
        </li>
      ))}
    </ul>

    <button type="button" onClick={() => onSelectPath?.('grow', 'experience')} className="mag-ambassadors-more">
      Full experience &amp; leadership <ArrowRight size={14} />
    </button>
  </section>
);

export default HomeAmbassadors;
