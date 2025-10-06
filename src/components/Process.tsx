"use client";

import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaShieldAlt, FaBug } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLinux,
  SiWireshark,
} from "react-icons/si";

const skills = [
  {
    title: "React",
    desc: "Building dynamic and modern user interfaces using the React library for seamless performance.",
    icon: <FaReact className="text-4xl text-cyan-500 dark:text-cyan-400" />,
  },
  {
    title: "Next.js",
    desc: "Developing full-stack web applications with optimized SEO, SSR, and secure API integrations.",
    icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />,
  },
  {
    title: "TailwindCSS",
    desc: "Creating responsive, elegant, and efficient UIs with a utility-first CSS framework.",
    icon: <SiTailwindcss className="text-4xl text-sky-500 dark:text-sky-400" />,
  },
  {
    title: "Node.js",
    desc: "Powering the backend with Node.js for scalable, secure, and high-performance APIs.",
    icon: <FaNodeJs className="text-4xl text-green-600 dark:text-green-500" />,
  },
  {
    title: "Cybersecurity",
    desc: "Identifying vulnerabilities, strengthening defenses, and ensuring applications remain secure from attacks.",
    icon: <FaShieldAlt className="text-4xl text-purple-500 dark:text-purple-400" />,
  },
  {
    title: "Ethical Hacking",
    desc: "Performing penetration testing, analyzing systems, and applying exploit prevention techniques.",
    icon: <FaBug className="text-4xl text-red-500 dark:text-red-400" />,
  },
  {
    title: "Linux Security",
    desc: "Configuring, monitoring, and hardening Linux systems to enhance overall infrastructure security.",
    icon: <SiLinux className="text-4xl text-gray-600 dark:text-gray-300" />,
  },
  {
    title: "Wireshark & Network Analysis",
    desc: "Analyzing packets and traffic patterns to detect threats and maintain secure network communication.",
    icon: <SiWireshark className="text-4xl text-cyan-500 dark:text-cyan-400" />,
  },
];

export default function Skills() {
  return (
    <section className="relative bg-gray-50 dark:bg-[#0B0B0F] text-gray-900 dark:text-white py-20 overflow-hidden transition-colors duration-500">
      <BackgroundGlow />

      <Container>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400"
          >
            TECH STACK
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl lg:text-4xl font-bold mt-2"
          >
            My{" "}
            <span className="text-purple-600 dark:text-purple-400">
              Development & Security Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4"
          >
            I blend creativity with cybersecurity expertise — developing
            high-performance, secure, and visually stunning digital experiences
            using modern technologies and security practices.
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="rounded-2xl p-6 text-center shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-purple-500/40
                         transition-all hover:scale-[1.03] bg-white dark:bg-gradient-to-br dark:from-[#1a1a2e] dark:to-[#111]"
            >
              <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 
                              rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}