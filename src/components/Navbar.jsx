import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Music, ExternalLink } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'LA BANDA', href: '#banda' },
    { name: 'INTEGRANTES', href: '#integrantes' },
    { name: 'MÚSICA & TOUR', href: '#musica' },
    { name: 'CONTACTO', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0b0e]/95 backdrop-blur-md border-b border-zinc-800/80 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#0b0b0e] via-[#0b0b0e]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="group flex items-center space-x-2">
            <div className="w-9 h-9 bg-red-600 flex items-center justify-center text-black font-black transform group-hover:rotate-6 transition-transform duration-300">
              <Flame className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-2xl sm:text-3xl tracking-wider text-white font-extrabold group-hover:text-red-500 transition-colors">
              {bandData.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-zinc-300 hover:text-red-500 font-semibold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#contacto"
              className="inline-flex items-center space-x-2 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white bg-red-600 hover:bg-red-700 transition-all border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] hover:shadow-[0_0_20px_rgba(220,38,38,0.7)]"
            >
              <span>Booking</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-zinc-400 hover:text-white focus:outline-none"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-red-500" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e13] border-b border-zinc-800 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-bold tracking-widest uppercase text-zinc-300 hover:text-red-500 hover:bg-zinc-900/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center mt-4 w-full py-2.5 text-xs font-bold tracking-widest uppercase text-white bg-red-600 hover:bg-red-700"
          >
            Contacto & Booking
          </a>
        </div>
      )}
    </header>
  );
}
