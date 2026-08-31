import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import HighlightsSection from './components/HighlightsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import AtsResumeModal from './components/AtsResumeModal';
import CertificateModal from './components/CertificateModal';
import ProjectDetailModal from './components/ProjectDetailModal';

const LPU_BRANCH = 'Computer Science & Engineering';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) { html.classList.add('dark'); html.classList.remove('light'); }
    else { html.classList.remove('dark'); html.classList.add('light'); }
  }, [darkMode]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-page)', color: 'var(--text-dark)', transition: 'background 0.25s ease, color 0.25s ease' }}>

      <Navbar
        darkMode={darkMode} setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        lpuBranch={LPU_BRANCH}
      />

      <main style={{ flex: 1 }}>
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          lpuBranch={LPU_BRANCH}
        />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <EducationSection lpuBranch={LPU_BRANCH} />
        <div className="section-divider" />
        <SkillsSection searchQuery={searchQuery} />
        <div className="section-divider" />
        <ProjectsSection onSelectProject={p => setSelectedProject(p)} searchQuery={searchQuery} />
        <div className="section-divider" />
        <CertificationsSection onSelectCert={c => setSelectedCert(c)} searchQuery={searchQuery} />
        <div className="section-divider" />
        <HighlightsSection />
        <div className="section-divider" />
        <ContactSection />
      </main>

      <Footer />

      <AtsResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} lpuBranch={LPU_BRANCH} />
      <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </div>
  );
}
