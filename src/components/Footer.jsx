import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-main)',
      borderTop: '2px solid var(--border-card)',
      paddingTop: '2.5rem',
      paddingBottom: '2rem',
    }}>
      <div className="container">

        {/* Top row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '1.25rem',
          paddingBottom: '1.75rem',
          borderBottom: '1px solid var(--border-card)',
        }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
              Avika Malhotra
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Aspiring Software Engineer &amp; Full-Stack Developer · Lovely Professional University
            </div>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            {[
              { href: personalDetails.linkedin, icon: <LinkedinIcon size={17} />, title: 'LinkedIn', hoverColor: '#0a66c2', hoverBg: '#e8f0fe' },
              { href: personalDetails.github, icon: <GithubIcon size={17} />, title: 'GitHub', hoverColor: 'var(--indigo)', hoverBg: 'var(--indigo-pastel)' },
              { href: `mailto:${personalDetails.email}`, icon: <Mail size={17} />, title: 'Email', hoverColor: 'var(--sky)', hoverBg: 'var(--sky-pastel)' },
            ].map(s => (
              <a
                key={s.title}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                title={s.title}
                style={{
                  width: 36, height: 36, borderRadius: 'var(--r-md)',
                  background: 'var(--bg-surface)', border: '1.5px solid var(--border-card)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.18s ease',
                  textDecoration: 'none',
                  boxShadow: 'var(--shadow-xs)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.hoverColor; e.currentTarget.style.color = s.hoverColor; e.currentTarget.style.background = s.hoverBg; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-surface)'; }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.5rem 1rem', borderRadius: 'var(--r-full)',
              background: 'var(--bg-surface)', border: '1.5px solid var(--border-card)',
              fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
              color: 'var(--text-secondary)', cursor: 'pointer',
              transition: 'all 0.18s ease', boxShadow: 'var(--shadow-xs)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo-pastel)'; e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.color = 'var(--indigo)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-surface)'; e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            Back to Top <ArrowUp size={13} />
          </button>

        </div>

        {/* Bottom row */}
        <div style={{
          paddingTop: '1.25rem',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '0.75rem',
          fontSize: '0.78rem', color: 'var(--text-muted)',
        }}>
          <span>© {new Date().getFullYear()} Avika Malhotra. All rights reserved.</span>
          <span>Built with React, Vite &amp; Modern Web Standards</span>
        </div>

      </div>
    </footer>
  );
}
