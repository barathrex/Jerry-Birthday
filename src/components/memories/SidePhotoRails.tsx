"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { GALLERY_IMAGES } from "@/lib/constants";

function PhotoRail({
  images,
  side,
}: {
  images: { src: string; alt: string }[];
  side: "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, side === "left" ? -140 : -100],
  );

  return (
    <div
      ref={ref}
      className={`photo-rail-mask hidden w-[min(22vw,280px)] shrink-0 xl:block ${
        side === "left" ? "pr-3" : "pl-3"
      }`}
    >
      <motion.div style={{ y }} className="flex flex-col gap-4 py-8">
        {images.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.04, duration: 0.45 }}
            className="glow-ring relative aspect-[3/4] overflow-hidden rounded-2xl"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              quality={95}
              unoptimized
              className="object-cover object-center"
              sizes="280px"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export function MemoriesWithSideRails({ children }: { children: ReactNode }) {
  const half = Math.ceil(GALLERY_IMAGES.length / 2);
  const leftImages = GALLERY_IMAGES.slice(0, half);
  const rightImages = GALLERY_IMAGES.slice(half);

  return (
    <div className="relative z-10 mx-auto flex max-w-[1600px] justify-center gap-0 px-2 sm:px-4">
      <PhotoRail images={leftImages} side="left" />
      <div className="w-full min-w-0 flex-1 xl:max-w-2xl">{children}</div>
      <PhotoRail images={rightImages} side="right" />
    </div>
  );
}
