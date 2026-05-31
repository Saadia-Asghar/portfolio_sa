import React from 'react';
import { CONTACT, SKILL_GROUPS } from '../data/portfolio';

const TerminalFooter = () => (
  <footer className="border-t border-white/10 py-12 px-4 md:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
      <div>
        <p className="font-tech font-bold text-white text-lg">{CONTACT.name}</p>
        <p className="text-sm text-gray-500 mt-1">{CONTACT.email}</p>
        <p className="text-sm text-gray-500">{CONTACT.location}</p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 max-w-md">
        {SKILL_GROUPS.flatMap((g) => g.skills).slice(0, 12).map((s) => (
          <span key={s} className="text-[10px] font-mono text-gray-600">{s}</span>
        ))}
      </div>
      <p className="text-[10px] font-mono text-gray-700 uppercase tracking-widest md:self-end">
        © {new Date().getFullYear()} · GIKI Data Science
      </p>
    </div>
  </footer>
);

export default TerminalFooter;
