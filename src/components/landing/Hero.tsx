"use client";

import { useState } from "react";
import memoriesData from "@/data/memories-images.json";

export function Hero() {
  const [natural, setNatural] = useState({
    w: memoriesData.heroWidth || 0,
    h: memoriesData.heroHeight || 0,
  });

  const width = natural.w || undefined;
  const height = natural.h || undefined;

  return (
    <div className="relative flex h-[52vh] min-h-[340px] w-full items-center justify-center bg-[#0c0618] lg:h-full lg:min-h-0">
      <img
        src={memoriesData.hero}
        alt="Birthday surprise hero"
        width={width}
        height={height}
        fetchPriority="high"
        decoding="sync"
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth > 0) {
            setNatural({ w: img.naturalWidth, h: img.naturalHeight });
          }
        }}
        className="max-h-full max-w-full h-auto w-auto select-none"
        style={{
          maxHeight: "100%",
          maxWidth: "100%",
          objectFit: "contain",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0c0618]/40 to-transparent lg:hidden"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-12 bg-gradient-to-l from-[#0c0618]/25 to-transparent lg:block"
        aria-hidden
      />
    </div>
  );
}
