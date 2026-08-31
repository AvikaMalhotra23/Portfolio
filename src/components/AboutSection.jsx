import React from 'react';
import { languages, interests } from '../data/portfolioData';
import { User, Code, Compass, Cpu, CheckCircle2, BookOpen, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { Code, Compass, Cpu };

export default function AboutSection() {
  const ref = useScrollReveal([]);

  const strengths = [
    { icon: CheckCircle2, color: 'var(--green)', text: 'Strong Academic Distinction (93%, 90%)' },
    { icon: CheckCircle2, color: 'var(--p1)', text: 'DSA & Algorithmic Problem Solving' },
    { icon: CheckCircle2, color: 'var(--teal)', text: 'Full-Stack & Database Proficiency' },
    { icon: CheckCircle2, color: 'var(--amber)', text: 'Corporate Tech Simulation (Deloitte)' },
  ];

  return (
    <section ref={ref} id="about" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">About Me</div>
          <h2 className="sec-title">
            Driven by Curiosity &amp;{' '}
            <span className="u-line grad-text">Problem-Solving</span>
          </h2>
          <p className="sec-subtitle">
            Combining academic rigour, practical software development experience, and cross-domain technology exploration.
          </p>
          <div className="sec-rule"><div className="sec-rule-dot" /></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.75rem', alignItems: 'start' }} className="about-grid">

          {/* Main bio card */}
          <div className="card reveal" style={{ padding: '1.85rem', display: 'flex', flexDirection: 'column', gap: '1.3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
              <div className="icon-box icon-box-lg ib-violet"><User size={24} /></div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-dark)' }}>Professional Positioning</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>Full-Stack Software Development &amp; DSA</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                <>As an <strong style={{ color: 'var(--text-dark)' }}>aspiring Software Engineer &amp; Full-Stack Developer</strong>, I focus on constructing efficient software applications, mastering Data Structures &amp; Algorithms, and understanding real-world technology workflows.</>,
                <>My academic journey at <strong style={{ color: 'var(--text-dark)' }}>Lovely Professional University</strong> (B.Tech Core, 2nd Year, 3rd Semester) is backed by strong foundational discipline — <strong style={{ color: 'var(--green)' }}>93% in Class X</strong> and <strong style={{ color: 'var(--p1)' }}>90% in Class XII</strong>.</>,
                <>Through projects like <strong style={{ color: 'var(--text-dark)' }}>Homigo</strong>, <strong style={{ color: 'var(--text-dark)' }}>DSA Genie</strong>, and the <strong style={{ color: 'var(--text-dark)' }}>Electronic Voting Machine</strong>, I consistently bridge theory with functional software.</>,
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '0.93rem', color: 'var(--text-body)', lineHeight: 1.78 }}>{p}</p>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem', paddingTop: '1.15rem', borderTop: '1px solid var(--border)' }}>
              {strengths.map(({ icon: Icon, color, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', padding: '0.45rem 0.5rem', borderRadius: 'var(--r-md)', transition: 'background 0.18s ease' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'var(--p-soft)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <Icon size={15} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.83rem', color: 'var(--text-body)', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>

            {/* Languages */}
            <div className="card reveal rd-1" style={{ padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
                <div className="icon-box icon-box-md ib-sky"><BookOpen size={17} /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>Languages Spoken</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.48rem' }}>
                {languages.map(lang => (
                  <div key={lang.name} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.58rem 0.85rem', background: 'var(--bg-subtle)',
                    borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
                    transition: 'all 0.18s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--sky-line)'; e.currentTarget.style.background = 'var(--sky-soft)'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-subtle)'; }}
                  >
                    <span style={{ fontWeight: 600, fontSize: '0.86rem', color: 'var(--text-dark)' }}>{lang.name}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.58rem', borderRadius: 'var(--r-pill)', background: 'var(--sky-soft)', color: 'var(--sky)', border: '1px solid var(--sky-line)' }}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card reveal rd-2" style={{ padding: '1.4rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1rem' }}>
                <div className="icon-box icon-box-md ib-violet"><Heart size={17} /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>Interests &amp; Passions</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.5rem' }}>
                {interests.map(item => {
                  const IC = iconMap[item.icon] || Code;
                  return (
                    <div key={item.name} style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      padding: '0.8rem 0.4rem', background: 'var(--bg-subtle)',
                      borderRadius: 'var(--r-lg)', border: '1.5px solid var(--border)',
                      gap: '0.42rem', textAlign: 'center', cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--p-line)'; e.currentTarget.style.background = 'var(--p-soft)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-subtle)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div className="icon-box icon-box-sm ib-violet" style={{ borderRadius: '50%' }}>
                        <IC size={14} />
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-body)' }}>{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <p style={{ marginTop: '0.9rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border)', fontSize: '0.78rem', fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.65 }}>
                "Building practical applications to solve real problems while continuously upgrading core CS fundamentals."
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){ .about-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
