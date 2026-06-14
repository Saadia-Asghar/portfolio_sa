import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import HighlightHeading from './HighlightHeading';

export const VolumeChapter = ({ roman, title, subtitle, children, tone = 'accent' }) => (
  <article className="mag-article signal-panel-inner volume-page-inner">
    <header className="mag-article-head signal-panel-head volume-chapter-head">
      {roman && <p className="mag-article-roman signal-panel-roman volume-chapter-roman">{roman}</p>}
      <HighlightHeading as="h2" tone={tone} className="mag-article-title signal-panel-title volume-chapter-title">
        {title}
      </HighlightHeading>
      {subtitle && <p className="mag-article-dek signal-panel-lead volume-chapter-lead">{subtitle}</p>}
    </header>
    <div className="mag-article-body volume-embed signal-embed">{children}</div>
  </article>
);

const VolumeShell = ({
  accent = 'design',
  tabs,
  activeTab,
  onTabChange,
  spineText,
  children,
  pageKey,
}) => {
  const tabIndex = tabs.findIndex((t) => t.id === activeTab);
  const current = tabs[tabIndex] || tabs[0];
  const pageRef = useRef(null);

  useEffect(() => {
    pageRef.current?.scrollTo({ top: 0, left: 0 });
  }, [activeTab, pageKey]);

  const goPrev = () => {
    if (tabIndex > 0) onTabChange(tabs[tabIndex - 1].id);
  };
  const goNext = () => {
    if (tabIndex < tabs.length - 1) onTabChange(tabs[tabIndex + 1].id);
  };

  return (
    <div className={`signal-shell volume-shell volume-shell-${accent}`}>
      <div className="signal-tabs volume-tabs" role="tablist" aria-label="Portfolio chapters">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`signal-tab volume-tab ${activeTab === tab.id ? 'signal-tab-active volume-tab-active' : ''}`}
          >
            <span className="signal-tab-roman book-tab-roman">{tab.roman}</span>
            <span className="signal-tab-label book-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="signal-body volume-body">
        <div className={`signal-spine volume-spine volume-spine-${accent}`} aria-hidden>
          <span className="book-spine-text">{spineText}</span>
        </div>

        <div className="signal-pages volume-pages">
          <AnimatePresence mode="wait">
            <motion.div
              ref={pageRef}
              key={pageKey || activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="signal-page volume-page"
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          <div className="signal-nav volume-nav">
            <button
              type="button"
              onClick={goPrev}
              disabled={tabIndex <= 0}
              className="signal-nav-btn book-nav-btn"
              aria-label="Previous chapter"
            >
              <ChevronLeft size={18} /> Prev
            </button>
            <span className="signal-nav-indicator book-nav-indicator">
              {current?.roman} · {current?.label}
            </span>
            <button
              type="button"
              onClick={goNext}
              disabled={tabIndex >= tabs.length - 1}
              className="signal-nav-btn book-nav-btn"
              aria-label="Next chapter"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeShell;
