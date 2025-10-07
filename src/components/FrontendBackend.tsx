"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

export default function FrontendBackend() {
  const frontend = [
    { name: "React.js", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "TailwindCSS", icon: SiTailwindcss },
  ];

  const backend = [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQL / Database", icon: FaDatabase },
    { name: "Python", icon: FaPython },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 text-gray-900 dark:bg-[#0B0B0F] dark:text-white transition-colors duration-500">
      <BackgroundGlow />
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="uppercase tracking-widest text-sm text-gray-600 dark:text-gray-400">
            DEVELOPMENT SKILLS
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-purple-600 dark:text-customPurple">
              Frontend
            </span>{" "}
            &{" "}
            <span className="text-pink-600 dark:text-customPink">
              Backend
            </span>{" "}
            Expertise
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            I build secure, scalable, and visually stunning web applications —
            from interactive interfaces to powerful backend systems.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border shadow-md transition-all duration-300 bg-white border-gray-200 hover:border-purple-400/40 dark:bg-gradient-to-br dark:from-[#1a1a2e] dark:to-[#111] dark:border-white/10 dark:hover:border-customPurple/40"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Frontend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {frontend.map(({ name, icon: Icon }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-4 rounded-full bg-purple-100 dark:bg-customPurple/20">
                    <Icon className="text-4xl text-purple-600 dark:text-customPurple" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl border shadow-md transition-all duration-300 bg-white border-gray-200 hover:border-pink-400/40 dark:bg-gradient-to-br dark:from-[#1a1a2e] dark:to-[#111] dark:border-white/10 dark:hover:border-customPink/40"
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Backend Development
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {backend.map(({ name, icon: Icon }, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-4 rounded-full bg-pink-100 dark:bg-customPink/20">
                    <Icon className="text-4xl text-pink-600 dark:text-customPink" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </Container>
    </section>
  );
}