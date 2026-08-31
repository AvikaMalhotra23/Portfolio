import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Phone, FileText, CheckCircle2, Copy, Check, ChevronRight, GraduationCap, ArrowDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onOpenResume, lpuBranch }) {
  const [copiedField, setCopiedField] = useState(null);
  const [mounted, setMounted] = useState(false);
  const ref = useScrollReveal([]);

  useEffect(() => { setMounted(true); }, []);

  const copy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section ref={ref} style={{
      background: 'var(--bg-white)',
      paddingTop: '6.5rem',
      paddingBottom: '4.5rem',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: '3.5rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* ── Photo card ── */}
          <div className={`reveal${mounted ? '' : ''}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
              background: 'var(--bg-white)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-xl)',
              boxShadow: 'var(--shadow-md)',
              padding: '1.25rem',
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              gap: '0.9rem', width: '100%',
            }}>
              {/* Photo */}
              <div style={{
                width: 148, height: 148, borderRadius: 'var(--r-lg)',
                overflow: 'hidden',
                border: '2px solid var(--border)',
                boxShadow: 'var(--shadow-sm)',
                flexShrink: 0, position: 'relative',
              }}>
                <img src={personalDetails.photo} alt="Avika Malhotra"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"; }}
                />
                <div style={{
                  position: 'absolute', bottom: 6, right: 6,
                  background: '#16a34a', color: '#fff', borderRadius: '50%', padding: '2px',
                  display: 'flex', boxShadow: 'var(--shadow-xs)',
                }}>
                  <CheckCircle2 size={12} />
                </div>
              </div>

              {/* Name */}
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>
                  Avika Malhotra
                </div>
                <div style={{ fontSize: '0.68rem', color: 'var(--accent-mid)', fontWeight: 600, marginTop: '0.2rem', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  B.Tech Core · 2nd Year
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.45rem', width: '100%' }}>
                {[{ v: '5+', l: 'Projects' }, { v: '7+', l: 'Certs' }, { v: 'DSA', l: 'Focus' }].map(s => (
                  <div key={s.l} style={{
                    background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                    borderRadius: 'var(--r-md)', padding: '0.5rem 0.3rem', textAlign: 'center',
                  }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--accent)', lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginTop: '0.15rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              {/* Board scores */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem', width: '100%' }}>
                {[
                  { l: 'Class XII', v: '90%', color: 'var(--accent-mid)', bg: 'var(--accent-soft)' },
                  { l: 'Class X', v: '93%', color: 'var(--green)', bg: 'var(--green-soft)' },
                ].map(s => (
                  <div key={s.l} style={{
                    background: s.bg, borderRadius: 'var(--r-md)',
                    padding: '0.45rem 0.35rem', textAlign: 'center',
                    border: '1px solid var(--border)',
                  }}>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.l}</div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Bio text ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Status badges */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              <span className="badge badge-blue" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#16a34a', display: 'inline-block' }} />
                Open for Tech Internships
              </span>
              <span className="badge badge-teal" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <GraduationCap size={11} /> LPU · 2nd Year · 3rd Sem
              </span>
            </div>

            {/* Headline */}
            <div className="reveal rd-1">
              <h1 style={{
                fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800,
                lineHeight: 1.12, letterSpacing: '-0.025em',
                color: 'var(--text-dark)', marginBottom: '0.45rem',
              }}>
                Hello, I'm{' '}
                <span style={{ color: 'var(--accent)' }}>{personalDetails.name}</span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem, 1.8vw, 1.2rem)', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '0.2rem' }}>
                B.Tech Student at Lovely Professional University
              </p>
              <p style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1rem)', fontWeight: 500, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                Aspiring Full-Stack Developer &amp; Software Engineer
              </p>
            </div>

            {/* Bio */}
            <p className="reveal rd-2" style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.78, maxWidth: 540 }}>
              2nd-year B.Tech student at{' '}
              <strong style={{ color: 'var(--text-dark)' }}>Lovely Professional University</strong> with
              strong foundations in Data Structures &amp; Algorithms, modern web development, and digital
              systems. Passionate about building practical software and solving complex problems.
            </p>

            {/* Branch banner — read-only */}
            <div className="reveal rd-2" style={{
              display: 'flex', alignItems: 'center', gap: '0.65rem',
              background: 'var(--bg-subtle)', border: '1px solid var(--border)',
              borderRadius: 'var(--r-lg)', padding: '0.8rem 1rem',
              maxWidth: 500,
            }}>
              <div className="icon-box icon-box-sm ib-blue">
                <GraduationCap size={15} />
              </div>
              <div>
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Academic Program</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dark)' }}>
                  B.Tech Core — {lpuBranch}
                </div>
              </div>
            </div>

            {/* Contact pills */}
            <div className="reveal rd-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {[
                { icon: <Phone size={12} color="var(--green)" />, text: `+91 ${personalDetails.phone}`, field: 'phone', val: personalDetails.phone },
                { icon: <Mail size={12} color="var(--teal)" />, text: personalDetails.email, field: 'email', val: personalDetails.email },
              ].map(item => (
                <button key={item.field} onClick={() => copy(item.val, item.field)} className="copy-pill">
                  {item.icon} {item.text}
                  {copiedField === item.field ? <Check size={11} color="var(--green)" /> : <Copy size={10} style={{ opacity: 0.4 }} />}
                </button>
              ))}

              <a href={personalDetails.linkedin} target="_blank" rel="noopener noreferrer" className="copy-pill"
                style={{ color: '#0a66c2', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.background = '#e8f0fe'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-white)'; }}
              ><LinkedinIcon size={12} /> LinkedIn</a>

              <a href={personalDetails.github} target="_blank" rel="noopener noreferrer" className="copy-pill"
                style={{ textDecoration: 'none', color: 'var(--text-body)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-body)'; e.currentTarget.style.background = 'var(--bg-white)'; }}
              ><GithubIcon size={12} /> GitHub</a>
            </div>

            {/* CTAs */}
            <div className="reveal rd-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', paddingTop: '0.2rem' }}>
              <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Explore Projects <ChevronRight size={14} />
              </a>
              <button onClick={onOpenResume} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FileText size={14} /> View ATS Resume
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="reveal rd-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', marginTop: '3rem', opacity: 0.4 }}>
          <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ animation: 'arrowBounce 2s ease-in-out infinite' }}>
            <ArrowDown size={14} color="var(--text-muted)" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes arrowBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(4px)} }
        .hero-grid { grid-template-columns: 220px 1fr; }
        @media(max-width:800px){ .hero-grid{ grid-template-columns:1fr !important; justify-items:center; } }
      `}</style>
    </section>
  );
}
