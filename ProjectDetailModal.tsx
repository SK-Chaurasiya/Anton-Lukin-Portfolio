import React from 'react';
import { ProjectItem } from '../types';
import { X, Code2, ExternalLink, Github, CheckCircle2, Layers, Cpu, Terminal } from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2 border-b border-slate-800 pb-4">
          <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-sans text-white">
            {project.title}
          </h2>
          <p className="text-slate-400 font-sans text-sm">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-slate-300 font-sans text-sm leading-relaxed">
          {project.longDescription}
        </p>

        {/* Key Features */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center space-x-1.5">
            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
            <span>Key Architectural Features</span>
          </h3>
          <ul className="space-y-1.5 pl-2">
            {project.keyFeatures.map((feature, idx) => (
              <li key={idx} className="text-slate-300 text-xs font-sans flex items-start space-x-2">
                <span className="text-cyan-400 font-mono">▸</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture Spec */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
          <span className="text-[11px] font-mono text-slate-500 block uppercase">Stack & Architecture</span>
          <p className="text-xs font-mono text-slate-200">{project.architecture}</p>
        </div>

        {/* Code Snippet */}
        {project.codeSnippet && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Source Snippet ({project.codeSnippet.language})</span>
              </span>
            </div>
            <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto leading-relaxed">
              <code>{project.codeSnippet.code}</code>
            </pre>
          </div>
        )}

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-end space-x-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs font-medium transition-colors flex items-center space-x-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-semibold shadow-lg transition-all flex items-center space-x-2"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Launch Live App</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
