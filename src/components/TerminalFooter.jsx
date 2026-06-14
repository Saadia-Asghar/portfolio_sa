import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const FOOTER_LINKS = [
  { label: 'Ambassadors', href: '#ambassadors' },
  { label: 'Wins', href: '#wins' },
  { label: 'Index', href: '#paths' },
  { label: 'About', href: '#about' },
  { label: 'Build', href: '#build' },
  { label: 'Design', href: '#design' },
  { label: 'Grow', href: '#grow' },
  { label: 'Contact', href: '#connect' },
];

const FOOTER_SOCIAL = [
  { label: 'GitHub', href: CONTACT.github, icon: Github },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin },
  { label: 'Instagram', href: CONTACT.instagram, icon: Instagram },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail },
];

const TerminalFooter = () => (
  <footer className="folio-footer">
    <div className="folio-footer-inner">
      <div>
        <p className="folio-footer-name">Saadia Asghar</p>
        <p className="folio-footer-meta">Data Science · Design · Growth</p>
        <p className="folio-footer-meta" style={{ marginTop: '0.75rem' }}>
          © Saadia Asghar · GIKI Institute
        </p>
      </div>
      <nav aria-label="Footer">
        <ul className="folio-footer-links">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="folio-footer-social">
        {FOOTER_SOCIAL.map(({ label, href, icon: Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon size={18} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default TerminalFooter;
