import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { EXPERIENCE } from '../data/portfolio';

const ExperienceSection = () => (
  <section id="experience" className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
    <SectionHeader
      index="04 · EXPERIENCE"
      title="Roles & Leadership"
      subtitle="Marketing, design, and campus ambassadorships — chronological"
      accent="yellow"
      align="left"
    />

    <div className="space-y-3">
      {EXPERIENCE.map((exp, i) => (
        <motion.div
          key={exp.org}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.04 }}
          viewport={{ once: true }}
          className="experience-row"
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
            <div>
              <h3 className="font-tech font-bold text-white text-base">{exp.org}</h3>
              <p className="text-spider-cyan text-sm font-mono mt-0.5">{exp.role}</p>
            </div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wide shrink-0 text-left sm:text-right">
              <span>{exp.period}</span>
              <span className="mx-2 text-gray-700">·</span>
              <span>{exp.location}</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 font-tech leading-relaxed">{exp.summary}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
