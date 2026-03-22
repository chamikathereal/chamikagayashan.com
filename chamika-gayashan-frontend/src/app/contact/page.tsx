"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Music } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 px-8 pb-12 font-inter flex flex-col items-center">
      <div className="max-w-xl w-full relative z-10 space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">Get In Touch</h1>
          <div className="flex flex-col items-center justify-center gap-2 text-gray-400">
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Anuradhapura, Sri Lanka</span>
            <span className="flex items-center gap-2 text-engineer-primary font-fira-code"><Mail className="w-4 h-4" /> dmforceeg@gmail.com</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <a href="https://linkedin.com/in/chamikathereal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/chamikathereal" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-colors border border-white/5 flex items-center justify-center">
              <Music className="w-6 h-6" />
            </a>
          </div>
        </div>

        <motion.div 
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Name</label>
              <input type="text" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-engineer-primary transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Email</label>
              <input type="email" className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-engineer-primary transition-colors" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-400">Message</label>
              <textarea className="bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-engineer-primary transition-colors h-32 resize-none" placeholder="Your inquiry..."></textarea>
            </div>
            <button type="button" className="bg-white text-black font-semibold rounded-lg px-4 py-3 hover:bg-gray-200 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
