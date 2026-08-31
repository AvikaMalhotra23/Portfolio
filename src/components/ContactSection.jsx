import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Phone, Send, Check, Copy, MessageSquare, MapPin } from 'lucide-react';
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
    confetti({ particleCount: 70, spread: 65, origin: { y: 0.6 } });
    setTimeout(() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }, 4000);
  };

  return (
    <section ref={ref} id="contact" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Get In Touch</div>
          <h2 className="sec-title">Connect With <span style={{ color: 'var(--accent)' }}>Avika</span></h2>
          <p className="sec-subtitle">
            Open for software engineering internships, project collaborations, and full-stack development placement opportunities.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.35fr', gap: '1.75rem', maxWidth: 920, margin: '0 auto' }} className="contact-grid">

          {/* Left: contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>

            {/* Phone */}
            <div className="card reveal" style={{ padding: '1rem 1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div className="icon-box icon-box-md ib-green"><Phone size={17} /></div>
                <div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Phone</div>
                  <a href={`tel:${personalDetails.phone}`} style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-dark)', textDecoration: 'none', transition: 'color 0.17s ease' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-dark)'}
                  >+91 {personalDetails.phone}</a>
                </div>
              </div>
              <button onClick={() => copy(personalDetails.phone, 'phone')} style={{
                width: 30, height: 30, borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
                background: 'var(--bg-subtle)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.17s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {copiedField === 'phone' ? <Check size={13} color="var(--green)" /> : <Copy size={12} />}
              </button>
            </div>

            {/* Email */}
            <div className="card reveal rd-1" style={{ padding: '1rem 1.15rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.65rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', minWidth: 0 }}>
                <div className="icon-box icon-box-md ib-teal" style={{ flexShrink: 0 }}><Mail size={17} /></div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Email</div>
                  <a href={`mailto:${personalDetails.email}`} style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)', textDecoration: 'none', wordBreak: 'break-all' }}>
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button onClick={() => copy(personalDetails.email, 'email')} style={{
                width: 30, height: 30, borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
                background: 'var(--bg-subtle)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-muted)', transition: 'all 0.17s ease', flexShrink: 0,
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {copiedField === 'email' ? <Check size={13} color="var(--green)" /> : <Copy size={12} />}
              </button>
            </div>

            {/* Social links */}
            <div className="card reveal rd-2" style={{ padding: '1.1rem 1.15rem' }}>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>Social Links</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.45rem' }}>
                {[
                  { href: personalDetails.linkedin, icon: <LinkedinIcon size={15} />, label: 'LinkedIn', hC: '#0a66c2', hBg: '#e8f0fe' },
                  { href: personalDetails.github, icon: <GithubIcon size={15} />, label: 'GitHub', hC: 'var(--accent)', hBg: 'var(--accent-soft)' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    display: 'flex', alignItems: 'center', gap: '0.45rem',
                    padding: '0.55rem 0.7rem', borderRadius: 'var(--r-md)',
                    background: 'var(--bg-subtle)', border: '1px solid var(--border)',
                    fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-body)',
                    textDecoration: 'none', transition: 'all 0.17s ease',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = s.hC; e.currentTarget.style.color = s.hC; e.currentTarget.style.background = s.hBg; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-body)'; e.currentTarget.style.background = 'var(--bg-subtle)'; }}
                  >
                    {s.icon} {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Location */}
            <div className="card reveal rd-3" style={{ padding: '1rem 1.15rem', display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
              <div className="icon-box icon-box-md ib-blue"><MapPin size={17} /></div>
              <div>
                <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Location</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-dark)' }}>Lovely Professional University, Punjab</div>
              </div>
            </div>
          </div>

          {/* Right: message form */}
          <div className="card reveal rd-2" style={{ padding: '1.75rem', background: 'var(--bg-white)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '1.25rem' }}>
              <div className="icon-box icon-box-md ib-blue"><MessageSquare size={17} /></div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  Send a Direct Message
                </h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Recruiters &amp; hiring managers can message here.</p>
              </div>
            </div>

            {submitted ? (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '0.65rem', padding: '2rem 1rem', textAlign: 'center',
                background: 'var(--green-soft)', borderRadius: 'var(--r-lg)',
                border: '1px solid rgba(22,101,52,0.18)',
              }}>
                <div style={{ width: 46, height: 46, borderRadius: '50%', background: 'var(--green)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-sm)' }}>
                  <Check size={22} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1rem', color: 'var(--green)' }}>Message Sent!</h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-body)' }}>Thank you for reaching out to Avika. A notification has been recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                {[
                  { key: 'name', type: 'text', label: 'Your Name', ph: 'Enter your name or organization…' },
                  { key: 'email', type: 'email', label: 'Email Address', ph: 'name@company.com' },
                ].map(f => (
                  <div key={f.key}>
                    <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input type={f.type} required value={formData[f.key]}
                      onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                      placeholder={f.ph} className="form-input" />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>Message</label>
                  <textarea rows={4} required value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Avika, we are interested in your profile for a Software Engineering role…"
                    className="form-input" style={{ resize: 'none' }} />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.78rem', fontSize: '0.9rem', borderRadius: 'var(--r-lg)', justifyContent: 'center' }}>
                  <Send size={15} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:860px){ .contact-grid{ grid-template-columns:1fr !important; } }`}</style>
    </section>
  );
}
