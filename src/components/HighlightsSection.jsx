import React from 'react';
import { additionalHighlights } from '../data/portfolioData';
import { BookOpen, Layers, Target, Cpu, TrendingUp, Briefcase, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { BookOpen, Layers, Target, Cpu, TrendingUp, Briefcase };

// Alternating pastel accents per card
const cardAccents = [
  { icon: 'icon-indigo', border: 'var(--indigo)', pastel: 'var(--indigo-pastel)', label: 'Core Capability' },
  { icon: 'icon-sky', border: 'var(--sky)', pastel: 'var(--sky-pastel)', label: 'Core Capability' },
  { icon: 'icon-teal', border: 'var(--teal)', pastel: 'var(--teal-pastel)', label: 'Core Capability' },
  { icon: 'icon-violet', border: 'var(--violet)', pastel: 'var(--violet-pastel)', label: 'Core Capability' },
  { icon: 'icon-amber', border: 'var(--amber)', pastel: 'var(--amber-pastel)', label: 'Core Capability' },
  { icon: 'icon-emerald', border: 'var(--emerald)', pastel: 'var(--emerald-pastel)', label: 'Core Capability' },
];

export default function HighlightsSection() {
  const ref = useScrollReveal([]);

  return (
    <section ref={ref} id="highlights" className="section" style={{ background: 'var(--bg-main)' }}>
      <span className="code-deco" style={{ bottom: '12%', left: '3%', fontSize: '1rem' }}>01</span>

      <div className="container">

        <div className="section-header reveal">
          <div className="eyebrow">Key Attributes</div>
          <h2 className="section-title">
            Additional{' '}
            <span className="text-gradient">Highlights</span>
          </h2>
          <p className="section-subtitle">
            Core strengths, learning philosophy, problem-solving mindset, and practical industry readiness.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="highlights-grid">
          {additionalHighlights.map((item, i) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const accent = cardAccents[i % cardAccents.length];

            return (
              <div
                key={item.title}
                className={`card reveal reveal-delay-${Math.min(i + 1, 6)}`}
                style={{
                  padding: '1.75rem',
                  display: 'flex', flexDirection: 'column', gap: '1rem',
                  borderTop: `3px solid ${accent.border}`,
                  borderRadius: '0 0 var(--r-xl) var(--r-xl)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                }}
              >
                {/* Icon + number */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className={`icon-pill icon-pill-md ${accent.icon}`} style={{ borderRadius: 'var(--r-lg)' }}>
                    <IconComponent size={20} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem', fontWeight: 700,
                    color: 'var(--text-faint)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800, fontSize: '1.05rem',
                    color: 'var(--text-primary)', marginBottom: '0.5rem',
                    lineHeight: 1.25,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>

                {/* Footer label */}
                <div style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--border-card)',
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                }}>
                  <Sparkles size={12} color={accent.border} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: accent.border, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {accent.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .highlights-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .highlights-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
