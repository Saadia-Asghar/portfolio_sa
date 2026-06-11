import React from 'react';
import { Linkedin, Instagram, Megaphone, Video, Users, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';
import SectionHeader from './SectionHeader';
import Card from './Card';
import {
  CONTACT,
  PROFILE,
  SOCIAL_METRICS,
  MARKETING_SCENES,
  MARKETING_HIGHLIGHTS,
  MARKETING_PORTFOLIO,
  ATOMCAMP_REELS,
  CREATIVE_LAB,
} from '../data/portfolio';

const ICONS = { Megaphone, Video, Users, TrendingUp, Sparkles };

const SceneCard = ({ scene }) => {
  const Icon = ICONS[scene.icon] || Megaphone;
  return (
    <Card accent="grow" className="h-full">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="p-2 rounded-lg bg-accent-grow/10 text-accent-grow">
          <Icon size={18} />
        </div>
        <div className="text-right text-xs text-zinc-500">
          <p>{scene.period}</p>
          <p>{scene.location}</p>
        </div>
      </div>
      <p className="text-xs text-accent-grow font-medium mb-1">Scene {scene.scene}</p>
      <h3 className="text-lg font-semibold text-white mb-1">{scene.title}</h3>
      {scene.role && <p className="text-xs text-zinc-400 mb-3">{scene.role}</p>}
      <p className="text-sm text-zinc-500 leading-relaxed">{scene.body}</p>
      {scene.metrics && (
        <div className="flex flex-wrap gap-2 mt-4">
          {scene.metrics.map((m) => (
            <span key={m} className="skill-tag text-xs">{m}</span>
          ))}
        </div>
      )}
      {scene.link && (
        <a
          href={scene.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-grow mt-4 hover:underline"
        >
          {scene.linkLabel || 'View'} <ExternalLink size={12} />
        </a>
      )}
    </Card>
  );
};

const MarketingSection = () => (
  <section id="marketing" className="section-block-wide">
    <SectionHeader
      index="Marketing"
      title="Digital Storytelling"
      subtitle="Content strategy, personal branding, and campus marketing leadership."
      accent="grow"
    />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
      <Card accent="grow" className="lg:col-span-2">
        <blockquote className="text-lg text-zinc-300 italic mb-4">&ldquo;{PROFILE.quote}&rdquo;</blockquote>
        <p className="text-sm text-zinc-400 leading-relaxed mb-3">{PROFILE.storyIntro}</p>
        <p className="text-sm text-zinc-500 leading-relaxed mb-4">{PROFILE.storyBody}</p>
        <p className="text-xs text-accent-grow mb-5">{PROFILE.badges}</p>
        <div className="flex flex-wrap gap-2">
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs !py-2">
            <Linkedin size={14} className="inline mr-1.5" /> LinkedIn
          </a>
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs !py-2">
            <Instagram size={14} className="inline mr-1.5" /> @s._bytes
          </a>
          <a href={MARKETING_PORTFOLIO.url} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs !py-2">
            Full portfolio <ExternalLink size={12} className="inline ml-1" />
          </a>
        </div>
      </Card>

      <div className="space-y-3">
        {SOCIAL_METRICS.map((s) => (
          <div key={s.label} className="stat-card">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {MARKETING_HIGHLIGHTS.map((item) => (
        <Card key={item.tag} accent="grow" className="h-full flex flex-col">
          <p className="text-xs text-accent-grow font-medium mb-2">{item.tag}</p>
          <h4 className="font-semibold text-white mb-2">{item.title}</h4>
          <p className="text-sm text-zinc-500 flex-1">{item.desc}</p>
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-accent-grow mt-3 hover:underline">
              {item.linkLabel}
            </a>
          )}
        </Card>
      ))}
    </div>

    <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-5">Experience highlights</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
      {MARKETING_SCENES.map((scene) => (
        <SceneCard key={scene.scene} scene={scene} />
      ))}
    </div>

    <Card accent="grow" className="mb-12">
      <h3 className="text-lg font-semibold text-white mb-2">Atomcamp · Reel sequence</h3>
      <p className="text-sm text-zinc-500 mb-6 max-w-2xl">
        Educational reels on data science, AI ethics, and technical roadmaps.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {ATOMCAMP_REELS.map((reel) => (
          <div key={reel.embed} className="rounded-xl overflow-hidden border border-white/10 bg-black/30">
            <iframe src={reel.embed} title={reel.title} className="w-full aspect-[9/16] border-0" loading="lazy" allowFullScreen />
          </div>
        ))}
      </div>
    </Card>

    <div id="creative-lab" className="scroll-mt-28">
      <SectionHeader
        index="Creative"
        title="Generative AI Studio"
        subtitle={CREATIVE_LAB.subtitle}
        accent="design"
      />
      <Card accent="design">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <p className="text-sm text-zinc-500 leading-relaxed">{CREATIVE_LAB.desc}</p>
          <div className="rounded-xl overflow-hidden border border-white/10 aspect-[9/16] max-w-[200px]">
            <video className="w-full h-full object-cover" controls playsInline preload="metadata">
              <source src={MARKETING_PORTFOLIO.creativeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {CREATIVE_LAB.steps.map((step, i) => (
            <div key={step.title} className="p-4 rounded-xl border border-white/8 bg-white/[0.02]">
              <span className="text-2xl font-bold text-zinc-700">{String(i + 1).padStart(2, '0')}</span>
              <h4 className="font-semibold text-white mt-2">{step.title}</h4>
              <p className="text-xs text-zinc-500 mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  </section>
);

export default MarketingSection;
