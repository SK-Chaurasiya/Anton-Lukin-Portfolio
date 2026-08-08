import React from 'react';
import { ANTON_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Instagram, Camera, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center space-x-2 justify-center sm:justify-start">
              <span className="font-bold text-white text-base tracking-tight">ANTON LUKIN</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                v2026.1
              </span>
            </div>
            <p className="text-slate-500">
              Full-Stack Software Architecture & Drone Aerial Cinematography
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a href={ANTON_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href={ANTON_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={ANTON_INFO.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={ANTON_INFO.unsplash} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              <Camera className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Anton Lukin. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
