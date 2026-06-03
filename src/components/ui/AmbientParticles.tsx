"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

const COLORS = ["#c084fc", "#f472b6", "#60a5fa", "#fbbf24", "#a78bfa"];

export function AmbientParticles({ count = 24 }: { count?: number }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${(i * 17 + 7) % 100}%`,
        size: 4 + (i % 5),
        color: COLORS[i % COLORS.length],
        duration: 4 + (i % 6),
        delay: (i % 8) * 0.3,
        travel: 600 + (i % 4) * 120,
      })),
    [count]
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: p.left,
            bottom: "-10%",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 12px ${p.color}`,
          }}
          animate={{
            y: [0, -p.travel],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
