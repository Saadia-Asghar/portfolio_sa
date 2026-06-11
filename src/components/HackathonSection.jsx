import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { SectionGraphics } from './ComicGraphics';
import { HACKATHON_WINS } from '../data/portfolio';

const tierStyles = {
  gold: 'border-spider-yellow/40 bg-spider-yellow/5 text-spider-yellow',
  silver: 'border-gray-400/40 bg-white/5 text-gray-200',
  bronze: 'border-orange-400/40 bg-orange-400/5 text-orange-300',
  top10: 'border-spider-cyan/40 bg-spider-cyan/5 text-spider-cyan',
  participant: 'border-white/25 bg-white/[0.04] text-gray-300',
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
    className={`hackathon-card ${tierCardClass[win.tier]} h-full flex flex-col pl-6`}
  >
    <div className="flex items-start justify-between gap-3 mb-4">
      <span className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${tierStyles[win.tier]}`}>
        <Trophy size={12} />
        {win.placement}
      </span>
      <span className="text-[10px] font-mono text-gray-600 shrink-0">{win.period}</span>
    </div>

    <h3 className="font-tech font-bold text-white text-lg">{win.project}</h3>
    <p className="text-[11px] font-mono text-spider-cyan mt-1 uppercase tracking-wide">{win.event}</p>
    <p className="text-[11px] font-mono text-gray-500 mt-2">{win.role}</p>

    <p className="text-sm text-white/90 font-tech mt-4 leading-snug">{win.highlight}</p>
    <p className="text-sm text-gray-500 font-tech mt-2 leading-relaxed flex-grow">{win.detail}</p>

    <div className="flex flex-wrap gap-1.5 mt-4">
      {win.tech.map((t) => (
        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/10">
          {t}
        </span>
      ))}
    </div>

    {(win.github || win.link) && (
      <div className="flex gap-4 mt-4 pt-4 border-t border-white/5">
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

const HackathonSection = () => (
  <section id="hackathons" className="relative section-band section-band-orange py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
    <SectionGraphics variant="hackathons" />
    <SectionHeader
      index="04 · HACKATHONS"
      title="Hackathons & Competitions"
      subtitle={`${HACKATHON_WINS.length} events — equal detail, equal weight`}
      accent="orange"
      align="left"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-10">
      {HACKATHON_WINS.map((win, i) => (
        <HackathonCard key={win.id} win={win} index={i} />
      ))}
    </div>

    <div className="flex flex-wrap justify-center gap-3">
      {[
        { label: '1st / Top 5', sub: 'Vyrothon' },
        { label: '2nd', sub: 'Hack@GIKI' },
        { label: 'Top 10', sub: 'MIT Hack Nation' },
        { label: '3rd', sub: 'BASED Pakistan' },
        { label: 'Participated', sub: 'Imagine Cup' },
      ].map((stat) => (
        <div key={stat.sub} className={`stat-pill text-center ${statPillClass[stat.label] || ''}`}>
          <p className="font-tech font-bold text-white text-sm">{stat.label}</p>
          <p className="text-[10px] font-mono text-gray-500 mt-1 uppercase">{stat.sub}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HackathonSection;
