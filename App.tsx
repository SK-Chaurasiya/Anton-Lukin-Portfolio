import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { WebGLHero } from './components/WebGLHero';
import { Blok45Gallery } from './components/Blok45Gallery';
import { ProjectGrid } from './components/ProjectGrid';
import { TechStack } from './components/TechStack';
import { Timeline } from './components/Timeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { PhotoItem, ProjectItem } from './types';
import { ambientSynth } from './utils/audioSynth';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [particleMode, setParticleMode] = useState<'landscape' | 'nebula' | 'sphere' | 'waves'>('landscape');

  // Particle Mode rotation
  const handleNextParticleMode = () => {
    const modes: ('landscape' | 'nebula' | 'sphere' | 'waves')[] = ['landscape', 'nebula', 'sphere', 'waves'];
    const nextIdx = (modes.indexOf(particleMode) + 1) % modes.length;
    setParticleMode(modes[nextIdx]);
  };

  // Toggle audio ambient synth
  const handleToggleAudio = () => {
    const active = ambientSynth.toggle();
    setAudioActive(active);
  };

  // Smooth Navigation Handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Active Section Observer
  useEffect(() => {
    const sections = ['hero', 'gallery', 'projects', 'skills', 'timeline', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Header Navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeOpen(true)}
        audioActive={audioActive}
        onToggleAudio={handleToggleAudio}
        particleMode={particleMode}
        onChangeParticleMode={handleNextParticleMode}
      />

      {/* Main Content Sections */}
      <main>
        {/* Component 1: WebGL Hero Section */}
        <WebGLHero
          onExploreGallery={() => handleNavigate('gallery')}
          onExploreProjects={() => handleNavigate('projects')}
          particleMode={particleMode}
          onChangeParticleMode={handleNextParticleMode}
        />

        {/* Component 2: Blok 45 Street Art & Aerial Cinematography Gallery */}
        <Blok45Gallery onSelectPhoto={(photo) => setSelectedPhoto(photo)} />

        {/* Component 3: Software Craftsmanship & Architecture Grid */}
        <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Core Competencies & Tech Stack Matrix */}
        <TechStack />

        {/* Career Timeline */}
        <Timeline onOpenResume={() => setResumeOpen(true)} />

        {/* Contact & Aerial Commission Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Modals */}
      <LightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
