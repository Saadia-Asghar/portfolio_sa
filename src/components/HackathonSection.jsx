import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { HACKATHON_WINS, HACKATHON_SHOWCASE_IDS } from '../data/portfolio';

const tierStyles = {
  gold: 'signal-badge signal-badge-design',
  silver: 'signal-badge signal-badge-muted',
  bronze: 'signal-badge signal-badge-warn',
  top10: 'signal-badge signal-badge-build',
  participant: 'signal-badge signal-badge-muted',
};

const tierCardClass = {
  gold: 'hackathon-tier-gold',
  silver: 'hackathon-tier-silver',
  bronze: 'hackathon-tier-bronze',
  top10: 'hackathon-tier-top10',
  finalist: 'hackathon-tier-finalist',
  participant: 'hackathon-tier-participant',
};

const statPillClass = {
  '1st / Top 5': 'stat-pill-gold',
  Participated: 'border-white/15',
  '2nd': 'stat-pill-silver',
  'Top 10': 'stat-pill-cyan',
  '3rd': 'stat-pill-bronze',
};

const HackathonCard = ({ win, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className={`hackathon-card signal-card ${tierCardClass[win.tier]} h-full flex flex-col`}
  >
    <div className="flex items-start justify-between gap-3 mb-4">
      <span className={`inline-flex items-center gap-1.5 ${tierStyles[win.tier]}`}>
        <Trophy size={12} />
        {win.placement}
      </span>
      <span className="signal-meta">{win.period}</span>
    </div>

    <h3 className="signal-card-title">{win.project}</h3>
    <p className="signal-meta text-accent-build mt-1 uppercase tracking-wide">{win.event}</p>
    <p className="signal-meta mt-2">{win.role}</p>

    <p className="text-sm text-zinc-200 mt-4 leading-snug">{win.highlight}</p>
    <p className="text-sm text-zinc-500 mt-2 leading-relaxed flex-grow">{win.detail}</p>

    <div className="flex flex-wrap gap-1.5 mt-4">
      {win.tech.map((t) => (
        <span key={t} className="signal-chip">
          {t}
        </span>
      ))}
    </div>

    {(win.github || win.link) && (
      <div className="flex gap-4 mt-4 pt-4 border-t border-white/8 signal-card-actions">
        {win.github && (
          <a href={win.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={13} /> Code
          </a>
        )}
        {win.link && (
          <a href={win.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={13} /> Live
          </a>
        )}
      </div>
    )}
  </motion.article>
);

const HackathonSection = ({ embedded = false }) => {
  const showcase = HACKATHON_WINS.filter((w) => HACKATHON_SHOWCASE_IDS.includes(w.id));
  const alsoRan = HACKATHON_WINS.filter((w) => !HACKATHON_SHOWCASE_IDS.includes(w.id));

  const content = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {showcase.map((win, i) => (
          <HackathonCard key={win.id} win={win} index={i} />
        ))}
      </div>

      {alsoRan.length > 0 && (
        <p className="text-sm text-zinc-500 text-center mb-8">
          Also participated: {alsoRan.map((w) => `${w.project} (${w.event})`).join(' · ')}
        </p>
      )}

      <div className="flex flex-wrap justify-center gap-3">
        {[
          { label: '1st / Top 5', sub: 'Vyrothon' },
          { label: '2nd', sub: 'Hack@GIKI' },
          { label: 'Top 10', sub: 'MIT Hack Nation' },
          { label: '3rd', sub: 'BASED Pakistan' },
          { label: 'Participated', sub: 'Imagine Cup' },
        ].map((stat) => (
          <div key={stat.sub} className={`stat-pill signal-stat-pill text-center ${statPillClass[stat.label] || ''}`}>
            <p className="font-semibold text-white text-sm">{stat.label}</p>
            <p className="signal-meta mt-1 uppercase">{stat.sub}</p>
          </div>
        ))}
      </div>
    </>
  );

  if (embedded) return content;

  return (
    <section id="hackathons" className="section-block-wide dev-section">
      <SectionHeader
        index="Hackathons"
        title="Competitions"
        subtitle={`${showcase.length} flagship competition wins — curated for review`}
        accent="build"
      />
      {content}
    </section>
  );
};

export default HackathonSection;
