import React from 'react';
import { initialEducation } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, CheckCircle2, Edit3, Sparkles } from 'lucide-react';

export default function EducationSection({ lpuBranch, onOpenBranchEdit }) {
  return (
    <section id="education" className="py-24 bg-[var(--bg-main)]">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">Academic Timeline</span>
          <h2 className="section-title">Education & Academic Distinction</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Consistently high academic performance across university engineering studies and secondary board examinations.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Card 1: Lovely Professional University */}
          <div className="glass-panel p-6 sm:p-8 relative overflow-hidden border-l-4 border-l-[var(--accent-cyan)] shadow-lg hover:shadow-cyan-500/10 transition-all">

            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] shrink-0 mt-1">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <span className="badge badge-cyan">Higher Education</span>
                    <span className="badge badge-emerald font-bold">Currently Enrolled</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    Lovely Professional University (LPU)
                  </h3>
                  <p className="text-sm font-semibold text-[var(--accent-cyan)] mt-0.5">
                    B.Tech (Core) • {lpuBranch}
                  </p>
                </div>
              </div>

              {/* Status Badge */}
              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-[var(--bg-surface)] text-[var(--text-primary)] border border-[var(--border-color)]">
                  <Calendar size={14} className="text-[var(--accent-cyan)]" />
                  <span>2nd Year • 3rd Semester</span>
                </span>
              </div>
            </div>

            {/* Editable Branch Alert Notice */}
            <div className="my-4 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3 text-xs text-amber-300">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-amber-400 shrink-0" />
                <span><strong>Specialization Note:</strong> Keep the exact branch/specialization field editable until confirmed. Current: <strong>{lpuBranch}</strong></span>
              </div>
              <button
                onClick={onOpenBranchEdit}
                className="flex items-center gap-1 font-bold px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-200 hover:bg-amber-500/30 transition-colors shrink-0"
              >
                <Edit3 size={13} />
                <span>Change Branch</span>
              </button>
            </div>

            {/* Program Details List */}
            <div className="space-y-2 mt-4 text-sm text-[var(--text-secondary)]">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[var(--accent-cyan)] shrink-0 mt-1" />
                <span>Undergraduate Degree: <strong>B.Tech</strong> (Core Program)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[var(--accent-cyan)] shrink-0 mt-1" />
                <span>Current Status: <strong>2nd Year, 3rd Semester</strong></span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[var(--accent-cyan)] shrink-0 mt-1" />
                <span>Key Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object Oriented Programming in C++/Java, Web Development, Digital Electronics.</span>
              </div>
            </div>

          </div>

          {/* Grid of Schooling (Class XII and Class X) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card 2: Heritage International School (Class XII) */}
            <div className="glass-panel p-6 border-l-4 border-l-[var(--accent-indigo)]">
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="badge badge-indigo">Class XII Board</span>
                <span className="text-xs text-[var(--text-muted)] font-medium flex items-center gap-1">
                  <Calendar size={13} />
                  <span>2025</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Heritage International School
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">Senior Secondary Examinations</p>

              <div className="flex items-baseline gap-2 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Percentage:</span>
                <span className="text-2xl font-extrabold text-[var(--accent-indigo)]">90%</span>
                <span className="text-xs text-[var(--accent-emerald)] font-semibold ml-auto flex items-center gap-1">
                  <Award size={14} /> Distinction
                </span>
              </div>
            </div>

            {/* Card 3: Mariampur Senior Secondary School (Class X) */}
            <div className="glass-panel p-6 border-l-4 border-l-[var(--accent-emerald)]">
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className="badge badge-emerald">Class X Board</span>
                <span className="text-xs text-[var(--text-muted)] font-medium flex items-center gap-1">
                  <Calendar size={13} />
                  <span>2023</span>
                </span>
              </div>

              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">
                Mariampur Senior Secondary School
              </h3>
              <p className="text-xs text-[var(--text-muted)] mb-4">Secondary School Examinations</p>

              <div className="flex items-baseline gap-2 p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <span className="text-xs text-[var(--text-muted)] uppercase tracking-wider font-semibold">Percentage:</span>
                <span className="text-2xl font-extrabold text-[var(--accent-emerald)]">93%</span>
                <span className="text-xs text-[var(--accent-emerald)] font-semibold ml-auto flex items-center gap-1">
                  <Award size={14} /> High Distinction
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
