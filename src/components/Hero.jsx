import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  Code2, 
  FileText, 
  CheckCircle2, 
  Copy, 
  Check, 
  Edit3, 
  ChevronRight,
  Sparkles,
  GraduationCap
} from 'lucide-react';

export default function Hero({ onOpenResume, onOpenBranchEdit, lpuBranch }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Dynamic Background Mesh Grid & Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-indigo)]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-[var(--accent-cyan)]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Bio Text Column (8 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status & University Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-indigo flex items-center gap-1.5 py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Tech Internships</span>
              </span>
              <span className="badge badge-cyan flex items-center gap-1.5 py-1 px-3">
                <GraduationCap size={14} />
                <span>LPU 2nd Year • 3rd Sem</span>
              </span>
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
                Hello, I'm <br className="hidden xs:inline" />
                <span className="text-gradient">{personalDetails.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <span>Aspiring Software Engineer & Full-Stack Developer</span>
              </p>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              2nd-year B.Tech Core student at <strong className="text-[var(--text-primary)]">Lovely Professional University</strong> with strong foundations in Data Structures & Algorithms, modern web development, and digital systems. Passionate about creating software solutions, practicing algorithmic problem solving, and exploring cloud & AI technologies.
            </p>

            {/* Editable Specialization Banner */}
            <div className="w-full bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-glow)] rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[var(--accent-indigo)]/10 text-[var(--accent-indigo)]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div className="text-xs text-[var(--text-muted)] font-semibold uppercase tracking-wider">Academic Program</div>
                  <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2">
                    <span>B.Tech Core ({lpuBranch})</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500 font-medium">
                      Editable Branch
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenBranchEdit}
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[var(--bg-surface)] text-[var(--accent-cyan)] border border-[var(--border-color)] hover:border-[var(--accent-cyan)] transition-colors"
                title="Edit program branch details"
              >
                <Edit3 size={13} />
                <span className="hidden sm:inline">Edit Branch</span>
              </button>
            </div>

            {/* Quick Contact & Links Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              
              {/* Phone Pill */}
              <button
                onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--border-glow)] transition-all"
                title="Click to copy phone number"
              >
                <Phone size={14} className="text-[var(--accent-emerald)]" />
                <span>+91 {personalDetails.phone}</span>
                {copiedField === 'phone' ? <Check size={13} className="text-emerald-400" /> : <Copy size={12} className="opacity-60" />}
              </button>

              {/* Email Pill */}
              <button
                onClick={() => copyToClipboard(personalDetails.email, 'email')}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--border-glow)] transition-all"
                title="Click to copy email address"
              >
                <Mail size={14} className="text-[var(--accent-cyan)]" />
                <span>{personalDetails.email}</span>
                {copiedField === 'email' ? <Check size={13} className="text-emerald-400" /> : <Copy size={12} className="opacity-60" />}
              </button>

              {/* LinkedIn Button */}
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-card)] text-[#0a66c2] border border-[var(--border-color)] hover:border-[#0a66c2] transition-all"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-indigo)] transition-all"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ChevronRight size={16} />
              </a>
              <button onClick={onOpenResume} className="btn btn-secondary flex items-center gap-2">
                <FileText size={16} className="text-[var(--accent-cyan)]" />
                <span>View ATS Resume</span>
              </button>
            </div>

          </div>

          {/* Profile Photo & Highlight Card Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            <div className="relative group w-full max-w-sm">
              
              {/* Decorative Glowing Backing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-indigo)] to-[var(--accent-purple)] rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition duration-500 -z-10"></div>

              {/* Main Card Container */}
              <div className="glass-panel p-6 rounded-3xl border border-[var(--border-glow)] bg-[var(--bg-card)] flex flex-col items-center text-center shadow-2xl">
                
                {/* Profile Image Frame */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-[var(--bg-main)] shadow-xl mb-5">
                  <img
                    src={personalDetails.photo}
                    alt="Avika Malhotra Profile"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute bottom-2 right-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg" title="Verified Profile">
                    <CheckCircle2 size={16} />
                  </div>
                </div>

                {/* Name & Academic Credentials */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
                  Avika Malhotra
                </h3>
                <p className="text-xs text-[var(--accent-cyan)] font-semibold mb-3 uppercase tracking-wider">
                  B.Tech Core • 2nd Year (3rd Sem)
                </p>

                {/* Schooling Academic Distinction Badges */}
                <div className="grid grid-cols-2 gap-2.5 w-full pt-2 border-t border-[var(--border-color)]">
                  <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="block text-[10px] text-[var(--text-muted)] font-medium">Class XII Board</span>
                    <span className="text-base font-bold text-[var(--accent-indigo)]">90%</span>
                    <span className="block text-[9px] text-[var(--text-muted)]">Heritage Int.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="block text-[10px] text-[var(--text-muted)] font-medium">Class X Board</span>
                    <span className="text-base font-bold text-[var(--accent-emerald)]">93%</span>
                    <span className="block text-[9px] text-[var(--text-muted)]">Mariampur Sr. Sec.</span>
                  </div>
                </div>

                {/* Micro Stats Grid */}
                <div className="grid grid-cols-3 gap-2 w-full mt-3">
                  <div className="p-2 rounded-lg bg-[var(--accent-cyan)]/10 text-center">
                    <span className="block text-lg font-extrabold text-[var(--accent-cyan)]">5+</span>
                    <span className="text-[10px] text-[var(--text-secondary)] font-medium">Projects</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--accent-purple)]/10 text-center">
                    <span className="block text-lg font-extrabold text-[var(--accent-purple)]">7+</span>
                    <span className="text-[10px] text-[var(--text-secondary)] font-medium">Certs & Sim</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--accent-amber)]/10 text-center">
                    <span className="block text-lg font-extrabold text-[var(--accent-amber)]">DSA</span>
                    <span className="text-[10px] text-[var(--text-secondary)] font-medium">Focus</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
