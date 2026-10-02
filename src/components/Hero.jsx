import React from 'react';
import { Play, ChevronDown, Radio, Music2, ExternalLink } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid-pattern">
      {/* Background with dark overlay & subtle atmospheric crimson glow */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Vignette gradients */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/70 to-[#0b0b0e]/90" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        
        {/* Subgenre badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-zinc-900/80 border border-zinc-700/60 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-300 font-semibold">
            {bandData.subgenre}
          </span>
        </div>

        {/* Main Band Title */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]">
          {bandData.name}
        </h1>

        {/* Tagline */}
        <p className="mt-4 text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto uppercase tracking-widest font-semibold border-y border-zinc-800/80 py-3">
          {bandData.tagline}
        </p>

        {/* Origin info */}
        <p className="mt-3 text-xs sm:text-sm text-zinc-400 font-mono tracking-wider">
          EST. {bandData.foundedYear} • {bandData.origin}
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#musica"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-all border border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:scale-[1.02]"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Escuchar Single</span>
          </a>

          <a
            href="#banda"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 transition-all border border-zinc-700 hover:border-zinc-500"
          >
            <span>Conocer la Banda</span>
          </a>
        </div>

        {/* Streaming links bar */}
        <div className="mt-14 pt-8 border-t border-zinc-800/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-zinc-400">
          <span className="text-xs uppercase tracking-widest font-mono text-zinc-400">Escúchanos en:</span>
          {bandData.socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-semibold text-zinc-300 hover:text-red-500 flex items-center space-x-1.5 transition-colors"
            >
              <span>{social.name}</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none text-zinc-400">
        <span className="text-[10px] tracking-widest uppercase mb-1 font-mono">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-red-500" />
      </div>
    </section>
  );
}
