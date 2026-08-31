import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ChevronRight, Eye, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categories = ['All', 'Web Development', 'Learning Platform', 'Web & Location', 'Student Assistance', 'Hardware & ECE'];

export default function ProjectsSection({ onSelectProject, searchQuery }) {
  const [filter, setFilter] = useState('All');
  const ref = useScrollReveal([filter, searchQuery]);

  const filtered = projects.filter(p => {
    const matchCat = filter === 'All' || p.category === filter;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.keyFocus.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section ref={ref} id="projects" className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Portfolio Work</div>
          <h2 className="sec-title">Featured <span style={{ color: 'var(--accent)' }}>Projects</span></h2>
          <p className="sec-subtitle">
            Practical application of software development, algorithm design, location services, campus utilities, and digital electronics.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.45rem', marginBottom: '2.5rem' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`tab${filter === cat ? ' active' : ''}`}>{cat}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="proj-grid">
          {filtered.map((project, i) => (
            <article key={project.id} className={`card reveal rd-${Math.min(i + 1, 6)}`} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

              {/* Image */}
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-subtle)' }}>
                <img src={project.image} alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.45s ease', display: 'block' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"; }}
                />
                {/* Type badge */}
                <div style={{
                  position: 'absolute', top: 10, left: 10,
                  background: 'rgba(255,255,255,0.94)',
                  padding: '0.22rem 0.6rem', borderRadius: 'var(--r-pill)',
                  fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)',
                  border: '1px solid var(--border)', boxShadow: 'var(--shadow-xs)',
                }}>
                  {project.typeTag}
                </div>
                {/* Quick view */}
                <button onClick={() => onSelectProject(project)} style={{
                  position: 'absolute', bottom: 8, right: 8,
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  background: 'rgba(255,255,255,0.94)',
                  padding: '0.3rem 0.62rem', borderRadius: 'var(--r-pill)',
                  border: '1px solid var(--border)', fontSize: '0.68rem', fontWeight: 700,
                  color: 'var(--accent)', cursor: 'pointer', transition: 'all 0.17s ease',
                  boxShadow: 'var(--shadow-xs)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.94)'; e.currentTarget.style.color = 'var(--accent)'; }}
                >
                  <Eye size={11} /> Quick View
                </button>
              </div>

              {/* Body */}
              <div style={{ padding: '1.2rem 1.35rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', lineHeight: 1.25 }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.83rem', color: 'var(--text-body)', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {project.shortDescription}
                </p>

                {/* Key focus */}
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>Key Focus</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
                    {project.keyFocus.map((f, fi) => (
                      <span key={fi} style={{ fontSize: '0.68rem', fontWeight: 600, padding: '0.18rem 0.5rem', borderRadius: 'var(--r-pill)', background: 'var(--accent-soft)', color: 'var(--accent-mid)', border: '1px solid var(--accent-line)' }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', paddingTop: '0.65rem', borderTop: '1px solid var(--border)' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div style={{ padding: '0 1.35rem 1.2rem' }}>
                <button onClick={() => onSelectProject(project)} style={{
                  width: '100%', padding: '0.6rem',
                  borderRadius: 'var(--r-pill)', border: '1.5px solid var(--border)',
                  background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: '0.35rem',
                  fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-body)',
                  cursor: 'pointer', transition: 'all 0.18s ease',
                  fontFamily: 'var(--font-heading)',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--accent)';
                    e.currentTarget.style.borderColor = 'var(--accent)';
                    e.currentTarget.style.color = '#fff';
                    const arr = e.currentTarget.querySelector('.arr');
                    if (arr) arr.style.transform = 'translateX(3px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg-subtle)';
                    e.currentTarget.style.borderColor = 'var(--border)';
                    e.currentTarget.style.color = 'var(--text-body)';
                    const arr = e.currentTarget.querySelector('.arr');
                    if (arr) arr.style.transform = 'translateX(0)';
                  }}
                >
                  Detailed Overview
                  <ArrowRight size={13} className="arr" style={{ transition: 'transform 0.17s ease' }} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No matching projects for "{searchQuery}".
          </p>
        )}
      </div>
      <style>{`
        @media(max-width:1024px){ .proj-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:640px) { .proj-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
