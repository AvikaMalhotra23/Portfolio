import React from 'react';
import { additionalHighlights } from '../data/portfolioData';
import { BookOpen, Layers, Target, Cpu, TrendingUp, Briefcase, Sparkles } from 'lucide-react';

export default function HighlightsSection() {
  const iconMap = {
    BookOpen: BookOpen,
    Layers: Layers,
    Target: Target,
    Cpu: Cpu,
    TrendingUp: TrendingUp,
    Briefcase: Briefcase
  };

  return (
    <section id="highlights" className="py-20">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-tag">Key Attributes</span>
          <h2 className="section-title">Additional Highlights</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Core strengths, learning philosophy, problem-solving mindset, and practical industry readiness.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalHighlights.map((item, index) => {
            const IconComponent = iconMap[item.icon] || Sparkles;
            return (
              <div 
                key={item.title}
                className="glass-panel p-6 flex flex-col justify-between hover:border-[var(--border-glow)] transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-2xl bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] group-hover:scale-110 transition-transform">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-mono font-bold text-[var(--text-muted)] opacity-50">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center gap-2 text-[11px] text-[var(--accent-indigo)] font-semibold">
                  <Sparkles size={13} />
                  <span>Core Capability</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
