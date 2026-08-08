import React from 'react';
import { PhotoItem } from '../types';
import { X, MapPin, Camera, Compass, Layers, Info, Calendar } from 'lucide-react';

interface LightboxModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 hover:border-cyan-500 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="lg:w-2/3 bg-black flex items-center justify-center p-4 relative min-h-[300px] lg:min-h-[500px]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="max-h-[80vh] w-auto object-contain rounded-lg"
          />
        </div>

        {/* EXIF Metadata Sidebar */}
        <div className="lg:w-1/3 p-6 sm:p-8 bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 overflow-y-auto space-y-6">
          <div>
            <span className="px-2.5 py-1 rounded text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
              {photo.category}
            </span>
            <h3 className="text-2xl font-bold font-sans text-white mt-3">
              {photo.title}
            </h3>
            <p className="text-xs font-mono text-cyan-400 mt-1 flex items-center space-x-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{photo.location}</span>
            </p>
          </div>

          <p className="text-slate-300 font-sans text-sm leading-relaxed">
            {photo.description}
          </p>

          {/* EXIF Data Grid */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Camera className="w-3.5 h-3.5 text-amber-400" />
              <span>Drone Flight & EXIF Telemetry</span>
            </h4>

            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Drone Model</span>
                <span className="text-slate-200 font-semibold">{photo.exif.droneModel || photo.exif.camera}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Flight Altitude</span>
                <span className="text-cyan-300 font-semibold">{photo.exif.altitude || 'N/A'}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Lens</span>
                <span className="text-slate-200 font-semibold">{photo.exif.lens}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-slate-500 text-[10px] block">Aperture / Exposure</span>
                <span className="text-slate-200 font-semibold">{photo.exif.aperture} | {photo.exif.shutter}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 col-span-2">
                <span className="text-slate-500 text-[10px] block">GPS Coordinates</span>
                <span className="text-amber-400 font-semibold">{photo.coordinates}</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {photo.tags.map((tag) => (
              <span key={tag} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-950 text-slate-400 border border-slate-800">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
