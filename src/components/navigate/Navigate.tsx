"use client";

import Aside from "../aside/Aside";
import NabCom from "./NabCom";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Moon, 
  Sun, 
  Menu, 
  Home, 
  Briefcase, 
  Users, 
  User, 
  Terminal, 
  Zap // Added Zap icon for Services
} from "lucide-react";
import { useTheme } from "next-themes";
import { useDispatch } from "react-redux";
import { setIsAside } from "../redux/slicer/AsideCheck";
import { setPosit } from "../redux/slicer/posit";
import { setOpacity } from "../redux/slicer/opacity";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const dispatch = useDispatch();
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Updated Navigation Items
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Zap }, // ✨ Added Services Page
    { name: "Works", href: "/works", icon: Briefcase },
    { name: "Collaborate", href: "/collaborate", icon: Users },
    { name: "About Me", href: "/about", icon: User },
  ];

  useEffect(() => {
    setMounted(true);
    
    // Handle Scroll Effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  const handleAside = () => {
    dispatch(setIsAside(true));
    setTimeout(() => {
      dispatch(setOpacity("100"));
      dispatch(setPosit("0vw"));
    }, 10);
  };

  return (
    <>
      <Aside />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out border-b
          ${
            isScrolled
              ? "bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-gray-200 dark:border-white/5 py-3 shadow-sm"
              : "bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl border-gray-200 dark:border-white/5 py-3 shadow-sm"
          }
        `}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <NabCom>
          <div className="flex justify-between items-center w-full">
            
            {/* 🌟 Brand Logo */}
            <Link href="/" className="flex items-center gap-2 group relative z-50">
              <div className="p-2 bg-gradient-to-tr from-purple-600 to-pink-500 rounded-lg text-white transform group-hover:rotate-12 transition-transform duration-300">
                <Terminal size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl md:text-2xl font-black tracking-tight text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                MBBOY<span className="text-pink-500">.</span>
              </span>
            </Link>

            {/* 🔆 Right Side Actions */}
            <div className="flex items-center gap-4 md:gap-8">
              
              {/* 🧭 Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 p-1 bg-gray-100/50 dark:bg-white/5 rounded-full border border-gray-200/50 dark:border-white/5 backdrop-blur-sm">
                {navItems.map(({ name, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 z-10 
                        ${isActive ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"}
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="active-pill"
                          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full -z-10 shadow-lg shadow-purple-500/30"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      {name}
                    </Link>
                  );
                })}
              </nav>

              <div className="flex items-center gap-4">
                {/* 🌙 Theme Toggle */}
                <button
                  onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-white/10 transition-all active:scale-95 border border-transparent dark:border-white/5"
                  aria-label="Toggle Theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {currentTheme === "dark" ? (
                      <motion.div
                        key="moon"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Moon size={18} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="sun"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sun size={18} className="text-orange-500" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* ☰ Mobile Menu Button */}
                <button
                  onClick={handleAside}
                  className="md:hidden p-2 rounded-lg text-gray-800 dark:text-white bg-gray-100 dark:bg-white/10 hover:bg-purple-50 dark:hover:bg-purple-500/20 transition-colors"
                >
                  <Menu size={24} />
                </button>
              </div>
            </div>
          </div>
        </NabCom>
      </motion.header>
    </>
  );
}
