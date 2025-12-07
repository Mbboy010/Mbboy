"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaBug, FaFingerprint } from "react-icons/fa";
import { SiKalilinux } from "react-icons/si";

export default function SecurityBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-0">
      

      {/* 2. The Circuit Line (Cyber Path) */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-40" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          // A jagged, circuit-board style path
          d="M0 200 H 200 L 300 100 H 600 L 700 200 H 1000 L 1100 300 H 1440"
          stroke="url(#sec-gradient)"
          strokeWidth="2"
          strokeLinecap="square"
          strokeDasharray="10 10" // Dotted line effect
        />
        <defs>
          <linearGradient id="sec-gradient" x1="0" y1="0" x2="1440" y2="0">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0" />   {/* Red */}
            <stop offset="50%" stopColor="#10b981" />                 {/* Emerald */}
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" /> {/* Blue */}
          </linearGradient>
        </defs>
      </svg>

      {/* 3. Binary Data Stream (Top Left) */}
      <ScrollElement className="top-[15%] left-[5%]">
        <div className="font-mono text-xs text-emerald-500/20 leading-none">
          0101011101<br/>
          1011001010<br/>
          0010111011
        </div>
      </ScrollElement>

      {/* 4. Large Shield (Center-Right Background) */}
      <ScrollElement className="top-[30%] right-[10%]">
        <FaShieldAlt className="text-[200px] text-emerald-500/5 rotate-12" />
      </ScrollElement>

      {/* 5. The Threat/Bug (Bottom Left) */}
      <ScrollElement className="bottom-[20%] left-[10%]">
        <div className="relative">
          <div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full" />
          <FaBug className="relative text-5xl text-red-500/20 rotate-[-15deg]" />
        </div>
      </ScrollElement>

      {/* 6. The Lock (Center Floating) */}
      <ScrollElement className="top-[50%] left-[45%]">
        <div className="p-4 border border-blue-500/10 rounded-xl bg-blue-900/5 backdrop-blur-sm">
          <FaLock className="text-3xl text-blue-400/20" />
        </div>
      </ScrollElement>

      {/* 7. Fingerprint Scan (Bottom Right) */}
      <ScrollElement className="bottom-[15%] right-[25%]">
         <FaFingerprint className="text-6xl text-purple-500/10 animate-pulse" />
      </ScrollElement>

      {/* 8. Kali Linux Logo (Subtle Nod to Pen-testing) */}
      <ScrollElement className="top-[20%] left-[25%]">
        <SiKalilinux className="text-4xl text-gray-500/10" />
      </ScrollElement>

      {/* 9. Hexagon Grid Node */}
      <ScrollElement className="top-[60%] right-[30%]">
        <svg width="100" height="100" viewBox="0 0 100 100" className="opacity-20">
          <path d="M50 0 L93.3 25 V75 L50 100 L6.7 75 V25 Z" fill="none" stroke="#10b981" strokeWidth="1" />
          <circle cx="50" cy="50" r="15" fill="#10b981" className="animate-pulse" />
        </svg>
      </ScrollElement>

    </div>
  );
}

// --- Helper: Scroll Trigger Animation ---
function ScrollElement({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, margin: "-50px" }} // Triggers every time you scroll past
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1], // Professional ease-out
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
