/**
 * CONFIGURACIÓN CENTRAL DE LA BANDA (bandData.js)
 * Edita este archivo para modificar la información de la banda, integrantes,
 * enlaces de música, redes sociales e información de contacto sin tocar el código de los componentes.
 */

export const bandData = {
  // Información básica
  name: "IGNIS AETERNA",
  tagline: "METAL MODERNO & RIFFS PESADOS",
  subgenre: "Modern Progressive Metal / Melodic Metalcore",
  origin: "Buenos Aires, Argentina",
  foundedYear: 2021,
  
  // Biografía / Acerca de la banda
  bio: {
    heading: "SONIDO VISCERAL, PRECISIÓN TÉCNICA",
    short: "Ignis Aeterna combina la ferocidad del metal moderno con pasajes melódicos envolventes, afinaciones bajas y una sección rítmica implacable.",
    full: "Nacida en el circuito underground, la banda fusiona guitarras de siete cuerdas, sintetizadores atmosféricos y una dinámica vocal que transita desde guturales desgarradores hasta estribillos melódicos de gran impacto. Tras el lanzamiento de su primer EP, la agrupación consolidó un directo enérgico que no deja indiferente a nadie.",
    quote: "«No hacemos música para llenar el silencio; la hacemos para romperlo.»",
    stats: [
      { label: "Shows en vivo", value: "+45" },
      { label: "Oyentes mensuales", value: "18.5K" },
      { label: "Lanzamientos", value: "2 EPs, 4 Singles" },
    ]
  },

  // Integrantes de la banda
  members: [
    {
      id: "valentin-vocal",
      name: "Valentín R.",
      role: "Voz Principal & Screams",
      gear: "Shure SM7B / In-Ear Shure SE215",
      bio: "Fuerza vocal versátil con rango dinámico entre coros melódicos y guturales implacables.",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
      instagram: "https://instagram.com"
    },
    {
      id: "lucas-guitar1",
      name: "Lucas Navarro",
      role: "Guitarra Líder",
      gear: "Ibanez Iron Label 7-String / Quad Cortex",
      bio: "Riffs cortantes, solos atmosféricos y precisión métrica en tempos polirrítmicos.",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
      instagram: "https://instagram.com"
    },
    {
      id: "matias-guitar2",
      name: "Matías Vega",
      role: "Guitarra Rítmica & Sintetizadores",
      gear: "Solar Guitars A2.7 / Neural DSP",
      bio: "El muro sonoro en afinaciones graves con capas de ambientación electrónica.",
      image: "https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?q=80&w=800&auto=format&fit=crop",
      instagram: "https://instagram.com"
    },
    {
      id: "franco-bass",
      name: "Franco Costa",
      role: "Bajo & Coros",
      gear: "Dingwall Combustion 5 / Darkglass B7K Ultra",
      bio: "Líneas de bajo con ataque demoledor, distorsión cuidada y respaldo armónico.",
      image: "https://images.unsplash.com/photo-1520523839898-50712825e617?q=80&w=800&auto=format&fit=crop",
      instagram: "https://instagram.com"
    },
    {
      id: "joaquin-drums",
      name: "Joaquín Mendez",
      role: "Batería & Percusión",
      gear: "Tama Starclassic / Platos Meinl Byzance",
      bio: "Doble bombo veloz, dinámicas milimétricas y quiebres impredecibles en los breakdowns.",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop",
      instagram: "https://instagram.com"
    }
  ],

  // Último lanzamiento / Música destacada
  featuredRelease: {
    title: "ABYSS & ASHES",
    type: "Nuevo Single & Videoclip Oficial",
    releaseDate: "2025",
    coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    spotifyEmbedUrl: "https://open.spotify.com/embed/track/2tUbqZG2AbRi7Q05JnvsDv?utm_source=generator&theme=0", // Placeholder
    youtubeVideoId: "dQw4w9WgXcQ", // Se puede reemplazar por el ID real de YouTube
    listenLinks: {
      spotify: "https://spotify.com",
      youtube: "https://youtube.com",
      appleMusic: "https://music.apple.com",
      bandcamp: "https://bandcamp.com"
    }
  },

  // Próximas Fechas / Tour (opcional)
  shows: [
    {
      date: "25 OCT 2025",
      venue: "El Teatrito",
      city: "Buenos Aires, ARG",
      status: "Entradas Disponibles",
      ticketUrl: "#"
    },
    {
      date: "14 NOV 2025",
      venue: "Refugio Guernica",
      city: "Córdoba, ARG",
      status: "Últimas Entradas",
      ticketUrl: "#"
    },
    {
      date: "05 DIC 2025",
      venue: "Teatro Flores (Metal Fest)",
      city: "Buenos Aires, ARG",
      status: "Próximamente",
      ticketUrl: "#"
    }
  ],

  // Canales oficiales & Redes
  socials: [
    { name: "Spotify", url: "https://spotify.com", icon: "Music" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "YouTube", url: "https://youtube.com", icon: "Youtube" },
    { name: "Bandcamp", url: "https://bandcamp.com", icon: "Radio" },
    { name: "TikTok", url: "https://tiktok.com", icon: "Video" },
  ],

  // Información de contacto y booking
  contact: {
    emailBooking: "booking@ignisaeterna.com",
    emailPress: "prensa@ignisaeterna.com",
    management: "contacto@ignisaeterna.com",
    phone: "+54 9 11 0000-0000",
    location: "Buenos Aires, Argentina",
    // Para el formulario de contacto directo sin backend (usando Web3Forms o Formspree)
    formEndpoint: "https://api.web3forms.com/submit", // Reemplazable con la Access Key de Web3Forms
    accessKey: "YOUR_WEB3FORMS_ACCESS_KEY" // El usuario puede obtener una gratis en web3forms.com en 1 minuto
  }
};
