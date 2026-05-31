import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from './GlitchText';
import ComicPanel from './ComicPanel';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink, Award, TrendingUp } from 'lucide-react';
import { FEATURED_PROJECTS, MORE_PROJECTS } from '../data/portfolio';

const accentForType = (type) => (type === 'design' ? 'magenta' : 'cyan');

const ProjectCard = ({
  title,
  subtitle,
  desc,
  tech,
  type,
  color,
  status,
  link,
  github,
  achievement,
  impact,
  period,
  index,
  featured,
}) => (
  <ComicPanel
    accent={accentForType(type)}
    tilt={index % 2 === 0 ? -0.8 : 0.8}
    stamp={index ? String(index).padStart(2, '0') : null}
    className={`h-full ${featured ? 'md:col-span-2' : ''}`}
  >
    <motion.div
      data-cursor={type}
      className="relative z-10 flex flex-col h-full min-h-[420px]"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-between items-start mb-4 gap-2 flex-wrap">
        <span className={`comic-sticker text-[8px] font-mono px-2 py-1 uppercase tracking-widest ${color} bg-black/80 border-white/20`}>
          {status.replace(/_/g, ' ')}
        </span>
        {period && (
          <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{period}</span>
        )}
      </div>

      <h3 className="mb-1">
        <GlitchText text={title} className={`text-2xl md:text-3xl font-bold font-tech ${color}`} />
      </h3>
      {subtitle && (
        <p className="font-display text-spider-yellow/90 text-sm md:text-base tracking-wider mb-3 uppercase">
          {subtitle}
        </p>
      )}

      {achievement && (
        <div className="flex items-start gap-2 mb-4 bg-spider-yellow/10 border-2 border-spider-yellow/30 p-3 rounded-lg">
          <Award size={16} className="text-spider-yellow shrink-0 mt-0.5" />
          <span className="text-[10px] font-mono text-spider-yellow font-bold uppercase tracking-tight leading-snug">
            {achievement}
          </span>
        </div>
      )}

      <p className="text-gray-400 font-tech text-sm leading-relaxed mb-4 flex-grow">{desc}</p>

      {impact && (
        <div className="mb-4 p-3 bg-spider-cyan/5 border-l-4 border-spider-cyan rounded-r-lg">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={12} className="text-spider-cyan" />
            <span className="text-[9px] font-mono text-spider-cyan uppercase font-bold tracking-widest">Impact</span>
          </div>
          <p className="text-[10px] text-white/80 font-tech italic leading-relaxed">{impact}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[9px] font-mono bg-white/5 px-2 py-1 rounded border border-white/10 uppercase text-gray-400 hover:text-white hover:border-spider-cyan/40 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>

      {(github || link) && (
        <div className="flex gap-3 mt-auto pt-4 border-t border-dashed border-white/10">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="interactive"
              className="flex-1 comic-sticker bg-white/5 hover:bg-spider-cyan/20 border-white/20 text-center py-2.5 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2 text-white"
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
              className="flex-1 comic-sticker bg-spider-magenta/30 hover:bg-spider-magenta/50 border-spider-magenta/50 text-center py-2.5 text-[10px] uppercase font-bold tracking-widest transition-all flex items-center justify-center gap-2 text-white"
            >
              <ExternalLink size={14} /> Live
            </a>
          )}
        </div>
      )}
    </motion.div>
  </ComicPanel>
);

const ProjectSection = () => (
  <section id="projects" className="py-24 md:py-32 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24 relative">
    <div className="absolute -left-20 top-1/3 w-40 h-40 halftone-corner opacity-20 pointer-events-none hidden lg:block" />

    <SectionHeader
      index="03 · PROJECTS"
      title="Built & Won"
      subtitle="Hackathon wins · product design · full-stack ships"
      accent="magenta"
    />

    <div className="mb-12">
      <p className="font-display text-spider-cyan text-xl md:text-2xl tracking-wider mb-6 uppercase -rotate-1 w-fit">
        ★ Featured
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {FEATURED_PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 32, rotate: i % 2 ? 2 : -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: i * 0.07, type: 'spring', stiffness: 80 }}
            viewport={{ once: true }}
            className={`h-full ${i === 0 ? 'md:col-span-2' : ''}`}
          >
            <ProjectCard {...p} index={i + 1} featured={i === 0} />
          </motion.div>
        ))}
      </div>
    </div>

    <div className="mt-20">
      <p className="font-display text-gray-500 text-lg tracking-wider mb-6 uppercase rotate-1 w-fit ml-auto">
        More builds →
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MORE_PROJECTS.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <ProjectCard {...p} index={i + FEATURED_PROJECTS.length + 1} />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectSection;
