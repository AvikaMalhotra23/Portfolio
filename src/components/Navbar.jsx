import React, { useState, useEffect } from 'react';
import {
  Moon, Sun, FileText, Search, Menu, X,
  Award, GraduationCap, Code2, FolderGit2, Mail, User, Sparkles
} from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode, onOpenResume,
  searchQuery, setSearchQuery, lpuBranch }) {

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = navLinks.map(l => l.href.replace('#', ''));
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
    borderBottom: '1px solid var(--border)',
    boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
    transition: 'box-shadow 0.25s ease, padding 0.25s ease',
    padding: scrolled ? '0.55rem 0' : '0.8rem 0',
  };

  const iconBtn = (title, onClick, children) => (
    <button onClick={onClick} title={title} style={{
      width: 34, height: 34, borderRadius: 'var(--r-md)',
      border: '1.5px solid var(--border)',
      background: 'var(--bg-white)', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-muted)', transition: 'all 0.17s ease',
    }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'var(--bg-white)'; }}
    >{children}</button>
  );

  return (
    <header style={navStyle}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>

        {/* Brand */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%', overflow: 'hidden',
            border: '2px solid var(--accent-line)', flexShrink: 0,
          }}>
            <img src="/assets/avika_profile.jpg" alt="Avika Malhotra"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop"; }} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>
              Avika Malhotra
            </div>
            <div style={{ fontSize: '0.67rem', color: 'var(--text-muted)', fontWeight: 500 }}>B.Tech · LPU</div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }} className="desk-nav">
          {navLinks.map(link => {
            const active = activeSection === link.href.replace('#', '');
            return (
              <a key={link.name} href={link.href} style={{
                padding: '0.38rem 0.72rem', borderRadius: 'var(--r-md)',
                fontSize: '0.82rem', fontWeight: active ? 700 : 500,
                fontFamily: 'var(--font-heading)',
                color: active ? 'var(--accent)' : 'var(--text-body)',
                background: active ? 'var(--accent-soft)' : 'transparent',
                transition: 'all 0.17s ease', textDecoration: 'none', whiteSpace: 'nowrap',
                position: 'relative',
              }}
                onMouseEnter={e => { if (!active) { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; } }}
                onMouseLeave={e => { if (!active) { e.currentTarget.style.color = 'var(--text-body)'; e.currentTarget.style.background = 'transparent'; } }}
              >{link.name}</a>
            );
          })}
        </nav>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>

          {/* Search */}
          {searchOpen ? (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.35rem',
              background: 'var(--bg-white)', border: '1.5px solid var(--accent-mid)',
              borderRadius: 'var(--r-pill)', padding: '0.35rem 0.75rem',
              boxShadow: '0 0 0 3px rgba(65,84,200,0.10)',
            }}>
              <Search size={13} color="var(--accent-mid)" />
              <input type="text" placeholder="Search skills, projects…" value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} autoFocus
                style={{ background: 'transparent', border: 'none', outline: 'none', fontSize: '0.8rem', color: 'var(--text-dark)', width: 150, fontFamily: 'var(--font-body)' }} />
              <button onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: 'var(--text-muted)' }}>
                <X size={13} />
              </button>
            </div>
          ) : iconBtn('Search', () => setSearchOpen(true), <Search size={15} />)}

          {/* ATS Resume */}
          <button onClick={onOpenResume} className="btn btn-primary" style={{ padding: '0.42rem 0.95rem', fontSize: '0.78rem' }}>
            <FileText size={13} /> <span className="res-label">Resume</span>
          </button>

          {/* Theme toggle */}
          {iconBtn(darkMode ? 'Light mode' : 'Dark mode', () => setDarkMode(!darkMode),
            darkMode ? <Sun size={15} /> : <Moon size={15} />)}

          {/* Mobile menu */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mob-btn" style={{
            width: 34, height: 34, borderRadius: 'var(--r-md)', border: '1.5px solid var(--border)',
            background: 'var(--bg-white)', cursor: 'pointer', display: 'none',
            alignItems: 'center', justifyContent: 'center', color: 'var(--text-dark)',
          }}>
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          background: 'var(--bg-white)', borderTop: '1px solid var(--border)',
          padding: '0.9rem 1.5rem 1.25rem',
          boxShadow: 'var(--shadow-md)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem', marginBottom: '0.85rem' }}>
            {navLinks.map(link => {
              const Icon = link.icon;
              const active = activeSection === link.href.replace('#', '');
              return (
                <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} style={{
                  display: 'flex', alignItems: 'center', gap: '0.65rem',
                  padding: '0.58rem 0.65rem', borderRadius: 'var(--r-md)',
                  fontSize: '0.88rem', fontWeight: active ? 700 : 500,
                  color: active ? 'var(--accent)' : 'var(--text-body)',
                  background: active ? 'var(--accent-soft)' : 'transparent',
                  textDecoration: 'none', transition: 'all 0.15s ease',
                }}>
                  <Icon size={15} color={active ? 'var(--accent)' : 'var(--text-muted)'} /> {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        @media(max-width:1023px){ .desk-nav{ display:none !important; } .mob-btn{ display:flex !important; } }
        @media(max-width:480px){ .res-label{ display:none; } }
      `}</style>
    </header>
  );
}
