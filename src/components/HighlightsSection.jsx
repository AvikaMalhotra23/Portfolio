import React from 'react';
import { additionalHighlights } from '../data/portfolioData';
import { BookOpen, Layers, Target, Cpu, TrendingUp, Briefcase, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const iconMap = { BookOpen, Layers, Target, Cpu, TrendingUp, Briefcase };

const accents = [
  { ibCls: 'ib-violet', borderColor: 'var(--p1)' },
  { ibCls: 'ib-sky', borderColor: 'var(--sky)' },
  { ibCls: 'ib-teal', borderColor: 'var(--teal)' },
  { ibCls: 'ib-violet', borderColor: 'var(--p2)' },
  { ibCls: 'ib-amber', borderColor: 'var(--amber)' },
  { ibCls: 'ib-rose', borderColor: 'var(--rose)' },
];

export default function HighlightsSection() {
  const ref = useScrollReveal([]);

  return (
    <section ref={ref} id="highlights" className="section" style={{ background: 'var(--bg-white)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Key Attributes</div>
          <h2 className="sec-title">Additional <span className="u-line grad-text">Highlights</span></h2>
          <p className="sec-subtitle">
            Core strengths, learning philosophy, problem-solving mindset, and practical industry readiness.
          </p>
          <div className="sec-rule"><div className="sec-rule-dot" /></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.35rem' }} className="hi-grid">
          {additionalHighlights.map((item, i) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            const acc = accents[i % accents.length];
            return (
              <div key={item.title} className={`card reveal rd-${Math.min(i + 1, 6)}`} style={{
                padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem',
                borderTop: `2.5px solid ${acc.borderColor}`,
                borderRadius: `0 0 var(--r-lg) var(--r-lg)`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div className={`icon-box icon-box-md ${acc.ibCls}`}>
                    <IconComponent size={18} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-faint)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-dark)', marginBottom: '0.45rem', lineHeight: 1.25 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.7 }}>
                    {item.description}
                  </p>
                </div>

                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Sparkles size={11} color={acc.borderColor} />
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: acc.borderColor, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Core Capability
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .hi-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px) { .hi-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
