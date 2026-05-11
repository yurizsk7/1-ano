"use client";

import { motion } from "framer-motion";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark-bg">
      {/* Animated Nebulae - Optimized with lower blurs and hardware acceleration */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-romantic-purple blur-[80px] mix-blend-screen will-change-transform"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
          x: [0, -30, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-romantic-red blur-[80px] mix-blend-screen will-change-transform"
      />

      {/* Static Star Field - Optimized using a single element with multiple box-shadows */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(1px 1px at 20px 30px, #eee, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 40px 70px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 50px 160px, #ddd, rgba(0,0,0,0)),
                            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1.5px 1.5px at 130px 80px, #fff, rgba(0,0,0,0)),
                            radial-gradient(1px 1px at 160px 120px, #ddd, rgba(0,0,0,0))`,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay noise-bg pointer-events-none" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,8,0.3)_70%,rgba(5,5,8,0.6)_100%)]" />
    </div>
  );
}
