"use client";

import { motion } from "framer-motion";

export default function Consulting() {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 px-8 font-inter relative overflow-hidden flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-bold tracking-widest text-gray-400 mb-4 block uppercase text-sm">Strategic Consulting</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">The Bridge</h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            Over 3 years of experience as a Social Media Consultant & Digital Strategist. Managing brand growth for Sri Lankan businesses, influencers, and artists.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
