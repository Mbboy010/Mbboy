"use client";

import React from "react";
import { motion } from "framer-motion";

export default function HeroDesign() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      
      {/* 1. Ambient Background Glows (Replacing PointLights) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />

      {/* 2. The Shining Curve (Replaced with SVG) */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-60" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
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

      {/* 3. Floating Spheres (Replaced with CSS Radial Gradients) */}
      <FloatingElement className="top-[20%] left-[15%]">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-transparent opacity-30 blur-md" />
      </FloatingElement>
      
      <FloatingElement className="top-[60%] right-[20%] delay-700">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-purple-500 to-transparent opacity-20 blur-xl" />
      </FloatingElement>

      <FloatingElement className="bottom-[15%] left-[30%] delay-1000">
        <div className="w-8 h-8 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.6)]" />
      </FloatingElement>


      {/* 4. The Cube (Abstract Representation) */}
      <FloatingElement className="top-[30%] right-[25%] duration-[6s]">
        <div className="w-20 h-20 border border-indigo-500/30 bg-indigo-500/5 backdrop-blur-sm transform rotate-12 rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.2)]" />
      </FloatingElement>

      {/* 5. The Square/Plane (Abstract Diamond) */}
      <FloatingElement className="bottom-[30%] left-[10%] duration-[8s]">
        <div className="w-16 h-16 border border-purple-500/40 bg-purple-500/5 rotate-45 transform rounded-lg" />
      </FloatingElement>

      {/* 6. The World (Wireframe-ish Circle) */}
      <FloatingElement className="top-[15%] right-[10%] duration-[10s]">
        <div className="w-24 h-24 rounded-full border border-blue-400/20 relative flex items-center justify-center">
          <div className="w-[110%] h-[1px] bg-blue-400/20 absolute rotate-45" />
          <div className="w-[110%] h-[1px] bg-blue-400/20 absolute -rotate-45" />
          <div className="w-full h-full rounded-full border border-blue-400/10 scale-75 absolute" />
        </div>
      </FloatingElement>

      {/* 7. The Shield */}
      <FloatingElement className="bottom-[20%] right-[40%] delay-500">
         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" className="text-sky-500/40 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">
            <path 
              d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
         </svg>
      </FloatingElement>

    </div>
  );
}

// Helper for floating animation
function FloatingElement({ children, className, duration = "4s" }: { children: React.ReactNode; className?: string; duration?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: parseFloat(duration),
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
