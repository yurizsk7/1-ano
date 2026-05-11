"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X } from "lucide-react";

export default function HiddenLetter() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (isUnlocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isUnlocked]);

  const handleUnlock = () => {
    setIsUnlocked(true);
    // Lower volume globally if possible
    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio) {
      // fade out volume
      let vol = audio.volume;
      const fade = setInterval(() => {
        if (vol > 0.05) {
          vol -= 0.02;
          audio.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }
  };

  const handleClose = () => {
    setIsUnlocked(false);
    // Restore volume globally
    const audio = document.getElementById("bg-audio") as HTMLAudioElement;
    if (audio) {
      let vol = audio.volume;
      const fade = setInterval(() => {
        if (vol < 0.2) {
          vol += 0.02;
          audio.volume = Math.min(vol, 0.2);
        } else {
          clearInterval(fade);
        }
      }, 200);
    }
  };

  return (
    <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-24 bg-transparent overflow-hidden">
      {!isUnlocked && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="z-10 flex flex-col items-center"
        >
          <button
            onClick={handleUnlock}
            className="group relative flex flex-col items-center gap-4 focus:outline-none"
          >
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-gold-accent/50 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500">
              <Mail className="w-6 h-6 text-white/50 group-hover:text-gold-accent transition-colors" />
            </div>
            <span className="text-sm text-white/30 uppercase tracking-widest font-serif italic group-hover:text-gold-accent/70 transition-colors">
              Algo escondido para você
            </span>
          </button>
        </motion.div>
      )}

      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
          {isUnlocked && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md overflow-y-auto overscroll-none"
              onClick={handleClose}
            >
              <div className="min-h-full flex items-center justify-center p-4 md:p-8">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-romantic-red/10 via-transparent to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  className="relative w-full max-w-2xl bg-[#100c14] border border-white/10 p-8 md:p-12 rounded-sm shadow-2xl"
                  onClick={e => e.stopPropagation()}
                  style={{
                    backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')", // Subtle paper texture
                  }}
                >
                  <div className="flex flex-col items-center text-center gap-8 font-serif">
                    <h3 className="text-3xl text-gold-accent italic">Meu Amor,</h3>

                    <div className="text-gray-300 text-lg md:text-xl leading-loose flex flex-col gap-6 text-left">
                      <p>
                        Se você estiver lendo isso, saiba que nós construímos muito mais do que apenas memórias nesse ano, nós construímos um lar, um no outro!!!
                      </p>
                      <p>
                        Lembro como se fosse ontem, o dia em que te vi no Cef 01 pela primeira vez, você estava tão linda... me apaixonei a primeira vista, e só a sua incrível beleza foi o suficiente pra fazer esse garoto timido tomar coragem de ir falar com você, e foi a melhor coisa que eu fiz na vidaaaaa, pq foi aí que eu conheci o meu amor, a minha futura esposa, a minha mulher!!!
                      </p>
                      <p>
                        E hoje estamos aqui, completando nosso primeiro ano de namoro, o primeiro de muuuiiitooosss que vão vir pela frente, pois eu quero passar a minha vida inteira com você!!!
                      </p>
                      <p>
                        Eu sinto cada vez mais orgulho e admiração por você, meu amor, você é a única mulher que eu vejo como esposa e mãe dos meus filhos, a única que merece todo o meu esforço para fazer feliz, a única no mundo inteirinho... pra mim só existe você, minha linda!!!
                      </p>
                      <p>
                        Eu vou me casar com você mômô, obrigado por ser a minha paz, a minha força, a minha motivação e a minha pessoa favorita no mundo inteirin!!! Você é tudo pra mim viu ❤️
                      </p>
                    </div>

                    <div className="text-center mt-8">
                      <p className="text-xl text-gold-accent italic">Com todo o meu amor,</p>
                      <p className="text-2xl text-white mt-4">- Seu Futuro ❤️</p>
                    </div>
                  </div>

                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white/30 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}
