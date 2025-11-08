"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  Users,
  DollarSign,
  Book,
  User,
} from "lucide-react";
import { useTheme } from "next-themes";

export default function Content() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Wait until after mount to render to avoid theme mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Works", href: "/works", icon: Briefcase },
    { name: "Collaborate", href: "/collaborate", icon: Users },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Blog", href: "/blog", icon: Book },
    { name: "About Me", href: "/about", icon: User },
  ];

  return (
    <div className="flex flex-col mt-3 gap-3">
      {navItems.map(({ name, href, icon: Icon }, i) => {
        const isActive = pathname === href;
        const isDark = resolvedTheme === "dark";

        return (
          <motion.div
            key={href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link
              href={href}
              className={`group flex items-center gap-3 px-3 py-3 rounded-xl text-[1rem] font-semibold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md"
                  : isDark
                  ? "bg-[#1a1a2e]/40 text-gray-300 hover:bg-[#2a2a40]/70 hover:text-purple-400"
                  : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : isDark
                    ? "text-purple-400 group-hover:text-purple-300"
                    : "text-purple-500 group-hover:text-purple-600"
                }`}
              />
              <span>{name}</span>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}