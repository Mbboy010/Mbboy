"use client";

import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { motion } from "framer-motion";
// Added IconType for type safety
import { IconType } from "react-icons"; 
import { 
  FaReact, 
  FaNodeJs, 
  FaShieldAlt, 
  FaBug, 
  FaPython, 
  FaGitAlt, 
  // REMOVED: FaDatabase and FaLock (unused)
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLinux,
  SiWireshark,
  SiDocker,
  SiPostgresql
} from "react-icons/si";

// --- Types ---
interface SkillItem {
  title: string;
  category: string;
  desc: string;
  icon: IconType;
  color: string;
  bg: string;
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    // FIXED: Added 'as const' to fix TypeScript error
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// --- Data ---
const skills: SkillItem[] = [
  // Frontend
  {
    title: "Next.js",
    category: "Frontend",
    desc: "Production-grade React framework for scalable, secure web apps.",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
    bg: "group-hover:border-gray-500/50"
  },
  {
    title: "React",
    category: "Frontend",
    desc: "Building interactive, state-driven UIs with modern hooks.",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "group-hover:border-cyan-500/50"
  },
  {
    title: "Tailwind CSS",
    category: "Frontend",
    desc: "Rapid UI development with a utility-first, responsive engine.",
    icon: SiTailwindcss,
    color: "text-sky-500",
    bg: "group-hover:border-sky-500/50"
  },
  
  // Backend & Data (Added SQL & Python)
  {
    title: "Node.js",
    category: "Backend",
    desc: "Asynchronous event-driven runtime for scalable network apps.",
    icon: FaNodeJs,
    color: "text-green-600",
    bg: "group-hover:border-green-600/50"
  },
  {
    title: "Python",
    category: "Backend & Sec",
    desc: "Scripting for automation, AI integration, and security tools.",
    icon: FaPython,
    color: "text-yellow-500",
    bg: "group-hover:border-yellow-500/50"
  },
  {
    title: "PostgreSQL",
    category: "Database",
    desc: "Robust relational database management for complex data modeling.",
    icon: SiPostgresql,
    color: "text-blue-400",
    bg: "group-hover:border-blue-400/50"
  },

  // Security
  {
    title: "Cybersecurity",
    category: "Security",
    desc: "Vulnerability assessment, threat modeling, and defense strategies.",
    icon: FaShieldAlt,
    color: "text-purple-600",
    bg: "group-hover:border-purple-600/50"
  },
  {
    title: "Ethical Hacking",
    category: "Security",
    desc: "Penetration testing and exploit analysis to harden systems.",
    icon: FaBug,
    color: "text-red-500",
    bg: "group-hover:border-red-500/50"
  },
  {
    title: "Linux Hardening",
    category: "OS Security",
    desc: "Securing server environments and managing permissions.",
    icon: SiLinux,
    color: "text-gray-700 dark:text-gray-300",
    bg: "group-hover:border-gray-500/50"
  },
  {
    title: "Network Analysis",
    category: "Security",
    desc: "Packet sniffing and traffic analysis with Wireshark.",
    icon: SiWireshark,
    color: "text-blue-600",
    bg: "group-hover:border-blue-600/50"
  },

  // DevOps (Added Docker & Git)
  {
    title: "Docker",
    category: "DevOps",
    desc: "Containerization for consistent deployment and isolation.",
    icon: SiDocker,
    color: "text-blue-500",
    bg: "group-hover:border-blue-500/50"
  },
  {
    title: "Git & GitHub",
    category: "Version Control",
    desc: "Source code management and collaborative workflows.",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "group-hover:border-orange-600/50"
  },
];

export default function Skills() {
  return (
    <section className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* 🔮 Background */}
      <BackgroundGlow />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Repeats animation
          variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
             <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
             Technological Arsenal
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">Development</span> & Security Stack
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            I blend creativity with cybersecurity expertise — developing high-performance, 
            secure, and visually stunning digital experiences using modern technologies.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }} // Repeats animation
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 ${skill.bg} transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10`}
            >
              {/* Category Tag */}
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400">
                  {skill.category}
                </span>
              </div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`text-2xl ${skill.color}`} />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {skill.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
