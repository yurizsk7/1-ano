"use client";

import { motion } from "framer-motion";

export default function CinematicEnding() {
  return (
    <section className="relative w-full min-h-[150vh] bg-transparent flex flex-col items-center justify-end pb-32 overflow-hidden">
      {/* Background Starry Sky - Deeper than before */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0a0514] via-dark-bg to-dark-bg pointer-events-none" />

      {/* Deep Stars Layer - Reduced count */}
      <div className="absolute inset-0 z-0 opacity-40">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={`end-star-${i}`}
            className="absolute bg-white rounded-full opacity-30 will-change-opacity"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              animation: `pulse ${Math.random() * 5 + 3}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Final Montage (Placeholders) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-start pt-32 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          whileInView={{ opacity: 0.1, y: -200, scale: 1.05 }}
          viewport={{ once: true }}
          transition={{ duration: 20, ease: "linear" }}
          className="flex gap-8 flex-wrap justify-center opacity-20 px-8 will-change-transform"
        >
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-40 h-60 md:w-64 md:h-96 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transform"
              style={{
                transform: `rotate(${i % 2 === 0 ? Math.random() * 5 : -Math.random() * 5}deg)`,
              }}
            >
              <span className="text-white/20 font-serif italic">Foto {i + 1}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Ending Text Sequence */}
      <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="text-2xl md:text-5xl text-gray-300 font-serif leading-relaxed"
        >
          Obrigado por fazer a minha vida
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          transition={{ duration: 2, delay: 2, ease: "easeOut" }}
          className="text-2xl md:text-5xl text-gray-300 font-serif leading-relaxed mt-4"
        >
          muito mais feliz!!!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 4, delay: 5, ease: "easeOut" }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <h1 className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-white to-gold-accent font-serif tracking-wide drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]">
            Feliz 1 ano
          </h1>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-5xl md:text-6xl text-romantic-red drop-shadow-[0_0_15px_rgba(139,0,0,0.8)]">
              ❤️
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
