"use client";

import Aside from "../aside/Aside";
import Container from "../Container";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, Home, Briefcase, Users, User } from "lucide-react";
import { useTheme } from "next-themes";
import { useSelector, useDispatch } from "react-redux";
import { setIsAside } from "../redux/slicer/AsideCheck";
import { setPosit } from "../redux/slicer/posit";
import { setOpacity } from "../redux/slicer/opacity";
import { usePathname } from "next/navigation";

export default function Navigate() {
  const dispatch = useDispatch();
  const { theme, setTheme } = useTheme();
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

  const handleAside = () => {
    dispatch(setIsAside(true));
    setTimeout(() => {
      dispatch(setOpacity("100"));
      dispatch(setPosit("0vw"));
    }, 10);
  };

  if (!mounted) return null;

  return (
    <div
      className={`relative ${theme === "dark" ? "bg-darkBackground" : "bg-lightBackground"}`}
      style={{ zIndex: "100" }}
    >
      <Aside setPosi={setPosi} posi={posi} />

      <div className="fixed left-0 top-0 w-screen flex justify-center items-center">
        <motion.nav
          className={`w-full shadow backdrop-blur-md h-[4rem] text-center flex justify-center ${
            theme === "dark"
              ? "bg-customDarkGray/40"
              : "bg-customWhite/50"
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ Container Wrap */}
          <Container>
            <div className="w-full h-full flex justify-between items-center">
              <Link href="/">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-customPurple to-customPink text-transparent bg-clip-text">
                  MBBOY
                </h1>
              </Link>

              <div className="flex items-center gap-3">
                {/* 🌙 Light/Dark Toggle (Mobile) */}
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="relative md:hidden block w-12 h-6 flex items-center rounded-full bg-gray-300 dark:bg-customDarkGray transition-colors duration-300"
                >
                  <span
                    className={`absolute left-1 flex items-center justify-center w-5 h-5 rounded-full bg-customWhite dark:bg-customDarkGray shadow-md transform transition-transform duration-300 ${
                      theme === "dark" ? "translate-x-6" : "translate-x-0"
                    }`}
                  >
                    {theme === "dark" ? (
                      <Sun className="w-3 h-3 text-customYellow" />
                    ) : (
                      <Moon className="w-3 h-3 text-customPurple" />
                    )}
                  </span>
                </button>

                {/* ☰ Mobile Menu Button */}
                <Menu
                  onClick={handleAside}
                  className="text-[2rem] block md:hidden text-foreground dark:text-background cursor-pointer hover:text-customPink"
                />

                {/* 🧭 Desktop Navigation */}
                <div className="hidden md:flex md:gap-4 md:items-center">
                  {navItems.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        pathname === href
                          ? "bg-gradient-to-r from-customPurple to-customPink text-white shadow-sm"
                          : "text-foreground/80 dark:text-white/80 hover:bg-customDarkGray/70 hover:text-white"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {name}
                    </Link>
                  ))}

                  {/* 🌗 Desktop Theme Toggle */}
                  <button
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    className="relative hidden md:flex justify-center items-center w-12 h-6 rounded-full bg-gray-300 dark:bg-customDarkGray transition-colors duration-300"
                  >
                    <span
                      className={`absolute left-1 flex items-center justify-center w-5 h-5 rounded-full bg-customWhite dark:bg-customDarkGray shadow-md transform transition-transform duration-300 ${
                        theme === "dark" ? "translate-x-6" : "translate-x-0"
                      }`}
                    >
                      {theme === "dark" ? (
                        <Sun className="w-3 h-3 text-customYellow" />
                      ) : (
                        <Moon className="w-3 h-3 text-customPurple" />
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </motion.nav>
      </div>
    </div>
  );
}