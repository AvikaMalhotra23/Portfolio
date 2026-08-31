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

// Modals
import AtsResumeModal from './components/AtsResumeModal';
import CertificateModal from './components/CertificateModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import BranchEditModal from './components/BranchEditModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [lpuBranch, setLpuBranch] = useState('Computer Science & Engineering');
  
  // Modals state
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isBranchEditOpen, setIsBranchEditOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Sync dark mode class on <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300">
      
      {/* Top Fixed Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenBranchEdit={() => setIsBranchEditOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        lpuBranch={lpuBranch}
      />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenBranchEdit={() => setIsBranchEditOpen(true)}
          lpuBranch={lpuBranch}
        />
        
        <AboutSection />
        
        <EducationSection
          lpuBranch={lpuBranch}
          onOpenBranchEdit={() => setIsBranchEditOpen(true)}
        />
        
        <SkillsSection searchQuery={searchQuery} />
        
        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          searchQuery={searchQuery}
        />
        
        <CertificationsSection
          onSelectCert={(cert) => setSelectedCert(cert)}
          searchQuery={searchQuery}
        />
        
        <HighlightsSection />
        
        <ContactSection />
      </main>

      {/* Bottom Footer */}
      <Footer />

      {/* Interactive Modals */}
      <AtsResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lpuBranch={lpuBranch}
      />

      <BranchEditModal
        isOpen={isBranchEditOpen}
        onClose={() => setIsBranchEditOpen(false)}
        currentBranch={lpuBranch}
        onSaveBranch={(newBranch) => setLpuBranch(newBranch)}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

    </div>
  );
}
