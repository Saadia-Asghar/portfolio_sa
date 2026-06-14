import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize2, X } from 'lucide-react';
import { CONTACT, EDUCATION, CERTIFICATIONS } from '../data/portfolio';

const ResumeSection = ({ embedded = false }) => {
  const [expanded, setExpanded] = useState(false);

  const content = (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
          <div className="folio-resume-card flex-col !items-start">
            <div>
              <h3 className="folio-label">Education</h3>
              <p className="folio-lead" style={{ marginBottom: '0.25rem' }}>
                {EDUCATION.degree}
              </p>
              <p className="folio-body" style={{ margin: 0 }}>
                {EDUCATION.school}
              </p>
              <p className="folio-body" style={{ marginTop: '0.5rem', color: 'var(--folio-design)' }}>
                {EDUCATION.period}
              </p>
            </div>
          </div>

          <div className="folio-resume-card flex-col !items-start">
            <h3 className="folio-label">Certifications</h3>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="folio-body" style={{ margin: 0, display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--folio-build)' }}>·</span> {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-3">
            <a
              href={CONTACT.resumePath}
              download="Saadia_Asghar_Resume.png"
              className="folio-btn-primary flex-1 justify-center"
            >
              <Download size={14} /> Download
            </a>
            <button type="button" onClick={() => setExpanded(true)} className="folio-btn-ghost flex-1 justify-center">
              <Maximize2 size={14} /> Expand
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-8 order-1 lg:order-2"
        >
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="w-full border border-[var(--folio-border)] rounded-md overflow-hidden bg-[var(--folio-surface)]"
          >
            <img
              src={CONTACT.resumePath}
              alt="Saadia Asghar resume"
              className="w-full h-auto hover:opacity-95 transition-opacity"
              loading="lazy"
            />
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="folio-modal-backdrop"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end mb-3 max-w-5xl mx-auto w-full px-4">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="folio-btn-ghost !p-2"
                aria-label="Close"
              >
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-auto flex justify-center px-4">
              <img src={CONTACT.resumePath} alt="Resume full size" className="max-w-full h-auto rounded-md" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );

  if (embedded) return content;

  return (
    <section id="resume" className="folio-section folio-section-wide">
      <h2 className="folio-heading">Résumé</h2>
      <p className="folio-body folio-section-intro">Education, certifications, and downloadable CV.</p>
      {content}
    </section>
  );
};

export default ResumeSection;
