import React, { useState, useEffect, useCallback } from 'react';
import VolumePathLayout from './VolumePathLayout';
import VolumeShell, { VolumeChapter } from './VolumeShell';
import ProjectSection from './ProjectSection';
import HackathonSection from './HackathonSection';
import TechStackSection from './TechStackSection';
import ResumeSection from './ResumeSection';
import { PORTFOLIO_PATHS } from '../data/paths';

const TAB_IDS = PORTFOLIO_PATHS.build.volume.tabs.map((t) => t.id);

const BuildVolume = ({ onBack, initialSection }) => {
  const { volume } = PORTFOLIO_PATHS.build;
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
      case 'projects':
        return <ProjectSection embedded />;
      case 'hackathons':
        return <HackathonSection embedded />;
      case 'tech':
        return <TechStackSection embedded />;
      case 'resume':
        return <ResumeSection embedded />;
      default:
        return <ProjectSection embedded />;
    }
  })();

  return (
    <VolumePathLayout path="build" onBack={onBack}>
      <VolumeShell
        accent="build"
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

export default BuildVolume;
