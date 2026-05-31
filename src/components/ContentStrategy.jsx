import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Palette, Users, GraduationCap } from 'lucide-react';
import ComicPanel from './ComicPanel';
import SectionHeader from './SectionHeader';
import { EXPERIENCE } from '../data/portfolio';

const ICONS = [Palette, Users, Briefcase, GraduationCap];
const ACCENTS = ['magenta', 'cyan', 'yellow', 'purple'];

const ExperienceCard = ({ org, role, period, location, impact, metrics, color, icon: Icon, index }) => (
  <ComicPanel accent={ACCENTS[index % ACCENTS.length]} tilt={index % 2 ? 1 : -1}>
    <div className="relative z-10 flex flex-col h-full min-h-[320px]">
      <div className="flex justify-between items-start mb-5 gap-3">
        <div
          className="p-3 rounded-xl bg-white/5 border-2 border-white/10 comic-sticker"
          style={{ color, borderColor: `${color}44` }}
        >
          <Icon size={22} />
        </div>
        <div className="text-right">
          <p className="text-[9px] font-mono text-gray-400 uppercase tracking-wider">{period}</p>
          <p className="text-[9px] font-mono text-gray-600 uppercase">{location}</p>
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-tech font-bold text-white mb-1 leading-tight">{org}</h3>
      <p className="font-display text-spider-yellow text-base tracking-wide mb-4 uppercase">{role}</p>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{impact}</p>

      <div className="space-y-2 mt-auto pt-5 border-t border-dashed border-white/10">
        {metrics.map((m) => (
          <div key={m} className="flex items-center gap-2 text-[10px] font-mono text-gray-400">
            <div className="w-2 h-2 rotate-45 shrink-0" style={{ backgroundColor: color }} />
            <span>{m}</span>
          </div>
        ))}
      </div>
    </div>
  </ComicPanel>
);

const ContentStrategy = () => (
  <section id="experience" className="py-24 md:py-32 relative overflow-hidden px-4 md:px-8 scroll-mt-24">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spider-magenta/30 to-transparent" />
    <div className="absolute right-0 top-1/4 w-32 h-32 halftone-corner opacity-15 pointer-events-none hidden md:block" />

    <div className="max-w-7xl mx-auto">
      <SectionHeader
        index="02 · EXPERIENCE"
        title="Where I've Led"
        subtitle="Design roles, campus ambassadorships & society work"
        accent="yellow"
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.org}
            initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, type: 'spring' }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ExperienceCard {...exp} icon={ICONS[i % ICONS.length]} index={i} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentStrategy;
