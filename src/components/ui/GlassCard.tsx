"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`rounded-2xl border border-white/20 bg-white/10 p-6 shadow-[0_8px_32px_rgba(139,92,246,0.25)] backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}
