import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PATH_IDS, PORTFOLIO_PATHS } from '../data/paths';
import { PROFILE, CONTACT } from '../data/portfolio';

const PathHub = ({ onSelectPath, onGoContact }) => (
  <section id="about" className="section-block-wide">
    <div className="max-w-2xl mx-auto text-center mb-12">
      <p className="pro-eyebrow justify-center">Portfolio paths</p>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mt-2 tracking-tight">
        Built for how you hire
      </h2>
      <p className="text-sm md:text-base text-zinc-500 mt-3 leading-relaxed">
        Three curated tracks — product engineering, visual design, and growth — so reviewers land on proof that
        matches the role.
      </p>
    </div>

    <div className="path-hub-grid">
      {PATH_IDS.map((id, i) => {
        const p = PORTFOLIO_PATHS[id];
        const Icon = p.icon;
        return (
          <motion.button
            key={id}
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            onClick={() => onSelectPath(id)}
            className={`path-hub-card path-hub-${p.accent}`}
          >
            <div className="path-hub-card-top">
              <span className="path-hub-icon">
                <Icon size={18} />
              </span>
              <ArrowUpRight size={16} className="path-hub-arrow" />
            </div>
            <p className="path-hub-recruiter">{p.recruiter}</p>
            <h3 className="path-hub-title">{p.title}</h3>
            <p className="path-hub-tagline">{p.tagline}</p>
            <ul className="path-hub-proof">
              {p.proof.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </motion.button>
        );
      })}
    </div>

    <div className="path-hub-about surface-card p-6 md:p-8 mt-12">
      <p className="pro-label-hand mb-2">About</p>
      <p className="text-zinc-300 text-base leading-relaxed">{PROFILE.intro}</p>
      <p className="text-sm text-zinc-500 mt-3 leading-relaxed">{PROFILE.storyBody}</p>
      <div className="flex flex-wrap gap-3 mt-6">
        <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
          GitHub
        </a>
        <a
          href={CONTACT.designPortfolio}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary text-sm"
        >
          Design portfolio
        </a>
        <button type="button" onClick={onGoContact} className="btn-ghost text-sm">
          Contact
        </button>
      </div>
    </div>
  </section>
);

export default PathHub;
