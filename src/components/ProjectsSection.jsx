import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import { ExternalLink, Layers, Sparkles, CheckCircle2, ChevronRight, Eye, Tag } from 'lucide-react';

export default function ProjectsSection({ onSelectProject, searchQuery }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Learning Platform', 'Web & Location', 'Student Assistance', 'Hardware & ECE'];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'All' || project.category === filter;
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.keyFocus.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 bg-[var(--bg-main)]">
      <div className="container">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="section-tag">Portfolio Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-[var(--text-secondary)] text-sm sm:text-base">
            Practical application of software development, algorithm design, location services, campus utilities, and digital electronics.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${filter === cat
                ? 'bg-[var(--gradient-primary)] text-white shadow-md'
                : 'bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel group overflow-hidden flex flex-col justify-between hover:border-[var(--border-glow)] transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>

                {/* Project Image Preview Frame */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-surface)] via-transparent to-transparent opacity-80"></div>

                  {/* Category Type Tag Overlay */}
                  <span className="absolute top-3 left-3 badge badge-cyan font-bold shadow-md">
                    {project.typeTag}
                  </span>

                  {/* View Details Hover Overlay Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="absolute bottom-3 right-3 p-2 rounded-lg bg-[var(--bg-main)]/80 text-[var(--accent-cyan)] border border-[var(--border-color)] opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-1.5 text-xs font-semibold"
                  >
                    <Eye size={14} />
                    <span>Quick View</span>
                  </button>
                </div>

                {/* Card Content Body */}
                <div className="p-6">

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-cyan)] transition-colors">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-3 mb-4 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Focus Tags Pill Grid */}
                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider block mb-2">Key Focus:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.keyFocus.map((focus, i) => (
                        <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-[var(--accent-indigo)]/10 text-[var(--accent-indigo)] border border-[var(--accent-indigo)]/20">
                          • {focus}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--border-color)]">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-[var(--bg-surface)] text-[var(--text-muted)] border border-[var(--border-color)]">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>

              {/* Card Footer Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full btn btn-secondary text-xs py-2.5 flex items-center justify-center gap-2 group-hover:border-[var(--accent-cyan)] transition-colors"
                >
                  <span>Detailed Overview</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-[var(--text-muted)]">
            No matching projects found for "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
}
