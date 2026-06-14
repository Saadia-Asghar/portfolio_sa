import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { FEATURED_HOME } from '../data/portfolio';

const FeaturedWork = ({ onSelectPath }) => (
  <section id="featured" className="folio-section folio-section-wide">
    <h2 className="folio-heading">Selected work</h2>

    <div className="folio-projects">
      {FEATURED_HOME.map((project, i) => (
        <motion.article
          key={project.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06 }}
          className="folio-project"
        >
          <a
            href={project.live || project.github || '#'}
            onClick={
              project.live?.startsWith('#')
                ? (e) => {
                    e.preventDefault();
                    if (project.track === 'design') onSelectPath?.('design', 'cover');
                    else onSelectPath?.('build', 'projects');
                  }
                : undefined
            }
            target={project.live && !project.live.startsWith('#') ? '_blank' : undefined}
            rel={project.live && !project.live.startsWith('#') ? 'noopener noreferrer' : undefined}
            className="folio-project-visual"
          >
            {project.image ? (
              <img src={project.image} alt="" loading="lazy" />
            ) : (
              <div className="folio-project-placeholder">
                <Folder size={28} />
                <span>{project.title}</span>
              </div>
            )}
          </a>

          <div className="folio-project-body">
            <p className="folio-project-meta">Featured</p>
            <h3 className="folio-project-title">
              <a
                href={project.live || project.github || '#'}
                onClick={
                  project.live?.startsWith('#')
                    ? (e) => {
                        e.preventDefault();
                        if (project.track === 'design') onSelectPath?.('design', 'vyrothon');
                        else onSelectPath?.('build', 'projects');
                      }
                    : undefined
                }
                target={project.live && !project.live.startsWith('#') ? '_blank' : undefined}
                rel={project.live && !project.live.startsWith('#') ? 'noopener noreferrer' : undefined}
              >
                {project.title}
              </a>
            </h3>
            <p className="folio-project-desc">{project.description}</p>
            <ul className="folio-project-tech">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="folio-project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  onClick={
                    project.live?.startsWith('#')
                      ? (e) => {
                          e.preventDefault();
                          if (project.track === 'design') onSelectPath?.('design', 'cover');
                          else onSelectPath?.('build', 'projects');
                        }
                      : undefined
                  }
                  target={project.live?.startsWith('#') ? undefined : '_blank'}
                  rel={project.live?.startsWith('#') ? undefined : 'noopener noreferrer'}
                  aria-label="External link"
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>

    <button type="button" onClick={() => onSelectPath?.('build', 'projects')} className="folio-link" style={{ marginTop: '1.5rem' }}>
      View full project archive →
    </button>
  </section>
);

export default FeaturedWork;
