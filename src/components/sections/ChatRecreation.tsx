"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const messages = [
  { id: 1, sender: "me", text: "Oi, vamo fazer uma brincadeira?", time: "20:30" },
  { id: 2, sender: "you", text: "Oi, que brincadeira?", time: "20:32" },
  { id: 3, sender: "me", text: "Eu trouxe uma caneta, vou jogar ela pra cima e pegar no dente, duvida?", time: "20:33" },
  { id: 4, sender: "you", text: "Duvido", time: "20:35" },
  { id: 5, sender: "me", text: "Então, se eu jogar essa caneta pra cima e pegar no dente, você ta me devendo um beijo", time: "20:36" },
  { id: 6, sender: "you", text: "Ahhh, eu já conheço essa brincadeira kkkkkkk", time: "20:40" },
  { id: 7, sender: "me", text: "Vou jogar ein...", time: "20:41" },
  { id: 8, sender: "me", text: "E assim foi o começo de uma história que vai passar pelas nossas gerações...", time: "Hoje", isSpecial: true },
];

export default function ChatRecreation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    if (!isInView) return;

    let current = 0;
    
    const showNextMessage = () => {
      if (current < messages.length) {
        setIsTyping(true);
        
        // Random typing duration
        const typingTime = messages[current].isSpecial ? 2000 : Math.random() * 1000 + 800;
        
        setTimeout(() => {
          setIsTyping(false);
          setVisibleMessages((prev) => prev + 1);
          current++;
          
          if (current < messages.length) {
            setTimeout(showNextMessage, 500); // Wait a bit before starting to type next
          }
        }, typingTime);
      }
    };

    // Start sequence
    setTimeout(showNextMessage, 1000);
  }, [isInView]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-transparent py-24 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-romantic-red/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-md" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="glass-panel rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px] border border-white/10"
        >
          {/* Header */}
          <div className="bg-white/5 backdrop-blur-md p-4 border-b border-white/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-accent to-romantic-purple p-[2px]">
              <div className="w-full h-full bg-dark-bg rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-white text-xs font-serif italic">Amor</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-semibold">Meu Amor ❤️</span>
              <span className="text-xs text-gold-accent">Online</span>
            </div>
          </div>

          {/* Chat Body */}
          <div 
            ref={chatBodyRef}
            className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 scrollbar-hide scroll-smooth"
          >
            {messages.slice(0, visibleMessages).map((msg) => {
              const isMe = msg.sender === "me";
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className={`flex w-full ${isMe ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 relative ${
                      msg.isSpecial 
                        ? "bg-gradient-to-r from-romantic-purple/80 to-romantic-red/80 text-white border border-white/20 shadow-[0_0_15px_rgba(75,0,130,0.5)]"
                        : isMe
                        ? "bg-gold-accent/20 text-white border border-gold-accent/30 rounded-tr-none"
                        : "bg-white/10 text-gray-200 border border-white/5 rounded-tl-none"
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <span className="text-[10px] opacity-50 mt-1 block text-right">
                      {msg.time}
                    </span>
                  </div>
                </motion.div>
              );
            })}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex w-full justify-start"
              >
                <div className="bg-white/10 rounded-2xl rounded-tl-none px-4 py-3 flex gap-1 items-center">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
        
        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center text-gray-400 text-sm mt-8 font-serif italic"
        >
          Onde tudo começou a tomar forma...
        </motion.p>
      </div>
    </section>
  );
}
