import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_STATS } from '../data/portfolio';

const PortfolioStats = () => (
  <section className="portfolio-stats" aria-label="Portfolio highlights">
    <div className="max-w-6xl mx-auto px-4 md:px-8">
      <ul className="portfolio-stats-grid">
        {PORTFOLIO_STATS.map((stat, i) => (
          <motion.li
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="portfolio-stat-item"
          >
            <span className="portfolio-stat-value">{stat.value}</span>
            <span className="portfolio-stat-label">{stat.label}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </section>
);

export default PortfolioStats;
