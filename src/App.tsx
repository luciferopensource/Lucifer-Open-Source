import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { TelegramBotsSection } from './components/sections/TelegramBotsSection';
import { DocumentationSection } from './components/sections/DocumentationSection';
import { ChangelogSection } from './components/sections/ChangelogSection';
import { AboutContactSection } from './components/sections/AboutContactSection';
import { ProjectModal } from './components/ui/ProjectModal';
import type { Project, ProjectCategory } from './types';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectCategory, setProjectCategory] = useState<ProjectCategory>('all');

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    // If navigating to a specific category shortcut
    if (sectionId === 'media') {
      setProjectCategory('media-streaming');
      const target = document.getElementById('projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (sectionId === 'infra') {
      setProjectCategory('cloud-infra');
      const target = document.getElementById('projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (sectionId === 'tools') {
      setProjectCategory('tools-utilities');
      const target = document.getElementById('projects');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'bots', 'docs', 'changelog', 'about'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Futuristic Ambient Lighting & Cyber Grid Layer */}
      <div className="bg-ambient-layer">
        <div className="cyber-grid" />
        <div className="ambient-orb-1" />
        <div className="ambient-orb-2" />
        <div className="ambient-orb-3" />
      </div>

      {/* Floating Glassmorphic Navigation */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Page Sections */}
      <main>
        <Hero onNavigate={handleNavigate} />

        <ProjectsSection 
          onSelectProject={(project) => setSelectedProject(project)}
          selectedCategory={projectCategory}
          onCategoryChange={(cat) => setProjectCategory(cat)}
        />

        <TelegramBotsSection />

        <DocumentationSection />

        <ChangelogSection />

        <AboutContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Project Architectural Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)}
        onNavigateToDocs={() => handleNavigate('docs')}
      />
    </>
  );
};

export default App;
