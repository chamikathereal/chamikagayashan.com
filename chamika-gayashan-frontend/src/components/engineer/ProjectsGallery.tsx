"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, FolderGit2 } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "E-Commerce Microservices",
    description: "A highly scalable distributed e-commerce backend built with Spring Boot microservices, Apache Kafka event streaming, and a unified React dashboard.",
    tech: ["Java", "Spring Boot", "React", "Kafka"],
    github: "#",
    live: "#",
  },
  {
    title: "Real-time AI Audio Processor",
    description: "A web application that leverages WebSockets and Python to process, transcribe, and analyze audio streams in real-time with zero latency.",
    tech: ["Python", "FastAPI", "React", "WebSockets"],
    github: "#",
    live: "#",
  },
  {
    title: "Cloud Infrastructure Visualizer",
    description: "An interactive automated dashboard for mapping out cloud topologies across AWS and GCP by ingesting infrastructural metrics.",
    tech: ["Node.js", "AWS SDK", "React", "D3.js"],
    github: "#",
    live: "#",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 350, damping: 25 }
  }
};

export default function ProjectsGallery() {
  return (
    <div className="w-full mt-24 mb-16 relative">
      <div className="flex items-center gap-4 mb-12">
        <FolderGit2 className="text-engineer-primary w-8 h-8" />
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Work</h2>
        <div className="h-px bg-white/10 flex-1 ml-4" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="group relative bg-[#0D111A] border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full hover:border-engineer-primary/30 transition-all duration-300 shadow-xl hover:shadow-[0_20px_40px_rgba(40,167,69,0.1)]"
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-engineer-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="p-8 flex flex-col h-full relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-engineer-primary group-hover:scale-110 group-hover:bg-engineer-primary/20 group-hover:border-engineer-primary/30 transition-all duration-300 shadow-md">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex gap-4 text-gray-400">
                  <a href={project.github} className="hover:text-engineer-primary hover:scale-110 transition-all">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href={project.live} className="hover:text-engineer-primary hover:scale-110 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-engineer-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-[#8B949E] text-sm leading-relaxed flex-1 mb-8">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-[11px] uppercase tracking-wider font-semibold text-engineer-primary bg-engineer-primary/10 border border-engineer-primary/20 px-2.5 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
