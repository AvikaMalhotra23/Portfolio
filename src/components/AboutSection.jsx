import React from 'react';
import { personalDetails, languages, interests } from '../data/portfolioData';
import { User, Code, Compass, Cpu, CheckCircle2, Award, Sparkles, BookOpen, Target, Heart } from 'lucide-react';

export default function AboutSection() {
  const iconMap = {
    Code: Code,
    Compass: Compass,
    Cpu: Cpu
  };

  return (
    <section id="about" className="py-24 bg-[var(--bg-surface)] border-y border-[var(--border-color)]">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Driven by Curiosity & Problem-Solving</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Combining academic rigor, practical software development experience, and cross-domain technology exploration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Professional Overview Card (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)]">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">Professional Positioning</h3>
                  <p className="text-xs text-[var(--text-muted)] font-medium">Full-Stack Software Development & DSA</p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                <p>
                  As an <strong className="text-[var(--text-primary)]">aspiring Software Engineer & Full-Stack Developer</strong>, I focus on constructing efficient software applications, mastering Data Structures & Algorithms, and understanding real-world technology workflows.
                </p>
                <p>
                  My academic journey at <strong className="text-[var(--text-primary)]">Lovely Professional University</strong> (B.Tech Core, 2nd Year, 3rd Semester) is backed by strong foundational discipline, demonstrated by achieving <strong className="text-[var(--accent-emerald)]">93% in Class X</strong> and <strong className="text-[var(--accent-indigo)]">90% in Class XII</strong> board examinations.
                </p>
                <p>
                  Through hands-on projects—such as building accommodation platforms (<strong className="text-[var(--text-primary)]">Homigo</strong>), interactive learning environments (<strong className="text-[var(--text-primary)]">DSA Genie</strong>), and hardware prototypes (<strong className="text-[var(--text-primary)]">Electronic Voting Machine</strong>)—I consistently bridge theoretical concepts with practical, functional software.
                </p>
              </div>

              {/* Core Strength Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-6 border-t border-[var(--border-color)]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[var(--accent-emerald)] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">Strong Academic Distinction</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[var(--accent-cyan)] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">DSA & Algorithmic Problem Solving</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[var(--accent-indigo)] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">Full-Stack & Database Proficiency</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="text-[var(--accent-amber)] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[var(--text-primary)] font-medium">Corporate Tech Simulation (Deloitte)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Interests Cards Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Languages Card */}
            <div className="glass-panel p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[var(--accent-indigo)]/15 text-[var(--accent-indigo)]">
                  <BookOpen size={20} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Languages Spoken</h3>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{lang.name}</span>
                    <span className="text-xs font-medium text-[var(--accent-cyan)] px-2.5 py-1 rounded-full bg-[var(--accent-cyan)]/10">
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests Card */}
            <div className="glass-panel p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[var(--accent-purple)]/15 text-[var(--accent-purple)]">
                    <Heart size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">Interests & Passions</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {interests.map((item) => {
                    const IconComponent = iconMap[item.icon] || Code;
                    return (
                      <div
                        key={item.name}
                        className="flex flex-col items-center justify-center p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-center hover:border-[var(--border-glow)] transition-colors group"
                      >
                        <IconComponent size={24} className="text-[var(--accent-cyan)] mb-2 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-[var(--text-primary)]">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Learning Philosophy Quote */}
              <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                <p className="text-xs italic text-[var(--text-muted)] text-center">
                  "Building practical applications to solve real problems while continuously upgrading core computer science fundamentals."
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
