import React from 'react';
import { Play, Calendar, MapPin, Ticket, ExternalLink, Disc } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function Media() {
  const { featuredRelease, shows } = bandData;

  return (
    <section id="musica" className="py-24 bg-[#0e0e13] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-[2px] w-12 bg-red-600"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold font-mono">
            03 // MÚSICA & DIRECTOS
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white">
              DISCOGRAFÍA & TOUR
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Nuestra producción de estudio y las próximas paradas del tour donde descargar toda la energía.
            </p>
          </div>
        </div>

        {/* Featured Release Showcase */}
        <div className="bg-[#121217] border border-zinc-800 p-6 sm:p-10 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Release Cover */}
            <div className="lg:col-span-4 relative group">
              <div className="aspect-square relative overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl">
                <img
                  src={featuredRelease.coverImage}
                  alt={featuredRelease.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Release Info & Links */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-block px-3 py-1 bg-red-950/60 border border-red-800/80 text-red-400 text-xs font-mono uppercase tracking-wider">
                {featuredRelease.type} • {featuredRelease.releaseDate}
              </div>

              <h3 className="font-display text-4xl sm:text-5xl font-black text-white tracking-wide">
                {featuredRelease.title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Disponible en todas las plataformas digitales de streaming. Escucha ahora el corte promocional y sumérgete en el universo sonoro de {bandData.name}.
              </p>

              {/* Streaming Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={featuredRelease.listenLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Spotify</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={featuredRelease.listenLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={featuredRelease.listenLinks.appleMusic}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Apple Music</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>

                <a
                  href={featuredRelease.listenLinks.bandcamp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 hover:border-zinc-500 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Bandcamp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Live Tour Dates Table */}
        <div>
          <h3 className="font-display text-3xl font-black uppercase text-white mb-6 flex items-center space-x-3">
            <span>PRÓXIMAS FECHAS EN VIVO</span>
            <span className="text-red-500 text-sm font-mono tracking-normal font-normal">/// TOUR</span>
          </h3>

          <div className="space-y-3">
            {shows.map((show, idx) => (
              <div
                key={idx}
                className="bg-[#121217] border border-zinc-800 hover:border-zinc-700 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors"
              >
                {/* Date */}
                <div className="flex items-center space-x-3 sm:w-44">
                  <Calendar className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="font-mono font-bold text-sm sm:text-base text-white">
                    {show.date}
                  </span>
                </div>

                {/* Venue & City */}
                <div className="flex-1">
                  <div className="text-white font-bold text-base">{show.venue}</div>
                  <div className="flex items-center space-x-1.5 text-zinc-400 text-xs font-mono mt-0.5">
                    <MapPin className="w-3 h-3 text-zinc-400" />
                    <span>{show.city}</span>
                  </div>
                </div>

                {/* Status / Tickets */}
                <div className="flex items-center space-x-4 self-end sm:self-center">
                  <span className="text-xs font-mono text-zinc-400 uppercase hidden md:inline-block">
                    {show.status}
                  </span>
                  <a
                    href={show.ticketUrl}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <Ticket className="w-3.5 h-3.5" />
                    <span>Entradas</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
