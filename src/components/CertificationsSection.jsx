import React from 'react';
import { certifications } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck, Eye, Sparkles, Building2 } from 'lucide-react';

export default function CertificationsSection({ onSelectCert, searchQuery }) {
  const filteredCerts = certifications.filter(cert => {
    return searchQuery === '' ||
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <section id="certifications" className="py-20 bg-[var(--bg-surface)]/50 border-y border-[var(--border-color)]">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Credentials & Simulations</span>
          <h2 className="section-title">Certifications & Training</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Verified technical certifications in C++, Cloud Computing, Artificial Intelligence, and Deloitte Australia corporate simulations.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCerts.map((cert) => (
            <div 
              key={cert.id} 
              className="glass-panel group overflow-hidden flex flex-col justify-between hover:border-[var(--border-glow)] transition-all duration-300"
            >
              <div>
                
                {/* Certificate Image Frame / Header */}
                {cert.image ? (
                  <div 
                    onClick={() => onSelectCert(cert)}
                    className="relative h-44 bg-slate-900 overflow-hidden cursor-pointer group/img"
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-main)]/90 text-xs font-bold text-[var(--accent-cyan)] flex items-center gap-1.5 shadow-lg opacity-90 group-hover/img:opacity-100 transition-opacity">
                        <Eye size={14} />
                        <span>View Certificate Image</span>
                      </span>
                    </div>
                    
                    <span className="absolute top-3 left-3 badge badge-emerald font-bold flex items-center gap-1">
                      <ShieldCheck size={12} />
                      <span>Verified</span>
                    </span>
                  </div>
                ) : (
                  <div className="h-28 p-6 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-surface)] border-b border-[var(--border-color)] flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[var(--accent-indigo)]/15 text-[var(--accent-indigo)]">
                      <Building2 size={26} />
                    </div>
                    <span className="badge badge-amber font-bold flex items-center gap-1">
                      <Sparkles size={12} />
                      <span>Job Simulation</span>
                    </span>
                  </div>
                )}

                {/* Content Body */}
                <div className="p-6">
                  
                  <div className="flex items-center justify-between gap-2 text-xs text-[var(--text-muted)] mb-1 font-semibold">
                    <span className="text-[var(--accent-cyan)] uppercase tracking-wider">{cert.issuer}</span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{cert.date}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  {/* ID / Grade Badges */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)]">
                    {cert.certId && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-color)]">
                        ID: {cert.certId}
                      </span>
                    )}
                    {cert.certCode && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-color)]">
                        Code: {cert.certCode}
                      </span>
                    )}
                    {cert.grade && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Grade: {cert.grade}
                      </span>
                    )}
                  </div>

                </div>

              </div>

              {/* Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center gap-2">
                {cert.image && (
                  <button
                    onClick={() => onSelectCert(cert)}
                    className="flex-1 btn btn-secondary text-xs py-2 flex items-center justify-center gap-1.5"
                  >
                    <Eye size={13} />
                    <span>Inspect</span>
                  </button>
                )}

                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn btn-outline text-xs py-2 flex items-center justify-center gap-1.5"
                  >
                    <span>Link</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
