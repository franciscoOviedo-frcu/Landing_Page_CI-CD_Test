import React from 'react';
import { ArrowUp, Flame } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-zinc-900 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          
          {/* Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-black">
              <Flame className="w-4 h-4 text-white" />
            </div>
            <span className="font-display text-2xl font-black tracking-wider text-white">
              {bandData.name}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider font-mono">
            {bandData.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-red-500 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 px-4 py-2 bg-zinc-900/50 transition-colors"
          >
            <span>Volver Arriba</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-500" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-2">
          <p>© {new Date().getFullYear()} {bandData.name}. Todos los derechos reservados.</p>
          <p>Desarrollado para alta velocidad y desplegado en Cloudflare Pages.</p>
        </div>
      </div>
    </footer>
  );
}
