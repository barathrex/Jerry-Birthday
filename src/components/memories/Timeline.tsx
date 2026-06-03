"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TIMELINE_ITEMS } from "@/lib/constants";
import { SectionReveal } from "@/components/ui/SectionReveal";

function TimelineItem({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.li
      ref={ref}
      className="relative pl-12"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
    >
      <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-sm font-bold text-white shadow-lg shadow-purple-500/50 ring-2 ring-purple-300/30">
        {index + 1}
      </span>
      <div className="glow-ring rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75 sm:text-base">
          {description}
        </p>
      </div>
    </motion.li>
  );
}

export function Timeline() {
  return (
    <SectionReveal className="w-full">
      <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">
        <span className="text-gradient">Our Timeline</span>
      </h2>
      <ul className="relative space-y-6 border-l-2 border-purple-500/40 pl-0">
        {TIMELINE_ITEMS.map((item, i) => (
          <TimelineItem
            key={item.title}
            title={item.title}
            description={item.description}
            index={i}
          />
        ))}
      </ul>
    </SectionReveal>
  );
}
