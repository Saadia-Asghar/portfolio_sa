import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const VolumeChapter = ({ roman, title, subtitle, children }) => (
  <div className="book-page-inner volume-page-inner">
    <header className="volume-chapter-head">
      <h3 className="volume-chapter-title">
        {roman && <span className="volume-chapter-roman">{roman}</span>}
        {title}
      </h3>
      {subtitle && <p className="volume-chapter-lead">{subtitle}</p>}
    </header>
    <div className="volume-embed">{children}</div>
  </div>
);

const VolumeShell = ({
  accent = 'design',
  tabs,
  activeTab,
  onTabChange,
  spineText,
  children,
  showGadget = true,
  pageKey,
}) => {
  const tabIndex = tabs.findIndex((t) => t.id === activeTab);
  const current = tabs[tabIndex] || tabs[0];

  const goPrev = () => {
    if (tabIndex > 0) onTabChange(tabs[tabIndex - 1].id);
  };
  const goNext = () => {
    if (tabIndex < tabs.length - 1) onTabChange(tabs[tabIndex + 1].id);
  };

  return (
    <div className={`design-book-shell volume-shell volume-shell-${accent}`}>
      <div className="book-tabs volume-tabs" role="tablist" aria-label="Portfolio chapters">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`book-tab volume-tab ${activeTab === tab.id ? 'book-tab-active volume-tab-active' : ''}`}
          >
            <span className="book-tab-roman">{tab.roman}</span>
            <span className="book-tab-label">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="design-book-body volume-body">
        <div className={`book-spine volume-spine volume-spine-${accent}`} aria-hidden>
          <span className="book-spine-text">{spineText}</span>
        </div>

        <div className="book-pages volume-pages">
          <div className="book-page-edge" aria-hidden />
          <AnimatePresence mode="wait">
            <motion.div
              key={pageKey || activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="book-page volume-page"
              role="tabpanel"
              aria-labelledby={`tab-${activeTab}`}
            >
              {children}
            </motion.div>
          </AnimatePresence>

          <div className="book-nav volume-nav">
            <button
              type="button"
              onClick={goPrev}
              disabled={tabIndex <= 0}
              className="book-nav-btn"
              aria-label="Previous chapter"
            >
              <ChevronLeft size={18} /> Prev
            </button>
            <span className="book-nav-indicator">
              {current?.roman} · {current?.label}
            </span>
            <button
              type="button"
              onClick={goNext}
              disabled={tabIndex >= tabs.length - 1}
              className="book-nav-btn"
              aria-label="Next chapter"
            >
              Next <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {showGadget && (
          <div className="book-gadget-pocket" aria-hidden>
            <div className="book-gadget-ring" />
            <span className="book-gadget-dot" />
          </div>
        )}
      </div>
    </div>
  );
};

export default VolumeShell;
