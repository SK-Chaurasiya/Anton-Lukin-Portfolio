import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/portfolioData';
import { PhotoItem } from '../types';
import { Camera, MapPin, Compass, Info, Maximize2, Sparkles, Filter, Video, Eye } from 'lucide-react';

interface Blok45GalleryProps {
  onSelectPhoto: (photo: PhotoItem) => void;
}

export const Blok45Gallery: React.FC<Blok45GalleryProps> = ({ onSelectPhoto }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredPhotoId, setHoveredPhotoId] = useState<string | null>(null);

  const categories = [
    'All',
    'Blok 45',
    'Aerial Landscapes',
    'Brutalist Architecture',
    'Cinematic Stills',
  ];

  const filteredPhotos =
    selectedCategory === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-950 text-slate-100 relative overflow-hidden">
      {/* Subtle Background Glow Accent */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <Camera className="w-3.5 h-3.5 text-cyan-400" />
              <span>COMPONENT 2: AERIAL CINEMATOGRAPHY & STREET ART ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight text-white">
              Blok 45 & Aerial Horizons
            </h2>
            <p className="text-slate-400 font-sans text-base sm:text-lg leading-relaxed">
              Documenting the raw Yugoslav brutalist geometry of Belgrade’s Blok 45 alongside ultra-high-altitude aerial drone cinematography across European coastlines and alpine peaks.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  selectedCategory === category
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-md shadow-cyan-950'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Showcase Card (Blok 45 Highlight) */}
        {selectedCategory === 'All' && (
          <div className="mb-12 relative group rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-900 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 relative aspect-video lg:aspect-auto lg:h-[420px] overflow-hidden">
                <img
                  src={GALLERY_PHOTOS[0].imageUrl}
                  alt={GALLERY_PHOTOS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-slate-950/40 lg:to-slate-950" />
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-cyan-500/40 px-3 py-1 rounded-full text-xs font-mono text-cyan-300 flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>FEATURED ARCHIVAL SCAN</span>
                </div>
              </div>

              <div className="lg:col-span-5 p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{GALLERY_PHOTOS[0].location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-sans text-white">
                  {GALLERY_PHOTOS[0].title}
                </h3>

                <p className="text-slate-300 font-sans text-sm leading-relaxed">
                  {GALLERY_PHOTOS[0].description}
                </p>

                <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs text-slate-400">
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block">Drone & Sensor</span>
                    <span className="text-slate-200">{GALLERY_PHOTOS[0].exif.droneModel}</span>
                  </div>
                  <div className="p-2 rounded bg-slate-950/80 border border-slate-800">
                    <span className="text-slate-500 block">Flight Altitude</span>
                    <span className="text-cyan-300">{GALLERY_PHOTOS[0].exif.altitude}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onSelectPhoto(GALLERY_PHOTOS[0])}
                    className="w-full py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 font-mono text-xs font-semibold transition-all flex items-center justify-center space-x-2"
                  >
                    <Maximize2 className="w-4 h-4 text-cyan-400" />
                    <span>Open High-Res Archival Telemetry & Lightbox</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onMouseEnter={() => setHoveredPhotoId(photo.id)}
              onMouseLeave={() => setHoveredPhotoId(null)}
              onClick={() => onSelectPhoto(photo)}
              className="group cursor-pointer rounded-xl overflow-hidden bg-slate-900 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-950/40 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-950">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-[11px] font-mono text-cyan-300 backdrop-blur-md">
                    {photo.category}
                  </span>
                  {photo.exif.altitude && (
                    <span className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-[10px] font-mono text-amber-300 backdrop-blur-md">
                      {photo.exif.altitude}
                    </span>
                  )}
                </div>

                {/* Hover Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-lg bg-cyan-500/90 text-slate-950 font-mono text-xs font-bold flex items-center space-x-1.5 shadow-xl">
                    <Eye className="w-4 h-4" />
                    <span>Inspect Archival EXIF</span>
                  </span>
                </div>

                {/* Bottom Overlay Title & Location */}
                <div className="absolute bottom-3 left-3 right-3 space-y-1">
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-cyan-400">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span className="truncate">{photo.location}</span>
                  </div>
                  <h4 className="text-lg font-bold font-sans text-white truncate">
                    {photo.title}
                  </h4>
                </div>
              </div>

              {/* Card Footer EXIF Metadata bar */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="truncate">{photo.exif.camera}</span>
                <span className="text-slate-500 font-sans">{photo.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
