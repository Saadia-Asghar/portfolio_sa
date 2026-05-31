import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Maximize2, X, MapPin, Mail, Phone } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ComicPanel from './ComicPanel';
import { CONTACT, EDUCATION, CERTIFICATIONS } from '../data/portfolio';

const ResumeSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="resume" className="py-24 md:py-32 relative px-4 md:px-8 scroll-mt-24 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          index="05 · RESUME"
          title="CV Archive"
          subtitle="Education · certifications · full resume download"
          accent="cyan"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            className="lg:col-span-5 space-y-6 order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ComicPanel accent="cyan" tilt={-1}>
              <h3 className="font-display text-spider-cyan text-xl tracking-wider uppercase mb-4">Education</h3>
              <p className="text-white font-tech font-bold text-lg leading-snug">{EDUCATION.degree}</p>
              <p className="text-gray-400 text-sm mt-2 leading-relaxed">{EDUCATION.school}</p>
              <p className="text-gray-500 text-xs font-mono mt-1">{EDUCATION.location}</p>
              <p className="comic-sticker bg-spider-yellow text-black text-[9px] font-mono mt-4 inline-block px-3 py-1 uppercase tracking-widest">
                {EDUCATION.period}
              </p>
            </ComicPanel>

            <ComicPanel accent="magenta" tilt={1}>
              <h3 className="font-display text-spider-magenta text-xl tracking-wider uppercase mb-4">Certifications</h3>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert} className="flex items-start gap-3 text-sm text-gray-400 font-tech leading-relaxed">
                    <span className="w-2 h-2 mt-2 shrink-0 bg-spider-magenta rotate-45" />
                    {cert}
                  </li>
                ))}
              </ul>
            </ComicPanel>

            <ComicPanel accent="yellow" tilt={-0.5}>
              <h3 className="font-display text-spider-yellow text-xl tracking-wider uppercase mb-4">Contact</h3>
              <div className="space-y-3 text-sm font-mono text-gray-400">
                <p className="flex items-center gap-3">
                  <MapPin size={16} className="text-spider-cyan shrink-0" />
                  {CONTACT.location}
                </p>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 hover:text-spider-cyan transition-colors">
                  <Mail size={16} className="text-spider-cyan shrink-0" />
                  {CONTACT.email}
                </a>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-spider-yellow transition-colors">
                  <Phone size={16} className="text-spider-yellow shrink-0" />
                  {CONTACT.phone}
                </a>
              </div>
            </ComicPanel>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={CONTACT.resumePath}
                download="Saadia_Asghar_Resume.png"
                className="flex-1 comic-sticker bg-spider-cyan text-black flex items-center justify-center gap-2 py-4 font-tech font-black text-xs uppercase tracking-widest"
              >
                <Download size={18} /> Download PNG
              </a>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="flex-1 comic-sticker bg-white/5 text-white border-white/30 flex items-center justify-center gap-2 py-4 font-tech font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-colors"
              >
                <Maximize2 size={18} /> Fullscreen
              </button>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ComicPanel accent="purple" tilt={0.5} stamp="CV">
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="relative w-full block focus:outline-none focus-visible:ring-2 focus-visible:ring-spider-cyan rounded-lg overflow-hidden group"
                aria-label="View resume fullscreen"
              >
                <img
                  src={CONTACT.resumePath}
                  alt="Saadia Asghar resume"
                  className="w-full h-auto rounded-md transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8">
                  <span className="comic-sticker bg-spider-yellow text-black text-[10px] font-mono uppercase tracking-widest px-4 py-2 flex items-center gap-2">
                    <Maximize2 size={14} /> Expand
                  </span>
                </div>
              </button>
            </ComicPanel>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-md flex flex-col p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Resume fullscreen view"
          >
            <motion.div className="flex justify-end mb-4 shrink-0">
              <button
                type="button"
                onClick={() => setExpanded(false)}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Close resume viewer"
              >
                <X size={24} />
              </button>
            </motion.div>
            <motion.div className="flex-1 overflow-auto flex items-start justify-center custom-scrollbar">
              <img
                src={CONTACT.resumePath}
                alt="Saadia Asghar resume full size"
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div className="flex justify-center gap-4 mt-6 shrink-0 pb-4">
              <a
                href={CONTACT.resumePath}
                download="Saadia_Asghar_Resume.png"
                className="px-8 py-3 rounded-xl bg-spider-cyan text-black font-tech font-black text-xs uppercase tracking-widest flex items-center gap-2"
              >
                <Download size={16} /> Download
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumeSection;
