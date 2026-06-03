"use client";

import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";
import { MEMORY_SECTIONS } from "@/lib/constants";
import { MemorySection } from "./MemorySection";
import { MemoryImageBand } from "./MemoryImageBand";
import { MemoriesWithSideRails } from "./SidePhotoRails";
import { MemoriesHero } from "./MemoriesHero";
import { FriendshipQuotes } from "./FriendshipQuotes";
import { Timeline } from "./Timeline";
import { FinalSurprise } from "./FinalSurprise";
import { AmbientParticles } from "@/components/ui/AmbientParticles";

export function MemoriesPage() {
  return (
    <div className="mesh-bg relative min-h-dvh overflow-x-hidden">
      <AmbientParticles count={20} />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0c0618]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:border-purple-400/40 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <span className="hidden items-center gap-1.5 text-sm text-purple-300/90 sm:flex">
            <Sparkles className="h-4 w-4" />
            For Jerry
          </span>
        </div>
      </header>

      <MemoriesWithSideRails>
        <main className="space-y-10 py-10 sm:space-y-14 sm:py-14">
          <MemoriesHero />

          {MEMORY_SECTIONS.map((section, index) => (
            <div key={section.id} className="space-y-4">
              <MemorySection
                title={section.title}
                tagline={"tagline" in section ? section.tagline : undefined}
                paragraphs={section.paragraphs}
                gangMembers={
                  "gangMembers" in section ? section.gangMembers : undefined
                }
                index={index}
              />
              {"imageIndex" in section && (
                <MemoryImageBand imageIndex={section.imageIndex} />
              )}
            </div>
          ))}

          <FriendshipQuotes />
          <Timeline />
          <FinalSurprise />
        </main>
      </MemoriesWithSideRails>
    </div>
  );
}
