import React, { useState, useEffect, useCallback } from 'react';
import VolumePathLayout from './VolumePathLayout';
import VolumeShell, { VolumeChapter } from './VolumeShell';
import MarketingSection from './MarketingSection';
import ExperienceSection from './ContentStrategy';
import AchievementsSection from './AchievementsSection';
import ResumeSection from './ResumeSection';
import { PORTFOLIO_PATHS } from '../data/paths';

const TAB_IDS = PORTFOLIO_PATHS.grow.volume.tabs.map((t) => t.id);

const GrowVolume = ({ onBack, initialSection }) => {
  const { volume } = PORTFOLIO_PATHS.grow;
  const [activeTab, setActiveTab] = useState(() =>
    TAB_IDS.includes(initialSection) ? initialSection : volume.tabs[0].id
  );

  useEffect(() => {
    if (initialSection && TAB_IDS.includes(initialSection)) {
      setActiveTab(initialSection);
    }
  }, [initialSection]);

  const onTabChange = useCallback((tabId) => {
    setActiveTab(tabId);
    window.location.hash = tabId;
  }, []);

  const tab = volume.tabs.find((t) => t.id === activeTab) || volume.tabs[0];

  const panel = (() => {
    switch (activeTab) {
      case 'marketing':
        return <MarketingSection embedded />;
      case 'experience':
        return <ExperienceSection embedded />;
      case 'achievements':
        return <AchievementsSection embedded />;
      case 'resume':
        return <ResumeSection embedded />;
      default:
        return <MarketingSection embedded />;
    }
  })();

  return (
    <VolumePathLayout path="grow" onBack={onBack}>
      <VolumeShell
        accent="grow"
        tabs={volume.tabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        spineText={volume.spine}
      >
        <VolumeChapter roman={tab.roman} title={tab.title} subtitle={tab.subtitle}>
          {panel}
        </VolumeChapter>
      </VolumeShell>
    </VolumePathLayout>
  );
};

export default GrowVolume;
