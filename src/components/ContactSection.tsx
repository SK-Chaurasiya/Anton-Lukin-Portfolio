import React, { useState } from 'react';
import { ANTON_INFO } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, Instagram, Camera, Sparkles, MapPin, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Engineering Project / Contract',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(ANTON_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto URL to directly send email via native client
    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${ANTON_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info & Direct Copy */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>COMMISSIONS & INQUIRIES</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold font-sans text-white tracking-tight">
                Let's Build & Capture
              </h2>
              <p className="text-slate-400 font-sans text-base leading-relaxed">
                Available for select software architecture contracts, WebGL 3D visualization projects, and aerial drone cinematography commissions globally.
              </p>
            </div>

            {/* One-Click Copy Box */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Direct Email Address
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="font-mono text-cyan-300 font-semibold text-sm sm:text-base">
                  {ANTON_INFO.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-medium transition-all flex items-center space-x-1.5"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
              {copied && (
                <p className="text-xs font-mono text-emerald-400 animate-pulse">
                  ✓ Email copied to clipboard!
                </p>
              )}
            </div>

            {/* Location & Local Time */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Base Location:</span>
                </span>
                <span className="text-white font-bold">Belgrade, Serbia (CET / UTC+1)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Remote Availability:</span>
                </span>
                <span className="text-emerald-400 font-bold">Worldwide Remote</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Social Profiles & Archives
              </span>
              <div className="flex items-center space-x-3">
                <a
                  href={ANTON_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={ANTON_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={ANTON_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  title="Instagram Cinematography"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={ANTON_INFO.unsplash}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-all"
                  title="Unsplash High-Res"
                >
                  <Camera className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900/90 border border-slate-800/90 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-sans text-white">Message Dispatched!</h3>
                <p className="text-slate-300 font-sans text-sm max-w-md mx-auto">
                  Thank you for reaching out, {formData.name}. Anton will review your inquiry and respond shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 font-mono text-xs hover:bg-slate-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold font-sans text-white">Direct Project Inquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Elena Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-400 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="elena@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:border-cyan-500/60"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 block">Inquiry Type / Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-mono focus:outline-none focus:border-cyan-500/60"
                  >
                    <option value="Engineering Project / Contract">Engineering Architecture / Software Contract</option>
                    <option value="Drone Aerial Cinematography">Drone Aerial Cinematography Commission</option>
                    <option value="WebGL / 3D Visualization">WebGL / 3D Interactive Visualization</option>
                    <option value="Speaking / Collaboration">Speaking / Technical Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400 block">Message Details *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe your project scope, technical timeline, or drone flight location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm font-sans focus:outline-none focus:border-cyan-500/60"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-sm font-semibold shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4 text-cyan-200" />
                  <span>Send Project Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
