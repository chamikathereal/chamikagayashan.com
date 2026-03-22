"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Server, Award, GraduationCap, Briefcase } from "lucide-react";

import { ShinyText } from "@/components/reactbits/ShinyText";
import { SplitText } from "@/components/reactbits/SplitText";
import ProfileCard from "@/components/reactbits/ProfileCard";
import TerminalIntro from "@/components/engineer/TerminalIntro";
import ProjectsGallery from "@/components/engineer/ProjectsGallery";
import { DownloadCloud, Github } from "lucide-react";

const techStack = [
  { name: "Java", hoverColor: "group-hover:text-orange-500", icon: <Server className="w-6 h-6" /> },
  { name: "React.js", hoverColor: "group-hover:text-[#61DAFB]", icon: <Layout className="w-6 h-6" /> },
  { name: "Next.js", hoverColor: "group-hover:text-white", icon: <Layout className="w-6 h-6" /> },
  { name: "Node.js", hoverColor: "group-hover:text-[#339933]", icon: <Server className="w-6 h-6" /> },
  { name: "PHP", hoverColor: "group-hover:text-indigo-400", icon: <Code2 className="w-6 h-6" /> },
  { name: "MySQL", hoverColor: "group-hover:text-blue-500", icon: <Database className="w-6 h-6" /> },
  { name: "MongoDB", hoverColor: "group-hover:text-[#47A248]", icon: <Database className="w-6 h-6" /> },
];

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function EngineerPortfolio() {
  return (
    <div className="min-h-screen bg-engineer-bg text-white pt-32 pb-20 px-6 md:px-12 font-inter relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-engineer-primary rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        initial="initial"
        animate="animate"
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="font-fira-code tracking-widest text-engineer-primary mb-2 block">
          <ShinyText text="< Portfolio />" speed={3} className="" />
        </motion.div>
        
        <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
          <SplitText text="Software Engineer" delay={40} className="" />
        </motion.h1>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-2">
          <a href="#" className="relative group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-engineer-primary/10 border border-engineer-primary/30 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(40,167,69,0.2)]">
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full duration-700 transition-transform -translate-x-full" />
            <DownloadCloud className="w-5 h-5 group-hover:text-engineer-primary transition-colors duration-300" />
            <span>Download CV</span>
          </a>
          <a href="#" className="relative group inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20">
            <Github className="w-5 h-5 group-hover:text-gray-300 transition-colors" />
            <span>View GitHub</span>
          </a>
        </motion.div>

        {/* Terminal Intro Section */}
        <motion.div variants={fadeUp} className="w-full">
          <TerminalIntro />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20 mt-8">
          
          {/* Main Content (About & Experience) */}
          <div className="lg:col-span-2 space-y-8">
            <motion.section variants={fadeUp} className="relative bg-[#0d1017] border border-white/5 p-8 rounded-2xl shadow-xl hover:border-engineer-primary/20 transition-colors overflow-hidden">
              {/* Subtle timeline glowing background line */}
              <div className="absolute left-10 lg:left-12 top-24 bottom-12 w-px bg-gradient-to-b from-engineer-primary/50 via-engineer-primary/10 to-transparent" />
              
              <div className="flex items-center gap-3 mb-10 relative z-10 w-full group/header">
                <Briefcase className="text-engineer-primary w-6 h-6 drop-shadow-[0_0_15px_rgba(40,167,69,0.8)]" />
                <h2 className="text-2xl font-semibold">
                  <SplitText text="Experience" delay={30} className="" />
                </h2>
              </div>
              
              <div className="space-y-10 relative z-10">
                {/* Timeline Item 1 */}
                <div className="relative pl-10 lg:pl-12 py-2 group cursor-crosshair">
                  {/* Glowing Dot */}
                  <div className="absolute left-[-5px] top-4 w-3 h-3 bg-engineer-primary rounded-full shadow-[0_0_10px_var(--engineer-primary)] group-hover:scale-150 group-hover:shadow-[0_0_20px_var(--engineer-primary)] transition-all duration-300 z-10" />
                  <div className="bg-white/5 border border-white/5 p-6 rounded-xl group-hover:bg-white/10 group-hover:border-engineer-primary/30 transition-all duration-500 shadow-md">
                    <h3 className="text-xl font-medium text-white group-hover:text-engineer-primary transition-colors">Full-Stack Software Engineer Intern</h3>
                    <p className="text-engineer-primary font-fira-code text-sm mt-1 mb-4">DartCodes (PVT) LTD</p>
                    <p className="text-[#8492a6] leading-relaxed text-sm md:text-base">Engineered highly scalable full-stack web applications, designed relational database schemas, and integrated seamless dynamic frontend interfaces with zero-downtime microservice deployments.</p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-10 lg:pl-12 py-2 group cursor-crosshair">
                  {/* Glowing Dot */}
                  <div className="absolute left-[-5px] top-4 w-3 h-3 bg-gray-600 rounded-full border border-[#0d1017] group-hover:bg-engineer-primary group-hover:scale-125 transition-all duration-300 z-10" />
                  <div className="bg-white/5 border border-white/5 p-6 rounded-xl group-hover:bg-white/10 group-hover:border-engineer-primary/20 transition-all duration-500 shadow-md">
                    <h3 className="text-xl font-medium text-white group-hover:text-engineer-primary transition-colors tracking-wide">Technical Support Engineer</h3>
                    <p className="text-gray-400 font-fira-code text-sm mt-1 mb-4">C-Lento (PVT) LTD</p>
                    <p className="text-[#8492a6] leading-relaxed text-sm md:text-base">Diagnosed complex technical issues, resolved escalated incidents, and provided enterprise-level infrastructure support maintaining pristine 99.9% client satisfaction.</p>
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-engineer-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <Code2 className="text-engineer-primary w-6 h-6" />
                <h2 className="text-2xl font-semibold">
                  <SplitText text="Tech Stack" delay={30} className="" />
                </h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {techStack.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center p-4 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 hover:bg-[#151922] hover:shadow-lg hover:-translate-y-1 transition-all cursor-crosshair group duration-300">
                    <div className={`text-gray-400 ${tech.hoverColor} transition-colors mb-2 duration-300 drop-shadow-lg`}>
                      {tech.icon}
                    </div>
                    <span className={`text-sm font-fira-code text-center text-gray-300 ${tech.hoverColor} transition-colors duration-300`}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar (Profile, Education & Certifications) */}
          <div className="space-y-8">
            <motion.section variants={fadeUp} className="w-full flex justify-center">
              <ProfileCard />
            </motion.section>

            <motion.section variants={fadeUp} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-engineer-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-engineer-primary w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  <SplitText text="Education" delay={30} className="" />
                </h2>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">BSc (Hons) Computer Software Engineering</h3>
                <p className="text-engineer-primary font-fira-code justify-between mt-1 mb-2 text-sm">Birmingham City University</p>
              </div>
            </motion.section>

            <motion.section variants={fadeUp} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl hover:border-engineer-primary/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-engineer-primary w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  <SplitText text="Certifications" delay={30} className="" />
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-engineer-primary mt-2 shrink-0" />
                  <span className="text-gray-300">AI/ML Engineer Stage 1</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-engineer-primary mt-2 shrink-0" />
                  <span className="text-gray-300">Web Design Fundamentals</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-engineer-primary mt-2 shrink-0" />
                  <span className="text-gray-300">Java Foundations</span>
                </li>
              </ul>
            </motion.section>
          </div>
          
        </div>

        {/* Global Projects Section */}
        <section className="mt-8 px-2">
          <ProjectsGallery />
        </section>

      </motion.div>
    </div>
  );
}
