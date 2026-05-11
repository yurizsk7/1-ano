"use client";

import { motion } from "framer-motion";

export default function NightSky() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center bg-transparent overflow-hidden py-24 px-6">
      {/* Background with slight purple/blue tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-[#0a0514] to-dark-bg pointer-events-none" />

      {/* Tiny Stars Layer */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 120 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animation: `pulse ${Math.random() * 4 + 2}s infinite alternate`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-12">
        {/* Sky Snapshot Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="relative group w-full max-w-4xl"
        >
          {/* Decorative Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-romantic-purple/30 to-gold-accent/30 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition duration-1000" />
          
          <div className="relative bg-black/40 rounded-2xl overflow-hidden border border-white/10 shadow-2xl backdrop-blur-sm">
            <img 
              src="/Captura de tela 2026-05-09 072537.png" 
              alt="O céu daquela noite" 
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
        </motion.div>

        {/* Romantic Text Section */}
        <div className="flex flex-col gap-8 text-center font-serif px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl text-soft-white leading-tight font-light"
          >
            Assim estava o céu na noite do dia 09/05, o dia em que tudo começou...
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-xl md:text-3xl text-gold-accent italic leading-relaxed max-w-4xl mx-auto"
          >
            o dia em que eu vi mais ainda que todas as estrelas do céu, com todo o seu brilho, não chegam nem em 1% da sua beleza!!!
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.2; transform: scale(0.8); }
          100% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
