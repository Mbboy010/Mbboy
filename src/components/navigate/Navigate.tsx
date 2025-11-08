"use client";

import Aside from "../aside/Aside";
import Container from "../Container";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, Home, Briefcase, Users, User } from "lucide-react";
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
  const [posi, setPosi] = useState("-79vw");
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Works", href: "/works", icon: Briefcase },
    { name: "Collaborate", href: "/collaborate", icon: Users },
    { name: "About Me", href: "/about-me", icon: User },
  ];

  useEffect(() => setMounted(true), []);
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
    <div
      className={`relative transition-colors duration-300 bg-white dark:bg-[#0d0d0d]`}
      style={{ zIndex: "100" }}
    >
      <Aside setPosi={setPosi} posi={posi} />

      <div className="fixed left-0 top-0 w-full flex justify-center items-center z-50">
        <motion.nav
          className={`w-full shadow-md backdrop-blur-md h-[4.2rem] flex items-center transition-all duration-300
            bg-white/80 dark:bg-[#0D0D0D]/80`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container>
            <div className="flex justify-between items-center w-full h-full">
              {/* 🌟 Brand Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <h1 className="text-2xl font-extrabold bg-gradient-to-r from-customPurple to-customPink text-transparent bg-clip-text group-hover:scale-105 transition-transform duration-300">
                  MBBOY
                </h1>
              </Link>

              {/* 🔆 Right Side */}
              <div className="flex items-center gap-6 md:gap-8">
                {/* 🧭 Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                  {navItems.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        pathname === href
                          ? "bg-gradient-to-r from-customPurple to-customPink text-white shadow-md"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-purple-600 dark:hover:text-purple-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </Link>
                  ))}
                </div>

                {/* 🌙 Theme Toggle */}
                <button
                  onClick={() =>
                    setTheme(currentTheme === "dark" ? "light" : "dark")
                  }
                  className="relative w-12 h-6 flex items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300 hover:ring-2 hover:ring-purple-400/50"
                >
                  <span
                    className={`absolute left-1 flex items-center justify-center w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300 ${
                      currentTheme === "dark" ? "translate-x-6" : "translate-x-0"
                    }`}
                  >
                    {currentTheme === "dark" ? (
                      <Sun className="w-3 h-3 text-yellow-400" />
                    ) : (
                      <Moon className="w-3 h-3 text-purple-500" />
                    )}
                  </span>
                </button>

                {/* ☰ Mobile Menu */}
                <Menu
                  onClick={handleAside}
                  className="md:hidden w-7 h-7 text-gray-800 dark:text-gray-200 cursor-pointer hover:text-customPink transition-colors"
                />
              </div>
            </div>
          </Container>
        </motion.nav>
      </div>
    </div>
  );
}