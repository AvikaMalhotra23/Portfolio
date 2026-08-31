import React, { useState, useEffect } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Phone, FileText, CheckCircle2, Copy, Check, ChevronRight, GraduationCap, ArrowDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero({ onOpenResume, lpuBranch }) {
  const [copiedField, setCopiedField] = useState(null);
  const ref = useScrollReveal([]);

  const copy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section ref={ref} style={{
      background: 'var(--bg-white)',
      paddingTop: '6.5rem',
      paddingBottom: '5rem',
      borderBottom: '1px solid var(--border)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle radial pastel wash behind hero */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 520, height: 520,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-5%',
        width: 380, height: 380,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(67,56,202,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3.5rem', alignItems: 'center' }} className="hero-grid">

          {/* ── Photo card ── */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Glow ring */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute', inset: -10,
                borderRadius: 'var(--r-2xl)',
                background: 'linear-gradient(135deg,rgba(67,56,202,0.12),rgba(124,58,237,0.08))',
                filter: 'blur(12px)',
                zIndex: 0,
              }} />
              <div style={{
                position: 'relative', zIndex: 1,
                background: 'var(--bg-white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-2xl)',
                boxShadow: 'var(--shadow-xl)',
                padding: '1.35rem',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '1rem', width: '100%',
              }}>
                {/* Photo */}
                <div style={{
                  width: 150, height: 150,
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                  border: '3px solid var(--bg-white)',
                  boxShadow: '0 0 0 2.5px var(--p-line), var(--shadow-md)',
                  flexShrink: 0, position: 'relative',
                }}>
                  <img src={personalDetails.photo} alt="Avika Malhotra"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s cubic-bezier(0.22,1,0.36,1)' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    onError={e => { e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80"; }}
                  />
                  <div style={{
                    position: 'absolute', bottom: 7, right: 7,
                    background: 'linear-gradient(135deg,#15803d,#22c55e)',
                    color: '#fff', borderRadius: '50%', padding: '2.5px',
                    display: 'flex', boxShadow: '0 2px 6px rgba(21,128,61,0.4)',
                  }}>
                    <CheckCircle2 size={13} />
                  </div>
                </div>

                {/* Name + role */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.97rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>
                    Avika Malhotra
                  </div>
                  <div style={{
                    fontSize: '0.68rem', fontWeight: 700, marginTop: '0.22rem',
                    letterSpacing: '0.04em', textTransform: 'uppercase',
                    background: 'var(--grad-p)', WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    B.Tech Core · 2nd Year
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.45rem', width: '100%' }}>
                  {[{ v: '5+', l: 'Projects' }, { v: '7+', l: 'Certs' }, { v: 'DSA', l: 'Focus' }].map(s => (
                    <div key={s.l} style={{
                      background: 'var(--bg-tinted)',
                      border: '1px solid var(--p-mid)',
                      borderRadius: 'var(--r-md)',
                      padding: '0.55rem 0.3rem', textAlign: 'center',
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--p-soft)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-tinted)'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <div style={{
                        fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', lineHeight: 1,
                        background: 'var(--grad-p)', WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      }}>{s.v}</div>
                      <div style={{ fontSize: '0.58rem', color: 'var(--text-muted)', marginTop: '0.15rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
                    </div>
                  ))}
                </div>

                {/* Board scores */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem', width: '100%' }}>
                  {[
                    { l: 'Class XII', v: '90%', grad: 'linear-gradient(135deg,#4338ca,#6d28d9)', bg: 'var(--p-soft)', border: 'var(--p-mid)' },
                    { l: 'Class X', v: '93%', grad: 'linear-gradient(135deg,#15803d,#16a34a)', bg: 'var(--green-soft)', border: 'var(--green-line)' },
                  ].map(s => (
                    <div key={s.l} style={{
                      background: s.bg, borderRadius: 'var(--r-md)',
                      padding: '0.52rem 0.35rem', textAlign: 'center',
                      border: `1px solid ${s.border}`,
                    }}>
                      <div style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{s.l}</div>
                      <div style={{
                        fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, lineHeight: 1,
                        background: s.grad, WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                      }}>{s.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Bio text ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>

            {/* Status badges */}
            <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              <span className="badge badge-green" style={{ display: 'flex', alignItems: 'center', gap: '0.38rem' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--green)', display: 'inline-block', animation: 'pulseDot 2s ease-in-out infinite' }} />
                Open for Tech Internships
              </span>
              <span className="badge badge-sky" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <GraduationCap size={11} /> LPU · 2nd Year · 3rd Sem
              </span>
            </div>

            {/* Headline */}
            <div className="reveal rd-1">
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4.5vw, 3.1rem)',
                fontWeight: 700, lineHeight: 1.2, letterSpacing: 'normal',
                color: 'var(--text-dark)', marginBottom: '0.5rem',
              }}>
                Hello, I'm{' '}
                <span style={{
                  background: 'var(--grad-p)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  {personalDetails.name}
                </span>
              </h1>
              <p style={{ fontSize: 'clamp(1rem,1.8vw,1.2rem)', fontWeight: 700, color: 'var(--text-dark)', lineHeight: 1.3, marginBottom: '0.22rem' }}>
                B.Tech Student at Lovely Professional University
              </p>
              <p style={{ fontSize: 'clamp(0.9rem,1.4vw,1rem)', fontWeight: 500, color: 'var(--text-muted)', lineHeight: 1.4 }}>
                Aspiring Full-Stack Developer &amp; Software Engineer
              </p>
            </div>

            {/* Bio */}
            <p className="reveal rd-2" style={{ fontSize: '0.96rem', color: 'var(--text-body)', lineHeight: 1.8, maxWidth: 540 }}>
              2nd-year B.Tech student at{' '}
              <strong style={{ color: 'var(--text-dark)' }}>Lovely Professional University</strong> with
              strong foundations in Data Structures &amp; Algorithms, modern web development, and digital
              systems. Passionate about building practical software and solving complex problems.
            </p>

            {/* Branch banner */}
            <div className="reveal rd-2" style={{
              display: 'flex', alignItems: 'center', gap: '0.7rem',
              background: 'var(--bg-tinted)', border: '1px solid var(--p-mid)',
              borderRadius: 'var(--r-lg)', padding: '0.85rem 1.1rem',
              maxWidth: 500,
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.8)',
            }}>
              <div className="icon-box icon-box-sm ib-violet"><GraduationCap size={15} /></div>
              <div>
                <div style={{ fontSize: '0.63rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.09em' }}>Academic Program</div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-dark)' }}>B.Tech Core — {lpuBranch}</div>
              </div>
            </div>

            {/* Contact pills */}
            <div className="reveal rd-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {[
                { icon: <Phone size={12} color="var(--green)" />, text: `+91 ${personalDetails.phone}`, field: 'phone', val: personalDetails.phone },
                { icon: <Mail size={12} color="var(--sky)" />, text: personalDetails.email, field: 'email', val: personalDetails.email },
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
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--p-line)'; e.currentTarget.style.color = 'var(--p1)'; e.currentTarget.style.background = 'var(--p-soft)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-body)'; e.currentTarget.style.background = 'var(--bg-white)'; }}
              ><GithubIcon size={12} /> GitHub</a>
            </div>

            {/* CTAs */}
            <div className="reveal rd-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.7rem', paddingTop: '0.25rem' }}>
              <a href="#projects" className="btn btn-primary" style={{ textDecoration: 'none' }}>
                Explore Projects <ChevronRight size={14} />
              </a>
              <button onClick={onOpenResume} className="btn btn-outline">
                <FileText size={14} /> View ATS Resume
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="reveal rd-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', marginTop: '3.5rem', opacity: 0.38 }}>
          <span style={{ fontSize: '0.63rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ animation: 'arrowBounce 2s ease-in-out infinite' }}>
            <ArrowDown size={14} color="var(--text-muted)" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes arrowBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(5px)} }
        @keyframes pulseDot { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.75)} }
        .hero-grid { grid-template-columns: 220px 1fr; }
        @media(max-width:800px){ .hero-grid{ grid-template-columns:1fr !important; justify-items:center; } }
      `}</style>
    </section>
  );
}
