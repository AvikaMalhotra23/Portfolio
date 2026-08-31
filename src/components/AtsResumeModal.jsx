import React from 'react';
import { personalDetails, initialEducation, skillCategories, projects, certifications, additionalHighlights, languages, interests } from '../data/portfolioData';
import { X, Printer, Download, CheckCircle2, Mail, Phone, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AtsResumeModal({ isOpen, onClose, lpuBranch }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({ particleCount: 50, spread: 60 });
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 no-print">
      
      {/* Modal Card Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Top Toolbar (Action Controls) */}
        <div className="px-6 py-4 bg-slate-800 border-b border-slate-700 flex items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
            <h3 className="text-sm font-bold text-slate-100">
              ATS-Optimized Professional Resume — Avika Malhotra
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="btn btn-primary text-xs py-2 px-4 flex items-center gap-2"
            >
              <Printer size={15} />
              <span>Print / Export PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-200 transition-colors"
              title="Close Resume View"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-sans leading-normal text-xs sm:text-sm ats-resume-document">
          
          {/* Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-5 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
                {personalDetails.name}
              </h1>
              <p className="text-sm font-bold text-slate-700 mt-1">
                Aspiring Software Engineer & Full-Stack Developer
              </p>
              <p className="text-xs text-slate-600 font-medium mt-0.5">
                Lovely Professional University | B.Tech Core ({lpuBranch}) • 2nd Year (3rd Sem)
              </p>
            </div>

            <div className="text-xs space-y-1 text-slate-700 font-medium sm:text-right">
              <div><strong>Phone:</strong> +91 {personalDetails.phone}</div>
              <div><strong>Email:</strong> {personalDetails.email}</div>
              <div><strong>LinkedIn:</strong> linkedin.com/in/avikamalhotra23</div>
              <div><strong>GitHub:</strong> github.com/AvikaMalhotra23</div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              Highly motivated 2nd-year B.Tech undergraduate at Lovely Professional University with a strong academic foundation (93% Class X, 90% Class XII) and demonstrated proficiency in Data Structures & Algorithms, web development, and database engineering. Proven ability to translate theoretical concepts into functional web platforms and hardware prototypes. Recipient of multiple certifications across C++, Cloud Computing, and Artificial Intelligence, alongside hands-on corporate simulation experience with Deloitte Australia.
            </p>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                  <span>Lovely Professional University (LPU)</span>
                  <span>Expected Graduation: 2028</span>
                </div>
                <div className="flex justify-between text-xs text-slate-700 font-medium">
                  <span>Bachelor of Technology (B.Tech) — Core Program ({lpuBranch})</span>
                  <span>2nd Year • 3rd Semester</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                  <span>Heritage International School</span>
                  <span>2025</span>
                </div>
                <div className="flex justify-between text-xs text-slate-700 font-medium">
                  <span>Class XII (Senior Secondary Board Examinations)</span>
                  <span>Score: <strong>90%</strong></span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-baseline font-bold text-slate-900 text-xs">
                  <span>Mariampur Senior Secondary School</span>
                  <span>2023</span>
                </div>
                <div className="flex justify-between text-xs text-slate-700 font-medium">
                  <span>Class X (Secondary Board Examinations)</span>
                  <span>Score: <strong>93%</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800">
              <div><strong>Programming Languages:</strong> C++, Java, Python, JavaScript</div>
              <div><strong>Web Development:</strong> HTML5, CSS3, JavaScript (ES6+), React, Responsive Design</div>
              <div><strong>Database & Backend:</strong> SQL, DBMS, Firebase, REST APIs, Authentication</div>
              <div><strong>Core Computer Science:</strong> Data Structures & Algorithms (DSA), Problem Solving</div>
              <div><strong>Tools & Platforms:</strong> Git, GitHub, Visual Studio Code (VS Code)</div>
              <div><strong>AI / Emerging Tech:</strong> AI/ML Tools, Building with AI (Saylor Certified)</div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              PROJECTS
            </h2>
            <div className="space-y-3">
              
              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs">
                  <span>Homigo — Accommodation & Roommate Finder</span>
                  <span>React • Firebase • Web Platform</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Web-based platform designed to simplify finding suitable accommodation and compatible roommates through organized listing discovery, compatibility metrics, and structured search filters.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs">
                  <span>DSA Genie — Data Structures & Algorithms Learning Platform</span>
                  <span>C++ • React • Visualization</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Interactive learning environment designed to help computer science students understand and practice Data Structures and Algorithms with visual execution roadmaps and curated practice sets.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs">
                  <span>Best Near — Nearby Places & Services Finder</span>
                  <span>JavaScript • REST APIs • Map UI</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Location-focused web application that helps users discover nearby essential places and services conveniently using category grouping and interactive distance discovery.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs">
                  <span>Building Campus Helper App — Campus Assistance Platform</span>
                  <span>Web App • UI/UX • Directory</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Student assistance application simplifying campus navigation, timetable referencing, and building directory lookup for university students.
                </p>
              </div>

              <div>
                <div className="flex justify-between font-bold text-slate-900 text-xs">
                  <span>Electronic Voting Machine — ECE Academic Project</span>
                  <span>C/C++ • Digital Electronics • Hardware</span>
                </div>
                <p className="text-xs text-slate-700 mt-0.5">
                  Hardware electronic voting machine prototype demonstrating digital logic vote casting, anti-debounce input handling, LED status indicators, and real-time LCD vote count tallying.
                </p>
              </div>

            </div>
          </div>

          {/* Certifications & Industry Simulations */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              CERTIFICATIONS & CORPORATE SIMULATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
              <div>• <strong>Saylor University:</strong> CS107 C++ Programming (ID: 5701638281AM)</div>
              <div>• <strong>Simplilearn SkillUp:</strong> Intro to Cloud Computing (Code: 10417368)</div>
              <div>• <strong>Saylor University:</strong> CS205 Building with AI (Grade: 84.12%)</div>
              <div>• <strong>Infosys Springboard:</strong> Intro to Artificial Intelligence</div>
              <div>• <strong>Deloitte Australia (Forage):</strong> Technology Job Simulation</div>
              <div>• <strong>Deloitte Australia (Forage):</strong> Data Analytics Job Simulation</div>
              <div>• <strong>WNS Care Foundation:</strong> Career Development Program (CDP)</div>
            </div>
          </div>

          {/* Additional Strengths & Languages */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              ADDITIONAL HIGHLIGHTS & LANGUAGES
            </h2>
            <p className="text-xs text-slate-700">
              <strong>Languages:</strong> English (Professional), Hindi (Native)<br />
              <strong>Interests:</strong> Coding, Travelling, Exploring Emerging Technologies<br />
              <strong>Core Strengths:</strong> Problem-Solving, Algorithmic Thinking, Multidisciplinary Exposure (Software + Electronics + Data Analytics), Continuous Technical Learning.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
