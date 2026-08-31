import React from 'react';
import { GraduationCap, Award, Calendar, CheckCircle2, Edit3, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function EducationSection({ lpuBranch, onOpenBranchEdit }) {
  const ref = useScrollReveal([lpuBranch]);

  return (
    <section ref={ref} id="education" className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Academic Timeline</div>
          <h2 className="sec-title">Education &amp; <span style={{ color: 'var(--accent)' }}>Academic Distinction</span></h2>
          <p className="sec-subtitle">
            Consistently high academic performance across university engineering studies and secondary board examinations.
          </p>
        </div>

        <div style={{ maxWidth: 740, margin: '0 auto', position: 'relative' }}>
          {/* Timeline vertical line */}
          <div style={{
            position: 'absolute', left: 20, top: 24, bottom: 24, width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--border) 8%, var(--border) 92%, transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* LPU */}
            <div className="reveal" style={{ display: 'flex', gap: '1.35rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', background: 'var(--bg-white)',
                  border: '2px solid var(--accent)', zIndex: 1, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent)', boxShadow: '0 0 0 4px var(--accent-soft)',
                }}>
                  <GraduationCap size={19} />
                </div>
              </div>
              <div className="card" style={{ flex: 1, padding: '1.5rem', borderLeft: '3px solid var(--accent)', borderRadius: '0 var(--r-lg) var(--r-lg) var(--r-lg)' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.6rem' }}>
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
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent)', marginBottom: '0.9rem' }}>
                  B.Tech (Core) · {lpuBranch}
                </p>

                {/* Editable note */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.65rem',
                  padding: '0.6rem 0.85rem', borderRadius: 'var(--r-md)',
                  background: 'var(--amber-soft)', border: '1px solid rgba(146,64,14,0.18)',
                  marginBottom: '0.9rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--amber)', fontWeight: 600 }}>
                    <Sparkles size={13} />
                    <span>Specialization editable · Currently: <strong>{lpuBranch}</strong></span>
                  </div>
                  <button onClick={onOpenBranchEdit} style={{
                    display: 'flex', alignItems: 'center', gap: '0.25rem',
                    padding: '0.28rem 0.55rem', borderRadius: 'var(--r-pill)',
                    background: 'rgba(146,64,14,0.12)', border: '1px solid rgba(146,64,14,0.25)',
                    color: 'var(--amber)', fontSize: '0.7rem', fontWeight: 700,
                    cursor: 'pointer', transition: 'all 0.17s ease', flexShrink: 0,
                    fontFamily: 'var(--font-heading)',
                  }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(146,64,14,0.22)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(146,64,14,0.12)'}
                  >
                    <Edit3 size={10} /> Change
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[
                    'Undergraduate Degree: B.Tech (Core Program)',
                    'Current Status: 2nd Year, 3rd Semester',
                    'Key Coursework: Data Structures & Algorithms, DBMS, OOP in C++/Java, Web Development, Digital Electronics.',
                  ].map(text => (
                    <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} color="var(--accent-mid)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.65 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Class XII */}
            <div className="reveal rd-1" style={{ display: 'flex', gap: '1.35rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', background: 'var(--bg-white)',
                  border: '2px solid var(--accent-mid)', zIndex: 1, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-mid)', boxShadow: '0 0 0 4px var(--accent-soft)',
                }}>
                  <Award size={18} />
                </div>
              </div>
              <div className="card" style={{ flex: 1, padding: '1.35rem', borderLeft: '3px solid var(--accent-mid)', borderRadius: '0 var(--r-lg) var(--r-lg) var(--r-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.55rem' }}>
                  <span className="badge badge-blue">Class XII Board</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <Calendar size={11} /> 2025
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.15rem' }}>
                  Heritage International School
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>Senior Secondary Examinations</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.65rem 0.9rem', borderRadius: 'var(--r-md)', background: 'var(--accent-soft)', border: '1px solid var(--accent-line)' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Percentage:</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>90%</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--green)' }}>
                    <Award size={12} /> Distinction
                  </span>
                </div>
              </div>
            </div>

            {/* Class X */}
            <div className="reveal rd-2" style={{ display: 'flex', gap: '1.35rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%', background: 'var(--bg-white)',
                  border: '2px solid var(--green)', zIndex: 1, position: 'relative',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--green)', boxShadow: '0 0 0 4px var(--green-soft)',
                }}>
                  <Award size={18} />
                </div>
              </div>
              <div className="card" style={{ flex: 1, padding: '1.35rem', borderLeft: '3px solid var(--green)', borderRadius: '0 var(--r-lg) var(--r-lg) var(--r-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.55rem' }}>
                  <span className="badge badge-green">Class X Board</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <Calendar size={11} /> 2023
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)', marginBottom: '0.15rem' }}>
                  Mariampur Senior Secondary School
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>Secondary School Examinations</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.65rem 0.9rem', borderRadius: 'var(--r-md)', background: 'var(--green-soft)', border: '1px solid rgba(22,101,52,0.2)' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>Percentage:</span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--green)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>93%</span>
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
