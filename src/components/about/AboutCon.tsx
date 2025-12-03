"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Container from "@/components/Container";
import BackgroundGlow from "@/components/BackgroundGlow";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaShieldAlt,
  FaCode,
  FaEnvelope,
  FaArrowRight,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";

// --- Animation Variants ---
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: "easeOut", // safe for TypeScript
    },
  }),
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// --- Tech Stack Data ---
const techStack = [
  { name: "React", Icon: FaReact, note: "Modern Frontend" },
  { name: "Next.js", Icon: FaCode, note: "Full-Stack Framework" },
  { name: "Node.js", Icon: FaNodeJs, note: "Backend Services" },
  { name: "Python", Icon: FaPython, note: "Automation & Security" },
  { name: "SQL", Icon: FaDatabase, note: "Data Modeling" },
  { name: "Security", Icon: FaShieldAlt, note: "Pentesting & Audits" },
];

// --- Component ---
export default function AboutCon() {
  return (
    <section className="relative py-24 min-h-screen bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 overflow-hidden transition-colors duration-500">

      {/* Decorative Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 dark:bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <BackgroundGlow />

      <Container className="relative z-10">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeIn}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-300 text-xs font-medium uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" />
              About Me
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
              I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Musa Hakilu</span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-500 dark:text-gray-400 font-normal mt-2 block">
                aka <span className="font-mono text-purple-600 dark:text-purple-300">@Mbboy</span>
              </span>
            </h1>

            <p className="mt-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-2xl border-l-2 border-purple-500/30 pl-6">
              I&apos;m a <strong>Cybersecurity Expert</strong>, <strong>Software Engineer</strong>, and Full-Stack Developer.
              I combine secure engineering practices with modern product design to build scalable systems that are both beautiful and bulletproof.
            </p>

            <div className="mt-6 flex gap-4 text-gray-500 dark:text-gray-400">
              <SocialLink href="#" icon={FaGithub} />
              <SocialLink href="#" icon={FaLinkedin} />
              <SocialLink href="#" icon={FaTwitter} />
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/works"
                className="group relative px-8 py-3.5 rounded-xl bg-purple-600 text-white font-semibold shadow-lg shadow-purple-500/25 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/resume.pdf"
                className="px-8 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-500/5 text-gray-700 dark:text-gray-300 transition-all flex items-center gap-2"
              >
                <FaDownload size={12} /> CV
              </motion.a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: false }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-80 h-96 md:w-96 md:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[2rem] rotate-6 opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white dark:bg-[#0b1220]">
                <Image
                  src="/profile.png"
                  alt="Musa Hakilu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white/90 dark:bg-[#1a1f2e]/90 backdrop-blur-md border border-gray-200 dark:border-white/10 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">Open for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// --- Helper Components ---
function SocialLink({ href, icon: Icon }: { href: string; icon: React.ElementType }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 bg-gray-100 dark:bg-white/5 rounded-full hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-300 transition-colors"
    >
      <Icon size={18} />
    </a>
  );
}