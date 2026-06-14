import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: CONTACT.github, icon: Github },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin },
  { label: 'Instagram', href: CONTACT.instagram, icon: Instagram },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail },
];

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="folio-form">
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        <div>
          <label htmlFor="contact-name" className="folio-label">
            Name *
          </label>
          <input id="contact-name" name="name" type="text" required className="folio-input" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="folio-label">
            Email *
          </label>
          <input id="contact-email" name="email" type="email" required className="folio-input" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="contact-message" className="folio-label">
            Message *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="folio-input resize-none"
            placeholder="Tell me about the role, project, or collaboration…"
          />
        </div>
        <button type="submit" className="folio-btn-primary gap-2">
          <Send size={16} /> Send email
        </button>
        {sent && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="folio-body" style={{ margin: 0 }}>
            Opening your email client…
          </motion.p>
        )}
      </form>

      <div className="folio-social-row">
        <p className="folio-label w-full mb-1">Or connect directly</p>
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="folio-social-chip">
            <Icon size={16} />
            {label}
          </a>
        ))}
      </div>
      <p className="folio-body" style={{ marginTop: '1rem', fontSize: '0.8125rem' }}>
        I typically respond within 24 hours. For urgent inquiries, email or LinkedIn is fastest.
      </p>
    </div>
  );
};

export default ContactForm;
