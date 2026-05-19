import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Palette, Users, GraduationCap } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolio';

const ICONS = [Palette, Users, Briefcase, GraduationCap];

const ExperienceCard = ({ org, role, period, location, impact, metrics, color, icon: Icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="p-6 md:p-8 glass-card border-none bg-white/5 relative overflow-hidden group h-full flex flex-col"
  >
    <div
      className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full opacity-5 blur-3xl group-hover:opacity-20 transition-opacity"
      style={{ backgroundColor: color }}
    />

    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-5 gap-3">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10" style={{ color }}>
          <Icon size={22} />
        </div>
        <div className="text-right">
          <p className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{period}</p>
          <p className="text-[9px] font-mono text-gray-600 uppercase">{location}</p>
        </div>
      </div>

      <h3 className="text-lg md:text-xl font-tech font-bold text-white mb-1 leading-tight">{org}</h3>
      <p className="text-spider-yellow text-[10px] font-mono mb-4 uppercase tracking-[0.15em] font-black">{role}</p>

      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{impact}</p>

      <div className="space-y-2 mt-auto pt-5 border-t border-white/5">
        {metrics.map((m) => (
          <div key={m} className="flex items-center gap-2 text-[10px] font-mono text-gray-400 group-hover:text-white/90 transition-colors">
            <div className="w-1.5 h-1.5 rotate-45 shrink-0" style={{ backgroundColor: color }} />
            <span>{m}</span>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ContentStrategy = () => (
  <section id="experience" className="py-24 md:py-32 relative overflow-hidden px-4 md:px-8 bg-black/20">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-spider-cyan/20 to-transparent" />

    <div className="max-w-7xl mx-auto">
      <div className="mb-14 md:mb-16 space-y-4 max-w-2xl">
        <h2 className="text-4xl md:text-6xl font-accent text-white italic tracking-tighter leading-none">
          EXPERIENCE
        </h2>
        <p className="text-gray-500 font-tech text-sm leading-relaxed">
          Design, campus leadership, and outreach — aligned with my resume.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERIENCE.map((exp, i) => (
          <motion.div
            key={exp.org}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ExperienceCard {...exp} icon={ICONS[i % ICONS.length]} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ContentStrategy;
