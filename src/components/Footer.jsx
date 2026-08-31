import React from 'react';
import { personalDetails } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { Mail, ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-10 bg-[var(--bg-main)] border-t-2 border-[var(--border-color)]">
      <div className="container">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[var(--border-color)]">

          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Avika Malhotra</h3>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Aspiring Software Engineer & Full-Stack Developer • Lovely Professional University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[#0a66c2] border border-[var(--border-color)] transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={personalDetails.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)] transition-colors"
              title="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${personalDetails.email}`}
              className="p-2.5 rounded-xl bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] border border-[var(--border-color)] transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] border border-[var(--border-color)] hover:border-[var(--border-glow)] transition-all"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 text-center text-xs text-[var(--text-muted)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Avika Malhotra. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with React, Vite & Modern Web Standards
          </span>
        </div>

      </div>
    </footer>
  );
}
