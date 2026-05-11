"use client";

import { useEffect, useRef } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.2; // Volume baixo
    }
  }, []);

  return (
    <audio
      id="bg-audio"
      ref={audioRef}
      src="/careless_whisper.mp3"
      loop
      preload="auto"
    />
  );
}
