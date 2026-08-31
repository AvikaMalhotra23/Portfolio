import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Eye, Sparkles, Building2, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const typeConfig = {
  cert: { label: 'Certification', badgeClass: 'badge-teal', icon: ShieldCheck },
  simulation: { label: 'Job Simulation', badgeClass: 'badge-amber', icon: Sparkles },
  training: { label: 'Training', badgeClass: 'badge-violet', icon: BookOpen },
};

function getCertType(cert) {
  if (cert.id.startsWith('deloitte') || cert.id === 'wns-cdp') return 'simulation';
  if (cert.id === 'wns-cdp') return 'training';
  return 'cert';
}

// Placeholder for certs without image
function CertPlaceholder({ cert, type }) {
  const t = typeConfig[type];
  const Icon = t.icon;
  const colorMap = {
    cert: { bg: 'var(--teal-pastel)', color: 'var(--teal)', border: 'rgba(13,148,136,0.15)' },
    simulation: { bg: 'var(--amber-pastel)', color: 'var(--amber)', border: 'rgba(217,119,6,0.15)' },
    training: { bg: 'var(--violet-pastel)', color: 'var(--violet)', border: 'rgba(139,92,246,0.15)' },
  };
  const c = colorMap[type];
  return (
    <div style={{
      height: 160,
      background: `linear-gradient(135deg, ${c.bg} 0%, var(--bg-surface) 100%)`,
      borderBottom: `1px solid var(--border-card)`,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: '0.75rem',
      padding: '1.5rem',
    }}>
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: c.bg, border: `2px solid ${c.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: c.color,
      }}>
        <Icon size={24} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: c.color }}>{t.label}</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{cert.issuer}</div>
      </div>
    </div>
  );
}

export default function CertificationsSection({ onSelectCert, searchQuery }) {
  const ref = useScrollReveal([searchQuery]);

  const filtered = certifications.filter(cert =>
    !searchQuery ||
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section ref={ref} id="certifications" className="section" style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-card)',
      borderBottom: '1px solid var(--border-card)',
    }}>
      <span className="code-deco" style={{ top: '8%', left: '5%', fontSize: '1rem' }}>{'<>'}</span>

      <div className="container">

        <div className="section-header reveal">
          <div className="eyebrow">Credentials &amp; Simulations</div>
          <h2 className="section-title">
            Certifications &amp;{' '}
            <span className="text-gradient">Training</span>
          </h2>
          <p className="section-subtitle">
            Verified technical certifications in C++, Cloud Computing, AI, and Deloitte Australia corporate simulations.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="certs-grid">
          {filtered.map((cert, i) => {
            const type = getCertType(cert);
            const { label, badgeClass, icon: TypeIcon } = typeConfig[type];

            return (
              <div
                key={cert.id}
                className={`card reveal reveal-delay-${Math.min(i + 1, 6)}`}
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                {/* Image or placeholder */}
                {cert.image ? (
                  <div
                    style={{ position: 'relative', height: 160, overflow: 'hidden', cursor: 'pointer', borderRadius: 'var(--r-xl) var(--r-xl) 0 0' }}
                    onClick={() => onSelectCert(cert)}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    {/* Overlay */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(13,11,42,0.35)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      opacity: 0, transition: 'opacity 0.25s ease',
                      borderRadius: 'var(--r-xl) var(--r-xl) 0 0',
                    }}
                      onMouseEnter={e => e.currentTarget.style.opacity = 1}
                      onMouseLeave={e => e.currentTarget.style.opacity = 0}
                    >
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: '0.4rem',
                        background: 'rgba(255,255,255,0.92)',
                        padding: '0.4rem 0.85rem', borderRadius: 'var(--r-full)',
                        fontSize: '0.75rem', fontWeight: 700, color: 'var(--indigo)',
                      }}>
                        <Eye size={13} /> View Certificate
                      </div>
                    </div>
                    {/* Verified badge */}
                    <div style={{
                      position: 'absolute', top: 10, left: 10,
                    }}>
                      <span className={`badge badge-emerald`} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', boxShadow: 'var(--shadow-xs)', background: 'rgba(255,255,255,0.92)' }}>
                        <ShieldCheck size={11} /> Verified
                      </span>
                    </div>
                  </div>
                ) : (
                  <CertPlaceholder cert={cert} type={type} />
                )}

                {/* Body */}
                <div style={{ padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--indigo)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {cert.issuer}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      <Calendar size={11} /> {cert.date}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {cert.description}
                  </p>

                  {/* Meta badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-card)' }}>
                    <span className={`badge ${badgeClass}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <TypeIcon size={10} /> {label}
                    </span>
                    {cert.certId && (
                      <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', padding: '0.15rem 0.5rem', background: 'var(--bg-main)', color: 'var(--text-muted)', borderRadius: 'var(--r-sm)', border: '1px solid var(--border-card)' }}>
                        ID: {cert.certId}
                      </span>
                    )}
                    {cert.grade && (
                      <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '0.15rem 0.5rem', background: 'var(--emerald-pastel)', color: 'var(--emerald)', borderRadius: 'var(--r-sm)', border: '1px solid rgba(5,150,105,0.2)' }}>
                        Grade: {cert.grade}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer actions */}
                <div style={{ padding: '0 1.25rem 1.1rem', display: 'flex', gap: '0.5rem' }}>
                  {cert.image && (
                    <button
                      onClick={() => onSelectCert(cert)}
                      className="btn btn-ghost"
                      style={{ flex: 1, padding: '0.45rem', fontSize: '0.78rem', borderRadius: 'var(--r-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem' }}
                    >
                      <Eye size={13} /> Inspect
                    </button>
                  )}
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank" rel="noopener noreferrer"
                      className="btn btn-outline"
                      style={{ flex: 1, padding: '0.45rem', fontSize: '0.78rem', borderRadius: 'var(--r-full)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.35rem', textDecoration: 'none' }}
                    >
                      Verify <ExternalLink size={12} />
                    </a>
                  )}
                  {!cert.image && !cert.verifyUrl && (
                    <div style={{ flex: 1, padding: '0.45rem', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Completed Program
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .certs-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .certs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
