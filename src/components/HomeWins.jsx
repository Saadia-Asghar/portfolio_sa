import React from 'react';
import { Trophy, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { HACKATHON_WINS, HACKATHON_SHOWCASE_IDS } from '../data/portfolio';
import HighlightHeading from './HighlightHeading';

const tierAccent = {
  gold: 'mag-win-gold',
  silver: 'mag-win-silver',
  bronze: 'mag-win-bronze',
  top10: 'mag-win-top10',
};

const HomeWins = ({ onSelectPath }) => {
  const wins = HACKATHON_WINS.filter((w) => HACKATHON_SHOWCASE_IDS.includes(w.id));

  return (
    <section id="wins" className="mag-wins folio-align-wide" aria-labelledby="home-wins-heading">
      <HighlightHeading as="h2" id="home-wins-heading" tone="build" className="mag-wins-heading">
        Competition wins
      </HighlightHeading>
      <p className="mag-wins-lead">
        Hackathons and product competitions — placements, stacks, and links to code or demos.
      </p>

      <ol className="mag-wins-list">
        {wins.map((win) => (
          <li key={win.id} className={`mag-win-row ${tierAccent[win.tier] || ''}`}>
            <div className="mag-win-rank">
              <Trophy size={14} aria-hidden />
              <span>{win.placement}</span>
            </div>
            <div className="mag-win-body">
              <h3 className="mag-win-title">{win.project}</h3>
              <p className="mag-win-event">{win.event}</p>
              <p className="mag-win-detail">{win.highlight}</p>
              <div className="mag-win-tech">
                {win.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="mag-win-actions">
              {win.github && (
                <a href={win.github} target="_blank" rel="noopener noreferrer" className="mag-win-link">
                  <Github size={14} /> Code
                </a>
              )}
              {win.link && (
                <a href={win.link} target="_blank" rel="noopener noreferrer" className="mag-win-link">
                  <ExternalLink size={14} /> Live
                </a>
              )}
              {win.id === 'vyrothon' && (
                <button type="button" onClick={() => onSelectPath?.('design', 'vyrothon')} className="mag-win-link">
                  Case study <ArrowRight size={14} />
                </button>
              )}
            </div>
          </li>
        ))}
      </ol>

      <button type="button" onClick={() => onSelectPath?.('build', 'hackathons')} className="mag-wins-more">
        Full competition list <ArrowRight size={14} />
      </button>
    </section>
  );
};

export default HomeWins;
