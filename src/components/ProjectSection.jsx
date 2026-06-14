import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Star, FolderGit2, ChevronDown } from 'lucide-react';
import SectionHeader from './SectionHeader';
import FlagshipCaseStudy from './FlagshipCaseStudy';
import {
  ALL_PROJECTS,
  PROJECT_CATEGORY_META,
  PROJECT_CATEGORY_ORDER,
  FLAGSHIP_BUILD_IDS,
  DATA_SCIENCE_PROJECT_IDS,
  CONTACT,
} from '../data/portfolio';

const isVisible = (p) => p.showcase !== 'archive';

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
            target={project.link.startsWith('#') ? undefined : '_blank'}
            rel={project.link.startsWith('#') ? undefined : 'noopener noreferrer'}
            className={`project-cta ${project.github ? 'project-cta-secondary' : 'project-cta-primary'}`}
          >
            <ExternalLink size={14} />{' '}
            {project.link.startsWith('#') ? 'Open chapter' : project.github ? 'Live demo' : 'Open'}
          </a>
        )}
      </div>
    </div>
  </motion.article>
);

const CategoryBlock = ({ categoryId, excludeIds = [] }) => {
  const meta = PROJECT_CATEGORY_META[categoryId];
  const projects = ALL_PROJECTS.filter(
    (p) => p.category === categoryId && isVisible(p) && !excludeIds.includes(p.id),
  );
  if (!projects.length || !meta) return null;

  const externalLink =
    meta.externalLink === 'https://design-portfolio-rouge-five.vercel.app/' ? '#design' : meta.externalLink;

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
          {externalLink && (
            <a href={externalLink} className="project-category-link">
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

const DataScienceSection = () => {
  const meta = PROJECT_CATEGORY_META.datascience;
  const ordered = DATA_SCIENCE_PROJECT_IDS.map((id) => ALL_PROJECTS.find((p) => p.id === id)).filter(
    (p) => p && isVisible(p),
  );
  const caseStudy = ordered.find((p) => p.caseStudy);
  const cards = ordered.filter((p) => p.id !== caseStudy?.id);

  if (!ordered.length) return null;

  return (
    <section className="project-category project-category-datascience" aria-labelledby="cat-datascience">
      <header className="project-category-header">
        <div className="project-category-index">{meta.index}</div>
        <div className="flex-1 min-w-0">
          <p className="project-category-hook">{meta.recruiterHook}</p>
          <h3 id="cat-datascience" className="project-category-title">
            {meta.title}
          </h3>
          <p className="project-category-desc">{meta.description}</p>
        </div>
        <div className="project-category-links shrink-0">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="project-category-link">
            GitHub repos <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {caseStudy && (
        <div className="case-study-list mb-8">
          <FlagshipCaseStudy project={caseStudy} index={0} />
        </div>
      )}

      {cards.length > 0 && (
        <div className="project-grid">
          {cards.map((p) => (
            <ProjectCard key={p.id} project={p} categoryAccent="datascience" />
          ))}
        </div>
      )}
    </section>
  );
};

const MoreProjects = () => {
  const [open, setOpen] = useState(false);
  const archived = ALL_PROJECTS.filter((p) => p.showcase === 'archive');
  if (!archived.length) return null;

  return (
    <div className="more-projects">
      <button type="button" className="more-projects-toggle" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{open ? 'Hide' : 'More on GitHub'}</span>
        <span className="more-projects-count">{archived.length} additional repos</span>
        <ChevronDown size={16} className={open ? 'more-projects-chevron-open' : ''} />
      </button>
      {open && (
        <div className="project-grid mt-6">
          {archived.map((p) => {
            const meta = PROJECT_CATEGORY_META[p.category];
            return <ProjectCard key={p.id} project={p} categoryAccent={meta?.accent || 'fullstack'} />;
          })}
        </div>
      )}
      <p className="more-projects-note mt-4">
        Full list on{' '}
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-accent-build hover:underline">
          GitHub
        </a>
        .
      </p>
    </div>
  );
};

const ProjectSection = ({ embedded = false }) => {
  const flagships = FLAGSHIP_BUILD_IDS.map((id) => ALL_PROJECTS.find((p) => p.id === id)).filter(Boolean);
  const otherCategories = PROJECT_CATEGORY_ORDER.filter((id) => id !== 'datascience');

  const content = (
    <div className="project-section-stack">
      <DataScienceSection />

      <section className="case-study-stack" aria-labelledby="flagship-heading">
        <header className="case-study-stack-header">
          <p className="pro-section-label">Engineering</p>
          <h3 id="flagship-heading" className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
            Hackathon products
          </h3>
          <p className="text-sm mt-2 max-w-2xl" style={{ color: 'var(--ink-muted)' }}>
            Full-stack and AI builds from Hack@GIKI and MIT Hack Nation — problem, stack, and outcome in each card.
          </p>
        </header>
        <div className="case-study-list">
          {flagships.map((p, i) => (
            <FlagshipCaseStudy key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      {otherCategories.map((id) => (
        <CategoryBlock key={id} categoryId={id} excludeIds={FLAGSHIP_BUILD_IDS} />
      ))}

      <MoreProjects />
    </div>
  );

  if (embedded) return content;

  return (
    <section id="projects" className="section-block-wide">
      <SectionHeader
        index="Work"
        title="Projects"
        subtitle="Data science repos first, then engineering case studies and other work — each links to GitHub."
        accent="build"
      />
      {content}
    </section>
  );
};

export default ProjectSection;
