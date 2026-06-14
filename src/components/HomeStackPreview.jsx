import React from 'react';
import TechStackSection from './TechStackSection';

const HomeStackPreview = ({ onViewAll }) => (
  <section id="stack-preview" className="folio-section folio-section-wide">
    <h2 className="folio-heading">Tools</h2>
    <p className="folio-body folio-section-intro">
      Technologies across data science, product design, and full-stack development.
    </p>
    <TechStackSection embedded />
    <button type="button" onClick={onViewAll} className="folio-link" style={{ marginTop: '1.25rem' }}>
      Full stack in Build path →
    </button>
  </section>
);

export default HomeStackPreview;
