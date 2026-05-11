"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Stars, Camera, X } from "lucide-react";

const newEvents = [
  {
    id: 1,
    title: "O dia em que me apaixonei",
    image: "/WhatsApp Image 2026-05-09 at 07.37.18.jpeg",
    description: "Aquele instante em que o mundo parou e meu coração sentiu que era você... Foi o dia em que tudo mudou e que eu soube que não podia viver a minha vida, sem um dia te chamar de minha esposa!!!",
    date: "Eu te amo além!",
    icon: Camera,
    rotation: -2,
    details: "Tudo começou com um olhar, um detalhe que eu não sabia que procurava, mas que encontrei em você!!! Foi a descoberta de que o amor não precisa de pressa, ele simplesmente acontece no momento certo quando duas almas se reconhecem..."
  },
  {
    id: 2,
    title: "O pedido de namoro e o primeiro beijo",
    image: "/WhatsApp Image 2026-05-09 at 07.40.16.jpeg",
    description: "O universo inteiro se calou para ouvirmos as batidas dos nossos corações acelerados, pra sentirmos a Intensidade e pra aproveitarmos o incrível momento que sentimos nossas almas tocar pela primeira vez!!!",
    date: "O Início de Tudo",
    icon: Heart,
    rotation: 3,
    details: "Aquele frio na barriga, a respiração curta e, finalmente, o pedido e o primeiro toque... Foi mais do que um pedido, mais do que um beijo, foi a confirmação de que nossas histórias estavam destinadas a ser uma só, e pra sempre!!!"
  },
  {
    id: 3,
    title: "Aliança",
    image: "/WhatsApp Image 2026-05-09 at 07.45.13.jpeg",
    description: "Um símbolo do nosso laço inquebrável, do nosso cordão de 3 dobras... O compromisso de construir um futuro lado a lado, com a certeza de que somos o porto seguro um do outro!!!",
    date: "Nosso Elo",
    icon: Sparkles,
    rotation: -1,
    details: "Um círculo que não tem fim, assim como o nosso amor... A aliança não é apenas um anel, é a nossa promessa diária!!!"
  },
  {
    id: 4,
    title: "Y+Y",
    image: "/WhatsApp Image 2026-05-09 at 07.37.17.jpeg",
    description: "Você e Eu... O amor verdadeiro... Duas vidas que se tornaram uma só história inesquecível... Deus sussurrou nossos nomes e tudo foi confirmado que desde sempre era pra ser nós!!! Assim como nossas camisas Y+Y, estaremos juntos eternamente, sendo eu o seu Yuri, e você a minha Yasmin!!!",
    date: "Para Sempre",
    icon: Stars,
    rotation: 2,
    isPeak: true,
    details: "O “Y” da nossa camisa pode até parecer só uma letra, mas pra mim ele significa mais... Yuri e Yasmin, duas pessoas que se reencontraram da forma mais bonita possível!!! Talvez um dia a camisa desgaste, a tinta desbote e o tecido se desfaça com o tempo, porque tudo no mundo muda, menos o que eu sinto por você!!! Nosso amor vai continuar existindo em cada memória, em cada abraço e em todos os momentos que ainda vamos viver juntos, porque eu quero passar a vida inteira ao seu lado, olhando pra você com a mesma certeza de hoje... o meu “Y” sempre foi feito pra encontrar o seu, meu amor!!!"
  },
];

