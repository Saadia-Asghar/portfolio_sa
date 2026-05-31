import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ACHIEVEMENTS } from '../data/portfolio';

const TRACKS = [
  { id: 'all', label: 'All' },
  { id: 'build', label: 'Build', desc: 'Hackathons · products · code' },
  { id: 'grow', label: 'Grow', desc: 'Marketing · leadership · content' },
];

const AchievementCard = ({ item }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="achievement-card h-full flex flex-col"
  >
    <div className="flex items-center justify-between gap-2 mb-3">
      <span className={`track-pill track-${item.track}`}>
        {item.track === 'build' ? 'Build' : 'Grow'}
      </span>
      {item.period && (
        <span className="text-[10px] font-mono text-gray-600">{item.period}</span>
      )}
    </div>
    <h3 className="font-tech font-bold text-white text-base leading-snug">{item.title}</h3>
    <p className="text-spider-yellow font-mono text-[11px] mt-2 leading-snug">{item.badge}</p>
    <p className="text-sm text-gray-400 font-tech leading-relaxed mt-3 flex-grow">{item.detail}</p>
    {item.link && (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[10px] font-mono text-spider-cyan uppercase tracking-wider mt-4 hover:underline"
      >
        {item.linkLabel || 'View'} <ExternalLink size={11} />
      </a>
    )}
  </motion.article>
);

const AchievementsSection = () => {
  const [track, setTrack] = useState('all');

  const filtered =
    track === 'all' ? ACHIEVEMENTS : ACHIEVEMENTS.filter((a) => a.track === track);

  const buildCount = ACHIEVEMENTS.filter((a) => a.track === 'build').length;
  const growCount = ACHIEVEMENTS.filter((a) => a.track === 'grow').length;

  return (
    <section id="achievements" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
      <SectionHeader
        index="04 · ACHIEVEMENTS"
        title="Build & Grow"
        subtitle={`${buildCount} build wins · ${growCount} marketing & leadership highlights — equal weight`}
        accent="cyan"
        align="left"
      />

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        <div className="flex gap-2 p-1 rounded-lg bg-white/[0.03] border border-white/10 w-fit">
          {TRACKS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTrack(t.id)}
              className={`px-4 py-2 rounded-md text-[11px] font-mono uppercase tracking-wider transition-colors ${
                track === t.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-600 font-tech">
          {TRACKS.find((t) => t.id === track)?.desc}
        </p>
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filtered.map((item) => (
          <AchievementCard key={item.id} item={item} />
        ))}
      </motion.div>
    </section>
  );
};

export default AchievementsSection;
