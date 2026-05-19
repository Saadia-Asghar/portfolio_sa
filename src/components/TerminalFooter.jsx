import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { CONTACT, SKILL_GROUPS } from '../data/portfolio';

const TerminalFooter = () => {
  const allSkills = SKILL_GROUPS.flatMap((g) => g.skills);

  return (
    <footer className="bg-spider-black border-t border-white/10 py-14 px-4 md:px-8 font-tech">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="w-full md:w-3/5">
          <div className="flex items-center gap-2 mb-4">
            <motion.div className="w-3 h-3 rounded-full bg-spider-magenta" />
            <motion.div className="w-3 h-3 rounded-full bg-spider-yellow" />
            <motion.div className="w-3 h-3 rounded-full bg-spider-cyan" />
            <span className="ml-2 text-gray-500 text-xs font-mono">saadia@portfolio ~</span>
          </div>

          <div className="bg-white/5 p-6 md:p-8 rounded-xl border border-white/5 font-mono text-sm">
            <p className="text-spider-cyan mb-4">{`> stack --list`}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-white text-xs">
              {allSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: i * 0.02 }}
                  viewport={{ once: true }}
                  className="hover:text-spider-cyan transition-colors"
                >
                  [{skill}]
                </motion.span>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/5 space-y-1 text-xs">
              <p className="text-spider-magenta font-bold">{`> ${CONTACT.location}`}</p>
              <p className="text-spider-yellow">{`> ${CONTACT.email}`}</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-8">
          <div>
            <h4 className="text-spider-cyan text-sm font-bold mb-4 tracking-widest uppercase">Connect</h4>
            <motion.div className="grid grid-cols-2 gap-3">
              {[
                { name: 'GitHub', icon: <Github size={18} />, link: CONTACT.github },
                { name: 'LinkedIn', icon: <Linkedin size={18} />, link: CONTACT.linkedin },
                { name: 'Email', icon: <Mail size={18} />, link: `mailto:${CONTACT.email}` },
                { name: 'Instagram', icon: <Instagram size={18} />, link: CONTACT.instagram },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-spider-cyan font-mono text-xs transition-colors p-2 rounded-lg hover:bg-white/5"
                >
                  {social.icon}
                  {social.name}
                </a>
              ))}
            </motion.div>
          </div>

          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-mono">
            © {new Date().getFullYear()} {CONTACT.name}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;
