"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/lib/constants";

type MemoryImageBandProps = {
  imageIndex: number;
};

export function MemoryImageBand({ imageIndex }: MemoryImageBandProps) {
  const img = GALLERY_IMAGES[imageIndex % GALLERY_IMAGES.length];
  if (!img) return null;

  return (
    <motion.div
      className="relative mx-4 my-2 h-52 overflow-hidden rounded-2xl glow-ring sm:h-64 xl:hidden"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6 }}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        quality={95}
        unoptimized
        className="object-cover object-center"
        sizes="100vw"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0618]/60 via-transparent to-transparent" />
    </motion.div>
  );
}
