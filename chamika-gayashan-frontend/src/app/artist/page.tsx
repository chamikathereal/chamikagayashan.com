"use client";

import { motion } from "framer-motion";
import { Disc3 } from "lucide-react";



const stagger = { animate: { transition: { staggerChildren: 0.15 } } };
const fadeUp = { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function MusicHub() {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 px-6 md:px-12 font-montserrat relative overflow-hidden">
      {/* Gritty Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--artist-primary)_0%,transparent_50%)] opacity-20 pointer-events-none mix-blend-screen" />
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }}
      />
      
      {/* Floating Lyrics Background */}
      <div className="absolute top-1/4 -left-20 text-[10rem] font-black italic text-white/5 whitespace-nowrap -rotate-6 pointer-events-none select-none">
        RA SIHINEN PAWENA
      </div>
      <div className="absolute bottom-1/4 -right-20 text-[10rem] font-black italic text-white/5 whitespace-nowrap rotate-3 pointer-events-none select-none">
        BINDA PAWURU
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.span variants={fadeUp} className="font-bold tracking-[0.3em] text-artist-accent mb-2 block text-sm">DISCOGRAPHY / RELEASES</motion.span>
        <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black uppercase drop-shadow-[0_0_15px_rgba(255,42,42,0.3)] mb-12 leading-none text-white">Music Hub</motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Tracks List */}
          <motion.div variants={fadeUp} className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3 mb-6">
              <Disc3 className="text-artist-accent w-8 h-8" />
              Latest Drops
            </h2>
            <div className="space-y-4">
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/13PuKALQQtBTdczGl6zAoY?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/2CvA7dJJSaRN1V8uJVM6bc?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/4pP413F0IpAK0Ku743xez0?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/track/41rmMDLIzTcgp3mLH78ByS?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </motion.div>

          {/* Media Players Placeholder */}
          <motion.div variants={fadeUp} className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Media Stream</h2>
            
            <div className="bg-black/40 border border-white/10 p-6 rounded-2xl backdrop-blur-md space-y-4">
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/7GHvfXa96vCSTxtlhTKBAL?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/5snmNKSagfuB4UXb2xjAsZ?utm_source=generator" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/album/5k68iry5MvoDjAu2BDT2xD?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}
