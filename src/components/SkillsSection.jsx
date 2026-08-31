import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { 
  Code, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles,
  Code2,
  Coffee,
  Terminal,
  FileCode,
  Layout,
  Palette,
  Zap,
  Atom,
  Smartphone,
  Server,
  Flame,
  Network,
  ShieldCheck,
  Binary,
  BrainCircuit,
  GitBranch,
  Laptop,
  Bot
} from 'lucide-react';

export default function SkillsSection({ searchQuery }) {
  const [activeTab, setActiveTab] = useState('All');

  const categoryIconMap = {
    "Programming Languages": Code,
    "Web Development": Globe,
    "Database & Backend": Database,
    "Core Computer Science": Cpu,
    "Tools & Platforms": Wrench,
    "AI / Machine Learning": Sparkles
  };

  const skillIconMap = {
    Code2, Coffee, Terminal, FileCode, Layout, Palette, Zap, Atom, Smartphone,
    Database, Server, Flame, Network, ShieldCheck, Binary, BrainCircuit, GitBranch,
    Github: GithubIcon, Laptop, Bot, Cpu
  };

  // Filter skills based on tab or global search query
  const filteredCategories = skillCategories.map(cat => {
    const matchingSkills = cat.skills.filter(skill => {
      const matchesSearch = searchQuery === '' || 
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTab = activeTab === 'All' || cat.category === activeTab;
      return matchesSearch && matchesTab;
    });

    return { ...cat, skills: matchingSkills };
  }).filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-20 bg-[var(--bg-surface)]/50 border-y border-[var(--border-color)]">
      <div className="container">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-tag">Technical Competencies</span>
          <h2 className="section-title">Categorized Technical Skills</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Structured view of languages, web stacks, database engineering, computer science fundamentals, tools, and AI technologies.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'All'
                ? 'bg-[var(--gradient-primary)] text-white shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map(cat => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat.category
                  ? 'bg-[var(--gradient-primary)] text-white shadow-md'
                  : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((cat) => {
            const CategoryIcon = categoryIconMap[cat.category] || Code;
            return (
              <div key={cat.category} className="glass-panel p-6 flex flex-col justify-between hover:border-[var(--border-glow)] transition-all">
                <div>
                  
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[var(--border-color)]">
                    <div className="p-2.5 rounded-xl bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)]">
                      <CategoryIcon size={22} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{cat.category}</h3>
                      <span className="text-xs text-[var(--text-muted)] font-medium">
                        {cat.skills.length} {cat.skills.length === 1 ? 'skill' : 'skills'}
                      </span>
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-3">
                    {cat.skills.map((skill) => {
                      const IconComponent = skillIconMap[skill.icon] || Code;
                      return (
                        <div key={skill.name} className="p-3 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-glow)] transition-colors flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-[var(--bg-card)] text-[var(--accent-cyan)]">
                              <IconComponent size={16} />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-[var(--text-primary)]">{skill.name}</div>
                              <div className="text-[11px] text-[var(--text-muted)]">{skill.description}</div>
                            </div>
                          </div>
                          
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            skill.level === 'Advanced' 
                              ? 'bg-[var(--accent-cyan)]/15 text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30' 
                              : 'bg-[var(--accent-indigo)]/15 text-[var(--accent-indigo)] border border-[var(--accent-indigo)]/30'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-[var(--text-muted)]">
            No matching skills found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
