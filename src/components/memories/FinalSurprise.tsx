"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { FINAL_SURPRISE, MUSIC_PATH } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { GlassCard } from "@/components/ui/GlassCard";

const Confetti = dynamic(() => import("react-confetti").then((m) => m.default), {
  ssr: false,
});

const HEARTS = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${10 + (i * 7) % 80}%`,
  delay: i * 0.2,
}));

function Fireworks() {
  const bursts = [0, 1, 2];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {bursts.map((b) => (
        <motion.div
          key={b}
          className="absolute h-2 w-2 rounded-full"
          style={{
            left: `${25 + b * 25}%`,
            top: `${20 + b * 15}%`,
            boxShadow: "0 0 40px 20px rgba(192,132,252,0.6)",
            background: b % 2 === 0 ? "#f472b6" : "#60a5fa",
          }}
          animate={{
            scale: [0, 3, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: b * 0.6,
          }}
        />
      ))}
    </div>
  );
}

function FloatingHearts() {
  return (
    <>
      {HEARTS.map((h) => (
        <motion.div
          key={h.id}
          className="pointer-events-none absolute text-pink-400"
          style={{ left: h.left, bottom: "-20px" }}
          animate={{ y: [0, -500], opacity: [0, 1, 0], rotate: [0, 15] }}
          transition={{
            duration: 4 + (h.id % 3),
            repeat: Infinity,
            delay: h.delay,
          }}
          aria-hidden
        >
          <Heart className="h-6 w-6 fill-current" />
        </motion.div>
      ))}
    </>
  );
}

export function FinalSurprise() {
  const [opened, setOpened] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const openSurprise = useCallback(() => {
    setOpened(true);
    const audio = new Audio(MUSIC_PATH);
    audio.volume = 0.5;
    audio.play().catch(() => {});
  }, []);

  return (
    <SectionReveal className="mx-auto w-full max-w-3xl px-4 pb-24 pt-8">
      <GlassCard className="relative overflow-hidden text-center">
        {!opened ? (
          <>
            <div className="space-y-3">
              {FINAL_SURPRISE.quote.map((line, i) => (
                <p
                  key={i}
                  className={`text-white/90 ${
                    i === FINAL_SURPRISE.quote.length - 1
                      ? "text-xl font-semibold text-pink-200 sm:text-2xl"
                      : "text-base sm:text-lg"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
            <motion.button
              type="button"
              onClick={openSurprise}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 px-8 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(236,72,153,0.5)]"
            >
              {FINAL_SURPRISE.buttonLabel}
            </motion.button>
          </>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative py-8"
            >
              {size.width > 0 && (
                <div className="fixed inset-0 z-50 pointer-events-none">
                  <Confetti
                    width={size.width}
                    height={size.height}
                    numberOfPieces={350}
                    recycle={false}
                    gravity={0.15}
                  />
                </div>
              )}
              <Fireworks />
              <FloatingHearts />

              <motion.h2
                className="relative z-10 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
              >
                {FINAL_SURPRISE.celebrationTitle}
              </motion.h2>

              <motion.div
                className="relative z-10 mt-8 space-y-3"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {FINAL_SURPRISE.closing.map((line, i) => (
                  <p key={i} className="text-base leading-relaxed text-white/85 sm:text-lg">
                    {line}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </GlassCard>
    </SectionReveal>
  );
}
