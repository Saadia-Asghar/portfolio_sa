import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { DESIGN_BOOK, DESIGN_BOOK_TABS } from '../data/designBook';

const WorkGrid = ({ items, showDesc = false }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
    {items.map((item) => (
      <div key={item.title} className="book-work-card">
        {item.badge && <span className="book-work-badge">{item.badge}</span>}
        <h4 className="book-work-title">{item.title}</h4>
        {item.role && <p className="book-work-meta">{item.role}</p>}
        {showDesc && item.desc && <p className="book-work-desc">{item.desc}</p>}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {(item.tags || []).map((t) => (
            <span key={t} className="book-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const CoverPage = () => (
  <div className="book-page-inner book-cover-page">
    <p className="book-edition">{DESIGN_BOOK.edition}</p>
    <h2 className="book-cover-title">Saadia Asghar</h2>
    <p className="book-cover-sub">Product Designer · Portfolio</p>
    <p className="book-cover-tagline">{DESIGN_BOOK.tagline}</p>
    <p className="book-cover-line">{DESIGN_BOOK.heroLine}</p>
    <div className="grid grid-cols-2 gap-3 mt-8">
      {DESIGN_BOOK.stats.map((s) => (
        <div key={s.label} className="book-stat-chip">
          <span className="book-stat-num">{s.value}</span>
          <span className="book-stat-lbl">{s.label}</span>
        </div>
      ))}
    </div>
    <p className="book-hint mt-8">Pick a bookmark tab to open a chapter →</p>
  </div>
);

const ManifestoPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">I · Manifesto</h3>
    <blockquote className="book-quote">{DESIGN_BOOK.manifesto.quote}</blockquote>
    <p className="book-body">{DESIGN_BOOK.manifesto.bio}</p>
    <p className="book-section-label mt-6">Principles</p>
    <ul className="book-principles">
      {DESIGN_BOOK.manifesto.principles.map((p) => (
        <li key={p.n}>
          <span className="book-principle-n">{p.n}</span>
          {p.text}
        </li>
      ))}
    </ul>
  </div>
);

const VyrothonPage = () => {
  const v = DESIGN_BOOK.vyrothon;
  return (
    <div className="book-page-inner">
      <h3 className="book-chapter-title">II · Featured Case Study</h3>
      <span className="book-work-badge">{v.badge}</span>
      <h4 className="text-xl font-bold text-book-ink mt-2">{v.title}</h4>
      <p className="book-work-meta">{v.event}</p>
      <p className="book-body mt-4">{v.summary}</p>
      <a href={v.figmaUrl} target="_blank" rel="noopener noreferrer" className="book-link-btn mt-4">
        View on design portfolio <ExternalLink size={14} />
      </a>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-6">
        {v.metrics.map((m) => (
          <div key={m.label} className="book-stat-chip">
            <span className="book-stat-num">{m.value}</span>
            <span className="book-stat-lbl">{m.label}</span>
          </div>
        ))}
      </div>
      <p className="book-section-label mt-6">The Problem</p>
      <p className="book-body">{v.problem}</p>
      <p className="book-section-label mt-4">The Approach</p>
      <ol className="book-numbered">
        {v.approach.map((step, i) => (
          <li key={step}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ol>
      <p className="book-section-label mt-4">The Outcome</p>
      <p className="book-body">{v.outcome}</p>
    </div>
  );
};

const ProductPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">III · Product Design</h3>
    <p className="book-body mb-6">
      End-to-end product work — from independent concepts to hackathon submissions. Vyrothon is in Chapter II; more below.
    </p>
    <WorkGrid items={DESIGN_BOOK.productWork} showDesc />
  </div>
);

const AcmPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">IV · ACM · GIKI</h3>
    <p className="book-body mb-6">Posters, event identities, and marketing collateral for ACM at GIKI.</p>
    <WorkGrid items={DESIGN_BOOK.acmWork} />
  </div>
);

const MlsaPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">V · MLSA · Microsoft Club</h3>
    <p className="book-body mb-6">
      Visual identity, certificates, carousels, and event collateral for MLSA at GIKI.
    </p>
    <WorkGrid items={DESIGN_BOOK.mlsaWork} />
  </div>
);

const PreMedPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">VI · PreMed.PK</h3>
    <p className="book-body mb-6">
      Graphic Design Associate · Remote · May 2025 — visual identity and education collateral.
    </p>
    <WorkGrid items={DESIGN_BOOK.premedWork} showDesc />
  </div>
);

const ProcessPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">VII · How I Work</h3>
    <p className="book-body mb-6">A short loop I run on every project, big or small.</p>
    <div className="space-y-4">
      {DESIGN_BOOK.process.map((p) => (
        <div key={p.step} className="book-process-step">
          <span className="book-process-n">Step {p.step} / 4</span>
          <h4 className="font-bold text-book-ink">{p.title}</h4>
          <p className="book-body text-sm mt-1">{p.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const AwardsPage = () => (
  <div className="book-page-inner">
    <h3 className="book-chapter-title">VIII · Recognition</h3>
    <div className="space-y-3 mb-8">
      {DESIGN_BOOK.awards.map((a) => (
        <div key={a.title + a.period} className="book-award-row">
          <div>
            <p className="font-semibold text-book-ink">{a.title}</p>
            <p className="text-sm text-book-muted">{a.context}</p>
          </div>
          <span className="book-award-date">{a.period}</span>
        </div>
      ))}
    </div>
    <p className="book-section-label">Capabilities</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {DESIGN_BOOK.capabilities.map((c) => (
        <span key={c} className="book-tag">
          {c}
        </span>
      ))}
    </div>
    <p className="book-section-label">Design tools</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {DESIGN_BOOK.designTools.map((t) => (
        <span key={t} className="book-tag book-tag-accent">
          {t}
        </span>
      ))}
    </div>
    <p className="book-section-label">Certifications</p>
    <ul className="book-cert-list">
      {DESIGN_BOOK.designCerts.map((c) => (
        <li key={c}>{c}</li>
      ))}
    </ul>
  </div>
);

const PAGE_MAP = {
  cover: CoverPage,
  manifesto: ManifestoPage,
  vyrothon: VyrothonPage,
  product: ProductPage,
  acm: AcmPage,
  mlsa: MlsaPage,
  premed: PreMedPage,
  process: ProcessPage,
  awards: AwardsPage,
};

const DesignBookSection = () => {
  const [activeTab, setActiveTab] = useState('cover');
  const tabIndex = DESIGN_BOOK_TABS.findIndex((t) => t.id === activeTab);
  const Page = PAGE_MAP[activeTab];

  const goPrev = () => {
    if (tabIndex > 0) setActiveTab(DESIGN_BOOK_TABS[tabIndex - 1].id);
  };
  const goNext = () => {
    if (tabIndex < DESIGN_BOOK_TABS.length - 1) setActiveTab(DESIGN_BOOK_TABS[tabIndex + 1].id);
  };

  return (
    <section id="design" className="design-book-zone scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-sky-200/90 uppercase tracking-widest">Design Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Open the Design Book</h2>
          <p className="text-sky-100/70 mt-2 max-w-lg mx-auto text-sm">
            A pocket-dimension portfolio — flip through chapters like a storybook. Inspired by adventure &amp; gadgets.
          </p>
        </div>

        <div className="design-book-shell">
          {/* Bookmark tabs */}
          <div className="book-tabs" role="tablist" aria-label="Design portfolio chapters">
            {DESIGN_BOOK_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`book-tab ${activeTab === tab.id ? 'book-tab-active' : ''}`}
                style={{ '--tab-hue': tab.id === 'cover' ? '#fde047' : undefined }}
              >
                <span className="book-tab-roman">{tab.roman}</span>
                <span className="book-tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Book body */}
          <div className="design-book-body">
            <div className="book-spine" aria-hidden>
              <span className="book-spine-text">SAADIA · DESIGN · {DESIGN_BOOK.edition}</span>
            </div>

            <div className="book-pages">
              <div className="book-page-edge" aria-hidden />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, rotateY: -8, x: 20 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  exit={{ opacity: 0, rotateY: 8, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="book-page"
                  role="tabpanel"
                >
                  <Page />
                </motion.div>
              </AnimatePresence>

              <div className="book-nav">
                <button type="button" onClick={goPrev} disabled={tabIndex === 0} className="book-nav-btn" aria-label="Previous chapter">
                  <ChevronLeft size={18} /> Prev
                </button>
                <span className="book-nav-indicator">
                  {DESIGN_BOOK_TABS[tabIndex].roman} · {DESIGN_BOOK_TABS[tabIndex].label}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={tabIndex === DESIGN_BOOK_TABS.length - 1}
                  className="book-nav-btn"
                  aria-label="Next chapter"
                >
                  Next <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Gadget pocket decoration */}
            <div className="book-gadget-pocket" aria-hidden>
              <div className="book-gadget-ring" />
              <span className="book-gadget-dot" />
            </div>
          </div>
        </div>

        <p className="text-center text-sky-200/50 text-xs mt-6">
          Also live at{' '}
          <a
            href="https://design-portfolio-rouge-five.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-sky-100"
          >
            design-portfolio-rouge-five.vercel.app
          </a>
        </p>
      </div>
    </section>
  );
};

export default DesignBookSection;
