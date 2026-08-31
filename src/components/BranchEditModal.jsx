import React, { useState } from 'react';
import { X, Check, Edit3, GraduationCap, Sparkles } from 'lucide-react';

export default function BranchEditModal({ isOpen, onClose, currentBranch, onSaveBranch }) {
  const [branchInput, setBranchInput] = useState(currentBranch || 'Computer Science & Engineering');

  if (!isOpen) return null;

  const presetBranches = [
    "Computer Science & Engineering",
    "Core",
    "Computer Science & Engineering (AI & ML)",
    "Electronics & Communication Engineering",
    "Information Technology",
    "Software Engineering"
  ];

  const handleSave = (e) => {
    e.preventDefault();
    onSaveBranch(branchInput.trim() || 'Core');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      
      <div className="relative w-full max-w-lg bg-[var(--bg-surface)] border border-[var(--border-color)] rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[var(--bg-card)] border-b border-[var(--border-color)] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[var(--accent-indigo)]/15 text-[var(--accent-indigo)]">
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 className="text-base font-bold text-[var(--text-primary)]">Edit LPU Program Specialization</h3>
              <p className="text-xs text-[var(--text-muted)]">Lovely Professional University • B.Tech</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[var(--bg-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-color)]"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-5">
          
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-start gap-2.5">
            <Sparkles size={16} className="shrink-0 mt-0.5" />
            <span>
              <strong>Note:</strong> As specified, the exact branch/specialization field remains editable until explicitly confirmed by the student or institution.
            </span>
          </div>

          <div>
            <label className="block text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-2">
              Current Branch / Specialization Name
            </label>
            <input
              type="text"
              required
              value={branchInput}
              onChange={(e) => setBranchInput(e.target.value)}
              placeholder="e.g. Computer Science & Engineering"
              className="w-full px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-glow)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] transition-all font-semibold"
            />
          </div>

          {/* Presets */}
          <div>
            <span className="block text-[11px] font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
              Quick Preset Selectors:
            </span>
            <div className="flex flex-wrap gap-2">
              {presetBranches.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setBranchInput(preset)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg border transition-all ${
                    branchInput === preset
                      ? 'bg-[var(--accent-indigo)]/20 text-[var(--accent-indigo)] border-[var(--accent-indigo)]'
                      : 'bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--border-glow)]'
                  }`}
                >
                  {preset}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-[var(--border-color)]">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary text-xs py-2.5 px-4"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary text-xs py-2.5 px-5 flex items-center gap-2"
            >
              <Check size={16} />
              <span>Confirm Branch Update</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
