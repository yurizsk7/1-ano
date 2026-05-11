"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";

const locations = [
  {
    id: 1,
    title: "Cef 01",
    date: "Aquele dia inesquecível",
    image: "/cef-01.png",
    description: "O exato lugar onde nossos caminhos se cruzaram pela primeira vez...",
    quote: "\"o dia em que encontrei a mulher mais linda do mundo!!!\"",
    top: "30%",
    left: "20%",
  },
  {
    id: 2,
    title: "Sorveteria",
    date: "O primeiro deite",
    image: "/sorveteria.png",
    description: "O sorriso tímido, a felicidade extrema sem saber expressar, o engasgo com amem doim, e a certeza de que haveria uma segunda vez...",
    quote: "\"Eu não queria estar em nenhum outro lugar!!!\"",
    top: "50%",
    left: "45%",
  },
  {
    id: 3,
    title: "Lago",
    date: "Sempre",
    image: "/lago.png",
    description: "Onde várias coisas especiais pra nós aconteceram... Onde o tempo parece parar e só existimos nós dois",
    quote: "\"Meu lar é onde você está!!!\"",
    top: "20%",
    left: "70%",
  },
  {
    id: 4,
    title: "Zoológico",
    date: "O dia dos 365...",
    image: "/zoologico.png",
    description: "Onde comemoraremos nosso 1 ano de namoro, espero tenhamos aproveitado cada segundo juntos e que você tenha ficado feliz, pois o seu sorriso é a minha maior motivação!!!",
    quote: "\"Eu te amo muito, minha bióloga!!!\"",
    top: "75%",
    left: "65%",
  },
];

export default function RelationshipMap() {
  const [activePin, setActivePin] = useState<number | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-transparent py-24 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-romantic-purple/10 to-dark-bg pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center z-10 mb-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-gold-accent mb-4">
          O Mapa da Nossa História
        </h2>
      </motion.div>

      {/* The Map Area */}
      <div className="relative w-full max-w-4xl h-[500px] md:h-[600px] rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden shadow-2xl mx-4">

        {/* Imaginary City Map Background */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <svg width="100%" height="100%" className="text-white">
            <defs>
              <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />

            {/* Random City Streets */}
            <g stroke="currentColor" strokeWidth="2" strokeOpacity="0.5">
              <line x1="10%" y1="0" x2="10%" y2="100%" />
              <line x1="30%" y1="0" x2="30%" y2="100%" />
              <line x1="60%" y1="0" x2="60%" y2="100%" />
              <line x1="85%" y1="0" x2="85%" y2="100%" />

              <line x1="0" y1="25%" x2="100%" y2="25%" />
              <line x1="0" y1="45%" x2="100%" y2="45%" />
              <line x1="0" y1="70%" x2="100%" y2="70%" />

              {/* Diagonal Streets */}
              <line x1="0" y1="0" x2="50%" y2="100%" />
              <line x1="100%" y1="20%" x2="0%" y2="80%" />
            </g>

            {/* Connecting Romantic Path */}
            <path
              d="M 20% 30% Q 30% 50% 45% 50% T 70% 20% Q 80% 50% 65% 75%"
              fill="none"
              stroke="url(#mapGradient)"
              strokeWidth="4"
              strokeDasharray="8, 12"
              className="animate-pulse-slow"
            />
            <defs>
              <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="100%" stopColor="#4B0082" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Map Pins */}
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: loc.id * 0.2 }}
            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
            style={{ top: loc.top, left: loc.left }}
            onClick={() => setActivePin(loc.id)}
          >
            <div className="flex flex-col items-center">
              {/* Pin Label */}
              <motion.span
                className="mb-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-[10px] text-gold-accent uppercase tracking-tighter whitespace-nowrap border border-gold-accent/30 group-hover:bg-gold-accent group-hover:text-black transition-colors"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {loc.title}
              </motion.span>

              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gold-accent/20 flex items-center justify-center animate-pulse">
                  <div className="w-4 h-4 bg-gold-accent rounded-full" />
                </div>
                <MapPin className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] w-8 h-8 text-white drop-shadow-md group-hover:scale-110 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Expanded Info Card Overlay */}
        <AnimatePresence>
          {activePin && (
            <motion.div
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="absolute inset-0 z-30 flex items-center justify-center bg-dark-bg/60 p-4"
              onClick={() => setActivePin(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md glass-panel p-8 rounded-2xl shadow-2xl border border-gold-accent/30 flex flex-col gap-4"
              >
                <button
                  onClick={() => setActivePin(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {locations.map(
                  (loc) =>
                    loc.id === activePin && (
                      <div key={`info-${loc.id}`} className="flex flex-col gap-4">
                        <div className="w-full h-48 bg-white/10 rounded-lg overflow-hidden mb-2 shadow-inner">
                          <img
                            src={loc.image}
                            alt={loc.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-romantic-purple text-xs uppercase tracking-widest font-bold">
                          {loc.date}
                        </span>
                        <h3 className="text-2xl font-serif text-gold-accent">
                          {loc.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {loc.description}
                        </p>
                        <p className="text-center font-serif italic text-white/80 mt-4 border-t border-white/10 pt-4">
                          {loc.quote}
                        </p>
                      </div>
                    )
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
