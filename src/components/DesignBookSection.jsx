import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, Figma, Palette } from 'lucide-react';
import { DESIGN_BOOK, DESIGN_BOOK_TABS } from '../data/designBook';
import { PORTFOLIO_PATHS, hashForPath } from '../data/paths';
import VolumePathLayout from './VolumePathLayout';
import VolumeShell from './VolumeShell';
import HighlightHeading from './HighlightHeading';

const ChapterTitle = ({ children }) => (
  <HighlightHeading as="h3" tone="design" className="book-chapter-title">
    {children}
  </HighlightHeading>
);

const LinkChip = ({ href, label, variant = 'figma' }) => {
  if (!href) return null;
  const Icon = variant === 'canva' ? Palette : Figma;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`book-link-chip book-link-chip-${variant}`}
    >
      <Icon size={14} />
      {label}
      <ExternalLink size={12} className="opacity-60" />
    </a>
  );
};

const WorkCard = ({ item, showDesc = false, variant = 'product' }) => {
  const linkVariant = item.link?.includes('canva') ? 'canva' : 'figma';

  return (
    <article className="book-work-open">
      {item.image && (
        <a href={item.link} target="_blank" rel="noopener noreferrer" className="book-work-image-wrap">
          <img src={item.image} alt={item.title} className="book-work-image" loading="lazy" />
          <div className="book-work-image-overlay">
            <span>{item.linkLabel || 'View project'}</span>
          </div>
        </a>
      )}
      {!item.image && item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`book-work-placeholder book-work-placeholder-${variant}`}
        >
          <Palette size={28} strokeWidth={1.5} />
          <span>Open in Canva</span>
        </a>
      )}
      <div className="book-work-body">
        {item.badge && <span className="book-work-badge">{item.badge}</span>}
        <h4 className="book-work-title">{item.title}</h4>
        {(item.role || item.subtitle) && (
          <p className="book-work-meta">{item.role || item.subtitle}</p>
        )}
        {showDesc && (item.desc || item.impact) && (
          <p className="book-work-desc">{item.desc || item.impact}</p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {(item.tags || []).map((t) => (
            <span key={t} className="book-tag">
              {t}
            </span>
          ))}
        </div>
        {item.link && (
          <div className="mt-3">
            <LinkChip href={item.link} label={item.linkLabel || 'Open'} variant={linkVariant} />
          </div>
        )}
      </div>
    </article>
  );
};

const WorkGrid = ({ items, showDesc = false, variant = 'product' }) => (
  <div className="book-work-grid">
    {items.map((item) => (
      <WorkCard key={item.id || item.title} item={item} showDesc={showDesc} variant={variant} />
    ))}
  </div>
);

const CoverPage = ({ onOpenChapter }) => (
  <div className="mag-design-cover book-page-inner">
    <p className="mag-design-kicker">{DESIGN_BOOK.edition}</p>

    <div className="mag-design-cover-hero">
      <HighlightHeading as="h2" tone="design" className="mag-design-cover-title">
        Saadia Asghar
      </HighlightHeading>
      <p className="mag-design-cover-sub">Product Designer · Storyteller</p>
      <p className="mag-design-cover-tagline">{DESIGN_BOOK.tagline}</p>
      <p className="mag-design-cover-line">{DESIGN_BOOK.heroLine}</p>
    </div>

    <div className="mag-design-skills" aria-label="Design focus areas">
      {DESIGN_BOOK.marqueeWords.slice(0, 10).map((word) => (
        <span key={word}>{word}</span>
      ))}
    </div>

    <button type="button" className="mag-design-featured" onClick={() => onOpenChapter?.('vyrothon')}>
      <img src={DESIGN_BOOK.vyrothon.image} alt="Vyrothon prototype preview" loading="lazy" />
      <div>
        <span className="mag-design-featured-badge">Featured · 1st Product Design</span>
        <p className="mag-design-featured-title">Vyrothon case study → open chapter II</p>
      </div>
    </button>

    <div className="mag-design-stats">
      {DESIGN_BOOK.stats.map((s) => (
        <div key={s.label} className="mag-design-stat">
          <span className="mag-design-stat-num">{s.value}</span>
          <span className="mag-design-stat-lbl">{s.label}</span>
        </div>
      ))}
    </div>

    <p className="mag-design-hint">Use the section tabs above to open a chapter.</p>
  </div>
);

const ManifestoPage = () => (
  <div className="book-page-inner">
    <ChapterTitle>I · Manifesto</ChapterTitle>
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
      <ChapterTitle>II · Featured Case Study</ChapterTitle>
      <div className="book-featured-hero">
        <img src={v.image} alt={v.title} className="book-featured-img" />
        <div className="book-featured-caption">
          <span className="book-work-badge">{v.badge}</span>
          <h4 className="text-lg font-bold book-ink mt-2">{v.title}</h4>
          <p className="book-work-meta">{v.event}</p>
        </div>
      </div>
      <p className="book-body mt-4">{v.summary}</p>
      <LinkChip href={v.figmaUrl} label="View the design on Figma" variant="figma" />
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
    <ChapterTitle>III · Product Design</ChapterTitle>
    <p className="book-body mb-6">
      Figma · interactive prototypes · hi-fi UI — end-to-end product work from hackathons to independent concepts.
    </p>
    <WorkGrid items={DESIGN_BOOK.productWork} showDesc variant="product" />
  </div>
);

