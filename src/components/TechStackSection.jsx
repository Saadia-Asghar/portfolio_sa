import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { TECH_STACK } from '../data/portfolio';

const iconUrl = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const TechStackSection = () => (
  <section id="tech" className="section-block-wide">
    <SectionHeader
      index="Stack"
      title="Technologies"
      subtitle="Tools I use across data science, design, and full-stack development."
      accent="build"
    />

    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-5">
      {TECH_STACK.map((tech, i) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04 }}
          viewport={{ once: true }}
          whileHover={{ y: -4, scale: 1.03 }}
          className="tech-logo-card group"
        >
          <img
            src={iconUrl(tech.slug, tech.color)}
            alt=""
            width={36}
            height={36}
            className="w-9 h-9 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
          <span className="text-[10px] font-mono text-gray-400 group-hover:text-white mt-3 text-center transition-colors">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>

    <p className="text-center text-xs font-mono text-gray-600 mt-8 uppercase tracking-widest">…and many more!</p>
  </section>
);

export default TechStackSection;