export default function Timeline() {
  const [selectedMoment, setSelectedMoment] = useState<typeof newEvents[0] | null>(null);

  return (
    <section className="relative w-full min-h-screen bg-transparent py-40 px-6 overflow-hidden">
      {/* Background Cinematic Particles - Reduced for performance */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute bg-white rounded-full w-1 h-1 will-change-transform"
            animate={{
              y: [0, -800],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-32"
        >
          <span className="text-gold-accent font-serif italic text-lg mb-2 block">Nossa História</span>
          <h2 className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-soft-white via-gold-accent to-soft-white mb-6">
            Momentos Inesquecíveis
          </h2>
          <div className="w-32 h-[1px] bg-gold-accent/20 mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Central Connecting Line - Delicate and animated */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-accent/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-48 md:gap-72">
            {newEvents.map((event, index) => (
              <TimelineItem 
                key={event.id} 
                event={event} 
                index={index} 
                onOpen={() => setSelectedMoment(event)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Expanded Moments */}
      <AnimatePresence>
        {selectedMoment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/95 backdrop-blur-md"
            onClick={() => setSelectedMoment(null)}
          >
            <motion.button
              className="absolute top-8 right-8 text-white/50 hover:text-white z-[110]"
              onClick={() => setSelectedMoment(null)}
            >
              <X size={40} />
            </motion.button>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center" onClick={e => e.stopPropagation()}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", damping: 25 }}
                className="bg-white p-6 pb-20 shadow-[0_0_100px_rgba(212,175,55,0.2)] rounded-sm"
              >
                <img 
                  src={selectedMoment.image} 
                  alt={selectedMoment.title}
                  className="w-full h-auto aspect-[4/5] object-cover rounded-sm shadow-inner"
                  loading="lazy"
                />
              </motion.div>

              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-left font-serif"
              >
                <span className="text-gold-accent text-xl italic mb-4 block">{selectedMoment.date}</span>
                <h3 className="text-4xl md:text-6xl text-white mb-8 leading-tight">
                  {selectedMoment.title}
                </h3>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light italic">
                  "{selectedMoment.details}"
                </p>
                <div className="mt-12 w-20 h-[2px] bg-gold-accent/50" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function TimelineItem({ event, index, onOpen }: { event: typeof newEvents[0], index: number, onOpen: () => void }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center w-full ${
        isEven ? "md:justify-start" : "md:justify-end"
      }`}
    >
      {/* Node Dot */}
      <div className="absolute left-1/2 w-4 h-4 rounded-full bg-dark-bg border border-gold-accent/50 -translate-x-1/2 z-20 hidden md:block" />

      <div className={`w-full md:w-[46%] flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"} items-center text-center`}>
        
        {/* Cinematic Polaroid Card */}
        <motion.div
          onClick={onOpen}
          whileHover={{ 
            scale: 1.02, 
            transition: { duration: 0.3 } 
          }}
          className="relative group cursor-pointer"
          style={{ rotate: event.rotation }}
        >
          {/* Card Shadow/Glow */}
          <div className="absolute inset-0 bg-gold-accent/5 rounded-sm blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
          
          <div className="bg-[#fefefe] p-3 md:p-5 pb-16 md:pb-24 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] rounded-sm transition-all duration-500 border border-gray-100">
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm mb-4 w-64 sm:w-80 lg:w-[400px]">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-all duration-1000"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
              
              {/* Blur effect on hover part of the photo */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-10 backdrop-blur-[2px] transition-opacity duration-700" />
            </div>
            
            <div className="flex flex-col items-center justify-center">
               <span className="font-serif italic text-gray-500 text-sm md:text-base">
                 {event.date}
               </span>
            </div>
          </div>
          
          {/* Floating Sparkle for Peak Moment */}
          {event.isPeak && (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 text-gold-accent"
            >
              <Stars size={32} />
            </motion.div>
          )}
        </motion.div>

        {/* Text Content */}
        <div className={`mt-12 max-w-lg ${isEven ? "md:mr-4" : "md:ml-4"}`}>
          <motion.h3 
            className={`text-3xl md:text-5xl font-serif mb-6 ${
              event.isPeak ? "text-transparent bg-clip-text bg-gradient-to-r from-gold-accent via-romantic-purple to-gold-accent font-bold" : "text-soft-white"
            }`}
          >
            {event.title}
          </motion.h3>
          <p className="text-gray-400 font-serif italic text-lg md:text-xl leading-relaxed font-light opacity-80">
            {event.description}
          </p>
          
          <motion.div 
            className={`mt-8 flex items-center gap-4 ${isEven ? "justify-end" : "justify-start"}`}
          >
            <div className="w-12 h-[1px] bg-gold-accent/30" />
            <button 
              onClick={onOpen}
              className="text-xs uppercase tracking-widest text-gold-accent hover:text-white transition-colors"
            >
              Ver Detalhes
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
