"use client";

import { motion } from "framer-motion";
import { SplitText } from "@/components/reactbits/SplitText";

export default function TerminalIntro() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full mx-auto mt-12 mb-16 rounded-xl bg-[#0A0D14] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
    >
      {/* Background Decor Effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-engineer-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-engineer-primary/10 transition-colors duration-700" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-blue-500/10 transition-colors duration-700" />

      {/* Terminal Title Bar */}
      <div className="flex items-center px-4 py-3 bg-[#131825] border-b border-white/5 relative z-10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80 border border-black/20" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80 border border-black/20" />
          <div className="w-3 h-3 rounded-full bg-green-500/80 border border-black/20" />
        </div>
        <div className="flex-1 text-center font-fira-code text-[11px] sm:text-xs text-gray-500 select-none">
          bash — chamika@macbook-pro — ~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 sm:p-8 font-fira-code text-sm sm:text-base text-gray-300 leading-relaxed overflow-x-auto relative z-10">
        
        {/* Command Line */}
        <div className="flex text-engineer-primary mb-6">
          <span className="text-green-400 mr-2 shrink-0">➜</span>
          <span className="text-blue-400 mr-3 shrink-0">~</span>
          <div className="whitespace-nowrap">
            <SplitText text="./run-intro.sh" delay={50} className="inline-block text-white font-semibold shadow-white" />
          </div>
        </div>
        
        {/* Output Block */}
        <div className="mt-2 space-y-3 opacity-90 pl-3 sm:pl-4 border-l-2 border-engineer-primary/30">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <span className="text-pink-400 font-semibold">const</span> <span className="text-yellow-200">Engineer</span> = {'{'}
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="pl-6 sm:pl-8 flex flex-wrap">
            <span className="text-blue-300 mr-2">name:</span> 
            <span className="text-green-300">'Chamika Gayashan'</span>,
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="pl-6 sm:pl-8 flex flex-wrap">
            <span className="text-blue-300 mr-2">role:</span> 
            <span className="text-green-300">'Full-Stack Software Engineer'</span>,
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.0 }} className="pl-6 sm:pl-8 flex flex-wrap">
            <span className="text-blue-300 mr-2">skills:</span> 
            <span className="text-blue-200">[</span>
            <span className="text-orange-300">'Java'</span>, <span className="text-gray-400 mx-1"></span>
            <span className="text-cyan-300">'React.js'</span>, <span className="text-gray-400 mx-1"></span>
            <span className="text-green-400">'Node.js'</span>, <span className="text-gray-400 mx-1"></span>
            <span className="text-blue-500">'MySQL'</span>
            <span className="text-blue-200">]</span>,
          </motion.div>
          
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.5 }} className="pl-6 sm:pl-8 flex flex-wrap">
            <span className="text-blue-300 mr-2">passion:</span> 
            <span className="text-green-300">'Building scalable architectures and highly responsive modern UIs.'</span>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.0 }}>
            {'}'};
          </motion.div>
        </div>
        
        {/* Blinking Cursor Output */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.8 }} className="flex text-engineer-primary mt-6">
          <span className="text-green-400 mr-2 shrink-0">➜</span>
          <span className="text-blue-400 mr-3 shrink-0">~</span>
          <motion.span 
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            className="w-2.5 h-[1.2rem] bg-white/80 inline-block align-middle mt-[2px]" 
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
