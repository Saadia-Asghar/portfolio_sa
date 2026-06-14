import React from 'react';
import SiteNav from './components/SiteNav';
import IndexHome from './components/IndexHome';
import MagazineDepartments from './components/MagazineDepartments';
import AboutSection from './components/AboutSection';
import BuildVolume from './components/BuildVolume';
import GrowVolume from './components/GrowVolume';
import DesignBookSection from './components/DesignBookSection';
import ContactForm from './components/ContactForm';
import ContactStrip from './components/ContactStrip';
import TerminalFooter from './components/TerminalFooter';
import PageBackground from './components/PageBackground';
import SeoHead from './components/SeoHead';
import JsonLd from './components/JsonLd';
import { OPEN_TO, CONTACT } from './data/portfolio';
import { usePortfolioPath } from './hooks/usePortfolioPath';
import HighlightHeading from './components/HighlightHeading';

function App() {
  const { path, setPath, goToSection, scrollTarget } = usePortfolioPath();
  const isHome = path === 'home';

  const goHomeSection = (section) => goToSection(section);

  return (
    <div className={`folio-shell mag-shell ${!isHome ? 'folio-shell-volume' : ''}`}>
      <SeoHead path={path} />
      <JsonLd />
      <PageBackground />
      <SiteNav
        activePath={path}
        onSelectPath={setPath}
        goToSection={goToSection}
        onGoContact={() => goToSection('connect')}
        scrollTarget={scrollTarget}
      />

      <div className="folio-main">
        <main className="folio-content">
          {isHome && (
            <>
              <IndexHome onNavigate={setPath} onGoHomeSection={goHomeSection} />
              <MagazineDepartments onSelectPath={setPath} />
              <AboutSection
                onGoContact={() => goToSection('connect')}
                onGoHomeSection={goHomeSection}
                onSelectPath={setPath}
              />
              <section id="connect" className="folio-section folio-align mag-correspondence">
                <p className="mag-section-kicker">Correspondence</p>
                <HighlightHeading as="h2" tone="grow" className="folio-heading">
                  Get in touch
                </HighlightHeading>
                <p className="folio-body mag-dropcap">
                  I&apos;m open to internships, collaborations, and roles across product design,
                  engineering, and growth.
                </p>
                <a href={`mailto:${CONTACT.email}`} className="folio-contact-email">
                  {CONTACT.email}
                </a>
                <ContactForm />
                <ul className="folio-roles">
                  {OPEN_TO.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {path === 'build' && (
            <BuildVolume onBack={() => setPath('home')} initialSection={scrollTarget} />
          )}

          {path === 'design' && (
            <DesignBookSection embedded onBack={() => setPath('home')} initialSection={scrollTarget} />
          )}

          {path === 'grow' && (
            <GrowVolume onBack={() => setPath('home')} initialSection={scrollTarget} />
          )}

          {!isHome && <ContactStrip onGoContact={() => setPath('home', 'connect')} />}
        </main>

        <TerminalFooter />
      </div>
    </div>
  );
}

export default App;
