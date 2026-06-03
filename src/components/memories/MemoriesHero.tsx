"use client";

import { motion } from "framer-motion";

export function MemoriesHero() {
  return (
    <motion.section
      className="relative mx-auto mb-12 max-w-3xl px-4 text-center sm:mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
        A journey through friendship
      </p>
      <h1 className="text-gradient text-3xl font-bold sm:text-4xl md:text-5xl">
        Our Memories With Jerry
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
        Scroll through the moments, the laughter, and the bond that distance could
        never fade. Your photos line the sides — like old friends watching over
        every word.
      </p>
      <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400" />
    </motion.section>
  );
}
