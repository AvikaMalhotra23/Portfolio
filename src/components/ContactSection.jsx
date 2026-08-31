import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Phone, Send, Check, Copy, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const ref = useScrollReveal([submitted]);

  const copy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 4000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="section"
      style={{
        background: 'linear-gradient(180deg, var(--bg-surface) 0%, var(--bg-surface-2) 100%)',
        borderTop: '1px solid var(--border-card)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Pastel bg blobs */}
      <div className="blob blob-1" style={{ bottom: '-80px', right: '-60px', opacity: 0.4 }} />
      <div className="blob blob-2" style={{ top: '10%', left: '-80px', opacity: 0.35 }} />
      <span className="code-deco" style={{ top: '10%', right: '6%', fontSize: '1.1rem' }}>{'{ }'}</span>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        <div className="section-header reveal">
          <div className="eyebrow">Get In Touch</div>
          <h2 className="section-title">
            Connect With{' '}
            <span className="text-gradient">Avika</span>
          </h2>
          <p className="section-subtitle">
            Open for software engineering internships, project collaborations, and full-stack development placement opportunities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '2rem', maxWidth: 960, margin: '0 auto' }} className="contact-grid">

          {/* LEFT: Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Phone */}
            <div className="card reveal" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="icon-pill icon-pill-md icon-emerald" style={{ borderRadius: 'var(--r-md)' }}>
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Phone</div>
                  <a href={`tel:${personalDetails.phone}`} style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', transition: 'color 0.18s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--indigo)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    +91 {personalDetails.phone}
                  </a>
                </div>
              </div>
              <button onClick={() => copy(personalDetails.phone, 'phone')} style={{
                width: 32, height: 32, borderRadius: 'var(--r-md)', border: '1.5px solid var(--border-card)',
                background: 'var(--bg-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.18s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.color = 'var(--indigo)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {copiedField === 'phone' ? <Check size={14} color="var(--emerald)" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Email */}
            <div className="card reveal reveal-delay-1" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', minWidth: 0 }}>
                <div className="icon-pill icon-pill-md icon-sky" style={{ borderRadius: 'var(--r-md)', flexShrink: 0 }}>
                  <Mail size={18} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</div>
                  <a href={`mailto:${personalDetails.email}`} style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button onClick={() => copy(personalDetails.email, 'email')} style={{
                width: 32, height: 32, borderRadius: 'var(--r-md)', border: '1.5px solid var(--border-card)',
                background: 'var(--bg-main)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.18s ease', flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.color = 'var(--indigo)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {copiedField === 'email' ? <Check size={14} color="var(--emerald)" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Social links */}
            <div className="card reveal reveal-delay-2" style={{ padding: '1.1rem 1.25rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Social Links</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                <a
                  href={personalDetails.linkedin}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.6rem 0.75rem', borderRadius: 'var(--r-md)',
                    background: 'var(--bg-main)', border: '1.5px solid var(--border-card)',
                    fontSize: '0.8rem', fontWeight: 700, color: '#0a66c2',
                    textDecoration: 'none', transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#0a66c2'; e.currentTarget.style.background = '#e8f0fe'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.background = 'var(--bg-main)'; }}
                >
                  <LinkedinIcon size={16} /> LinkedIn
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.6rem 0.75rem', borderRadius: 'var(--r-md)',
                    background: 'var(--bg-main)', border: '1.5px solid var(--border-card)',
                    fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-primary)',
                    textDecoration: 'none', transition: 'all 0.18s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--indigo)'; e.currentTarget.style.color = 'var(--indigo)'; e.currentTarget.style.background = 'var(--indigo-pastel)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'var(--bg-main)'; }}
                >
                  <GithubIcon size={16} /> GitHub
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="card reveal reveal-delay-3" style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div className="icon-pill icon-pill-md icon-indigo" style={{ borderRadius: 'var(--r-md)' }}>
                <MapPin size={18} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Location</div>
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)' }}>Lovely Professional University, Punjab</div>
              </div>
            </div>

          </div>

          {/* RIGHT: Message form */}
          <div className="card card-lg reveal reveal-delay-2" style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(16px)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
              <div className="icon-pill icon-pill-md icon-indigo" style={{ borderRadius: 'var(--r-md)' }}>
                <MessageSquare size={18} />
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                  Send a Direct Message
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Recruiters &amp; hiring managers can message here.
                </p>
              </div>
            </div>

            {submitted ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '0.75rem', padding: '2.5rem 1rem', textAlign: 'center',
                background: 'var(--emerald-pastel)', borderRadius: 'var(--r-xl)',
                border: '1px solid rgba(5,150,105,0.2)', marginTop: '1rem',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: '50%',
                  background: 'var(--emerald)', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 16px rgba(5,150,105,0.35)',
                }}>
                  <Check size={24} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--emerald)' }}>
                  Message Sent!
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Thank you for reaching out to Avika. A notification has been recorded.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.25rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem' }}>
                    Your Name
                  </label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name or organization…"
                    className="input-field"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="input-field"
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.45rem' }}>
                    Message
                  </label>
                  <textarea
                    rows={4} required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Avika, we are interested in your profile for a Software Engineering role…"
                    className="input-field"
                    style={{ resize: 'none' }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.85rem', fontSize: '0.92rem', borderRadius: 'var(--r-lg)', justifyContent: 'center' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
