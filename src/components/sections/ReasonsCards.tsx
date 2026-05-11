"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const reasons = [
  { id: 1, title: "Seu Sorriso", desc: "A forma como seus olhos se fecham quando você dá uma risada sincera... É a minha visão favorita no mundo inteiro!!!" },
  { id: 2, title: "Seu Cuidado", desc: "Como você sempre se lembra dos pequenos detalhes sobre mim que até eu mesmo esqueço..." },
  { id: 3, title: "Nossa Paz", desc: "O silêncio com você nunca é constrangedor... É seguro e calmo, você é o meu lar!" },
  { id: 4, title: "Sua Força", desc: "A maneira como você enfrenta todas as dificuldades, sempre me inspira a ser alguém melhor, você é incrível!!!" },
  { id: 5, title: "Seu Cheiro", desc: "Que me traz uma sensação de paz instantânea assim que te abraço..." },
  { id: 6, title: "Sua Voz", desc: "A primeira coisa que quero ouvir de manhã ao acordar e a última antes de dormir!!!" },
];

export default function ReasonsCards() {
  return (
    <section className="relative w-full min-h-screen py-24 bg-transparent overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-t from-romantic-purple/5 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center z-10 mb-16 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-gold-accent mb-4">
          Alguns dos (infinitos) motivos...
        </h2>
        <p className="text-gray-400 text-lg mb-4">
          Pelos quais eu me apaixono por você todos os dias!!!
        </p>
        <p className="text-white/40 font-serif italic text-sm md:text-base uppercase tracking-widest">
          clique em cada um deles...
        </p>
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-[1000px]">
        {reasons.map((reason, index) => (
          <ReasonCard key={reason.id} reason={reason} index={index} />
        ))}
      </div>
    </section>
  );
}

function ReasonCard({ reason, index }: { reason: typeof reasons[0], index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full h-64 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(10deg)]"
        }`}
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <div className="w-full h-full glass-panel border border-white/5 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-lg group-hover:border-gold-accent/30 transition-colors">
            <h3 className="text-2xl font-serif text-white/90">
              {reason.title}
            </h3>
            <div className="mt-4 w-8 h-[1px] bg-gold-accent/30 group-hover:w-16 transition-all duration-500" />
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="w-full h-full bg-gradient-to-br from-romantic-purple/80 to-romantic-red/80 rounded-2xl flex items-center justify-center p-6 text-center shadow-[0_0_20px_rgba(75,0,130,0.4)] border border-white/20">
            <p className="text-white text-lg font-serif leading-relaxed italic">
              "{reason.desc}"
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
