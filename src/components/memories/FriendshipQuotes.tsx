"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { FRIENDSHIP_QUOTES } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

export function FriendshipQuotes() {
  return (
    <SectionReveal className="w-full">
      <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
        <span className="text-gradient">Words From the Heart</span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FRIENDSHIP_QUOTES.map((quote, i) => (
          <motion.blockquote
            key={i}
            className="glow-ring flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Heart className="mb-3 h-5 w-5 text-pink-400" fill="currentColor" />
            <p className="flex-1 text-base italic leading-relaxed text-white/90">
              &ldquo;{quote.text}&rdquo;
            </p>
            <footer className="mt-4 text-sm font-medium text-purple-300">
              — {quote.author}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </SectionReveal>
  );
}
