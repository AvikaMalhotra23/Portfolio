import React from 'react';
import { personalDetails, languages, interests } from '../data/portfolioData';
import { User, Code, Compass, Cpu, CheckCircle2, BookOpen, Heart } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { Code, Compass, Cpu };

export default function AboutSection() {
  const ref = useScrollReveal([]);

  const strengths = [
    { icon: CheckCircle2, color: 'var(--green)', text: 'Strong Academic Distinction (93%, 90%)' },
    { icon: CheckCircle2, color: 'var(--accent-mid)', text: 'DSA & Algorithmic Problem Solving' },
    { icon: CheckCircle2, color: 'var(--teal)', text: 'Full-Stack & Database Proficiency' },
    { icon: CheckCircle2, color: 'var(--amber)', text: 'Corporate Tech Simulation (Deloitte)' },
  ];

  return (
    <section ref={ref} id="about" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">About Me</div>
          <h2 className="sec-title">
            Driven by Curiosity &amp; <span style={{ color: 'var(--accent)' }}>Problem-Solving</span>
          </h2>
          <p className="sec-subtitle">
            Combining academic rigour, practical software development experience, and cross-domain technology exploration.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.75rem', alignItems: 'start' }} className="about-grid">

          {/* Main bio card */}
          <div className="card reveal" style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div className="icon-box icon-box-lg ib-blue"><User size={24} /></div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-dark)' }}>Professional Positioning</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>Full-Stack Software Development &amp; DSA</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {[
                <>As an <strong style={{ color: 'var(--text-dark)' }}>aspiring Software Engineer &amp; Full-Stack Developer</strong>, I focus on constructing efficient software applications, mastering Data Structures &amp; Algorithms, and understanding real-world technology workflows.</>,
                <>My academic journey at <strong style={{ color: 'var(--text-dark)' }}>Lovely Professional University</strong> (B.Tech Core, 2nd Year, 3rd Semester) is backed by strong foundational discipline — <strong style={{ color: 'var(--green)' }}>93% in Class X</strong> and <strong style={{ color: 'var(--accent-mid)' }}>90% in Class XII</strong>.</>,
                <>Through projects like <strong style={{ color: 'var(--text-dark)' }}>Homigo</strong>, <strong style={{ color: 'var(--text-dark)' }}>DSA Genie</strong>, and the <strong style={{ color: 'var(--text-dark)' }}>Electronic Voting Machine</strong>, I consistently bridge theory with functional software.</>,
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.75 }}>{p}</p>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.55rem', paddingTop: '1.1rem', borderTop: '1px solid var(--border)' }}>
              {strengths.map(({ icon: Icon, color, text }) => (
                <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem' }}>
                  <Icon size={15} color={color} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: '0.83rem', color: 'var(--text-body)', fontWeight: 500 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Side cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>

            {/* Languages */}
            <div className="card reveal rd-1" style={{ padding: '1.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.9rem' }}>
                <div className="icon-box icon-box-md ib-teal"><BookOpen size={17} /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>Languages Spoken</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {languages.map(lang => (
                  <div key={lang.name} style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '0.55rem 0.8rem', background: 'var(--bg-subtle)',
                    borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-dark)' }}>{lang.name}</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 600, padding: '0.18rem 0.55rem', borderRadius: 'var(--r-pill)', background: 'var(--teal-soft)', color: 'var(--teal)', border: '1px solid rgba(14,116,144,0.2)' }}>
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card reveal rd-2" style={{ padding: '1.35rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.9rem' }}>
                <div className="icon-box icon-box-md ib-blue"><Heart size={17} /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-dark)' }}>Interests &amp; Passions</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                {interests.map(item => {
                  const IconComponent = iconMap[item.icon] || Code;
                  return (
                    <div key={item.name} style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center',
                      padding: '0.75rem 0.4rem', background: 'var(--bg-subtle)',
                      borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
                      gap: '0.4rem', textAlign: 'center', cursor: 'default',
                      transition: 'all 0.18s ease',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.background = 'var(--accent-soft)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-subtle)'; }}
                    >
                      <div className="icon-box icon-box-sm ib-blue" style={{ borderRadius: '50%' }}>
                        <IconComponent size={14} />
                      </div>
                      <span style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-body)' }}>{item.name}</span>
                    </div>
                  );
                })}
              </div>
              <p style={{ marginTop: '0.85rem', paddingTop: '0.8rem', borderTop: '1px solid var(--border)', fontSize: '0.78rem', fontStyle: 'italic', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6 }}>
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
