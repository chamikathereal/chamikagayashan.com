"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ShinyText } from "./reactbits/ShinyText";
import { SplitText } from "./reactbits/SplitText";
import Link from "next/link";

export default function SplitHero() {
  const [hoveredSide, setHoveredSide] = useState<"engineer" | "artist" | null>(null);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-bg-dark text-white">
      {/* Engineer Side */}
      <motion.div
        className="relative flex flex-col items-center justify-center cursor-pointer border-r border-[#ffffff10]"
        initial={{ width: "50%" }}
        animate={{
          width: hoveredSide === "engineer" ? "75%" : hoveredSide === "artist" ? "25%" : "50%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setHoveredSide("engineer")}
        onMouseLeave={() => setHoveredSide(null)}
        style={{ backgroundColor: "var(--engineer-bg)" }}
      >
        {/* Glow & Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--engineer-primary)_0%,transparent_60%)] opacity-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
        
        <motion.div
          className="z-10 flex flex-col items-center text-center px-4"
          animate={{
            scale: hoveredSide === "engineer" ? 1.05 : 1,
            opacity: hoveredSide === "artist" ? 0.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-fira-code tracking-widest text-engineer-primary mb-2 text-sm md:text-base">{'< Full-Stack Software Engineer />'}</span>
          <h1 className="font-inter font-bold text-5xl md:text-7xl mb-4">
            <ShinyText text="CHAMIKA GAYASHAN" speed={4} />
          </h1>
          <p className="font-inter text-gray-400 max-w-md">
            Bridging complex logic with scalable architecture.
          </p>
          
          <Link href="/engineer">
            <motion.div 
              className="mt-8 px-6 py-3 border border-engineer-primary text-engineer-primary rounded-md font-fira-code hover:bg-engineer-primary hover:text-black transition-colors"
              animate={{ opacity: hoveredSide === "engineer" ? 1 : 0 }}
            >
              Explore Portfolio
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>

      {/* Artist Side */}
      <motion.div
        className="relative flex flex-col items-center justify-center cursor-pointer"
        initial={{ width: "50%" }}
        animate={{
          width: hoveredSide === "artist" ? "75%" : hoveredSide === "engineer" ? "25%" : "50%",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onMouseEnter={() => setHoveredSide("artist")}
        onMouseLeave={() => setHoveredSide(null)}
        style={{ backgroundColor: "var(--artist-bg)" }}
      >
        {/* Gritty overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--artist-primary)_0%,transparent_70%)] opacity-15 pointer-events-none mix-blend-screen" />
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
        />

        <motion.div
          className="z-10 flex flex-col items-center text-center px-4"
          animate={{
            scale: hoveredSide === "artist" ? 1.05 : 1,
            opacity: hoveredSide === "engineer" ? 0.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-montserrat font-bold tracking-[0.3em] text-artist-accent mb-2 text-sm md:text-base">RAP ARTIST</span>
          <div className="font-montserrat font-black text-6xl md:text-8xl mb-4 leading-none uppercase drop-shadow-lg text-white">
            <ShinyText text="CEE G" speed={4} />
          </div>
          <p className="font-inter text-gray-300 max-w-md">
            Unleashing gritty bars and profound resonance.
          </p>

          <Link href="/artist">
            <motion.div 
              className="mt-8 px-8 py-3 bg-artist-primary text-white font-montserrat font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,42,42,0.4)]"
              animate={{ opacity: hoveredSide === "artist" ? 1 : 0 }}
            >
              Enter Music Hub
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
