"use client";

import { Music, VolumeX } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { MUSIC_PATH } from "@/lib/constants";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_PATH);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  }, [playing]);

  return (
    <button
      type="button"
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white shadow-lg backdrop-blur-md transition hover:bg-white/20"
      aria-label={playing ? "Mute birthday music" : "Play birthday music"}
    >
      {playing ? <VolumeX className="h-5 w-5" /> : <Music className="h-5 w-5" />}
    </button>
  );
}
