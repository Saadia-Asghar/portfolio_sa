import React from 'react';
import { motion } from 'framer-motion';
import {
  Linkedin,
  Instagram,
  Megaphone,
  Video,
  Sparkles,
  Users,
  TrendingUp,
  ExternalLink,
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import ComicPanel from './ComicPanel';
import {
  CONTACT,
  PROFILE,
  SOCIAL_METRICS,
  MARKETING_SCENES,
  CREATIVE_LAB,
  OPEN_TO,
} from '../data/portfolio';

const ICONS = { Megaphone, Video, Users, TrendingUp, Sparkles };

const StatCard = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="text-center p-4 md:p-6 border border-white/10 rounded-xl bg-white/[0.03] hover:border-spider-magenta/40 transition-colors"
  >
    <p className="font-display text-3xl md:text-4xl text-spider-yellow tracking-wide">{value}</p>
    <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest mt-2 leading-snug">{label}</p>
  </motion.div>
);

const SceneCard = ({ scene, index }) => {
  const Icon = ICONS[scene.icon] || Megaphone;
  const accents = ['magenta', 'cyan', 'yellow', 'purple', 'magenta'];

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 ? 24 : -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <ComicPanel accent={accents[index % accents.length]} tilt={index % 2 ? 0.8 : -0.8} stamp={scene.scene}>
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-spider-cyan">
              <Icon size={20} />
            </div>
            <div className="text-right">
              <p className="text-[9px] font-mono text-gray-500 uppercase">{scene.period}</p>
              <p className="text-[9px] font-mono text-gray-600">{scene.location}</p>
            </div>
          </div>

          <div>
            <p className="font-mono text-[9px] text-spider-magenta uppercase tracking-[0.3em] mb-1">
              Scene {scene.scene}
            </p>
            <h3 className="font-display text-xl md:text-2xl text-white tracking-wide uppercase leading-tight">
              {scene.title}
            </h3>
            {scene.role && (
              <p className="text-spider-yellow font-mono text-[10px] uppercase tracking-wider mt-2 font-bold">
                {scene.role}
              </p>
            )}
          </div>

          <p className="text-sm text-gray-400 font-tech leading-relaxed">{scene.body}</p>

          {scene.metrics && (
            <div className="flex flex-wrap gap-2 pt-2">
              {scene.metrics.map((m) => (
                <span
                  key={m}
                  className="text-[9px] font-mono px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-400"
                >
                  {m}
                </span>
              ))}
            </div>
          )}

          {scene.link && (
            <a
              href={scene.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[10px] font-mono text-spider-cyan uppercase tracking-widest hover:underline mt-2"
            >
              {scene.linkLabel || 'View'} <ExternalLink size={12} />
            </a>
          )}
        </div>
      </ComicPanel>
    </motion.div>
  );
};

const MarketingSection = () => (
  <section id="marketing" className="py-20 md:py-28 relative scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SectionHeader
        index="02 · MARKETING"
        title="Digital Storyteller"
        subtitle="Content strategy · personal branding · campus marketing leadership"
        accent="magenta"
        align="left"
      />

      {/* Opening narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <ComicPanel accent="magenta" tilt={-0.5}>
            <blockquote className="font-accent text-lg md:text-xl text-spider-yellow italic mb-6 leading-relaxed">
              &ldquo;{PROFILE.quote}&rdquo;
            </blockquote>
            <p className="text-gray-300 font-tech leading-relaxed mb-4">{PROFILE.storyIntro}</p>
            <p className="text-gray-500 font-tech text-sm leading-relaxed">{PROFILE.storyBody}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-sticker bg-spider-magenta/30 text-white px-5 py-2.5 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 hover:bg-spider-magenta/50 transition-colors"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="comic-sticker bg-purple-500/30 text-white px-5 py-2.5 text-[10px] font-mono uppercase tracking-widest flex items-center gap-2 hover:bg-purple-500/50 transition-colors"
              >
                <Instagram size={14} /> @s._bytes
              </a>
            </div>
          </ComicPanel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-4"
        >
          <p className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.35em] mb-2">Reach & impact</p>
          <div className="grid grid-cols-1 gap-3">
            {SOCIAL_METRICS.map((s, i) => (
              <StatCard key={s.label} {...s} delay={i * 0.08} />
            ))}
          </div>
          <p className="text-[10px] font-mono text-gray-600 italic pt-2">
            Building in public on LinkedIn — next chapter: tech reels on Instagram.
          </p>
        </motion.div>
      </div>

      {/* Scene grid */}
      <p className="font-display text-spider-cyan text-xl tracking-wider uppercase mb-8 -rotate-1">
        ✦ Story Scenes
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-20">
        {MARKETING_SCENES.map((scene, i) => (
          <SceneCard key={scene.scene} scene={scene} index={i} />
        ))}
      </div>

      {/* Creative Lab */}
      <div className="mb-16">
        <SectionHeader
          index="CREATIVE LAB"
          title="Generative AI Studio"
          subtitle={CREATIVE_LAB.subtitle}
          accent="yellow"
          align="left"
        />
        <ComicPanel accent="yellow" tilt={0.5}>
          <p className="text-gray-400 font-tech text-sm leading-relaxed mb-8 max-w-2xl">{CREATIVE_LAB.desc}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CREATIVE_LAB.steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 border border-dashed border-white/10 rounded-xl bg-white/[0.02] hover:border-spider-yellow/30 transition-colors"
              >
                <span className="font-display text-4xl text-spider-yellow/30">{String(i + 1).padStart(2, '0')}</span>
                <h4 className="font-display text-lg text-white tracking-wide uppercase mt-2">{step.title}</h4>
                <p className="text-xs text-gray-500 font-tech mt-2 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </ComicPanel>
      </div>

      {/* Open to */}
      <ComicPanel accent="cyan" tilt={-0.5}>
        <h3 className="font-display text-2xl text-spider-cyan uppercase tracking-wide mb-4">Open To</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OPEN_TO.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-gray-400 font-tech">
              <span className="text-spider-cyan mt-1">▸</span>
              {item}
            </div>
          ))}
        </div>
      </ComicPanel>
    </div>
  </section>
);

export default MarketingSection;
