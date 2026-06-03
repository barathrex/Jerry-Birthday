"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Lock, Unlock } from "lucide-react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LANDING, PASSWORD } from "@/lib/constants";
import { GlassCard } from "@/components/ui/GlassCard";

export function PasswordGate() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    if (value.trim().toUpperCase() === PASSWORD) {
      router.push("/memories");
      return;
    }

    setError(true);
    setLoading(false);
  };

  return (
    <GlassCard className="w-full max-w-md border-white/25 bg-[#1a0a2e]/75 backdrop-blur-md">
      <motion.h1
        className="text-gradient text-2xl font-bold leading-tight sm:text-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {LANDING.title}
      </motion.h1>
      <motion.p
        className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
      >
        {LANDING.subtitle}
      </motion.p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="sr-only" htmlFor="password">
          Secret password
        </label>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
          <input
            id="password"
            type="password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Enter the secret password"
            className="w-full rounded-xl border border-white/20 bg-white/10 py-3 pl-10 pr-4 text-white placeholder:text-white/40 outline-none ring-purple-400/50 transition focus:ring-2"
            autoComplete="off"
          />
        </div>

        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              key="error"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-medium text-pink-300"
              role="alert"
            >
              {LANDING.errorMessage}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 py-3 font-semibold text-white shadow-[0_0_24px_rgba(168,85,247,0.5)] transition disabled:opacity-70"
        >
          <Unlock className="h-4 w-4" />
          Unlock
        </motion.button>
      </form>
    </GlassCard>
  );
}
