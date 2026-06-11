import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ALL_PROJECTS, PROJECT_CATEGORIES } from '../data/portfolio';

const ProjectCard = ({ project }) => (
  <motion.article
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="achievement-card h-full flex flex-col group"
  >
    <div className="flex items-center justify-between gap-2 mb-3">
      <span className={`track-pill track-${project.category === 'marketing' ? 'grow' : project.category === 'design' ? 'design' : 'build'}`}>
        {project.category === 'marketing' ? 'Marketing' : project.category === 'design' ? 'Design' : 'Build'}
      </span>
      <span className="text-[10px] font-mono text-spider-yellow">{project.achievement}</span>
    </div>
    <h3 className="font-tech font-bold text-white text-base group-hover:text-spider-cyan transition-colors">{project.title}</h3>
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
            <ExternalLink size={13} /> {project.github ? 'Live' : 'View'}
          </a>
        )}
      </div>
    )}
  </motion.article>
);

const ProjectSection = () => (
  <section id="projects" className="relative section-band section-band-purple py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
    <SectionHeader
      index="06 · MY WORK"
      title="Projects"
      subtitle="Organized by category — full-stack builds, UI design, and marketing. More on GitHub."
      accent="purple"
      align="left"
    />

    <div className="space-y-16">
      {PROJECT_CATEGORIES.map((cat) => {
        const projects = ALL_PROJECTS.filter((p) => p.category === cat.id);
        if (!projects.length) return null;

        return (
          <div key={cat.id}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wide">{cat.title}</h3>
                <p className="text-sm text-gray-500 font-tech mt-2 max-w-2xl">{cat.description}</p>
              </div>
              {cat.externalLink && (
                <a
                  href={cat.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-spider-cyan uppercase tracking-wider hover:underline shrink-0"
                >
                  {cat.externalLabel} <ArrowUpRight size={14} />
                </a>
              )}
              {cat.githubLink && (
                <a
                  href={cat.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-spider-cyan uppercase tracking-wider hover:underline shrink-0"
                >
                  View GitHub <ArrowUpRight size={14} />
                </a>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default ProjectSection;
