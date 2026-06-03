"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Balloons } from "./Balloons";
import { Hero } from "./Hero";
import { MusicToggle } from "./MusicToggle";
import { PasswordGate } from "./PasswordGate";
import { AmbientParticles } from "@/components/ui/AmbientParticles";

const Confetti = dynamic(() => import("react-confetti").then((m) => m.default), {
  ssr: false,
});

function LandingConfetti() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (size.width === 0) return null;

  return (
    <Confetti
      width={size.width}
      height={size.height}
      numberOfPieces={28}
      recycle
      gravity={0.03}
      colors={["#c084fc", "#f472b6", "#60a5fa", "#fbbf24"]}
      style={{ pointerEvents: "none", opacity: 0.45 }}
    />
  );
}

export function LandingPage() {
  return (
    <div className="mesh-bg relative min-h-dvh overflow-x-hidden">
      <div className="relative z-10 flex min-h-dvh flex-col lg:flex-row">
        {/* Hero — no overlays from confetti/particles */}
        <div className="relative z-20 lg:w-[70%]">
          <Hero />
        </div>

        {/* Right panel — decorations stay off the photo */}
        <div className="relative z-10 flex flex-1 items-center justify-center overflow-hidden px-4 py-10 lg:w-[30%] lg:px-6 lg:py-0">
          <LandingConfetti />
          <AmbientParticles count={14} />
          <Balloons />
          <div className="relative z-10 w-full max-w-md">
            <PasswordGate />
          </div>
        </div>
      </div>

      <MusicToggle />
    </div>
  );
}
