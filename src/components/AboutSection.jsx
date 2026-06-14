import React from 'react';
import { Download, Github } from 'lucide-react';
import { CONTACT, PROFILE, PORTFOLIO_STATS } from '../data/portfolio';
import HighlightHeading from './HighlightHeading';

const AboutSection = ({ onGoContact, onGoHomeSection, onSelectPath }) => (
  <section id="about" className="folio-section folio-align mag-editorial">
    <p className="mag-section-kicker">Editor&apos;s note</p>
    <HighlightHeading as="h2" tone="rose" className="folio-heading">
      About
    </HighlightHeading>

    <div className="folio-about-compact mag-editorial-grid">
      <div className="folio-about-photo folio-about-photo-sm mag-editorial-photo">
        <img src={CONTACT.profileImage} alt="Saadia Asghar" loading="lazy" />
      </div>

      <div>
        <p className="folio-lead mag-dropcap">{PROFILE.storyIntro}</p>
        <p className="folio-body">{PROFILE.storyBody}</p>

        <ul className="folio-stats folio-stats-compact">
          {PORTFOLIO_STATS.slice(0, 3).map((s) => (
            <li key={s.label}>
              <strong>{s.value}</strong>
              {s.label}
            </li>
          ))}
        </ul>

        <div className="folio-about-redirects">
          <button type="button" onClick={() => onGoHomeSection?.('ambassadors')} className="folio-hub-link">
            Ambassadors →
          </button>
          <button type="button" onClick={() => onGoHomeSection?.('wins')} className="folio-hub-link">
            Wins →
          </button>
          <button type="button" onClick={() => onSelectPath?.('design', 'cover')} className="folio-hub-link">
            Design →
          </button>
          <button type="button" onClick={() => onSelectPath?.('grow', 'experience')} className="folio-hub-link">
            Experience →
          </button>
        </div>

        <div className="folio-actions" style={{ marginTop: '1.25rem' }}>
          <button type="button" onClick={onGoContact} className="folio-btn-primary">
            Get in touch
          </button>
          <a href={CONTACT.resumePath} download="Saadia_Asghar_Resume.png" className="folio-btn-ghost">
            <Download size={14} /> Résumé
          </a>
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="folio-btn-ghost">
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
