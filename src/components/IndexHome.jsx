import React, { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { HERO_ROLES, JOB_SEEKER } from '../data/portfolio';
import { POPULAR_QUERIES, searchPortfolio } from '../data/searchIndex';
import HighlightHeading from './HighlightHeading';
import HomeWins from './HomeWins';
import HomeAmbassadors from './HomeAmbassadors';

const IndexHome = ({ onNavigate, onGoHomeSection }) => {
  const [query, setQuery] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);
  const results = searchPortfolio(query);

  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % HERO_ROLES.length), 2800);
    return () => clearInterval(t);
  }, []);

  const openResult = (item) => {
    if (item.path === 'home') {
      onGoHomeSection?.(item.section);
    } else {
      onNavigate(item.path, item.section);
    }
    setQuery('');
    setFocused(false);
  };

  const runPopular = (term) => {
    setQuery(term);
    inputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (results[0]) openResult(results[0]);
  };

  return (
    <header id="paths" className="mag-cover">
      <div className="mag-masthead">
        <span className="mag-masthead-rule" aria-hidden />
        <p className="mag-masthead-title">Saadia · Portfolio Review</p>
        <p className="mag-masthead-meta">Issue 01 · GIKI · Build · Design · Grow</p>
        <span className="mag-masthead-rule" aria-hidden />
      </div>

      <div className="mag-cover-hero">
        <HighlightHeading as="h1" tone="lemon" className="mag-cover-name hl-hero">
          Saadia Asghar
        </HighlightHeading>
        <p className="mag-cover-role" aria-live="polite">
          {HERO_ROLES[roleIndex]}
        </p>
        <p className="mag-cover-status">{JOB_SEEKER.status}</p>
      </div>

      <HomeWins onSelectPath={onNavigate} />

      <HomeAmbassadors onSelectPath={onNavigate} />

      <div className="mag-search">
        <p className="mag-search-prompt">What would you like to read?</p>
        <form className="mag-search-form" onSubmit={handleSubmit} role="search">
          <Search size={18} className="mag-search-icon" aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setTimeout(() => setFocused(false), 180)}
            placeholder="Try “hackathons”, “figma”, “marketing”…"
            className="mag-search-input"
            aria-label="Search portfolio"
            autoComplete="off"
          />
          {query && (
            <button type="submit" className="mag-search-go" aria-label="Open top result">
              <ArrowRight size={16} />
            </button>
          )}
        </form>

        {!query && (
          <div className="mag-search-suggestions">
            {POPULAR_QUERIES.map((term) => (
              <button key={term} type="button" className="mag-search-suggestion" onClick={() => runPopular(term)}>
                {term}
              </button>
            ))}
          </div>
        )}

        {query && focused && (
          <ul className="mag-search-results" role="listbox">
            {results.length === 0 ? (
              <li className="mag-search-empty">No matches — try “projects”, “design”, or “resume”.</li>
            ) : (
              results.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="mag-search-result"
                    role="option"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => openResult(item)}
                  >
                    <span className={`mag-search-dept mag-search-dept-${item.deptId}`}>{item.dept}</span>
                    <span className="mag-search-result-title">{item.title}</span>
                    <span className="mag-search-result-snippet">{item.snippet}</span>
                  </button>
                </li>
              ))
            )}
          </ul>
        )}
      </div>
    </header>
  );
};

export default IndexHome;
