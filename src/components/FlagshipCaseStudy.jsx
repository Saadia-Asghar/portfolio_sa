import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECT_CATEGORY_META } from '../data/portfolio';

const FlagshipCaseStudy = ({ project, index }) => {
  const cs = project.caseStudy;
  if (!cs) return null;

  const meta = PROJECT_CATEGORY_META[project.category];
  const accent = meta?.accent || 'build';

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06 }}
      className={`case-study case-study-${accent}`}
    >
      <div className="case-study-header">
        <div>
          <p className="case-study-index">Case study {String(index + 1).padStart(2, '0')}</p>
          <h3 className="case-study-title">{project.title}</h3>
          <p className="case-study-role">{cs.myRole || project.role}</p>
        </div>
        <span className="project-achievement-pill">{project.achievement}</span>
      </div>

      <p className="case-study-problem">{cs.problem}</p>

      <div className="case-study-grid">
        <div>
          <p className="case-study-label">Approach</p>
          <ol className="case-study-steps">
            {cs.approach.map((step, i) => (
              <li key={step}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div>
          <p className="case-study-label">Outcome</p>
          <p className="case-study-outcome">{cs.outcome}</p>
          {cs.metrics && (
            <div className="case-study-metrics">
              {cs.metrics.map((m) => (
                <div key={m.label} className="case-study-metric">
                  <span className="case-study-metric-value">{m.value}</span>
                  <span className="case-study-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="project-tech-row mt-4">
        {project.tech.map((t) => (
          <span key={t} className="project-tech-tag">
            {t}
          </span>
        ))}
      </div>

      <div className="case-study-actions">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-cta project-cta-primary"
          >
            <Github size={14} /> Repository
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target={project.link.startsWith('#') ? undefined : '_blank'}
            rel={project.link.startsWith('#') ? undefined : 'noopener noreferrer'}
            className="project-cta project-cta-secondary"
          >
            <ExternalLink size={14} /> {project.link.startsWith('#') ? 'View case study' : 'Live demo'}
          </a>
        )}
      </div>
    </motion.article>
  );
};

export default FlagshipCaseStudy;
