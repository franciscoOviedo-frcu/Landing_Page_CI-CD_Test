import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';
import { bandData } from '../data/bandData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Booking / Contratación',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulación de envío o conexión con Web3Forms / mailto
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-[#0b0b0e] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="h-[2px] w-12 bg-red-600"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-red-500 font-bold font-mono">
            04 // CONTACTO & BOOKING
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-white">
              CONTRATACIONES & PRENSA
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              ¿Quieres programar una fecha, entrevista o colaborar con nosotros? Envíanos un mensaje o contáctanos por nuestros canales oficiales.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Booking Card */}
            <div className="bg-[#121217] border border-zinc-800 p-6">
              <div className="flex items-center space-x-3 text-red-500 mb-2">
                <Mail className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Booking / Shows</span>
              </div>
              <a
                href={`mailto:${bandData.contact.emailBooking}`}
                className="text-white hover:text-red-500 text-lg sm:text-xl font-bold font-mono transition-colors break-all"
              >
                {bandData.contact.emailBooking}
              </a>
              <p className="text-xs text-zinc-400 mt-2">
                Para fechas en vivo, festivales y contrataciones directas.
              </p>
            </div>

            {/* Press & Media Card */}
            <div className="bg-[#121217] border border-zinc-800 p-6">
              <div className="flex items-center space-x-3 text-red-500 mb-2">
                <MessageSquare className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold">Prensa & Media</span>
              </div>
              <a
                href={`mailto:${bandData.contact.emailPress}`}
                className="text-white hover:text-red-500 text-lg sm:text-xl font-bold font-mono transition-colors break-all"
              >
                {bandData.contact.emailPress}
              </a>
              <p className="text-xs text-zinc-400 mt-2">
                Solicitud de EPK, acreditaciones y entrevistas.
              </p>
            </div>

            {/* Location & City */}
            <div className="bg-[#121217] border border-zinc-800 p-6 flex items-center space-x-4">
              <div className="w-12 h-12 bg-zinc-900 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-zinc-400">Base de Operaciones</span>
                <div className="text-white font-bold text-base">{bandData.contact.location}</div>
              </div>
            </div>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#121217] border border-zinc-800 p-8 sm:p-10 relative">
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-6">
                ENVIAR MENSAJE DIRECTO
              </h3>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-red-600/20 border border-red-500 text-red-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-2xl uppercase text-white">¡Mensaje Enviado con Éxito!</h4>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Gracias por ponerte en contacto. El equipo de management responderá a la brevedad.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', type: 'Booking / Contratación', message: '' }); }}
                    className="mt-4 px-6 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs uppercase font-mono tracking-wider text-zinc-300"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Tu Nombre / Organización *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ej. Productora / Nombre"
                        className="w-full bg-[#0b0b0e] border border-zinc-800 focus:border-red-600 px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@email.com"
                        className="w-full bg-[#0b0b0e] border border-zinc-800 focus:border-red-600 px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Motivo del Contacto
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full bg-[#0b0b0e] border border-zinc-800 focus:border-red-600 px-4 py-3 text-white text-sm focus:outline-none transition-colors"
                    >
                      <option value="Booking / Contratación">Booking / Contratación para show</option>
                      <option value="Prensa / Entrevista">Prensa / Entrevista / Medios</option>
                      <option value="Sello / Discográfica">Sello discográfico / Distribución</option>
                      <option value="Fan / Saludo">Mensaje de Fan / Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Escribe los detalles aquí..."
                      className="w-full bg-[#0b0b0e] border border-zinc-800 focus:border-red-600 px-4 py-3 text-white text-sm focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest transition-all border border-red-500 shadow-[0_0_15px_rgba(220,38,38,0.4)] disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
