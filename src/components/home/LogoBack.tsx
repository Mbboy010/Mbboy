"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroDesign() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      

      {/* 2. The Shining Curve (Draws when in view) */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }} // Changed to whileInView
          viewport={{ once: false }} // Repeats on scroll
          transition={{ duration: 2, ease: "easeInOut" }}
          d="M-100 600 C 200 600, 400 200, 720 400 C 1040 600, 1200 100, 1600 300"
          stroke="url(#gradient-line)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient-line" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#4f46e5" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Floating Spheres */}
      <ScrollElement className="top-[20%] left-[15%]">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-transparent opacity-30 blur-md" />
      </ScrollElement>
      
      <ScrollElement className="top-[60%] right-[20%]">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-transparent opacity-20 blur-xl" />
      </ScrollElement>

      <ScrollElement className="bottom-[15%] left-[30%]">
        <div className="w-8 h-8 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
      </ScrollElement>


      {/* 4. The Cube */}
      <ScrollElement className="top-[30%] right-[25%]">
        <div className="w-20 h-20 border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-sm transform rotate-12 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)]" />
      </ScrollElement>

      {/* 5. The Square/Plane */}
      <ScrollElement className="bottom-[30%] left-[10%]">
        <div className="w-16 h-16 border border-purple-500/40 bg-purple-500/5 rotate-45 transform rounded-lg" />
      </ScrollElement>

      {/* 6. The World */}
      <ScrollElement className="top-[15%] right-[10%]">
        <div className="w-24 h-24 rounded-full border border-blue-400/20 relative flex items-center justify-center">
          <div className="w-[110%] h-[1px] bg-blue-400/20 absolute rotate-45" />
          <div className="w-[110%] h-[1px] bg-blue-400/20 absolute -rotate-45" />
          <div className="w-full h-full rounded-full border border-blue-400/10 scale-75 absolute" />
        </div>
      </ScrollElement>

      {/* 7. The Shield */}
      <ScrollElement className="bottom-[20%] right-[40%]">
         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-sky-500/40 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">
            <path 
              d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
         </svg>
      </ScrollElement>

    </div>
  );
}

// Helper: Replaces continuous floating with Scroll Trigger
function ScrollElement({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }} // Triggers every time it enters view
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Smooth ease-out
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
 