import React from 'react';
import { initialEducation } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, Edit3, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function EducationSection({ lpuBranch, onOpenBranchEdit }) {
  const ref = useScrollReveal([lpuBranch]);

  return (
    <section ref={ref} id="education" className="section" style={{ background: 'var(--bg-main)' }}>
      <span className="code-deco" style={{ top: '12%', left: '4%', fontSize: '1rem' }}>01</span>
      <div className="container">

        <div className="section-header reveal">
          <div className="eyebrow">Academic Timeline</div>
          <h2 className="section-title">
            Education &amp;{' '}
            <span className="text-gradient">Academic Distinction</span>
          </h2>
          <p className="section-subtitle">
            Consistently high academic performance across university engineering studies and secondary board examinations.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative' }}>

          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: 23,
            top: 8,
            bottom: 8,
            width: 2,
            background: 'linear-gradient(to bottom, transparent, var(--border-card) 8%, var(--border-card) 92%, transparent)',
            borderRadius: 2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* ── LPU Card ── */}
            <div className="reveal" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              {/* Node */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--indigo)',
                  boxShadow: '0 0 0 4px var(--indigo-pastel), var(--shadow-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--indigo)', flexShrink: 0,
                  zIndex: 1, position: 'relative',
                }}>
                  <GraduationCap size={22} />
                </div>
              </div>

              {/* Card */}
              <div className="card" style={{
                flex: 1, padding: '1.75rem',
                borderLeft: '4px solid var(--indigo)',
                borderRadius: '0 var(--r-xl) var(--r-xl) var(--r-xl)',
              }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span className="badge badge-indigo">Higher Education</span>
                    <span className="badge badge-emerald">
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block' }} />
                      Currently Enrolled
                    </span>
                  </div>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)',
                    background: 'var(--bg-main)', padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--r-full)', border: '1px solid var(--border-card)',
                  }}>
                    <Calendar size={12} /> 2nd Year · 3rd Semester
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                  Lovely Professional University (LPU)
                </h3>
                <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--indigo)', marginBottom: '1rem' }}>
                  B.Tech (Core) · {lpuBranch}
                </p>

                {/* Editable branch note */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem',
                  padding: '0.7rem 0.9rem', borderRadius: 'var(--r-md)',
                  background: 'var(--amber-pastel)', border: '1px solid rgba(217,119,6,0.2)',
                  marginBottom: '1rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--amber)', fontWeight: 600 }}>
                    <Sparkles size={14} />
                    <span>Specialization editable · Currently: <strong>{lpuBranch}</strong></span>
                  </div>
                  <button
                    onClick={onOpenBranchEdit}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.3rem 0.6rem', borderRadius: 'var(--r-full)',
                      background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)',
                      color: 'var(--amber)', fontSize: '0.72rem', fontWeight: 700,
                      cursor: 'pointer', transition: 'all 0.18s ease', flexShrink: 0,
                      fontFamily: 'var(--font-heading)',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(217,119,6,0.25)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(217,119,6,0.15)'}
                  >
                    <Edit3 size={11} /> Change
                  </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {[
                    'Undergraduate Degree: B.Tech (Core Program)',
                    'Current Status: 2nd Year, 3rd Semester',
                    'Key Coursework: Data Structures & Algorithms, DBMS, OOP in C++/Java, Web Development, Digital Electronics.',
                  ].map(text => (
                    <div key={text} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                      <CheckCircle2 size={15} color="var(--indigo)" style={{ flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Class XII ── */}
            <div className="reveal reveal-delay-1" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 4 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--violet)',
                  boxShadow: '0 0 0 4px var(--violet-pastel), var(--shadow-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--violet)', position: 'relative', zIndex: 1,
                }}>
                  <Award size={20} />
                </div>
              </div>

              <div className="card" style={{
                flex: 1, padding: '1.5rem',
                borderLeft: '4px solid var(--violet)',
                borderRadius: '0 var(--r-xl) var(--r-xl) var(--r-xl)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  <span className="badge badge-violet">Class XII Board</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <Calendar size={12} /> 2025
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  Heritage International School
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Senior Secondary Examinations</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 1rem', borderRadius: 'var(--r-lg)',
                  background: 'var(--violet-pastel)', border: '1px solid rgba(139,92,246,0.2)',
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Percentage:</span>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--violet)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>90%</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--emerald)' }}>
                    <Award size={13} /> Distinction
                  </span>
                </div>
              </div>
            </div>

            {/* ── Class X ── */}
            <div className="reveal reveal-delay-2" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 4 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'var(--bg-surface)',
                  border: '2px solid var(--emerald)',
                  boxShadow: '0 0 0 4px var(--emerald-pastel), var(--shadow-sm)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--emerald)', position: 'relative', zIndex: 1,
                }}>
                  <Award size={20} />
                </div>
              </div>

              <div className="card" style={{
                flex: 1, padding: '1.5rem',
                borderLeft: '4px solid var(--emerald)',
                borderRadius: '0 var(--r-xl) var(--r-xl) var(--r-xl)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
                  <span className="badge badge-emerald">Class X Board</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    <Calendar size={12} /> 2023
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                  Mariampur Senior Secondary School
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Secondary School Examinations</p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  padding: '0.75rem 1rem', borderRadius: 'var(--r-lg)',
                  background: 'var(--emerald-pastel)', border: '1px solid rgba(5,150,105,0.2)',
                }}>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700 }}>Percentage:</span>
                  <span style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--emerald)', fontFamily: 'var(--font-heading)', lineHeight: 1 }}>93%</span>
                  <span style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', fontWeight: 700, color: 'var(--emerald)' }}>
                    <Award size={13} /> High Distinction
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
