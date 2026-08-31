import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import {
  Mail, Phone, FileText, CheckCircle2, Copy, Check,
  Edit3, ChevronRight, GraduationCap, ArrowDown
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onOpenResume, onOpenBranchEdit, lpuBranch }) {
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
    <section
      ref={ref}
      style={{
        position: 'relative',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        background: 'var(--bg-main)',
        overflow: 'hidden',
      }}
    >
      {/* ── Animated background blobs ── */}
      <div className="blob blob-1" style={{ top: '-80px', left: '-80px' }} />
      <div className="blob blob-2" style={{ top: '30%', right: '-60px' }} />
      <div className="blob blob-3" style={{ bottom: '-60px', left: '40%' }} />

      {/* Subtle dot-grid overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: 'radial-gradient(circle, rgba(91,80,240,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
      }} />

      {/* Code deco symbols */}
      <span className="code-deco" style={{ top: '18%', left: '6%', fontSize: '1.1rem' }}>{'</>'}</span>
      <span className="code-deco" style={{ top: '60%', right: '7%', fontSize: '0.95rem' }}>{'{ }'}</span>
      <span className="code-deco" style={{ bottom: '18%', left: '12%', fontSize: '0.8rem' }}>01</span>
      <span className="code-deco" style={{ top: '28%', right: '18%', fontSize: '0.85rem' }}>{'<>'}</span>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '4rem',
          alignItems: 'center',
        }}
          className="hero-grid"
        >

          {/* ── LEFT: Profile photo card ── */}
          <div
            className="reveal"
            style={{
              opacity: mounted ? undefined : 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0',
            }}
          >
            <div style={{ position: 'relative' }}>
              {/* Glow halo */}
              <div style={{
                position: 'absolute', inset: '-16px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(91,80,240,0.18) 0%, rgba(139,92,246,0.10) 50%, transparent 75%)',
                filter: 'blur(20px)',
                zIndex: 0,
              }} />

              {/* Photo card */}
              <div style={{
                position: 'relative', zIndex: 1,
                background: 'var(--bg-surface)',
                border: '1.5px solid var(--border-card)',
                borderRadius: 'var(--r-2xl)',
                boxShadow: 'var(--shadow-xl)',
                padding: '1.25rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '1rem',
                width: 240,
              }}>

                {/* Photo frame */}
                <div style={{
                  position: 'relative',
                  width: 160, height: 160,
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  border: '3px solid var(--bg-surface)',
                  boxShadow: '0 0 0 3px var(--indigo), var(--shadow-md)',
                  flexShrink: 0,
                }}>
                  <img
                    src={personalDetails.photo}
                    alt="Avika Malhotra"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s ease' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"; }}
                  />
                  {/* Verified badge */}
                  <div style={{
                    position: 'absolute', bottom: 8, right: 8,
                    background: 'var(--emerald)', color: '#fff',
                    borderRadius: '50%', padding: '3px',
                    boxShadow: '0 2px 8px rgba(5,150,105,0.4)',
                    display: 'flex',
                  }}>
                    <CheckCircle2 size={13} />
                  </div>
                </div>

                {/* Name + role under photo */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    Avika Malhotra
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--indigo)', fontWeight: 700, marginTop: '0.2rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    B.Tech Core · 2nd Year
                  </div>
                </div>

                {/* Mini stat cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem', width: '100%' }}>
                  {[
                    { value: '5+', label: 'Projects' },
                    { value: '7+', label: 'Certs' },
                    { value: 'DSA', label: 'Focus' },
                  ].map(s => (
                    <div key={s.label} className="stat-card" style={{ padding: '0.6rem 0.4rem' }}>
                      <div className="stat-value" style={{ fontSize: '1.05rem' }}>{s.value}</div>
                      <div className="stat-label" style={{ fontSize: '0.62rem' }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Board scores */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', width: '100%' }}>
                  {[
                    { label: 'Class XII', value: '90%', color: 'var(--indigo)', pastel: 'var(--indigo-pastel)' },
                    { label: 'Class X', value: '93%', color: 'var(--emerald)', pastel: 'var(--emerald-pastel)' },
                  ].map(s => (
                    <div key={s.label} style={{
                      background: s.pastel, borderRadius: 'var(--r-md)',
                      padding: '0.5rem 0.4rem', textAlign: 'center',
                      border: `1px solid ${s.color}30`,
                    }}>
                      <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.label}</div>
                      <div style={{ fontSize: '1.15rem', fontWeight: 800, color: s.color, fontFamily: 'var(--font-heading)', lineHeight: 1 }}>{s.value}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT: Bio text ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>

            {/* Status badges */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-indigo" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block', animation: 'pulse-dot 1.8s ease-in-out infinite' }} />
                Open for Tech Internships
              </span>
              <span className="badge badge-sky" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <GraduationCap size={12} /> LPU · 2nd Year · 3rd Sem
              </span>
            </div>

            {/* Headline */}
            <div className="reveal reveal-delay-1">
              <h1 style={{
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                marginBottom: '0.5rem',
              }}>
                Hello, I'm{' '}
                <span className="text-gradient heading-underline is-visible">
                  {personalDetails.name}
                </span>
              </h1>

              {/* Title order: student FIRST, then developer */}
              <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 700, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '0.25rem' }}>
                B.Tech Student at Lovely Professional University
              </p>
              <p style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)', fontWeight: 500, color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                Aspiring Full-Stack Developer &amp; Software Engineer
              </p>
            </div>

            {/* Bio */}
            <p className="reveal reveal-delay-2" style={{
              fontSize: '0.97rem', color: 'var(--text-secondary)',
              lineHeight: 1.75, maxWidth: 560,
            }}>
              2nd-year B.Tech student at{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Lovely Professional University</strong> with
              strong foundations in Data Structures &amp; Algorithms, modern web development, and digital
              systems. Passionate about building practical software and solving complex problems.
            </p>

            {/* Branch banner */}
            <div className="reveal reveal-delay-2" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
              background: 'var(--bg-surface)',
              border: '1.5px solid var(--border-card)',
              borderRadius: 'var(--r-lg)', padding: '0.9rem 1.1rem',
              boxShadow: 'var(--shadow-xs)',
              maxWidth: 520,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="icon-pill icon-pill-sm icon-indigo" style={{ borderRadius: 'var(--r-md)' }}>
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Academic Program</div>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                    B.Tech Core — {lpuBranch}
                    <span style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem', borderRadius: 'var(--r-full)', background: 'var(--amber-pastel)', color: 'var(--amber)', fontWeight: 700, border: '1px solid var(--amber-soft)' }}>Editable</span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenBranchEdit}
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.38rem 0.7rem', borderRadius: 'var(--r-full)',
                  border: '1.5px solid var(--border-card)', background: 'var(--indigo-pastel)',
                  color: 'var(--indigo)', fontSize: '0.72rem', fontWeight: 700,
                  cursor: 'pointer', transition: 'all 0.18s ease', flexShrink: 0,
                  fontFamily: 'var(--font-heading)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo)'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--indigo-pastel)'; e.currentTarget.style.color = 'var(--indigo)'; }}
              >
                <Edit3 size={11} /> Edit
              </button>
            </div>

            {/* Contact pills */}
            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {[
                {
                  icon: <Phone size={13} color="var(--emerald)" />,
                  text: `+91 ${personalDetails.phone}`,
                  field: 'phone', value: personalDetails.phone,
                },
                {
                  icon: <Mail size={13} color="var(--sky)" />,
                  text: personalDetails.email,
                  field: 'email', value: personalDetails.email,
                },
              ].map(item => (
                <button
                  key={item.field}
                  onClick={() => copy(item.value, item.field)}
                  className="copy-pill"
                >
                  {item.icon}
                  <span>{item.text}</span>
                  {copiedField === item.field
                    ? <Check size={12} color="var(--emerald)" />
                    : <Copy size={11} style={{ opacity: 0.45 }} />}
                </button>
              ))}

              <a
                href={personalDetails.linkedin}
                target="_blank" rel="noopener noreferrer"
                className="copy-pill"
                style={{ color: '#0a66c2', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.background = '#e8f0fe'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.background = 'var(--bg-surface)'; }}
              >
                <LinkedinIcon size={13} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalDetails.github}
                target="_blank" rel="noopener noreferrer"
                className="copy-pill"
                style={{ textDecoration: 'none', color: 'var(--text-secondary)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.color = 'var(--indigo)'; e.currentTarget.style.background = 'var(--indigo-pastel)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'var(--bg-surface)'; }}
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTA buttons */}
            <div className="reveal reveal-delay-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '0.25rem' }}>
              <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Explore Projects <ChevronRight size={15} />
              </a>
              <button onClick={onOpenResume} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <FileText size={15} /> View ATS Resume
              </button>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="reveal reveal-delay-5" style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
          marginTop: '3.5rem', opacity: 0.5,
        }}>
          <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ animation: 'bounce-arrow 2s ease-in-out infinite' }}>
            <ArrowDown size={16} color="var(--indigo)" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.8); }
        }
        @keyframes bounce-arrow {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(5px); }
        }
        .hero-grid {
          grid-template-columns: auto 1fr;
        }
        @media (max-width: 860px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            justify-items: center;
          }
        }
      `}</style>
    </section>
  );
}
