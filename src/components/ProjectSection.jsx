import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import { Github, ExternalLink, Award, Binary, TrendingUp } from 'lucide-react';
import { FEATURED_PROJECTS, MORE_PROJECTS } from '../data/portfolio';

const ProjectCard = ({ title, subtitle, desc, tech, type, color, status, link, github, achievement, impact, period }) => (
  <motion.div
    data-cursor={type}
    whileHover={{ y: -4 }}
    className="glass-card group relative p-6 md:p-8 flex flex-col min-h-[480px] h-full"
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex justify-between items-start mb-3 gap-2">
        <span className={`text-[9px] font-mono px-2 py-1 rounded bg-white/5 border border-white/10 ${color} tracking-widest shrink-0`}>
          {status}
        </span>
        {period && (
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{period}</span>
        )}
        <Binary size={14} className="text-gray-600 opacity-40 shrink-0" />
      </div>

      <h3 className="mb-1">
        <GlitchText text={title} className={`text-2xl md:text-3xl font-bold font-tech ${color}`} />
      </h3>
      {subtitle && (
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">{subtitle}</p>
      )}

      {achievement && (
        <div className="flex items-center gap-2 mb-3 bg-white/5 border border-white/10 p-2 rounded-lg">
          <Award size={14} className="text-spider-yellow shrink-0" />
          <span className="text-[10px] font-mono text-spider-yellow font-bold uppercase tracking-tight leading-snug">
            {achievement}
          </span>
        </div>
      )}

      <p className="text-gray-400 font-tech text-sm leading-relaxed mb-4 flex-grow">{desc}</p>

      {impact && (
        <motion.div className="mb-4 p-3 bg-spider-cyan/5 border-l-2 border-spider-cyan rounded-r-lg">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={12} className="text-spider-cyan" />
            <span className="text-[9px] font-mono text-spider-cyan uppercase font-bold tracking-widest">Impact</span>
          </div>
          <p className="text-[10px] text-white/80 font-tech italic leading-relaxed">{impact}</p>
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded border border-white/10 uppercase text-gray-400 group-hover:text-white transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {(github || link) && (
        <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="flex-1 bg-white/5 hover:bg-spider-cyan/20 border border-white/10 text-center py-3 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <Github size={14} /> Code
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="flex-1 bg-spider-magenta/20 hover:bg-spider-magenta/40 border border-spider-magenta/30 text-center py-3 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      )}
    </div>
  </motion.div>
);

const ProjectSection = () => (
  <section id="projects" className="py-24 max-w-7xl mx-auto px-4 md:px-8">
    <div className="flex flex-col items-center mb-14 space-y-4">
      <motion.div
        className="w-20 h-1 bg-gradient-to-r from-spider-cyan to-spider-magenta"
        animate={{ width: [60, 100], opacity: [0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      />
      <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-accent text-white italic tracking-tighter uppercase text-center">
        PROJECT_PORTFOLIO
      </h2>
      <p className="text-[10px] font-mono text-gray-500 tracking-[0.35em] font-bold uppercase text-center max-w-md">
        Hackathon wins · product design · full-stack builds
      </p>
    </div>

    <div className="mb-8">
      <h3 className="text-spider-cyan font-mono text-[10px] uppercase tracking-[0.4em] mb-6">Featured</h3>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {FEATURED_PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>

    <div className="mt-16">
      <h3 className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-6">More builds</h3>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MORE_PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard {...p} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProjectSection;
