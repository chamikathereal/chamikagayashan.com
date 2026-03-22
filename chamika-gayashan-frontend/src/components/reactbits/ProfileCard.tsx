/* eslint-disable @next/next/no-img-element */
"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import profileImage from "../../../public/profile.jpg";

export default function ProfileCard() {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className="relative w-full rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/10 shadow-2xl p-8 flex flex-col items-center justify-center cursor-pointer group"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-engineer-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" 
      />
      
      {/* Picture Frame */}
      <div 
        style={{ transform: "translateZ(60px)" }}
        className="relative w-56 h-56 rounded-full overflow-hidden border-[3px] border-white/20 group-hover:border-engineer-primary/50 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_30px_var(--engineer-primary)] transition-all duration-500"
      >
        <img 
          src={profileImage.src} 
          alt="Chamika Gayashan Profile" 
          className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&q=80"; // Fallback image
          }}
        />
      </div>

      <div 
        style={{ transform: "translateZ(40px)" }}
        className="text-center mt-8 z-10"
      >
        <h2 className="text-3xl font-bold text-white tracking-wide group-hover:text-engineer-primary transition-colors duration-300">Chamika Gayashan</h2>
        <p className="text-engineer-primary font-fira-code mt-3 text-sm bg-black/60 px-4 py-1.5 flex rounded-full border border-engineer-primary/30 w-fit mx-auto shadow-lg">
          Software Engineer
        </p>
      </div>

      {/* Decorative Glow */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute -bottom-10 -right-10 w-40 h-40 bg-engineer-primary blur-[70px] opacity-10 group-hover:opacity-40 transition-opacity duration-500 rounded-full pointer-events-none" 
      />
    </motion.div>
  );
}
