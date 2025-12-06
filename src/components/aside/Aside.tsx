"use client";

import React, { useEffect } from "react";
import { X, Terminal, Github, Linkedin, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { usePathname } from "next/navigation"; // 1. Import usePathname
import { setIsAside } from "../redux/slicer/AsideCheck";
import { setPosit } from "../redux/slicer/posit";
import { setOpacity } from "../redux/slicer/opacity";
import type { RootState } from "../redux/store";
import Content from "./Content";

interface Props {
  setPosi: React.Dispatch<React.SetStateAction<string>>;
  posi: string;
}

// Animation Variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const sidebarVariants = {
  hidden: { x: "-100%" },
  visible: { 
    x: "0%",
    transition: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 }
  },
  exit: { 
    x: "-100%",
    transition: { duration: 0.3, ease: "easeInOut" }
  }
};

export default function Aside({ setPosi, posi }: Props) {
  const dispatch = useDispatch();
  const pathname = usePathname(); // 2. Get current route
  const isAside = useSelector((state: RootState) => state.isAs.value);
  const opacity = useSelector((state: RootState) => state.opacity.value);
  const posit = useSelector((state: RootState) => state.posit.value);

  // Common close logic
  const handleClose = () => {
    dispatch(setOpacity("0"));
    dispatch(setPosit("-79vw"));
    setTimeout(() => {
      dispatch(setIsAside(false));
    }, 300);
  };

  // 3. Effect: Close sidebar when Route Changes (User clicked a link inside menu)
  useEffect(() => {
    if (isAside) {
      handleClose();
    }
  }, [pathname]);

  // 4. Effect: Close sidebar on Back Button press (Mobile/Desktop)
  useEffect(() => {
    if (isAside) {
      // Push a fake state to history so the back button has something to "pop"
      // instead of navigating away from the website
      window.history.pushState(null, "", window.location.href);

      const handlePopState = () => {
        // When back button is pressed, close the sidebar
        handleClose();
      };

      window.addEventListener("popstate", handlePopState);

      return () => {
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [isAside]);

  return (
    <AnimatePresence mode="wait">
      {isAside && (
        <div className="fixed inset-0 z-[150] flex h-full">
          
          {/* 🔲 Backdrop Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={handleClose}
            className="absolute inset-0 bg-black/20 dark:bg-black/60 backdrop-blur-sm"
          />

          {/* 🧭 Sidebar Panel */}
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[85vw] max-w-[320px] h-full flex flex-col 
              bg-white/90 dark:bg-[#0a0a0a]/95 
              backdrop-blur-2xl border-r border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden"
          >
            {/* 🎨 Internal Background Glows */}
            <div className="absolute top-0 left-0 w-full h-40 bg-purple-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-full h-40 bg-blue-500/10 blur-3xl pointer-events-none" />

            {/* 🟢 Header */}
            <div className="relative z-10 flex justify-between items-center px-6 h-20 border-b border-gray-100 dark:border-white/5">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg text-white">
                  <Terminal size={18} />
                </div>
                <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  MBBOY<span className="text-pink-500">.</span>
                </span>
              </div>
              
              <button 
                onClick={handleClose}
                className="p-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-500 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* 📜 Content Area */}
            <div className="relative z-10 flex-1 overflow-y-auto py-6 px-4">
              <Content />
            </div>

            {/* 🦶 Footer / Socials */}
            <div className="relative z-10 p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5">
              <div className="flex justify-center gap-6 mb-4">
                <SocialIcon Icon={Github} />
                <SocialIcon Icon={Twitter} />
                <SocialIcon Icon={Linkedin} />
              </div>
              <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest">
                © {new Date().getFullYear()} Musa Hakilu
              </p>
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}

// Small helper for social icons
function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors hover:scale-110">
      <Icon size={18} />
    </a>
  );
}
