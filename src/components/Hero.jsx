import React, { useState } from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import {
  Mail,
  Phone,
  MapPin,
  FileText,
  CheckCircle2,
  Copy,
  Check,
  Edit3,
  ChevronRight,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function Hero({ onOpenResume, onOpenBranchEdit, lpuBranch }) {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[var(--bg-main)]">

      {/* Subtle background orbs — light-mode friendly */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[420px] bg-[var(--accent-indigo)]/6 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-0 w-[320px] h-[320px] bg-[var(--accent-cyan)]/7 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          {/* ── LEFT: Profile Photo Column (4 cols) ── */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="relative group">

              {/* Glowing halo behind card */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent-cyan)] via-[var(--accent-indigo)] to-[var(--accent-purple)] rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500 -z-10" />

              {/* Photo card */}
              <div className="glass-panel p-5 rounded-3xl flex flex-col items-center text-center shadow-xl w-64 sm:w-72">

                {/* Profile image */}
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-4 border-white shadow-lg mb-4">
                  <img
                    src={personalDetails.photo}
                    alt="Avika Malhotra"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80";
                    }}
                  />
                  {/* Verified dot */}
                  <div className="absolute bottom-2 right-2 bg-emerald-500 text-white p-1.5 rounded-full shadow-md">
                    <CheckCircle2 size={14} />
                  </div>
                </div>

                {/* Name under photo */}
                <h3 className="text-lg font-extrabold text-[var(--text-primary)] leading-tight">
                  Avika Malhotra
                </h3>
                <p className="text-xs text-[var(--accent-indigo)] font-semibold mt-0.5 uppercase tracking-wider">
                  B.Tech Core • 2nd Year, 3rd Sem
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-2 w-full mt-4 pt-4 border-t border-[var(--border-color)]">
                  <div className="p-2 rounded-xl bg-[var(--bg-main)] text-center">
                    <span className="block text-base font-extrabold text-[var(--accent-cyan)]">5+</span>
                    <span className="text-[10px] text-[var(--text-muted)] font-medium">Projects</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--bg-main)] text-center">
                    <span className="block text-base font-extrabold text-[var(--accent-purple)]">7+</span>
                    <span className="text-[10px] text-[var(--text-muted)] font-medium">Certs</span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--bg-main)] text-center">
                    <span className="block text-base font-extrabold text-[var(--accent-amber)]">DSA</span>
                    <span className="text-[10px] text-[var(--text-muted)] font-medium">Focus</span>
                  </div>
                </div>

                {/* Board scores */}
                <div className="grid grid-cols-2 gap-2 w-full mt-3">
                  <div className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-center">
                    <span className="block text-[10px] text-[var(--text-muted)] font-medium">Class XII</span>
                    <span className="text-lg font-extrabold text-[var(--accent-indigo)]">90%</span>
                    <span className="block text-[9px] text-[var(--text-muted)] leading-tight">Heritage Int.</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-[var(--bg-main)] border border-[var(--border-color)] text-center">
                    <span className="block text-[10px] text-[var(--text-muted)] font-medium">Class X</span>
                    <span className="text-lg font-extrabold text-[var(--accent-emerald)]">93%</span>
                    <span className="block text-[9px] text-[var(--text-muted)] leading-tight">Mariampur</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── RIGHT: Bio Text Column (8 cols) ── */}
          <div className="lg:col-span-8 flex flex-col items-start gap-5 order-2 lg:order-2">

            {/* Status badges */}
            <div className="flex flex-wrap gap-2">
              <span className="badge badge-indigo flex items-center gap-1.5 py-1 px-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open for Tech Internships
              </span>
              <span className="badge badge-cyan flex items-center gap-1.5 py-1 px-3">
                <GraduationCap size={13} />
                LPU 2nd Year • 3rd Sem
              </span>
            </div>

            {/* Main headline — Student FIRST, then developer */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-tight mb-3">
                Hello, I'm{' '}
                <span className="text-gradient">{personalDetails.name}</span>
              </h1>
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
                  B.Tech Student at LPU
                </p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--text-secondary)]">
                  Aspiring Full-Stack Developer &amp; Software Engineer
                </p>
              </div>
            </div>

            {/* Bio summary */}
            <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-2xl">
              2nd-year B.Tech student at{' '}
              <strong className="text-[var(--text-primary)]">Lovely Professional University</strong> with strong
              foundations in Data Structures &amp; Algorithms, modern web development, and digital systems. Passionate
              about building practical software, solving algorithmic problems, and exploring cloud &amp; AI technologies.
            </p>

            {/* Editable branch banner */}
            <div className="w-full bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-glow)] rounded-xl p-3.5 flex items-center justify-between gap-3 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[var(--accent-indigo)]/10 text-[var(--accent-indigo)]">
                  <GraduationCap size={17} />
                </div>
                <div>
                  <div className="text-[11px] text-[var(--text-muted)] font-semibold uppercase tracking-wider">
                    Academic Program
                  </div>
                  <div className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2 flex-wrap">
                    <span>B.Tech Core — {lpuBranch}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-semibold border border-amber-200 html.dark:bg-amber-500/10 html.dark:text-amber-400">
                      Editable
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenBranchEdit}
                className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-[var(--bg-main)] text-[var(--accent-indigo)] border border-[var(--border-color)] hover:border-[var(--accent-indigo)] transition-colors shrink-0"
                title="Edit program branch"
              >
                <Edit3 size={12} />
                <span className="hidden sm:inline">Edit Branch</span>
              </button>
            </div>

            {/* Contact pills */}
            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--border-glow)] shadow-sm transition-all"
              >
                <Phone size={13} className="text-[var(--accent-emerald)]" />
                <span>+91 {personalDetails.phone}</span>
                {copiedField === 'phone' ? (
                  <Check size={12} className="text-emerald-500" />
                ) : (
                  <Copy size={11} className="opacity-50" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(personalDetails.email, 'email')}
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--border-glow)] shadow-sm transition-all"
              >
                <Mail size={13} className="text-[var(--accent-cyan)]" />
                <span>{personalDetails.email}</span>
                {copiedField === 'email' ? (
                  <Check size={12} className="text-emerald-500" />
                ) : (
                  <Copy size={11} className="opacity-50" />
                )}
              </button>

              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-surface)] text-[#0a66c2] border border-[var(--border-color)] hover:border-[#0a66c2] shadow-sm transition-all"
              >
                <LinkedinIcon size={13} />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)] hover:border-[var(--accent-indigo)] shadow-sm transition-all"
              >
                <GithubIcon size={13} />
                <span>GitHub</span>
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
                <ChevronRight size={16} />
              </a>
              <button onClick={onOpenResume} className="btn btn-secondary flex items-center gap-2">
                <FileText size={15} className="text-[var(--accent-indigo)]" />
                View ATS Resume
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
