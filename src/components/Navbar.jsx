import React, { useState, useEffect } from 'react';
import { Moon, Sun, FileText, Search, Menu, X, Edit3, Award, GraduationCap, Code2, FolderGit2, Mail } from 'lucide-react';

export default function Navbar({
  darkMode,
  setDarkMode,
  onOpenResume,
  onOpenBranchEdit,
  searchQuery,
  setSearchQuery,
  lpuBranch
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', icon: GraduationCap },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Highlights', href: '#highlights', icon: Edit3 },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled
        ? 'bg-[var(--bg-surface)]/95 backdrop-blur-md border-b border-[var(--border-color)] shadow-sm py-3'
        : 'bg-[var(--bg-surface)]/80 backdrop-blur-sm border-b border-[var(--border-color)] py-4'
      }`}>
      <div className="container flex items-center justify-between gap-4">

        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[var(--accent-indigo)] group-hover:scale-105 transition-transform shadow-md">
            <img
              src="/assets/avika_profile.jpg"
              alt="Avika Malhotra"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"; }}
            />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
              Avika Malhotra
            </span>
            <span className="block text-xs text-[var(--text-muted)] font-medium">
              B.Tech LPU • {lpuBranch || "Core"}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors hover:scale-105 transform"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls (Search, Branch Edit, ATS Resume, Theme Toggle) */}
        <div className="flex items-center gap-2">

          {/* Search Toggle */}
          <div className="relative">
            {searchOpen ? (
              <div className="flex items-center bg-[var(--bg-card)] border border-[var(--border-glow)] rounded-full px-3 py-1.5 shadow-md">
                <Search size={16} className="text-[var(--accent-cyan)] mr-2" />
                <input
                  type="text"
                  placeholder="Search skills, projects, certs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-xs text-[var(--text-primary)] focus:outline-none w-36 md:w-48"
                  autoFocus
                />
                <button
                  onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                  className="text-[var(--text-muted)] hover:text-[var(--text-primary)] p-0.5"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] border border-[var(--border-color)] hover:border-[var(--border-glow)] transition-all"
                title="Search portfolio..."
              >
                <Search size={18} />
              </button>
            )}
          </div>

          {/* Quick Branch Edit Button */}
          <button
            onClick={onOpenBranchEdit}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-[var(--bg-card)] text-[var(--accent-indigo)] border border-[var(--border-color)] hover:border-[var(--accent-indigo)] transition-all"
            title="Edit LPU Branch/Specialization"
          >
            <Edit3 size={13} />
            <span>Branch</span>
          </button>

          {/* ATS Resume Button */}
          <button
            onClick={onOpenResume}
            className="btn btn-primary text-xs py-2 px-3.5 flex items-center gap-1.5 shadow-sm"
          >
            <FileText size={15} />
            <span className="hidden xs:inline">ATS Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent-amber)] border border-[var(--border-color)] hover:border-[var(--accent-amber)] transition-all"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 lg:hidden rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)]"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--bg-surface)] border-b border-[var(--border-color)] px-6 py-4 shadow-xl">
          <div className="flex flex-col gap-3 mb-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-sm font-medium text-[var(--text-primary)] py-2 border-b border-[var(--border-color)]/30 hover:text-[var(--accent-cyan)]"
                >
                  <Icon size={16} className="text-[var(--accent-cyan)]" />
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => { onOpenBranchEdit(); setMobileMenuOpen(false); }}
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-card)] text-[var(--accent-indigo)] border border-[var(--border-color)]"
            >
              <Edit3 size={14} />
              <span>Edit LPU Branch ({lpuBranch})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
