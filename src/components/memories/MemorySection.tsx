"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";

type MemorySectionProps = {
  title: string;
  tagline?: string;
  paragraphs: readonly string[];
  gangMembers?: readonly string[];
  index: number;
};

export function MemorySection({
  title,
  tagline,
  paragraphs,
  gangMembers,
  index,
}: MemorySectionProps) {
  return (
    <SectionReveal delay={index * 0.04} className="w-full">
      <article className="glow-ring relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-md sm:p-8">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-32 w-32 rounded-full bg-pink-500/15 blur-3xl" />

        <div className="relative">
          {tagline && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300/90">
              {tagline}
            </p>
          )}
          <h2 className="text-gradient text-2xl font-bold sm:text-3xl md:text-4xl">
            {title}
          </h2>

          {gangMembers && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {gangMembers.map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-white/15 bg-gradient-to-br from-purple-600/25 to-pink-600/20 px-3 py-4 text-center text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:border-purple-400/40"
                >
                  {name}
                </div>
              ))}
            </div>
          )}

          <div className="mt-6 space-y-4 border-t border-white/10 pt-6">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-white/90 sm:text-lg ${
                  i === paragraphs.length - 1 && paragraphs.length > 1
                    ? "font-medium text-pink-100/95"
                    : ""
                }`}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </article>
    </SectionReveal>
  );
}
