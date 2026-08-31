import React from 'react';
import { certifications } from '../data/portfolioData';
import { ExternalLink, Calendar, ShieldCheck, Eye, Sparkles, BookOpen } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function getCertType(cert) {
  if (cert.id.startsWith('deloitte')) return 'simulation';
  if (cert.id === 'wns-cdp') return 'training';
  return 'cert';
}

const typeMap = {
  cert: { label: 'Certification', cls: 'badge-teal', icon: ShieldCheck, ibCls: 'ib-teal', color: 'var(--teal)' },
  simulation: { label: 'Job Simulation', cls: 'badge-amber', icon: Sparkles, ibCls: 'ib-amber', color: 'var(--amber)' },
  training: { label: 'Training', cls: 'badge-blue', icon: BookOpen, ibCls: 'ib-blue', color: 'var(--accent-mid)' },
};

function NoImagePlaceholder({ cert, type }) {
  const t = typeMap[type];
  const Icon = t.icon;
  return (
    <div style={{
      height: 148, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      gap: '0.6rem', background: 'var(--bg-subtle)', borderBottom: '1px solid var(--border)',
      padding: '1.25rem',
    }}>
      <div className={`icon-box icon-box-lg ${t.ibCls}`} style={{ borderRadius: '50%' }}>
        <Icon size={22} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: t.color }}>{t.label}</div>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.12rem' }}>{cert.issuer}</div>
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
    <section ref={ref} id="certifications" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Credentials &amp; Simulations</div>
          <h2 className="sec-title">Certifications &amp; <span className="u-line grad-text">Training</span></h2>
          <p className="sec-subtitle">
            Verified technical certifications in C++, Cloud Computing, AI, and Deloitte Australia corporate simulations.
          </p>
          <div className="sec-rule"><div className="sec-rule-dot" /></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.35rem' }} className="certs-grid">
          {filtered.map((cert, i) => {
            const type = getCertType(cert);
            const { label, cls, icon: TypeIcon } = typeMap[type];

            return (
              <div key={cert.id} className={`card reveal rd-${Math.min(i + 1, 6)}`} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

                {cert.image ? (
                  <div style={{ position: 'relative', height: 148, overflow: 'hidden', cursor: 'pointer' }} onClick={() => onSelectCert(cert)}>
                    <img src={cert.image} alt={cert.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease', display: 'block' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <div style={{
                      position: 'absolute', inset: 0, background: 'rgba(14,14,26,0)',
                      transition: 'background 0.22s ease', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(14,14,26,0.30)'; }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(14,14,26,0)'; }}
                    >
                      <div style={{ opacity: 0, transition: 'opacity 0.22s ease', display: 'flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255,255,255,0.94)', padding: '0.35rem 0.75rem', borderRadius: 'var(--r-pill)', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)' }}
                        onMouseEnter={e => { e.currentTarget.style.opacity = 1; }}
                      >
                        <Eye size={12} /> View Certificate
                      </div>
                    </div>
                    <span className="badge badge-green" style={{ position: 'absolute', top: 8, left: 8, display: 'flex', alignItems: 'center', gap: '0.25rem', background: 'rgba(255,255,255,0.94)', boxShadow: 'var(--shadow-xs)' }}>
                      <ShieldCheck size={10} /> Verified
                    </span>
                  </div>
                ) : (
                  <NoImagePlaceholder cert={cert} type={type} />
                )}

                <div style={{ padding: '1rem 1.15rem', display: 'flex', flexDirection: 'column', gap: '0.55rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem' }}>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{cert.issuer}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.22rem', fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                      <Calendar size={10} /> {cert.date}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>

                  <p style={{ fontSize: '0.78rem', color: 'var(--text-body)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {cert.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', paddingTop: '0.45rem', borderTop: '1px solid var(--border)' }}>
                    <span className={`badge ${cls}`} style={{ display: 'flex', alignItems: 'center', gap: '0.22rem' }}>
                      <TypeIcon size={9} /> {label}
                    </span>
                    {cert.certId && (
                      <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', padding: '0.12rem 0.45rem', background: 'var(--bg-subtle)', color: 'var(--text-muted)', borderRadius: 'var(--r-sm)', border: '1px solid var(--border)' }}>
                        ID: {cert.certId}
                      </span>
                    )}
                    {cert.grade && (
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, padding: '0.12rem 0.45rem', background: 'var(--green-soft)', color: 'var(--green)', borderRadius: 'var(--r-sm)', border: '1px solid rgba(22,101,52,0.2)' }}>
                        Grade: {cert.grade}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ padding: '0 1.15rem 1rem', display: 'flex', gap: '0.45rem' }}>
                  {cert.image && (
                    <button onClick={() => onSelectCert(cert)} className="btn btn-ghost" style={{ flex: 1, padding: '0.42rem', fontSize: '0.75rem', borderRadius: 'var(--r-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}>
                      <Eye size={12} /> Inspect
                    </button>
                  )}
                  {cert.verifyUrl && (
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ flex: 1, padding: '0.42rem', fontSize: '0.75rem', borderRadius: 'var(--r-pill)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem', textDecoration: 'none' }}>
                      Verify <ExternalLink size={11} />
                    </a>
                  )}
                  {!cert.image && !cert.verifyUrl && (
                    <div style={{ flex: 1, textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', fontStyle: 'italic', padding: '0.42rem' }}>
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
        @media(max-width:1024px){ .certs-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px) { .certs-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
