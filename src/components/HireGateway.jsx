import React from 'react';
import { QUICK_DESTINATIONS } from '../data/paths';

const HireGateway = ({ onNavigate }) => (
  <section className="folio-gateway" aria-label="Quick navigation">
    <p className="folio-gateway-label">Jump to what you need</p>
    <div className="folio-gateway-grid">
      {QUICK_DESTINATIONS.map((dest) => (
        <button
          key={dest.id}
          type="button"
          onClick={() => onNavigate(dest.path, dest.section)}
          className="folio-gateway-chip"
        >
          {dest.label}
        </button>
      ))}
    </div>
  </section>
);

export default HireGateway;
