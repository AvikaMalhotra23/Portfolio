import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{
      background: 'var(--bg-white)',
      borderTop: '1px solid var(--border)',
      paddingTop: '2rem',
      paddingBottom: '1.75rem',
    }}>
      <div className="container">
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '1rem', paddingBottom: '1.5rem',
          borderBottom: '1px solid var(--border)',
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)' }}>Avika Malhotra</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
              Aspiring Software Engineer &amp; Full-Stack Developer · Lovely Professional University
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {[
              { href: personalDetails.linkedin, icon: <LinkedinIcon size={16} />, title: 'LinkedIn', hC: '#0a66c2', hBg: '#e8f0fe' },
              { href: personalDetails.github, icon: <GithubIcon size={16} />, title: 'GitHub', hC: 'var(--accent)', hBg: 'var(--accent-soft)' },
              { href: `mailto:${personalDetails.email}`, icon: <Mail size={16} />, title: 'Email', hC: 'var(--teal)', hBg: 'var(--teal-soft)' },
            ].map(s => (
              <a key={s.title} href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer" title={s.title}
                style={{
                  width: 34, height: 34, borderRadius: 'var(--r-md)',
                  background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-muted)', transition: 'all 0.17s ease', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.hC; e.currentTarget.style.color = s.hC; e.currentTarget.style.background = s.hBg; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'var(--bg-subtle)'; }}
              >{s.icon}</a>
            ))}
          </div>

          <button onClick={scrollToTop} style={{
            display: 'flex', alignItems: 'center', gap: '0.35rem',
            padding: '0.45rem 0.9rem', borderRadius: 'var(--r-pill)',
            background: 'var(--bg-subtle)', border: '1px solid var(--border)',
            fontSize: '0.78rem', fontWeight: 600, fontFamily: 'var(--font-heading)',
            color: 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.17s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent-soft)'; e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>

        <div style={{
          paddingTop: '1.1rem',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.6rem',
          fontSize: '0.75rem', color: 'var(--text-faint)',
        }}>
          <span>© {new Date().getFullYear()} Avika Malhotra. All rights reserved.</span>
          <span>Built with React, Vite &amp; Modern Web Standards</span>
        </div>
      </div>
    </footer>
  );
}
