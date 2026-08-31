import React from 'react';
import { X, ExternalLink, ShieldCheck, Download, Calendar, Award } from 'lucide-react';

export default function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      
      <div className="relative w-full max-w-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Award className="text-[var(--accent-cyan)]" size={20} />
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">{cert.title}</h3>
              <p className="text-xs text-[var(--text-muted)]">{cert.issuer} • {cert.date}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Certificate Image */}
          {cert.image && (
            <div className="rounded-xl overflow-hidden border border-[var(--border-color)] shadow-lg bg-slate-900">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full max-h-[450px] object-contain mx-auto"
              />
            </div>
          )}

          {/* Description & Metadata */}
          <div className="glass-panel p-5 space-y-3">
            <h4 className="text-sm font-bold text-[var(--text-primary)]">Certificate Overview</h4>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {cert.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border-color)] text-xs">
              {cert.certId && (
                <span className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--accent-cyan)] font-mono border border-[var(--border-color)]">
                  Certificate ID: {cert.certId}
                </span>
              )}
              {cert.certCode && (
                <span className="px-3 py-1 rounded-lg bg-[var(--bg-surface)] text-[var(--accent-cyan)] font-mono border border-[var(--border-color)]">
                  Certificate Code: {cert.certCode}
                </span>
              )}
              {cert.grade && (
                <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/30">
                  Grade Achieved: {cert.grade}
                </span>
              )}
            </div>
          </div>

          {/* Action Links */}
          {cert.verifyUrl && (
            <div className="flex justify-end">
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
              >
                <span>Verify / Open Original Certificate PDF</span>
                <ExternalLink size={14} />
              </a>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
