import React, { useState, useEffect } from 'react';
import {
  Moon, Sun, FileText, Search, Menu, X, Edit3,
  Award, GraduationCap, Code2, FolderGit2, Mail,
  User, Sparkles
} from 'lucide-react';

export default function Navbar({
  darkMode, setDarkMode, onOpenResume, onOpenBranchEdit,
  searchQuery, setSearchQuery, lpuBranch
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Highlights', href: '#highlights', icon: Sparkles },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section tracker */
  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        padding: scrolled ? '0.6rem 0' : '0.9rem 0',
        background: scrolled
          ? 'rgba(255,255,255,0.92)'
          : 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(220,215,255,0.5)',
        boxShadow: scrolled ? '0 2px 24px rgba(91,80,240,0.08)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 38, height: 38, borderRadius: '50%', overflow: 'hidden',
            border: '2.5px solid var(--indigo)',
            boxShadow: '0 0 0 3px var(--indigo-pastel)',
            flexShrink: 0,
          }}>
            <img
              src="/assets/avika_profile.jpg"
              alt="Avika Malhotra"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"; }}
            />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
              Avika Malhotra
            </div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600, lineHeight: 1 }}>
              B.Tech • LPU
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.15rem' }} className="desktop-nav">
          {navLinks.map(link => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                style={{
                  padding: '0.42rem 0.8rem',
                  borderRadius: 'var(--r-full)',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: 'var(--font-heading)',
                  color: isActive ? 'var(--indigo)' : 'var(--text-secondary)',
                  background: isActive ? 'var(--indigo-pastel)' : 'transparent',
                  transition: 'all 0.18s ease',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.color = 'var(--indigo)'; e.currentTarget.style.background = 'var(--indigo-pastel)'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; } }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>

          {/* Search */}
          {searchOpen ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              background: 'var(--bg-surface)', border: '1.5px solid var(--indigo)',
              borderRadius: 'var(--r-full)', padding: '0.4rem 0.8rem',
              boxShadow: '0 0 0 4px rgba(91,80,240,0.10)',
            }}>
              <Search size={14} color="var(--indigo)" />
              <input
                type="text"
                placeholder="Search skills, projects…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                autoFocus
                style={{
                  background: 'transparent', border: 'none', outline: 'none',
                  fontSize: '0.8rem', color: 'var(--text-primary)', width: 160,
                  fontFamily: 'var(--font-body)',
                }}
              />
              <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}>
                <X size={14} color="var(--text-muted)" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              title="Search"
              style={{
                width: 34, height: 34, borderRadius: 'var(--r-md)',
                border: '1.5px solid var(--border-card)',
                background: 'var(--bg-surface)', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.color = 'var(--indigo)'; e.currentTarget.style.background = 'var(--indigo-pastel)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-surface)'; }}
            >
              <Search size={15} />
            </button>
          )}

          {/* Edit Branch */}
          <button
            onClick={onOpenBranchEdit}
            className="edit-branch-btn"
            title="Edit LPU branch"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.3rem',
              padding: '0.4rem 0.75rem',
              borderRadius: 'var(--r-full)',
              border: '1.5px solid var(--border-card)',
              background: 'var(--bg-surface)',
              fontSize: '0.75rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
              color: 'var(--indigo)', cursor: 'pointer',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo-pastel)'; e.currentTarget.style.borderColor = 'var(--indigo)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-surface)'; e.currentTarget.style.borderColor = 'var(--border-card)'; }}
          >
            <Edit3 size={12} />
            <span>Branch</span>
          </button>

          {/* ATS Resume */}
          <button
            onClick={onOpenResume}
            className="btn btn-primary"
            style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', borderRadius: 'var(--r-full)' }}
          >
            <FileText size={14} />
            <span className="resume-label">Resume</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            title={darkMode ? 'Light mode' : 'Dark mode'}
            style={{
              width: 34, height: 34, borderRadius: 'var(--r-md)',
              border: '1.5px solid var(--border-card)',
              background: 'var(--bg-surface)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-secondary)',
              transition: 'all 0.18s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--amber)'; e.currentTarget.style.color = 'var(--amber)'; e.currentTarget.style.background = 'var(--amber-pastel)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-surface)'; }}
          >
            {darkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-menu-btn"
            style={{
              width: 34, height: 34, borderRadius: 'var(--r-md)',
              border: '1.5px solid var(--border-card)',
              background: 'var(--bg-surface)', cursor: 'pointer',
              display: 'none', alignItems: 'center', justifyContent: 'center',
              color: 'var(--text-primary)',
            }}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          background: 'rgba(255,255,255,0.97)', borderTop: '1px solid var(--border-card)',
          padding: '1rem 1.5rem 1.5rem',
          boxShadow: '0 8px 32px rgba(91,80,240,0.10)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem', marginBottom: '1rem' }}>
            {navLinks.map(link => {
              const Icon = link.icon;
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.65rem 0.75rem',
                    borderRadius: 'var(--r-md)',
                    fontSize: '0.88rem', fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--indigo)' : 'var(--text-secondary)',
                    background: isActive ? 'var(--indigo-pastel)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <Icon size={16} color={isActive ? 'var(--indigo)' : 'var(--text-muted)'} />
                  {link.name}
                </a>
              );
            })}
          </div>
          <button
            onClick={() => { onOpenBranchEdit(); setMobileOpen(false); }}
            style={{
              width: '100%', padding: '0.6rem', borderRadius: 'var(--r-md)',
              border: '1.5px solid var(--border-card)',
              background: 'var(--indigo-pastel)', color: 'var(--indigo)',
              fontSize: '0.82rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
              cursor: 'pointer',
            }}
          >
            <Edit3 size={13} /> Edit Branch: {lpuBranch}
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 1023px) {
          .desktop-nav { display: none !important; }
          .edit-branch-btn { display: none !important; }
          .resume-label { display: none; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 480px) {
          .resume-label { display: none; }
        }
      `}</style>
    </header>
  );
}
