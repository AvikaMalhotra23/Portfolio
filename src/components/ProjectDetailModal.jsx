import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Tag, Sparkles } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      
      <div className="relative w-full max-w-3xl bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="badge badge-cyan font-bold">{project.typeTag}</span>
            <h3 className="text-base font-bold text-[var(--text-primary)] truncate">{project.title}</h3>
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
          
          {/* Image Banner */}
          <div className="relative h-60 rounded-xl overflow-hidden bg-slate-900 border border-[var(--border-color)]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
              }}
            />
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-sm font-bold text-[var(--accent-cyan)] uppercase tracking-wider mb-2">Detailed Overview</h4>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Focus Area Pills */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Key Focus Areas</h4>
            <div className="flex flex-wrap gap-2">
              {project.keyFocus.map((focus) => (
                <span key={focus} className="badge badge-indigo text-xs py-1 px-3 font-semibold">
                  • {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features Bullet List */}
          <div className="glass-panel p-5 space-y-3">
            <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
              <Sparkles size={16} className="text-[var(--accent-emerald)]" />
              <span>Core Features & Implementation</span>
            </h4>
            <div className="space-y-2">
              {project.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]">
                  <CheckCircle2 size={16} className="text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] text-xs font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
