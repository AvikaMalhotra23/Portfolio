import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import {
  Code, Globe, Database, Cpu, Wrench, Sparkles,
  Code2, Coffee, Terminal, FileCode, Layout, Palette, Zap, Atom, Smartphone,
  Server, Flame, Network, ShieldCheck, Binary, BrainCircuit, GitBranch, Laptop, Bot
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const categoryMeta = {
  'Programming Languages': { icon: Code, color: 'var(--indigo)', pastel: 'var(--indigo-pastel)', border: 'rgba(91,80,240,0.15)' },
  'Web Development': { icon: Globe, color: 'var(--sky)', pastel: 'var(--sky-pastel)', border: 'rgba(14,165,233,0.15)' },
  'Database & Backend': { icon: Database, color: 'var(--teal)', pastel: 'var(--teal-pastel)', border: 'rgba(13,148,136,0.15)' },
  'Core Computer Science': { icon: Cpu, color: 'var(--violet)', pastel: 'var(--violet-pastel)', border: 'rgba(139,92,246,0.15)' },
  'Tools & Platforms': { icon: Wrench, color: 'var(--amber)', pastel: 'var(--amber-pastel)', border: 'rgba(217,119,6,0.15)' },
  'AI / Machine Learning': { icon: Sparkles, color: 'var(--rose)', pastel: 'var(--rose-pastel)', border: 'rgba(225,29,72,0.15)' },
};

const skillIconMap = {
  Code2, Coffee, Terminal, FileCode, Layout, Palette, Zap, Atom, Smartphone,
  Database, Server, Flame, Network, ShieldCheck, Binary, BrainCircuit, GitBranch,
  Github: GithubIcon, Laptop, Bot, Cpu
};

export default function SkillsSection({ searchQuery }) {
  const [activeTab, setActiveTab] = useState('All');
  const ref = useScrollReveal([activeTab, searchQuery]);

  const filtered = skillCategories.map(cat => ({
    ...cat,
    skills: cat.skills.filter(skill => {
      const matchTab = activeTab === 'All' || cat.category === activeTab;
      const matchSearch = !searchQuery ||
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTab && matchSearch;
    }),
  })).filter(cat => cat.skills.length > 0);

  return (
    <section ref={ref} id="skills" className="section" style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-card)',
      borderBottom: '1px solid var(--border-card)',
    }}>
      <span className="code-deco" style={{ bottom: '8%', right: '4%', fontSize: '1.1rem' }}>{'</>'}</span>

      <div className="container">

        <div className="section-header reveal">
          <div className="eyebrow">Technical Competencies</div>
          <h2 className="section-title">
            Categorized{' '}
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="section-subtitle">
            A structured view of languages, web stacks, database engineering, CS fundamentals, tools and AI technologies.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.5rem', marginBottom: '3rem' }}>
          <button
            onClick={() => setActiveTab('All')}
            className={`filter-tab${activeTab === 'All' ? ' active' : ''}`}
          >All Skills</button>
          {skillCategories.map(cat => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`filter-tab${activeTab === cat.category ? ' active' : ''}`}
            >{cat.category}</button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="skills-grid">
          {filtered.map((cat, ci) => {
            const meta = categoryMeta[cat.category] || { icon: Code, color: 'var(--indigo)', pastel: 'var(--indigo-pastel)', border: 'rgba(91,80,240,0.15)' };
            const CatIcon = meta.icon;
            return (
              <div
                key={cat.category}
                className={`card reveal reveal-delay-${Math.min(ci + 1, 6)}`}
                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                {/* Category header */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                  paddingBottom: '0.85rem',
                  borderBottom: `2px solid ${meta.border}`,
                }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 'var(--r-md)',
                    background: meta.pastel,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: meta.color, flexShrink: 0,
                  }}>
                    <CatIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                      {cat.category}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                    </div>
                  </div>
                </div>

                {/* Skill rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {cat.skills.map(skill => {
                    const SkillIcon = skillIconMap[skill.icon] || Code;
                    return (
                      <div
                        key={skill.name}
                        style={{
                          display: 'flex', alignItems: 'center', gap: '0.65rem',
                          padding: '0.6rem 0.75rem',
                          background: 'var(--bg-main)',
                          borderRadius: 'var(--r-md)',
                          border: '1px solid var(--border-card)',
                          transition: 'all 0.18s ease',
                          cursor: 'default',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = meta.color; e.currentTarget.style.background = meta.pastel; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-card)'; e.currentTarget.style.background = 'var(--bg-main)'; }}
                      >
                        <div style={{
                          width: 30, height: 30, borderRadius: 'var(--r-sm)',
                          background: meta.pastel, color: meta.color,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          flexShrink: 0,
                        }}>
                          <SkillIcon size={14} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.2 }}>{skill.name}</div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{skill.description}</div>
                        </div>
                        <span style={{
                          flexShrink: 0,
                          fontSize: '0.65rem', fontWeight: 700,
                          padding: '0.18rem 0.5rem', borderRadius: 'var(--r-full)',
                          ...(skill.level === 'Advanced'
                            ? { background: 'var(--teal-pastel)', color: 'var(--teal)', border: '1px solid rgba(13,148,136,0.2)' }
                            : { background: 'var(--indigo-pastel)', color: 'var(--indigo)', border: '1px solid rgba(91,80,240,0.2)' }
                          ),
                        }}>
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No matching skills found for "{searchQuery}".
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) { .skills-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px)  { .skills-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
