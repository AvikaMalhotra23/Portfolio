import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, ChevronRight, Eye, Tag, ArrowRight } from 'lucide-react';
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
    <section ref={ref} id="projects" className="section" style={{ background: 'var(--bg-main)' }}>
      {/* Subtle bg accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '40%',
        background: 'linear-gradient(180deg, var(--indigo-soft) 0%, transparent 100%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <span className="code-deco" style={{ top: '10%', right: '3%', fontSize: '1rem' }}>{'{ }'}</span>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="section-header reveal">
          <div className="eyebrow">Portfolio Work</div>
          <h2 className="section-title">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">
            Practical application of software development, algorithm design, location services, campus utilities and digital electronics.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-tab${filter === cat ? ' active' : ''}`}
            >{cat}</button>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.75rem' }} className="projects-grid">
          {filtered.map((project, i) => (
            <article
              key={project.id}
              className={`card reveal reveal-delay-${Math.min(i + 1, 6)}`}
              style={{
                padding: 0, overflow: 'hidden', display: 'flex',
                flexDirection: 'column', cursor: 'default',
              }}
            >
              {/* Image */}
              <div className="project-img-wrap" style={{ position: 'relative', borderRadius: 'var(--r-xl) var(--r-xl) 0 0' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"; }}
                />
                {/* Type badge overlay */}
                <div style={{
                  position: 'absolute', top: 12, left: 12,
                  background: 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.28rem 0.7rem',
                  borderRadius: 'var(--r-full)',
                  fontSize: '0.7rem', fontWeight: 700,
                  color: 'var(--indigo)',
                  border: '1px solid var(--border-card)',
                  boxShadow: 'var(--shadow-xs)',
                }}>
                  {project.typeTag}
                </div>
                {/* Quick view hover */}
                <button
                  onClick={() => onSelectProject(project)}
                  style={{
                    position: 'absolute', bottom: 10, right: 10,
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    background: 'rgba(255,255,255,0.92)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.35rem 0.7rem',
                    borderRadius: 'var(--r-full)',
                    border: '1px solid var(--border-card)',
                    fontSize: '0.72rem', fontWeight: 700, color: 'var(--indigo)',
                    cursor: 'pointer', transition: 'all 0.18s ease',
                    boxShadow: 'var(--shadow-xs)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'var(--indigo)'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.92)'; e.currentTarget.style.color = 'var(--indigo)'; }}
                >
                  <Eye size={12} /> Quick View
                </button>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.35rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem', flex: 1 }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)', fontWeight: 800,
                  fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.25,
                  transition: 'color 0.18s ease',
                }}>
                  {project.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {project.shortDescription}
                </p>

                {/* Key focus */}
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                    Key Focus
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                    {project.keyFocus.map((f, fi) => (
                      <span key={fi} style={{
                        fontSize: '0.7rem', fontWeight: 600,
                        padding: '0.2rem 0.55rem', borderRadius: 'var(--r-full)',
                        background: 'var(--indigo-pastel)', color: 'var(--indigo)',
                        border: '1px solid rgba(91,80,240,0.18)',
                      }}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech stack */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-card)' }}>
                  {project.techStack.map(tech => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div style={{ padding: '0 1.5rem 1.35rem' }}>
                <button
                  onClick={() => onSelectProject(project)}
                  style={{
                    width: '100%', padding: '0.65rem',
                    borderRadius: 'var(--r-full)',
                    border: '1.5px solid var(--border-card)',
                    background: 'var(--bg-surface)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem',
                    fontSize: '0.82rem', fontWeight: 700,
                    color: 'var(--text-secondary)', cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'var(--font-heading)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--indigo)';
                    e.currentTarget.style.borderColor = 'var(--indigo)';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.querySelector('.arrow-icon').style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'var(--bg-surface)';
                    e.currentTarget.style.borderColor = 'var(--border-card)';
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.querySelector('.arrow-icon').style.transform = 'translateX(0)';
                  }}
                >
                  Detailed Overview
                  <ArrowRight size={14} className="arrow-icon" style={{ transition: 'transform 0.18s ease' }} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No matching projects for "{searchQuery}".
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px)  { .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
