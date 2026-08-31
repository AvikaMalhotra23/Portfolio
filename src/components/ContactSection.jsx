import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, Phone, Send, Check, Copy, MessageSquare, MapPin, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[var(--bg-surface)]/50 border-t border-[var(--border-color)]">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Connect With Avika</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Open for software engineering internships, project collaborations, and full-stack development placement opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Contact Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="glass-panel p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[var(--accent-emerald)]/15 text-[var(--accent-emerald)]">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-semibold">Phone Contact</div>
                  <a href={`tel:${personalDetails.phone}`} className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors">
                    +91 {personalDetails.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
                title="Copy phone"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Email Card */}
            <div className="glass-panel p-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)]">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-semibold">Email Address</div>
                  <a href={`mailto:${personalDetails.email}`} className="text-sm font-bold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors break-all">
                    {personalDetails.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyToClipboard(personalDetails.email, 'email')}
                className="p-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
                title="Copy email"
              >
                {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Social Channels */}
            <div className="glass-panel p-6 space-y-4">
              <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider">Social Links</h4>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalDetails.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[#0a66c2] text-[#0a66c2] font-semibold text-xs transition-colors"
                >
                  <LinkedinIcon size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={personalDetails.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--accent-indigo)] text-[var(--text-primary)] font-semibold text-xs transition-colors"
                >
                  <GithubIcon size={18} />
                  <span>GitHub Repos</span>
                </a>
              </div>
            </div>

            {/* University Location Card */}
            <div className="glass-panel p-5 flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[var(--accent-indigo)]/15 text-[var(--accent-indigo)]">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-[var(--text-muted)] font-semibold">Location</div>
                <div className="text-xs font-bold text-[var(--text-primary)]">Lovely Professional University, Punjab</div>
              </div>
            </div>

          </div>

          {/* Quick Interactive Contact Form Column (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <MessageSquare size={20} className="text-[var(--accent-cyan)]" />
              <span>Send a Direct Message</span>
            </h3>
            <p className="text-xs text-[var(--text-secondary)] mb-6">
              Recruiters and hiring managers can leave a message directly here to discuss opportunities.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3 my-8">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white mx-auto flex items-center justify-center">
                  <Check size={24} />
                </div>
                <h4 className="text-lg font-bold text-emerald-400">Message Sent Successfully!</h4>
                <p className="text-xs text-[var(--text-secondary)]">
                  Thank you for reaching out to Avika. A notification has been recorded.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name or organization..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Avika, we are interested in your profile for a Software Engineering role..."
                    className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cyan)] transition-colors resize-none"
                  ></textarea>
                </div>

                <button type="submit" className="w-full btn btn-primary py-3.5 text-sm flex items-center justify-center gap-2">
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
