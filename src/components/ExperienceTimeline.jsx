import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolio';

const ExperienceTimeline = () => (
  <section id="experience" className="folio-section">
    <h2 className="folio-heading">Experience</h2>

    <ol className="folio-exp-list">
      {EXPERIENCE.slice(0, 6).map((item, i) => (
        <motion.li
          key={`${item.org}-${item.period}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="folio-exp-item"
        >
          <div className="folio-exp-top">
            <h3>
              {item.role}
              <span className="folio-exp-org"> · {item.org}</span>
            </h3>
            <p className="folio-exp-period">{item.period}</p>
          </div>
          <p className="folio-exp-loc">
            <MapPin size={12} aria-hidden /> {item.location}
          </p>
          <p className="folio-exp-summary">{item.summary}</p>
        </motion.li>
      ))}
    </ol>
  </section>
);

export default ExperienceTimeline;
