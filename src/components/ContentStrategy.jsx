import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Briefcase, Megaphone, Users, Calendar, MapPin, Sparkles, HelpCircle } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { EXPERIENCE, TIMELINE_WINS_AND_ROLES } from '../data/portfolio';

const ExperienceSection = ({ embedded = false }) => {
  const [viewMode, setViewMode] = useState('timeline'); // 'timeline' | 'categorized'

  // Categorize experience items
  const ambassadorships = EXPERIENCE.filter(exp => 
    exp.org.toLowerCase().includes('canva') || 
    exp.org.toLowerCase().includes('replit') || 
    exp.org.toLowerCase().includes('atomcamp') || 
    exp.org.toLowerCase().includes('devsinc') || 
    exp.org.toLowerCase().includes('remotebase')
  );

  const societies = EXPERIENCE.filter(exp => 
    exp.org.toLowerCase().includes('acm') || 
    exp.org.toLowerCase().includes('gdg') || 
    exp.org.toLowerCase().includes('techno') || 
    exp.org.toLowerCase().includes('les') || 
    exp.org.toLowerCase().includes('ggdoc')
  );

  const professionalRoles = EXPERIENCE.filter(exp => 
    !ambassadorships.includes(exp) && !societies.includes(exp)
  );

  const getTimelineIcon = (category) => {
    switch (category) {
      case 'hackathon':
      case 'project':
        return <Trophy size={14} className="text-amber-400" />;
      case 'ambassadorship':
        return <Megaphone size={14} className="text-magenta-soft" />;
      case 'society':
        return <Users size={14} className="text-yellow-soft" />;
      default:
        return <Briefcase size={14} className="text-cyan-soft" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'hackathon':
      case 'project':
        return 'text-amber-400 border-amber-500/20';
      case 'ambassadorship':
        return 'text-purple-400 border-purple-500/20';
      case 'society':
        return 'text-yellow-400 border-yellow-500/20';
      default:
        return 'text-cyan-400 border-cyan-500/20';
    }
  };

  const content = (
    <div className="space-y-6">
      {/* View Mode Toggle */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => setViewMode('timeline')}
          className={`px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all border ${
            viewMode === 'timeline'
              ? 'bg-white text-zinc-950 border-white shadow-lg shadow-white/10 font-bold'
              : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:text-white hover:bg-zinc-800/40'
          }`}
        >
          ✦ Chronological Timeline
        </button>
        <button
          type="button"
          onClick={() => setViewMode('categorized')}
          className={`px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider transition-all border ${
            viewMode === 'categorized'
              ? 'bg-white text-zinc-950 border-white shadow-lg shadow-white/10 font-bold'
              : 'bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:text-white hover:bg-zinc-800/40'
          }`}
        >
          ✦ Ambassadorships, Roles &amp; Societies
        </button>
      </div>

      {viewMode === 'timeline' ? (
        /* CHRONOLOGICAL TIMELINE VIEW */
        <div className="relative border-l border-zinc-800/80 ml-3 md:ml-5 pl-6 md:pl-8 space-y-6">
          {TIMELINE_WINS_AND_ROLES.map((item, i) => (
            <motion.div
              key={`${item.org}-${item.title}-${i}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.03 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline Connector Dot */}
              <span 
                className={`absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full flex items-center justify-center bg-zinc-950 border-2 transition-all ${
                  item.type === 'win' 
                    ? 'border-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.4)]' 
                    : 'border-zinc-700'
                }`}
                aria-hidden="true"
              />

              {/* Timeline Card */}
              <div className={`p-5 rounded-lg border transition-all ${
                item.type === 'win'
                  ? 'bg-amber-950/10 border-amber-500/20 hover:border-amber-500/40 shadow-sm shadow-amber-950/5'
                  : 'bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700/80'
              }`}>
                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider ${getCategoryColor(item.category)}`}>
                    {getTimelineIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Title & Organization */}
                <h3 className="font-semibold text-base text-white">
                  {item.title}
                  <span className="text-zinc-400 font-normal"> · {item.org}</span>
                </h3>

                {/* Location */}
                {item.location && (
                  <p className="flex items-center gap-1 text-xs text-zinc-500 mt-1 mb-2">
                    <MapPin size={11} />
                    <span>{item.location}</span>
                  </p>
                )}

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        /* CATEGORIZED BENTO GRID VIEW */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* COLUMN 1: PROFESSIONAL & DESIGN ROLES */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Briefcase size={14} /> Professional &amp; Design Roles
            </h3>
            <div className="space-y-3">
              {professionalRoles.map((exp, i) => (
                <motion.div
                  key={exp.org}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all space-y-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-semibold text-sm text-white">{exp.role}</h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="text-cyan-400">{exp.org}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">{exp.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 2: AMBASSADORSHIPS */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Megaphone size={14} /> Campus Ambassadorships
            </h3>
            <div className="space-y-3">
              {ambassadorships.map((exp, i) => (
                <motion.div
                  key={exp.org}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all space-y-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-semibold text-sm text-white">{exp.role}</h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="text-purple-400">{exp.org}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">{exp.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* COLUMN 3: SOCIETIES & CLUBS */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-yellow-400 mb-4 flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Users size={14} /> Societies &amp; Clubs
            </h3>
            <div className="space-y-3">
              {societies.map((exp, i) => (
                <motion.div
                  key={exp.org}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700/80 transition-all space-y-2"
                >
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="font-semibold text-sm text-white">{exp.role}</h4>
                  </div>
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                    <span className="text-yellow-400">{exp.org}</span>
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-1">{exp.summary}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  if (embedded) return content;

  return (
    <section id="experience" className="section-block-wide">
      <SectionHeader
        index="Experience"
        title="Journey & Roles"
        subtitle="Chronological timeline of wins and experiences, alongside categorized leadership boards."
        accent="grow"
      />
      {content}
    </section>
  );
};

export default ExperienceSection;
