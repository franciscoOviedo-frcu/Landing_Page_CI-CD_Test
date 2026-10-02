import React from 'react';
import { Volume2, Award, Disc3, Quote } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function About() {
  return (
    <section id="banda" className="py-24 bg-[#0e0e13] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-[2px] w-12 bg-red-600"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold font-mono">
            01 // BIOGRAFÍA
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white leading-none">
              {bandData.bio.heading}
            </h2>

            <p className="text-lg sm:text-xl text-zinc-300 font-medium leading-relaxed">
              {bandData.bio.short}
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {bandData.bio.full}
            </p>

            {/* Brutalist Quote Block */}
            <div className="relative pl-6 py-3 border-l-4 border-red-600 bg-zinc-900/60 my-6">
              <Quote className="w-5 h-5 text-red-500 mb-2 opacity-60" />
              <p className="text-zinc-200 italic font-medium text-base sm:text-lg">
                {bandData.bio.quote}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
              {bandData.bio.stats.map((stat, idx) => (
                <div key={idx} className="bg-[#121217] p-4 border border-zinc-800 hover:border-red-900/50 transition-colors">
                  <div className="font-display text-2xl sm:text-3xl text-red-500 font-bold">
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 text-xs uppercase tracking-wider font-mono mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Brutalist Frame / Background Accent */}
              <div className="absolute -inset-3 bg-red-600/20 border border-red-600/40 transform translate-x-2 translate-y-2 pointer-events-none" />
              
              <div className="relative overflow-hidden bg-zinc-950 border border-zinc-700 aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?q=80&w=1000&auto=format&fit=crop"
                  alt="Banda en vivo"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-700"
                />
                
                {/* Live Badge Overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-zinc-900/90 backdrop-blur-sm border border-zinc-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping" />
                    <span className="text-xs uppercase font-mono tracking-wider text-zinc-300">Directo & Enérgico</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">EN VIVO</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
