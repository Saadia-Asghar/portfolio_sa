import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ACHIEVEMENTS } from '../data/portfolio';

const TRACKS = [
  { id: 'all', label: 'All' },
  { id: 'build', label: 'Build' },
  { id: 'grow', label: 'Grow' },
];

const AchievementCard = ({ item }) => (
  <motion.article layout initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="achievement-card">
    <div className="flex items-center justify-between gap-2 mb-3">
      <span className={`track-pill track-${item.track}`}>{item.track === 'build' ? 'Build' : 'Grow'}</span>
      {item.period && <span className="text-xs text-zinc-600">{item.period}</span>}
    </div>
    <h3 className="font-semibold text-white">{item.title}</h3>
    <p className="text-xs text-accent-design mt-2">{item.badge}</p>
    <p className="text-sm text-zinc-500 leading-relaxed mt-3 flex-grow">{item.detail}</p>
    {item.link && (
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link mt-4">
        {item.linkLabel || 'View'} <ExternalLink size={12} />
      </a>
    )}
  </motion.article>
);

const AchievementsSection = ({ embedded = false }) => {
  const [track, setTrack] = useState('all');
  const filtered = track === 'all' ? ACHIEVEMENTS : ACHIEVEMENTS.filter((a) => a.track === track);

  const content = (
    <>
      <div className="flex gap-2 mb-8">
        {TRACKS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTrack(t.id)}
            className={`filter-pill border-white/10 ${track === t.id ? 'filter-pill-active' : 'text-zinc-500 hover:text-white'}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </motion.div>
    </>
  );

  if (embedded) return content;

  return (
    <section id="achievements" className="section-block-wide">
      <SectionHeader index="Achievements" title="Highlights" subtitle="Build wins and marketing leadership — equal weight." accent="muted" />
      {content}
    </section>
  );
};

export default AchievementsSection;
