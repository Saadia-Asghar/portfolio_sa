import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { EXPERIENCE } from '../data/portfolio';

const ExperienceSection = () => (
  <section id="experience" className="section-block-wide">
    <SectionHeader
      index="Experience"
      title="Roles & Leadership"
      subtitle="Marketing, design, and campus ambassadorships."
      accent="grow"
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
              <h3 className="font-semibold text-white">{exp.org}</h3>
              <p className="text-accent-grow text-sm mt-0.5">{exp.role}</p>
            </div>
            <div className="text-xs text-zinc-500 shrink-0 text-left sm:text-right">
              <span>{exp.period}</span>
              <span className="mx-2 text-gray-700">·</span>
              <span>{exp.location}</span>
            </div>
          </div>
          <p className="text-sm text-zinc-500 leading-relaxed">{exp.summary}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
