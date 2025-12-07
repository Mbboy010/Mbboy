"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

// === Safe Animation Variants ===
// 1. The Card Animation (Rising Up)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    // Using a bezier array is safer for TS than string literals like "easeOut" in some versions
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// 2. The Container Animation (Staggering the children)
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each card appearing
    },
  },
};

// === Types ===
interface Project {
  title: string;
  desc: string;
  img: string;
  tags: string[];
  demo: string;
  repo: string;
}

// === Data ===
const projects: Project[] = [
  {
    title: "Luxe E-Commerce",
    desc: "A headless Shopify solution featuring real-time inventory and Stripe integration.",
    img: "/works/ecommerce.png",
    tags: ["Next.js", "Shopify", "Tailwind"],
    demo: "#",
    repo: "#",
  },
  {
    title: "UniManage System",
    desc: "Comprehensive portal for universities to manage students, grades, and schedules.",
    img: "/works/school.png",
    tags: ["React", "Node.js", "Postgres"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Corp Business Site",
    desc: "High-performance marketing site with CMS integration for a fintech startup.",
    img: "/works/business.png",
    tags: ["Astro", "Sanity", "Motion"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Fitness Tracker App",
    desc: "Cross-platform mobile app for tracking workouts and nutrition plans.",
    img: "/works/mobile.png",
    tags: ["React Native", "Expo", "Firebase"],
    demo: "#",
    repo: "#",
  },
  {
    title: "Security Dashboard",
    desc: "Visualizing threat data and server logs in real-time for sec-ops teams.",
    img: "/works/dashboard.png",
    tags: ["Vue", "D3.js", "Python"],
    demo: "#",
    repo: "#",
  },
  {
    title: "AI Content Generator",
    desc: "SaaS platform helping creators generate blog posts using OpenAI's GPT-4.",
    img: "/works/ai.png",
    tags: ["Next.js", "OpenAI API", "Stripe"],
    demo: "#",
    repo: "#",
  },
];

export default function Portfolio() {
  return (
    <section className="relative py-32 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* Background Elements */}
      <BackgroundGlow />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Portfolio
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">
              Works
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            A collection of projects where I&apos;ve implemented secure coding practices, scalable architecture, and pixel-perfect design.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          // viewport settings explain:
          // once: false -> Animations repeat every time you scroll up/down
          // margin: "-100px" -> Animation starts when element is 100px into the screen (prevents half-cut animations)
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="group relative flex flex-col bg-white dark:bg-[#111] rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative w-full h-60 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {/* Note: Ensure you have these images in public/works/ folder */}
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-110"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-gray-900 hover:bg-purple-500 hover:text-white transition-all transform hover:scale-110"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-300 border border-purple-100 dark:border-purple-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                  {p.desc}
                </p>

                <div className="pt-4 mt-auto border-t border-gray-100 dark:border-gray-800 flex items-center text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors cursor-pointer">
                  View Case Study <FaArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold hover:bg-purple-600 dark:hover:bg-gray-200 transition-colors shadow-lg hover:shadow-purple-500/25"
          >
            View All Projects <FaArrowRight />
          </Link>
        </motion.div>

      </Container>
    </section>
  );
}
