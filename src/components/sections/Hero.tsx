"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts = [
  "1 ano...",
  "12 meses...",
  "52 semanas...",
  "365 dias...",
  "8760 horas...",
  "525600 segundos...",
];

export default function Hero({ onStart }: { onStart: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    // Sequence of texts
    const timers = [
      setTimeout(() => setStep(1), 2000), // "1 ano..."
      setTimeout(() => setStep(2), 4500), // "12 meses..."
      setTimeout(() => setStep(3), 7000), // "52 semanas..."
      setTimeout(() => setStep(4), 9500), // "365 dias..."
      setTimeout(() => setStep(5), 12000), // "8760 horas..."
      setTimeout(() => setStep(6), 14500), // "525600 segundos..."
      setTimeout(() => setStep(7), 17000), // Final text
      setTimeout(() => setStep(8), 21000), // Show Button
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  const handleStart = () => {
    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio) {
      audio.play().catch(e => console.log("Audio play blocked", e));
    }
    onStart();
  };

  // Generate fewer stars for performance
  const stars = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 5}s`,
    size: Math.random() * 1.5 + 0.5,
  }));

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden z-50">
      {/* Stars Background */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full opacity-0 animate-pulse-slow will-change-opacity"
            style={{
              top: star.top,
              left: star.left,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.animationDelay,
              boxShadow: "0 0 4px rgba(255,255,255,0.4)",
            }}
          />
        ))}
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-romantic-purple/10 via-dark-bg to-dark-bg" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center justify-center px-4 font-serif">
        <AnimatePresence mode="wait">
          {step >= 1 && step <= 6 && (
            <motion.h1
              key={`t${step}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 1.2 }}
              className="text-4xl md:text-6xl text-soft-white mb-8"
            >
              {texts[step - 1]}
            </motion.h1>
          )}
          {step >= 7 && (
            <motion.div
              key="t7"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-soft-white to-gold-accent mb-12 max-w-4xl leading-relaxed">
                Parece que nos conhecemos a tanto tempo, mas mesmo assim é só o começo!!!
              </h1>
            </motion.div>
          )}
        </AnimatePresence>

        {step >= 8 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
            onClick={handleStart}
            className="group relative px-8 py-3 rounded-full border border-gold-accent/30 bg-gold-accent/5 hover:bg-gold-accent/20 transition-all duration-700 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10 font-sans tracking-widest uppercase text-sm text-gold-accent">
              Começar
            </span>
          </motion.button>
        )}
      </div>
    </section>
  );
}
