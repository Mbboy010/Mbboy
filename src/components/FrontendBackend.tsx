"use client";

import React from "react";
// 1. Import Variants to fix the type error
import { motion, Variants } from "framer-motion"; 
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { IconType } from "react-icons"; 
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws
} from "react-icons/fa";
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiTypescript, 
  SiPostman, 
  SiVercel, 
  SiFigma 
} from "react-icons/si";

// --- Types for TypeScript ---
interface SkillItem {
  name: string;
  icon: IconType; 
  color: string;
}

interface TechCardProps {
  title: string;
  desc: string;
  skills: SkillItem[];
  delay: number;
  gradient: string;
  borderGlow: string;
}

// --- Variants for Staggered Animation ---
// 2. Explicitly type this object as 'Variants'
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export default function FrontendBackend() {
  const frontend: SkillItem[] = [
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900 dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  ];

  const backend: SkillItem[] = [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-900 dark:text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "PostgreSQL", icon: FaDatabase, color: "text-blue-400" },
    { name: "Python", icon: FaPython, color: "text-yellow-400" },
  ];

  const tools: SkillItem[] = [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "AWS", icon: FaAws, color: "text-yellow-500" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500" },
  ];

  return (
    <section className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* 🔮 Background Elements */}
      <BackgroundGlow />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl mx-auto opacity-30 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
             <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
             Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            The Engine Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
              My Digital Solutions
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I don&apos;t just write code; I architect secure, scalable, and efficient systems using the industry&apos;s most robust technologies.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* 1. Frontend Card */}
          <TechCard 
            title="Frontend Architecture" 
            desc="Building responsive, pixel-perfect UIs with modern interactivity."
            skills={frontend}
            delay={0}
            gradient="from-blue-500/20 to-purple-500/20"
            borderGlow="group-hover:border-blue-500/50"
          />

          {/* 2. Backend Card */}
          <TechCard 
            title="Backend & Data" 
            desc="Designing secure APIs and scalable database schemas."
            skills={backend}
            delay={0.2}
            gradient="from-green-500/20 to-emerald-500/20"
            borderGlow="group-hover:border-green-500/50"
          />

          {/* 3. Tools & DevOps */}
          <TechCard 
            title="Tools & DevOps" 
            desc="Streamlining deployment, testing, and collaboration."
            skills={tools}
            delay={0.4}
            gradient="from-orange-500/20 to-red-500/20"
            borderGlow="group-hover:border-orange-500/50"
          />

        </div>
      </Container>
    </section>
  );
}

// --- Sub-Component for Cards ---

function TechCard({ title, desc, skills, delay, gradient, borderGlow }: TechCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0, 
          // 3. Cast the easing here as well to be safe, though inline usually works better
          transition: { duration: 0.6, delay: delay, ease: "easeOut" } 
        }
      }}
      className={`group relative p-8 rounded-3xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 hover:border-transparent ${borderGlow} transition-all duration-500 shadow-sm hover:shadow-2xl`}
    >
      {/* Hover Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

      <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 h-10">
        {desc}
      </p>

      {/* Grid of Icons */}
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, y: -2 }}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-white dark:hover:bg-white/10 hover:shadow-md transition-all cursor-default"
          >
            <skill.icon className={`text-3xl ${skill.color}`} />
            <span className="text-[10px] font-semibold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
