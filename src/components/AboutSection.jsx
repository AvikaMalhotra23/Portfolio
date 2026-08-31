import React from 'react';
import { personalDetails, languages, interests } from '../data/portfolioData';
import { User, Code, Compass, Cpu, CheckCircle2, BookOpen, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { Code, Compass, Cpu };

export default function AboutSection() {
  const ref = useScrollReveal([]);

  const strengths = [
    { icon: CheckCircle2, color: 'var(--emerald)', text: 'Strong Academic Distinction (93%, 90%)' },
    { icon: CheckCircle2, color: 'var(--indigo)', text: 'DSA & Algorithmic Problem Solving' },
    { icon: CheckCircle2, color: 'var(--sky)', text: 'Full-Stack & Database Proficiency' },
    { icon: CheckCircle2, color: 'var(--amber)', text: 'Corporate Tech Simulation (Deloitte)' },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="section"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-card)', borderBottom: '1px solid var(--border-card)' }}
    >
      {/* Subtle code deco */}
      <span className="code-deco" style={{ top: '10%', right: '5%', fontSize: '1.2rem' }}>{'{ }'}</span>

      <div className="container">

        {/* Section header */}
        <div className="section-header reveal">
          <div className="eyebrow">About Me</div>
          <h2 className="section-title">
            Driven by Curiosity &amp;{' '}
            <span className="text-gradient">Problem-Solving</span>
          </h2>
          <p className="section-subtitle">
            Combining academic rigour, practical software development experience, and cross-domain technology exploration.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '2rem', alignItems: 'start' }} className="about-grid">

          {/* Main card */}
          <div className="card card-lg reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div className="icon-pill icon-pill-lg icon-indigo">
                <User size={26} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                  Professional Positioning
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Full-Stack Software Development &amp; DSA
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              {[
                <>As an <strong style={{ color: 'var(--text-primary)' }}>aspiring Software Engineer &amp; Full-Stack Developer</strong>, I focus on constructing efficient software applications, mastering Data Structures &amp; Algorithms, and understanding real-world technology workflows.</>,
                <>My academic journey at <strong style={{ color: 'var(--text-primary)' }}>Lovely Professional University</strong> (B.Tech Core, 2nd Year, 3rd Semester) is backed by strong foundational discipline, demonstrated by achieving <strong style={{ color: 'var(--emerald)' }}>93% in Class X</strong> and <strong style={{ color: 'var(--indigo)' }}>90% in Class XII</strong>.</>,
                <>Through hands-on projects — <strong style={{ color: 'var(--text-primary)' }}>Homigo</strong>, <strong style={{ color: 'var(--text-primary)' }}>DSA Genie</strong>, and <strong style={{ color: 'var(--text-primary)' }}>Electronic Voting Machine</strong> — I consistently bridge theoretical concepts with practical, functional software.</>,
              ].map((para, i) => (
                <p key={i} style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{para}</p>
              ))}
            </div>

            {/* Strength pillars */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '0.65rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid var(--border-card)',
            }}>
              {strengths.map(({ icon: Icon, color, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                  <Icon size={16} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

            {/* Languages */}
            <div className="card reveal reveal-delay-1">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="icon-pill icon-pill-md icon-sky">
                  <BookOpen size={18} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Languages Spoken
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {languages.map(lang => (
                  <div key={lang.name} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.6rem 0.9rem',
                    background: 'var(--bg-main)',
                    borderRadius: 'var(--r-md)',
                    border: '1px solid var(--border-card)',
                  }}>
                    <span style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--text-primary)' }}>{lang.name}</span>
                    <span style={{
                      fontSize: '0.72rem', fontWeight: 700,
                      padding: '0.2rem 0.6rem', borderRadius: 'var(--r-full)',
                      background: 'var(--sky-pastel)', color: 'var(--sky)',
                      border: '1px solid rgba(14,165,233,0.2)',
                    }}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card reveal reveal-delay-2">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div className="icon-pill icon-pill-md icon-violet">
                  <Heart size={18} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>
                  Interests &amp; Passions
                </h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
                {interests.map(item => {
                  const IconComponent = iconMap[item.icon] || Code;
                  return (
                    <div
                      key={item.name}
                      style={{
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        padding: '0.85rem 0.5rem',
                        background: 'var(--bg-main)', borderRadius: 'var(--r-lg)',
                        border: '1.5px solid var(--border-card)',
                        gap: '0.45rem', textAlign: 'center',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.background = 'var(--indigo-pastel)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.background = 'var(--bg-main)'; }}
                    >
                      <div className="icon-pill icon-pill-sm icon-indigo" style={{ borderRadius: '50%' }}>
                        <IconComponent size={15} />
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-primary)' }}>{item.name}</span>
                    </div>
                  );
                })}
              </div>

              <div style={{
                marginTop: '1rem', paddingTop: '0.9rem',
                borderTop: '1px solid var(--border-card)',
              }}>
                <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
                  "Building practical applications to solve real problems while continuously upgrading core CS fundamentals."
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
