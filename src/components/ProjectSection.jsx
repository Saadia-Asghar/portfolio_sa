import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ALL_PROJECTS } from '../data/portfolio';

const ProjectCard = ({ project }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="achievement-card h-full flex flex-col"
  >
    <div className="flex items-center justify-between gap-2 mb-3">
      <span className="track-pill track-build">Project</span>
      <span className="text-[10px] font-mono text-spider-yellow">{project.achievement}</span>
    </div>
    <h3 className="font-tech font-bold text-white text-base">{project.title}</h3>
    <p className="text-[11px] font-mono text-gray-500 mt-1 uppercase tracking-wide">{project.role}</p>
    <p className="text-sm text-gray-400 font-tech leading-relaxed mt-3 flex-grow">{project.desc}</p>
    <div className="flex flex-wrap gap-1.5 mt-4">
      {project.tech.map((t) => (
        <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/10">
          {t}
        </span>
      ))}
    </div>
    {(project.github || project.link) && (
      <div className="flex gap-3 mt-4 pt-4 border-t border-white/5">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={13} /> Code
          </a>
        )}
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={13} /> Live
          </a>
        )}
      </div>
    )}
  </motion.article>
);

const ProjectSection = () => (
  <section id="projects" className="py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
    <SectionHeader
      index="06 · PROJECTS"
      title="What I've Built"
      subtitle="Same format, same depth — hackathon ships and side projects"
      accent="magenta"
      align="left"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5">
      {ALL_PROJECTS.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  </section>
);

export default ProjectSection;