const AcmPage = () => (
  <div className="book-page-inner">
    <ChapterTitle>IV · ACM · GIKI</ChapterTitle>
    <p className="book-body mb-6">
      Core Design &amp; Marketing — posters, event identities, and campaign collateral for ACM at GIKI.
    </p>
    <WorkGrid items={DESIGN_BOOK.acmWork} variant="acm" />
  </div>
);

const MlsaPage = () => (
  <div className="book-page-inner">
    <ChapterTitle>V · MLSA · Microsoft Club</ChapterTitle>
    <p className="book-body mb-6">
      Visual identity, certificates, carousels, and event collateral for MLSA at GIKI.
    </p>
    <WorkGrid items={DESIGN_BOOK.mlsaWork} variant="mlsa" />
  </div>
);

const PreMedPage = () => {
  const p = DESIGN_BOOK.premed;
  return (
    <div className="book-page-inner">
      <ChapterTitle>VI · Featured Case Study</ChapterTitle>
      <span className="book-work-badge">{p.badge}</span>
      <h4 className="text-lg font-bold book-ink mt-2">{p.title}</h4>
      <p className="book-work-meta">{p.period}</p>
      <p className="book-body mt-4">{p.summary}</p>
      <div className="grid grid-cols-3 gap-2 mt-4">
        {p.metrics.map((m) => (
          <div key={m.label} className="book-stat-chip">
            <span className="book-stat-num">{m.value}</span>
            <span className="book-stat-lbl">{m.label}</span>
          </div>
        ))}
      </div>
      <p className="book-section-label mt-6">The Problem</p>
      <p className="book-body">{p.problem}</p>
      <p className="book-section-label mt-4">My Role</p>
      <p className="book-body">{p.myRole}</p>
      <p className="book-section-label mt-4">The Approach</p>
      <ol className="book-numbered">
        {p.approach.map((step, i) => (
          <li key={step}>
            <span>{String(i + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ol>
      <p className="book-section-label mt-4">The Outcome</p>
      <p className="book-body">{p.outcome}</p>
      <p className="book-section-label mt-6">Selected deliverables</p>
      <WorkGrid items={DESIGN_BOOK.premedWork} showDesc variant="premed" />
    </div>
  );
};

const ProcessPage = () => (
  <div className="book-page-inner">
    <ChapterTitle>VII · How I Work</ChapterTitle>
    <p className="book-body mb-6">Listen · Frame · Prototype · Edit — a short loop on every project.</p>
    <div className="book-process-grid">
      {DESIGN_BOOK.process.map((p) => (
        <div key={p.step} className="book-process-step">
          <span className="book-process-n">Step {p.step} / 4</span>
          <h4 className="font-bold book-ink">{p.title}</h4>
          <p className="book-body text-sm mt-1">{p.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const AwardsPage = () => (
  <div className="book-page-inner">
    <ChapterTitle>VIII · Recognition</ChapterTitle>
    <div className="space-y-3 mb-8">
      {DESIGN_BOOK.awards.map((a) => (
        <div key={a.title + a.period} className="book-award-row">
          <div>
            <p className="font-semibold book-ink">{a.title}</p>
            <p className="text-sm text-book-muted">{a.context}</p>
            {a.link && (
              <LinkChip href={a.link} label="View design" variant={a.link.includes('canva') ? 'canva' : 'figma'} />
            )}
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
    <p className="book-section-label">Tech stack</p>
    <div className="flex flex-wrap gap-2 mb-6">
      {DESIGN_BOOK.techStack.map((t) => (
        <span key={t} className="book-tag">
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
  manifesto: ManifestoPage,
  vyrothon: VyrothonPage,
  product: ProductPage,
  acm: AcmPage,
  mlsa: MlsaPage,
  premed: PreMedPage,
  process: ProcessPage,
  awards: AwardsPage,
};

const DesignBookSection = ({ embedded = false, onBack, initialSection }) => {
  const [activeTab, setActiveTab] = useState('cover');
  const Page = PAGE_MAP[activeTab];

  useEffect(() => {
    const tabId =
      initialSection === 'design' || !initialSection ? 'cover' : initialSection;
    if (DESIGN_BOOK_TABS.some((t) => t.id === tabId)) {
      setActiveTab(tabId);
    }
  }, [initialSection]);

  const onTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
    const hash = hashForPath('design', tabId);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}#${hash}`);
  }, []);

  const spine = PORTFOLIO_PATHS.design.volume?.spine || `DESIGN · ${DESIGN_BOOK.edition}`;

  const shell = (
    <VolumeShell
      accent="design"
      tabs={DESIGN_BOOK_TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
      spineText={`SAADIA · ${spine}`}
    >
      {activeTab === 'cover' ? <CoverPage onOpenChapter={onTabChange} /> : Page ? <Page /> : null}
    </VolumeShell>
  );

  if (embedded && onBack) {
    return (
      <VolumePathLayout path="design" onBack={onBack} embedded>
        <div id="design">{shell}</div>
      </VolumePathLayout>
    );
  }

  return (
    <section id="design" className="volume-zone volume-zone-design scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-20 relative z-10">
        <div className="text-center mb-10">
          <p className="volume-eyebrow volume-eyebrow-on-zone">Design Portfolio</p>
          <h2 className="volume-title font-display text-center">Open the Design Book</h2>
          <p className="volume-tagline text-center mx-auto max-w-lg">
            Every chapter links to Figma prototypes &amp; Canva designs — tap a card to explore the real work.
          </p>
        </div>
        {shell}
      </div>
      <div className="book-cloud book-cloud-1" aria-hidden />
      <div className="book-cloud book-cloud-2" aria-hidden />
    </section>
  );
};

export default DesignBookSection;
