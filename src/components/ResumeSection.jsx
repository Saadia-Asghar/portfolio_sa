import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize2, X } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { CONTACT, EDUCATION, CERTIFICATIONS } from '../data/portfolio';

const ResumeSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="resume" className="py-20 md:py-28 max-w-7xl mx-auto px-4 md:px-8 scroll-mt-24">
      <SectionHeader index="05 · RESUME" title="Credentials" subtitle="Education · certifications · full CV" accent="cyan" align="left" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
          <div className="achievement-card">
            <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Education</h3>
            <p className="font-tech font-bold text-white">{EDUCATION.degree}</p>
            <p className="text-sm text-gray-400 mt-2">{EDUCATION.school}</p>
            <p className="text-[10px] font-mono text-spider-yellow mt-3">{EDUCATION.period}</p>
          </div>
          <div className="achievement-card">
            <h3 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-3">Certifications</h3>
            <ul className="space-y-2">
              {CERTIFICATIONS.map((c) => (
                <li key={c} className="text-sm text-gray-400 font-tech flex gap-2">
                  <span className="text-spider-cyan">·</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-3">
            <a href={CONTACT.resumePath} download="Saadia_Asghar_Resume.png" className="btn-primary flex-1 text-center">
              <Download size={14} className="inline mr-1" /> Download
            </a>
            <button type="button" onClick={() => setExpanded(true)} className="btn-secondary flex-1">
              <Maximize2 size={14} className="inline mr-1" /> Expand
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
            className="w-full rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-colors group"
          >
            <img
              src={CONTACT.resumePath}
              alt="Saadia Asghar resume"
              className="w-full h-auto group-hover:opacity-95 transition-opacity"
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
            className="fixed inset-0 z-[300] bg-black/95 flex flex-col p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex justify-end mb-3">
              <button type="button" onClick={() => setExpanded(false)} className="p-2 rounded-lg bg-white/10 text-white" aria-label="Close">
                <X size={22} />
              </button>
            </div>
            <div className="flex-1 overflow-auto flex justify-center custom-scrollbar">
              <img src={CONTACT.resumePath} alt="Resume full size" className="max-w-full h-auto rounded-lg" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumeSection;
