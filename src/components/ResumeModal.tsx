import React from 'react';
import { ANTON_INFO, CAREER_MILESTONES, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Mail, MapPin, Globe, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-y-auto shadow-2xl p-6 sm:p-10 space-y-8 text-slate-100">
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <span className="font-mono text-xs font-bold text-slate-300">ANTON LUKIN — OFFICIAL CURRICULUM VITAE</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono flex items-center space-x-1.5 border border-slate-700"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-slate-950 text-slate-300 hover:text-white border border-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Document Content */}
        <div className="space-y-6 print:text-black">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold font-sans text-white">{ANTON_INFO.name}</h1>
            <p className="text-cyan-400 font-mono text-sm">{ANTON_INFO.role}</p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{ANTON_INFO.location}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>{ANTON_INFO.email}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>https://lukin.me</span>
              </span>
            </div>
          </div>

          {/* Bio Summary */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs font-sans text-slate-300 leading-relaxed">
            {ANTON_INFO.bio}
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Work Experience & Career Milestones
            </h2>
            <div className="space-y-4">
              {CAREER_MILESTONES.map((m, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between items-baseline font-mono text-xs">
                    <span className="text-white font-bold">{m.role} — <span className="text-cyan-300">{m.company}</span></span>
                    <span className="text-slate-500">{m.period}</span>
                  </div>
                  <p className="text-slate-400 text-xs font-sans">{m.summary}</p>
                  <ul className="space-y-1 pl-3">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="text-xs font-sans text-slate-300 flex items-start space-x-1.5">
                        <span className="text-cyan-400 font-mono">▪</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-3 pt-2">
            <h2 className="text-xs font-mono text-cyan-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Technical Stack & Domain Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <span className="text-amber-400 font-bold block mb-1">{cat.category}</span>
                  <span className="text-slate-300">
                    {cat.skills.map((s) => s.name).join(' • ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
