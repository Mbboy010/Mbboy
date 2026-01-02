"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Home, 
  ArrowLeft, 
  Terminal, 
  AlertTriangle, 
  Search,
  LucideIcon,
  Ghost,
  FileQuestion,
  CloudOff,
  ServerCrash,
  Unplug,
  Binary,
  WifiOff
} from "lucide-react";
import Container from "@/components/Container";

// --- 1. Animation Variables (Variants) ---
const animationVariants: Record<string, Variants> = {
  // For the container to trigger children sequentially
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2 
      }
    }
  },
  // Standard fade up for text/buttons
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  // Pop in effect for the 404 number
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, type: "spring", bounce: 0.4 }
    }
  },
  // Jittery glitch effect for "LOST" text
  glitch: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: [-2, 2, -2, 0],
      y: [1, -1, 1, 0],
      transition: { 
        repeat: Infinity, 
        duration: 0.2,
        repeatType: "mirror" 
      }
    }
  }
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      
      {/* 🔮 STATIC Background Decorations */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        
        {/* 1. Static Color Blobs */}
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[15%] w-72 h-72 bg-blue-600/10 rounded-full blur-[120px]" />
        


        {/* 3. Static Icons (404/Error Themed) */}
        <StaticIcon icon={Ghost} top="10%" left="10%" size={48} rotate={-12} />
        <StaticIcon icon={FileQuestion} bottom="20%" left="5%" size={64} rotate={12} />
        <StaticIcon icon={Unplug} top="15%" right="10%" size={56} rotate={-6} />
        <StaticIcon icon={ServerCrash} bottom="15%" right="20%" size={40} rotate={15} />
        
        <StaticIcon icon={Binary} top="40%" left="5%" size={32} rotate={0} opacity="opacity-5" />
        <StaticIcon icon={CloudOff} top="25%" right="25%" size={80} opacity="opacity-5" rotate={-5} />
        <StaticIcon icon={WifiOff} bottom="40%" left="20%" size={36} rotate={20} />

        {/* 4. Large Faded Watermark */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[15vw] font-bold text-gray-900/5 dark:text-white/[0.02] pointer-events-none select-none leading-none">
          NULL
        </div>
      </div>

      <Container className="relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          variants={animationVariants.container}
          initial="hidden"
          whileInView="visible"      // Changed from 'animate' to 'whileInView'
          viewport={{ once: false }} // Allows animation to replay when scrolling
        >
          
          {/* 1. Animated Error Code */}
          <motion.div
            variants={animationVariants.scaleIn}
            className="relative inline-block mb-8"
          >
            <h1 className="text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-gray-200 dark:text-white/5 select-none">
              404
            </h1>
            <motion.div 
              variants={animationVariants.glitch}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 drop-shadow-2xl">
                LOST
              </span>
            </motion.div>
          </motion.div>

          {/* 2. Message Section */}
          <motion.div variants={animationVariants.fadeInUp}>
            <div className="flex items-center justify-center gap-2 mb-4 text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest text-sm">
              <AlertTriangle size={18} />
              <span>Error: Endpoint Not Found</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Whoops! You&apos;ve entered deep space.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg max-w-md mx-auto">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
          </motion.div>

          {/* 3. Interactive "System Logs" Box */}
          <motion.div
            variants={animationVariants.fadeInUp}
            className="hidden md:block mb-12 p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-gray-200 dark:border-white/10 font-mono text-left text-xs text-gray-500 dark:text-gray-500 overflow-hidden"
          >
            <div className="flex gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <p className="animate-pulse">{`> initializing recovery sequence...`}</p>
            <p>{`> searching for available routes...`}</p>
            <p className="text-purple-500">{`> warning: 404_PAGE_NOT_FOUND`}</p>
            <p>{`> suggestion: return to base_origin`}</p>
          </motion.div>

          {/* 4. Navigation Actions */}
          <motion.div
            variants={animationVariants.fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-500/25 active:scale-95"
            >
              <Home size={18} />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 font-bold rounded-xl transition-all active:scale-95"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>
          </motion.div>

          {/* 5. Helpful Links */}
          <motion.div 
            variants={animationVariants.fadeInUp}
            className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4"
          >
            <Link href="/services" className="text-sm text-gray-500 hover:text-purple-500 transition-colors flex items-center gap-1">
              <Search size={14} /> View Services
            </Link>
            <Link href="/works" className="text-sm text-gray-500 hover:text-purple-500 transition-colors flex items-center gap-1">
              <Terminal size={14} /> My Portfolio
            </Link>
            <Link href="/collaborate" className="text-sm text-gray-500 hover:text-purple-500 transition-colors flex items-center gap-1">
              <AlertTriangle size={14} /> Report Bug
            </Link>
          </motion.div>

        </motion.div>
      </Container>
    </div>
  );
}

// --- STATIC ICON COMPONENT ---
interface StaticIconProps {
  icon: LucideIcon;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  rotate?: number;
  opacity?: string;
}

function StaticIcon({ icon: Icon, top, left, right, bottom, size = 40, rotate = 0, opacity = "opacity-10" }: StaticIconProps) {
  return (
    <div
      className={`absolute text-purple-900 dark:text-white ${opacity}`}
      style={{ 
        top, left, right, bottom,
        transform: `rotate(${rotate}deg)` 
      }}
    >
      <Icon size={size} />
    </div>
  );
}
