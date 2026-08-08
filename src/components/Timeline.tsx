import React from 'react';
import { CAREER_MILESTONES, ANTON_INFO } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, FileText, ExternalLink, Award } from 'lucide-react';

interface TimelineProps {
  onOpenResume: () => void;
}

export const Timeline: React.FC<TimelineProps> = ({ onOpenResume }) => {
  return (
    <section id="timeline" className="py-24 bg-slate-900/40 text-slate-100 relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-slate-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>CAREER TIMELINE & LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white tracking-tight">
              Professional Journey
            </h2>
            <p className="text-slate-400 font-sans text-base leading-relaxed">
              Track record of building resilient software platforms, leading engineering teams, and consulting on high-scale web systems.
            </p>
          </div>

          <button
            onClick={onOpenResume}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-amber-500/20 hover:from-cyan-500/30 hover:to-amber-500/30 border border-cyan-500/40 text-cyan-200 font-mono text-xs font-semibold transition-all shadow-lg flex items-center space-x-2 self-start md:self-auto"
          >
            <FileText className="w-4 h-4 text-cyan-400" />
            <span>Open & Download Formatted CV</span>
          </button>
        </div>

        {/* Timeline Stream */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-slate-800 before:to-transparent">
          {CAREER_MILESTONES.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[30px] sm:-left-[41px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center shadow-md shadow-cyan-950 group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider block">
                      {milestone.period}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold font-sans text-white">
                      {milestone.role}
                    </h3>
                    <p className="text-slate-300 text-sm font-sans">
                      {milestone.company} — <span className="text-slate-500">{milestone.location}</span>
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                    {milestone.type}
                  </span>
                </div>

                <p className="text-slate-300 font-sans text-sm leading-relaxed">
                  {milestone.summary}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  {milestone.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs font-sans text-slate-400">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {milestone.techUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
