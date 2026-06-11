import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Star, FolderGit2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { ALL_PROJECTS, PROJECT_CATEGORY_META, PROJECT_CATEGORY_ORDER } from '../data/portfolio';

const ProjectCard = ({ project, categoryAccent }) => (
    <motion.article
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`project-card project-card-${categoryAccent} h-full flex flex-col group`}
    >
        <div className="project-card-bar" aria-hidden />
        <div className="project-card-inner">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex flex-wrap items-center gap-2">
              {project.featured && (
                <span className="project-featured-pill">
                  <Star size={10} fill="currentColor" /> Featured
                </span>
              )}
              <span className="project-achievement-pill">{project.achievement}</span>
            </div>
            {project.github && (
              <span className="project-repo-icon" aria-hidden>
                <FolderGit2 size={16} />
              </span>
            )}
          </div>

          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-role">{project.role}</p>

          {project.highlight && <p className="project-card-highlight">{project.highlight}</p>}

          <p className="project-card-desc">{project.desc}</p>

          {project.repoNote && (
            <p className="project-card-repo-note">
              <Github size={12} className="inline mr-1 opacity-70" />
              {project.repoNote}
            </p>
          )}

          <div className="project-tech-row">
            {project.tech.map((t) => (
              <span key={t} className="project-tech-tag">
                {t}
              </span>
            ))}
          </div>

          <div className="project-card-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-cta project-cta-primary"
              >
                <Github size={14} /> View repository
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-cta ${project.github ? 'project-cta-secondary' : 'project-cta-primary'}`}
              >
                <ExternalLink size={14} /> {project.github ? 'Live demo' : 'Open'}
              </a>
            )}
          </div>
        </div>
    </motion.article>
);

const CategoryBlock = ({ categoryId }) => {
  const meta = PROJECT_CATEGORY_META[categoryId];
  const projects = ALL_PROJECTS.filter((p) => p.category === categoryId);
  if (!projects.length || !meta) return null;

  return (
    <section className={`project-category project-category-${meta.accent}`} aria-labelledby={`cat-${categoryId}`}>
      <header className="project-category-header">
        <div className="project-category-index">{meta.index}</div>
        <div className="flex-1 min-w-0">
          <p className="project-category-hook">{meta.recruiterHook}</p>
          <h3 id={`cat-${categoryId}`} className="project-category-title">
            {meta.title}
          </h3>
          <p className="project-category-desc">{meta.description}</p>
        </div>
        <div className="project-category-links shrink-0">
          {meta.externalLink && (
            <a href={meta.externalLink} target="_blank" rel="noopener noreferrer" className="project-category-link">
              {meta.externalLabel} <ArrowUpRight size={14} />
            </a>
          )}
          {meta.githubLink && (
            <a href={meta.githubLink} target="_blank" rel="noopener noreferrer" className="project-category-link">
              All repos <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </header>

      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id || p.title} project={p} categoryAccent={meta.accent} />
        ))}
      </div>
    </section>
  );
};

const ProjectSection = ({ embedded = false }) => {
  const content = (
    <div className="project-section-stack">
      {PROJECT_CATEGORY_ORDER.map((id) => (
        <CategoryBlock key={id} categoryId={id} />
      ))}
    </div>
  );

  if (embedded) return content;

  return (
    <section id="projects" className="section-block-wide">
      <SectionHeader
        index="Work"
        title="Projects"
        subtitle="Grouped by discipline — each card links to the GitHub repo with README-backed detail recruiters can verify."
        accent="build"
      />
      {content}
    </section>
  );
};

export default ProjectSection;
