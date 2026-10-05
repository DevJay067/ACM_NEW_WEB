import React, { useState, useEffect } from 'react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StatementSection } from './components/StatementSection';
import { FocusAreasSection } from './components/FocusAreasSection';
import { AboutSection } from './components/AboutSection';
import { EventsSection } from './components/EventsSection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

const SECTIONS = ['hero', 'statement', 'about', 'events', 'focus-areas', 'team', 'contact'];

const MemoizedStatementSection = React.memo(StatementSection);
const MemoizedFocusAreasSection = React.memo(FocusAreasSection);
const MemoizedAboutSection = React.memo(AboutSection);
const MemoizedEventsSection = React.memo(EventsSection);
const MemoizedTeamSection = React.memo(TeamSection);
const MemoizedContactSection = React.memo(ContactSection);
const MemoizedFooter = React.memo(Footer);

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [heroEntranceStarted, setHeroEntranceStarted] = useState(false);

  // Active section tracking with requestAnimationFrame throttling
  useEffect(() => {
    let ticking = false;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!ticking) {
          requestAnimationFrame(() => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
            ticking = false;
          });
          ticking = true;
        }
      },
      { root: null, rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navigateTo = React.useCallback((sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleExitStart = React.useCallback(() => {
    setHeroEntranceStarted(true);
  }, []);

  return (
    <>
      <Loader
        onExitStart={handleExitStart}
        onComplete={handleExitStart}
      />
      <div className="min-h-screen bg-[#fafaf8] bg-dots text-[#111111] overflow-x-hidden selection:bg-blue-100 selection:text-[#2563EB]">
        <Navbar activeSection={activeSection} onNavigate={navigateTo} />

        <main>
          <HeroSection onNavigate={navigateTo} isReady={heroEntranceStarted} />
          <MemoizedStatementSection />
          <MemoizedAboutSection />
          <MemoizedEventsSection />
          <MemoizedFocusAreasSection />
          <MemoizedTeamSection />
          <MemoizedContactSection />
        </main>

        <MemoizedFooter onNavigate={navigateTo} />
      </div>
    </>
  );
}

export default App;
