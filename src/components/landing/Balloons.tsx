"use client";

import { motion } from "framer-motion";

const BALLOONS = [
  { color: "#c084fc", left: "8%", delay: 0 },
  { color: "#f472b6", left: "22%", delay: 0.5 },
  { color: "#60a5fa", left: "78%", delay: 0.3 },
  { color: "#a78bfa", left: "88%", delay: 0.8 },
  { color: "#fb7185", left: "65%", delay: 1.1 },
];

export function Balloons() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {BALLOONS.map((b, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-80px] h-16 w-12 rounded-full opacity-70"
          style={{
            left: b.left,
            background: `radial-gradient(circle at 30% 30%, ${b.color}, ${b.color}88)`,
            boxShadow: `0 0 24px ${b.color}66`,
          }}
          animate={{
            y: [0, -120, -240],
            x: [0, i % 2 === 0 ? 12 : -12, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut",
          }}
        >
          <span
            className="absolute -bottom-6 left-1/2 h-8 w-px -translate-x-1/2 bg-white/30"
            aria-hidden
          />
        </motion.div>
      ))}
    </div>
  );
}
