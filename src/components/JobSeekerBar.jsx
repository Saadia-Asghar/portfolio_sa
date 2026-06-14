import React from 'react';
import { Briefcase, MapPin, Download, ArrowRight } from 'lucide-react';
import { CONTACT, JOB_SEEKER } from '../data/portfolio';

const JobSeekerBar = ({ onApply }) => (
  <section className="job-seeker-bar" aria-label="Job search status">
    <div className="job-seeker-inner max-w-6xl mx-auto px-4 md:px-8">
      <div className="job-seeker-pulse" aria-hidden />
      <div className="job-seeker-main">
        <div className="job-seeker-status">
          <Briefcase size={16} className="text-accent-build shrink-0" aria-hidden />
          <div>
            <p className="job-seeker-label">{JOB_SEEKER.status}</p>
            <p className="job-seeker-headline">{JOB_SEEKER.headline}</p>
          </div>
        </div>
        <ul className="job-seeker-types">
          {JOB_SEEKER.types.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
      <div className="job-seeker-actions">
        <span className="job-seeker-location">
          <MapPin size={12} aria-hidden /> {JOB_SEEKER.locations.join(' · ')}
        </span>
        <a
          href={CONTACT.resumePath}
          download="Saadia_Asghar_Resume.png"
          className="btn-secondary text-xs !py-2 !px-3 gap-1.5"
        >
          <Download size={14} /> Résumé
        </a>
        <button type="button" onClick={onApply} className="btn-primary text-xs !py-2 !px-4 gap-1.5">
          Apply / Hire <ArrowRight size={14} />
        </button>
      </div>
    </div>
  </section>
);

export default JobSeekerBar;
