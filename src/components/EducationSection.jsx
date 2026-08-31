import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function EducationSection({ lpuBranch }) {
  const ref = useScrollReveal([]);

  return (
    <section ref={ref} id="education" className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Academic Timeline</div>
          <h2 className="sec-title">
            Education &amp; <span className="u-line grad-text">Academic Distinction</span>
          </h2>
          <p className="sec-subtitle">
            Consistently high academic performance across university engineering studies and secondary board examinations.
          </p>
          <div className="sec-rule"><div className="sec-rule-dot" /></div>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 20, top: 24, bottom: 24, width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--p-mid) 8%, var(--p-mid) 92%, transparent)',
            borderRadius: 2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* LPU */}
            <div className="reveal" style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'var(--grad-p)', color: '#fff',
                  zIndex: 1, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 0 0 4px var(--p-soft), 0 3px 12px rgba(67,56,202,0.28)',
                }}>
                  <GraduationCap size={19} />
                </div>
              </div>
              <div className="card" style={{
                flex: 1, padding: '1.6rem',
                borderLeft: '3px solid var(--p1)',
                borderRadius: `0 var(--r-xl) var(--r-xl) var(--r-xl)`,
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.65rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    <span className="badge badge-blue">Higher Education</span>
                    <span className="badge badge-green" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }} /> Currently Enrolled
                    </span>
                  </div>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.73rem', fontWeight: 600, color: 'var(--text-muted)', background: 'var(--bg-subtle)', padding: '0.25rem 0.6rem', borderRadius: 'var(--r-pill)', border: '1px solid var(--border)' }}>
                    <Calendar size={11} /> 2nd Year · 3rd Semester
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.2rem' }}>
                  Lovely Professional University (LPU)
                </h3>
                <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '1rem', background: 'var(--grad-p)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  B.Tech (Core) · {lpuBranch}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.52rem' }}>
                  {[
                    'Undergraduate Degree: B.Tech (Core Program)',
                    'Current Status: 2nd Year, 3rd Semester',
                    'Key Coursework: Data Structures & Algorithms, DBMS, OOP in C++/Java, Web Development, Digital Electronics.',
                  ].map(text => (
                    <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.52rem' }}>
                      <CheckCircle2 size={14} color="var(--p1)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Class XII */}
            <div className="reveal rd-1" style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'var(--bg-white)', border: '2.5px solid var(--p2)',
                  zIndex: 1, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--p2)', boxShadow: '0 0 0 4px var(--p-soft)',
                }}>
                  <Award size={18} />
                </div>
              </div>
              <div className="card" style={{ flex: 1, padding: '1.4rem', borderLeft: '3px solid var(--p2)', borderRadius: `0 var(--r-xl) var(--r-xl) var(--r-xl)` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.55rem' }}>
                  <span className="badge badge-violet">Class XII Board</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <Calendar size={11} /> 2025
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.15rem' }}>
                  Heritage International School
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>Senior Secondary Examinations</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.7rem',
                  padding: '0.7rem 1rem', borderRadius: 'var(--r-lg)',
                  background: 'var(--p-soft)', border: '1px solid var(--p-mid)',
                }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Percentage:</span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, lineHeight: 1,
                    background: 'var(--grad-p)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>90%</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--green)' }}>
                    <Award size={12} /> Distinction
                  </span>
                </div>
              </div>
            </div>

            {/* Class X */}
            <div className="reveal rd-2" style={{ display: 'flex', gap: '1.4rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'var(--bg-white)', border: '2.5px solid var(--green)',
                  zIndex: 1, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--green)', boxShadow: '0 0 0 4px var(--green-soft)',
                }}>
                  <Award size={18} />
                </div>
              </div>
              <div className="card" style={{ flex: 1, padding: '1.4rem', borderLeft: '3px solid var(--green)', borderRadius: `0 var(--r-xl) var(--r-xl) var(--r-xl)` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.55rem' }}>
                  <span className="badge badge-green">Class X Board</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <Calendar size={11} /> 2023
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.15rem' }}>
                  Mariampur Senior Secondary School
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.9rem' }}>Secondary School Examinations</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.7rem',
                  padding: '0.7rem 1rem', borderRadius: 'var(--r-lg)',
                  background: 'var(--green-soft)', border: '1px solid var(--green-line)',
                }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Percentage:</span>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, lineHeight: 1,
                    background: 'linear-gradient(135deg,var(--green),#16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>93%</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--green)' }}>
                    <Award size={12} /> High Distinction
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
