import React, { useState, useEffect } from 'react';
import { ANTON_INFO } from '../data/portfolioData';
import { Camera, Code2, Menu, X, FileText, Sparkles, Volume2, VolumeX, Layers } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
  audioActive: boolean;
  onToggleAudio: () => void;
  particleMode: 'landscape' | 'nebula' | 'sphere' | 'waves';
  onChangeParticleMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
  audioActive,
  onToggleAudio,
  particleMode,
  onChangeParticleMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Overview' },
    { id: 'gallery', label: 'Cinematography (Blok 45)', icon: Camera },
    { id: 'projects', label: 'Software Architecture', icon: Code2 },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'timeline', label: 'Career' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-xl shadow-black/40'
          : 'bg-gradient-to-b from-slate-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-lg bg-slate-900 border border-cyan-500/30 flex items-center justify-center overflow-hidden group-hover:border-cyan-400 transition-colors shadow-inner">
              <span className="font-mono text-cyan-400 font-bold text-sm tracking-wider">AL</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-white font-bold tracking-tight text-base sm:text-lg group-hover:text-cyan-400 transition-colors">
                  ANTON LUKIN
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                  AVAILABLE
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono tracking-wider hidden sm:block">
                SOFTWARE ARCHITECT & DRONE CINEMATOGRAPHER
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wide transition-all duration-200 flex items-center space-x-1.5 ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-950'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Utilities */}
          <div className="hidden sm:flex items-center space-x-2">
            {/* Particle Mode Switcher */}
            <button
              onClick={onChangeParticleMode}
              title={`Particle FX: ${particleMode.toUpperCase()} (Click to toggle)`}
              className="px-2.5 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-cyan-300 transition-all text-xs font-mono flex items-center space-x-1.5"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span className="capitalize">{particleMode}</span>
            </button>

            {/* Ambient Sound Toggle */}
            <button
              onClick={onToggleAudio}
              title={audioActive ? 'Mute ambient sound synth' : 'Enable drone ambient audio synth'}
              className={`p-2 rounded-lg border transition-all ${
                audioActive
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-700/60'
              }`}
            >
              {audioActive ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-amber-500/20 hover:from-cyan-500/30 hover:to-amber-500/30 border border-cyan-500/40 text-cyan-200 hover:text-white text-xs font-mono font-medium transition-all shadow-sm flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 rounded bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs font-mono"
            >
              CV
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 hover:border-slate-700 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5 text-slate-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-2">
          <div className="space-y-2 mb-4">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-mono flex items-center space-x-3 transition-colors ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-slate-900'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-cyan-400" />}
                  <span>{link.label}</span>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={onChangeParticleMode}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800 flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Particle FX: {particleMode}</span>
            </button>

            <button
              onClick={onToggleAudio}
              className="px-3 py-1.5 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-slate-800 flex items-center space-x-1.5"
            >
              {audioActive ? <Volume2 className="w-3.5 h-3.5 text-amber-400" /> : <VolumeX className="w-3.5 h-3.5 text-slate-500" />}
              <span>{audioActive ? 'Sound On' : 'Sound Off'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
