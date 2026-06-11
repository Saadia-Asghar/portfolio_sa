import React from 'react';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

const FOOTER_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'My Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#connect' },
];

const FOOTER_SOCIAL = [
  { label: 'GitHub', href: CONTACT.github, icon: Github },
  { label: 'LinkedIn', href: CONTACT.linkedin, icon: Linkedin },
  { label: 'Instagram', href: CONTACT.instagram, icon: Instagram },
  { label: 'Email', href: `mailto:${CONTACT.email}`, icon: Mail },
];

const TerminalFooter = () => (
  <footer className="border-t border-white/10 py-12 px-4 md:px-8 bg-black/40">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      <div>
        <p className="font-semibold text-lg text-white">Saadia Asghar</p>
        <p className="text-sm text-gray-500 mt-2 font-tech">{CONTACT.email}</p>
        <p className="text-sm text-gray-600">{CONTACT.location}</p>
        <p className="text-[10px] font-mono text-gray-700 uppercase tracking-widest mt-6">
          © {new Date().getFullYear()} · GIKI Data Science
        </p>
      </div>

      <div>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Important Links</p>
        <ul className="space-y-2">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm text-gray-400 hover:text-spider-cyan font-tech transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-4">Social</p>
        <ul className="space-y-2">
          {FOOTER_SOCIAL.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-spider-magenta font-tech transition-colors"
              >
                <Icon size={14} /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

export default TerminalFooter;
