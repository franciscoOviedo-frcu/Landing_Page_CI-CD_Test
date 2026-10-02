import React from 'react';
import { Shield, Sparkles, Wrench } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function Members() {
  return (
    <section id="integrantes" className="py-24 bg-[#0b0b0e] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-[2px] w-12 bg-red-600"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold font-mono">
            02 // ALINEACIÓN
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white">
              INTEGRANTES
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              La química detrás de la distorsión. Cada miembro aporta su firma sonora e identidad a la maquinaria de {bandData.name}.
            </p>
          </div>
          <div className="text-xs font-mono text-zinc-400 border border-zinc-800 px-4 py-2 bg-zinc-900/60 self-start md:self-auto">
            5 MIEMBROS ACTIVOS
          </div>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {bandData.members.map((member, index) => (
            <div
              key={member.id}
              className="group relative bg-[#121217] border border-zinc-800 hover:border-red-600/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)]"
            >
              {/* Top Accent Strip */}
              <div className="h-1 w-full bg-zinc-800 group-hover:bg-red-600 transition-colors" />

              {/* Member Photo */}
              <div className="relative aspect-[4/4] overflow-hidden bg-zinc-950">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Index tag */}
                <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-zinc-800 px-2.5 py-1 text-[11px] font-mono text-zinc-300 uppercase">
                  0{index + 1}
                </span>

                {/* Role Pill */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-red-600/90 text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Member Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-display text-2xl text-white font-bold tracking-wide group-hover:text-red-500 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Gear / Equipment tag */}
                {member.gear && (
                  <div className="pt-4 border-t border-zinc-800/80 mt-auto">
                    <div className="flex items-center space-x-2 text-zinc-400 text-xs font-mono">
                      <Wrench className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span className="truncate">{member.gear}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
