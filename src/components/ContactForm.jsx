import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: CONTACT.github, icon: Github, color: 'hover:text-white' },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin, color: 'hover:text-spider-cyan' },
  { label: 'Instagram', href: CONTACT.instagram, icon: Instagram, color: 'hover:text-spider-magenta' },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail, color: 'hover:text-spider-yellow' },
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
    <div className="max-w-lg mx-auto w-full">
      <form onSubmit={handleSubmit} className="contact-form space-y-4 text-left">
        <div>
          <label htmlFor="contact-name" className="contact-label">
            Name <span className="text-spider-magenta">*</span>
          </label>
          <input id="contact-name" name="name" type="text" required className="contact-input" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="contact-label">
            Email <span className="text-spider-magenta">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required className="contact-input" placeholder="you@email.com" />
        </div>
        <div>
          <label htmlFor="contact-message" className="contact-label">
            Message <span className="text-spider-magenta">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            className="contact-input resize-none"
            placeholder="Tell me about your project, role, or collaboration idea…"
          />
        </div>
        <button type="submit" className="btn-primary w-full sm:w-auto gap-2">
          <Send size={16} /> Send Email
        </button>
        {sent && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-mono text-spider-cyan">
            Opening your email client…
          </motion.p>
        )}
      </form>

      <div className="mt-10 pt-8 border-t border-white/10">
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Or contact me with…</p>
        <div className="flex flex-wrap justify-center gap-3">
          {SOCIAL_LINKS.map(({ label, href, icon: Icon, color }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-chip ${color}`}
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs text-gray-600 font-tech mt-6 leading-relaxed">
          I typically respond within 24 hours. For urgent inquiries, email or LinkedIn is fastest.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
