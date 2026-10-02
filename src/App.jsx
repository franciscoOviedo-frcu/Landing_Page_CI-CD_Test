import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Members from './components/Members';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-zinc-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Barra de navegación superior fija */}
      <Navbar />

      <main className="flex-grow">
        {/* Portada / Hero de alto impacto */}
        <Hero />

        {/* Acerca de la banda / Biografía & Sonido */}
        <About />

        {/* Integrantes / Lineup */}
        <Members />

        {/* Música, videoclip destacado y tour */}
        <Media />

        {/* Canales de contacto, booking y formulario */}
        <Contact />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
