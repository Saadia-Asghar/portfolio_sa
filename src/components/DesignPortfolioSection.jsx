import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Palette, ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { DESIGN_PORTFOLIO } from '../data/portfolio';

const DesignPortfolioSection = () => (
  <section id="design" className="section-band py-16 md:py-24 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
    <SectionHeader
      index="02 · DESIGN"
      title="Product Design Book"
      subtitle={DESIGN_PORTFOLIO.tagline}
      align="left"
    />

    <motion.a
      href={DESIGN_PORTFOLIO.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="design-featured-card block mb-8 group"
    >
      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
        <span className="track-pill track-design inline-flex items-center gap-1">
          <Palette size={12} />
          Featured case study
        </span>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wide">
          {DESIGN_PORTFOLIO.featured.event}
        </span>
      </div>

      <h3 className="font-tech font-bold text-white text-xl md:text-2xl group-hover:text-spider-yellow transition-colors">
        {DESIGN_PORTFOLIO.featured.title}
      </h3>
      <p className="text-spider-yellow font-mono text-[11px] mt-2 uppercase tracking-wide">
        {DESIGN_PORTFOLIO.featured.badge}
      </p>
      <p className="text-sm text-gray-400 font-tech leading-relaxed mt-4 max-w-3xl">
        {DESIGN_PORTFOLIO.featured.summary}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-4">
        {DESIGN_PORTFOLIO.featured.tools.map((t) => (
          <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-500 border border-white/10">
            {t}
          </span>
        ))}
      </div>

      <span className="inline-flex items-center gap-2 mt-6 text-[11px] font-mono text-spider-cyan uppercase tracking-wider group-hover:underline">
        Read the Vyrothon case study <ArrowUpRight size={14} />
      </span>
    </motion.a>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {DESIGN_PORTFOLIO.stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
          viewport={{ once: true }}
          className="stat-pill text-center border-spider-yellow/20 bg-spider-yellow/[0.03]"
        >
          <p className="font-tech font-bold text-spider-yellow text-lg">{stat.value}</p>
          <p className="text-[9px] font-mono text-gray-500 mt-1 leading-snug">{stat.label}</p>
        </motion.div>
      ))}
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      {DESIGN_PORTFOLIO.chapters.map((ch, i) => (
        <motion.a
          key={ch.id}
          href={DESIGN_PORTFOLIO.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          viewport={{ once: true }}
          className="achievement-card group h-full"
        >
          <p className="text-[10px] font-mono text-spider-yellow/80 uppercase tracking-widest mb-2">{ch.chapter}</p>
          <h4 className="font-tech font-bold text-white text-base group-hover:text-spider-cyan transition-colors">
            {ch.title}
          </h4>
          <p className="text-sm text-gray-500 font-tech mt-2 leading-relaxed">{ch.desc}</p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {ch.tags.map((t) => (
              <span key={t} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-600 border border-white/10">
                {t}
              </span>
            ))}
          </div>
        </motion.a>
      ))}
    </div>

    <div className="achievement-card mb-8">
      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Capabilities</p>
      <div className="flex flex-wrap gap-1.5">
        {DESIGN_PORTFOLIO.capabilities.map((cap) => (
          <span key={cap} className="skill-tag skill-tag-yellow text-[10px]">
            {cap}
          </span>
        ))}
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <a
        href={DESIGN_PORTFOLIO.url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary inline-flex items-center gap-2"
      >
        <ExternalLink size={16} />
        Explore full design portfolio
      </a>
      <p className="text-xs font-mono text-gray-600">
        design-portfolio-rouge-five.vercel.app
      </p>
    </div>
  </section>
);

export default DesignPortfolioSection;
