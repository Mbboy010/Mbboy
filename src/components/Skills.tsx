"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaShieldAlt, FaSun, FaMoon } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "text-cyan-400", title: "React" },
  { Icon: SiNextdotjs, color: "text-black dark:text-white", title: "Next.js" },
  { Icon: FaPython, color: "text-yellow-400", title: "Python" },
  { Icon: FaNodeJs, color: "text-green-500", title: "Node.js" },
  { Icon: FaDatabase, color: "text-blue-400", title: "SQL / Database" },
  { Icon: FaShieldAlt, color: "text-red-400", title: "Security" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

export default function Skills() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply the theme class to <html> for Tailwind's dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <section className="relative bg-gray-100 dark:bg-[#0B0B0F] text-gray-900 dark:text-white py-20 overflow-hidden transition-colors duration-500">
      <BackgroundGlow />

      {/* Theme Toggle Button */}
      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-300 dark:bg-gray-800 hover:bg-gray-400 dark:hover:bg-gray-700 transition"
        >
          {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
          <span className="text-sm font-medium">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>

      <Container>
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="text-3xl lg:text-4xl font-bold text-center"
        >
          My <span className="text-purple-600 dark:text-purple-400">Tech Stack</span>
        </motion.h2>

        {/* Icons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-12 mt-12 text-6xl"
        >
          {icons.map(({ Icon, color, title }, i) => (
            <motion.div
              key={i}
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className={`${color} cursor-pointer transition-all`}
              title={title}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}