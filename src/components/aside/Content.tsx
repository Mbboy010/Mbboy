"use client";

import React from "react";
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
  const { theme } = useTheme();

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Works", href: "/works", icon: Briefcase },
    { name: "Collaborate", href: "/collaborate", icon: Users },
    { name: "Pricing", href: "/pricing", icon: DollarSign },
    { name: "Blog", href: "/blog", icon: Book },
    { name: "About Me", href: "/about", icon: User },
  ];

  return (
    <div className="flex flex-col mt-6 gap-3 px-4">
      {navItems.map(({ name, href, icon: Icon }, i) => {
        const isActive = pathname === href;

        return (
          <motion.div
            key={href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link
              href={href}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl text-[1rem] font-semibold transition-all duration-300
                ${
                  isActive
                    ? "bg-gradient-to-r from-purple-600 to-purple-400 text-white shadow-md"
                    : theme === "dark"
                    ? "bg-[#1a1a2e]/40 text-gray-300 hover:bg-[#2a2a40]/70 hover:text-purple-400"
                    : "bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600"
                }`}
            >
              <Icon
                className={`w-5 h-5 transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-purple-400 group-hover:text-purple-500"
                }`}
              />
              <span>{name}</span>
            </Link>
          </motion.div>
        );
      })}

      {/* Footer Section */}
      <div
        className={`mt-10 text-center text-xs italic opacity-60 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        <p>© {new Date().getFullYear()} Mbboy — Secure by Design 🔒</p>
      </div>
    </div>
  );
}