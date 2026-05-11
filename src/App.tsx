"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/sections/Hero";
import NightSky from "@/components/sections/NightSky";
import Timeline from "@/components/sections/Timeline";
import ChatRecreation from "@/components/sections/ChatRecreation";
import RelationshipMap from "@/components/sections/RelationshipMap";
import ReasonsCards from "@/components/sections/ReasonsCards";
import HiddenLetter from "@/components/sections/HiddenLetter";
import CinematicEnding from "@/components/sections/CinematicEnding";
import GlobalBackground from "@/components/GlobalBackground";

export default function Home() {
  const [isStarted, setIsStarted] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    // Smooth scroll down after a slight delay to let the Hero transition out
    setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-transparent selection:bg-gold-accent/30 selection:text-white">
      <GlobalBackground />
      
      <AnimatePresence mode="wait">
        {!isStarted && (
          <motion.div
            key="hero"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <Hero onStart={handleStart} />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="w-full relative z-10"
        style={{
          opacity: isStarted ? 1 : 0,
          pointerEvents: isStarted ? "auto" : "none",
          transition: "opacity 2s ease-in-out 1s",
        }}
      >
        <div className="h-screen w-full pointer-events-none" /> {/* Spacer for scroll down */}
        <NightSky />
        <Timeline />
        <ChatRecreation />
        <RelationshipMap />
        <ReasonsCards />
        <HiddenLetter />
        <CinematicEnding />
      </div>
    </main>
  );
}
