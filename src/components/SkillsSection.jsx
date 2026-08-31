import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import {
  Code, Globe, Database, Cpu, Wrench, Sparkles,
  Code2, Coffee, Terminal, FileCode, Layout, Palette, Zap, Atom, Smartphone,
  Server, Flame, Network, ShieldCheck, Binary, BrainCircuit, GitBranch, Laptop, Bot
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const catMeta = {
  'Programming Languages': { icon: Code, color: 'var(--accent-mid)', soft: 'var(--accent-soft)', cls: 'ib-blue' },
  'Web Development': { icon: Globe, color: 'var(--teal)', soft: 'var(--teal-soft)', cls: 'ib-teal' },
  'Database & Backend': { icon: Database, color: 'var(--green)', soft: 'var(--green-soft)', cls: 'ib-green' },
  'Core Computer Science': { icon: Cpu, color: 'var(--accent)', soft: 'var(--accent-soft)', cls: 'ib-blue' },
  'Tools & Platforms': { icon: Wrench, color: 'var(--amber)', soft: 'var(--amber-soft)', cls: 'ib-amber' },
  'AI / Machine Learning': { icon: Sparkles, color: 'var(--rose)', soft: 'var(--rose-soft)', cls: 'ib-rose' },
};

const skillIconMap = {
  Code2, Coffee, Terminal, FileCode, Layout, Palette, Zap, Atom, Smartphone,
  Database, Server, Flame, Network, ShieldCheck, Binary, BrainCircuit, GitBranch,
  Github: GithubIcon, Laptop, Bot, Cpu,
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
  })).filter(c => c.skills.length > 0);

  return (
    <section ref={ref} id="skills" className="section" style={{ background: 'var(--bg-subtle)' }}>
      <div className="container">

        <div className="sec-header reveal">
          <div className="eyebrow">Technical Competencies</div>
          <h2 className="sec-title">Categorized <span style={{ color: 'var(--accent)' }}>Technical Skills</span></h2>
          <p className="sec-subtitle">
            A structured view of languages, web stacks, database engineering, CS fundamentals, tools, and AI technologies.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.45rem', marginBottom: '2.5rem' }}>
          <button onClick={() => setActiveTab('All')} className={`tab${activeTab === 'All' ? ' active' : ''}`}>All Skills</button>
          {skillCategories.map(cat => (
            <button key={cat.category} onClick={() => setActiveTab(cat.category)} className={`tab${activeTab === cat.category ? ' active' : ''}`}>
              {cat.category}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.35rem' }} className="skills-grid">
          {filtered.map((cat, ci) => {
            const meta = catMeta[cat.category] || catMeta['Programming Languages'];
            const CatIcon = meta.icon;
            return (
              <div key={cat.category} className={`card reveal rd-${Math.min(ci + 1, 6)}`} style={{ padding: '1.35rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', paddingBottom: '0.75rem', borderBottom: `1.5px solid ${meta.soft}` }}>
                  <div className={`icon-box icon-box-md ${meta.cls}`}>
                    <CatIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>{cat.category}</div>
                    <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500 }}>{cat.skills.length} skills</div>
                  </div>
                </div>

                {/* Skill rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  {cat.skills.map(skill => {
                    const SkillIcon = skillIconMap[skill.icon] || Code;
                    return (
                      <div key={skill.name} style={{
                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                        padding: '0.52rem 0.65rem', background: 'var(--bg-subtle)',
                        borderRadius: 'var(--r-md)', border: '1px solid var(--border)',
                        transition: 'all 0.17s ease', cursor: 'default',
                      }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = meta.color; e.currentTarget.style.background = meta.soft; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg-subtle)'; }}
                      >
                        <div style={{ width: 28, height: 28, borderRadius: 'var(--r-sm)', background: meta.soft, color: meta.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <SkillIcon size={13} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-dark)', lineHeight: 1.2 }}>{skill.name}</div>
                          <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{skill.description}</div>
                        </div>
                        <span style={{
                          flexShrink: 0, fontSize: '0.62rem', fontWeight: 700, padding: '0.14rem 0.45rem', borderRadius: 'var(--r-pill)',
                          ...(skill.level === 'Advanced'
                            ? { background: 'var(--teal-soft)', color: 'var(--teal)', border: '1px solid rgba(14,116,144,0.22)' }
                            : { background: 'var(--accent-soft)', color: 'var(--accent-mid)', border: '1px solid var(--accent-line)' }),
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
          <p style={{ textAlign: 'center', padding: '2.5rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
            No matching skills found for "{searchQuery}".
          </p>
        )}
      </div>
      <style>{`
        @media(max-width:1024px){ .skills-grid{ grid-template-columns:repeat(2,1fr) !important; } }
        @media(max-width:600px) { .skills-grid{ grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
}
