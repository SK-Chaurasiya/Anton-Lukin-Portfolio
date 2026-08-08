import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Code2, Server, Cloud, Compass, CheckCircle2, ChevronRight, Layers, Sparkles } from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="space-y-3 mb-12 max-w-2xl border-b border-slate-800 pb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE COMPETENCIES & ENGINEERING STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white tracking-tight">
            Technical Proficiency & Tooling
          </h2>
          <p className="text-slate-400 font-sans text-base leading-relaxed">
            Over a decade of hands-on experience spanning strict type-safe frontend architecture, low-latency microservices, cloud orchestration, and aerial drone photogrammetry.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2 mb-8">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 border flex items-center space-x-2 ${
                activeCategoryIndex === idx
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-lg shadow-cyan-950'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold font-sans text-white flex items-center space-x-2">
                    <span>{skill.name}</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                      {skill.experience}
                    </span>
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-cyan-400">{skill.level}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden p-0.5 border border-slate-800">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-amber-400 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <p className="text-slate-400 text-xs font-sans leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
