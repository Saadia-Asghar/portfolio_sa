import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const ContactStrip = ({ onGoContact }) => (
  <section id="connect" className="mag-correspondence-strip">
    <div className="mag-correspondence-strip-inner">
      <div>
        <p className="mag-section-kicker">Correspondence</p>
        <p className="folio-contact-strip-title">Continue the conversation</p>
        <a href={`mailto:${CONTACT.email}`} className="folio-contact-strip-email">
          {CONTACT.email}
        </a>
      </div>
      <button type="button" onClick={onGoContact} className="folio-btn-primary">
        <Mail size={14} /> Write to me <ArrowRight size={14} />
      </button>
    </div>
  </section>
);

export default ContactStrip;
