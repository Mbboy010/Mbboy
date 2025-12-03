"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
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
const techStack = [
  { name: "React", Icon: FaReact, note: "Modern Frontend" },
  { name: "Next.js", Icon: FaCode, note: "Full-Stack Framework" },
  { name: "Node.js", Icon: FaNodeJs, note: "Backend Services" },
  { name: "Python", Icon: FaPython, note: "Automation & Security" },
  { name: "SQL", Icon: FaDatabase, note: "Data Modeling" },
  { name: "Security", Icon: FaShieldAlt, note: "Pentesting & Audits" },
];

export default function AboutCon() {
  return (
    <section className="relative py-24 min-h-screen bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">

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

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat number="5+" label="Years Exp." />
              <Stat number="150+" label="Projects" />
              <Stat number="90+" label="Clients" />
              <Stat number="12" label="Brands" />
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

        <div className="my-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-800 to-transparent" />

        {/* Bio & Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-12">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Professional Bio</motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I started my journey as a developer and quickly found a passion for
                application security. I specialize <span className="text-purple-600 dark:text-purple-400 font-medium">threat modeling</span>, <span className="text-purple-600 dark:text-purple-400 font-medium">secure architecture</span>,
                and building robust CI/CD pipelines. My goal is to bridge the gap between complex security requirements and clean, user-friendly design.
              </motion.p>

              <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {['Secure Web Dev', 'Penetration Testing', 'AI & Automation', 'Design & Branding'].map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                    <span className="text-purple-500">✔</span>
                    <span className="text-gray-700 dark:text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </motion.div>

              <motion.h3 variants={fadeIn} className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Experience</motion.h3>
              <div className="space-y-0 relative border-l border-gray-300 dark:border-gray-800 ml-3">
                <TimelineItem year="2024 — Present" title="Senior Security Engineer" org="Freelance / Consulting" desc="Delivering vulnerability assessments, pentests, and secure architecture guidance." />
                <TimelineItem year="2021 — 2024" title="Full-Stack Engineer" org="Tech Startups" desc="Built e‑commerce and business platforms using Next.js and secure APIs." />
                <TimelineItem year="2018 — 2021" title="Frontend Developer" org="Digital Agencies" desc="Designed high‑fidelity UI prototypes translated to production apps." />
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={staggerContainer}
              className="bg-white/50 dark:bg-[#0b1220]/50 backdrop-blur-sm p-6 rounded-3xl border border-gray-200 dark:border-white/5 sticky top-24 shadow-sm dark:shadow-none"
            >
              <motion.h3 variants={fadeIn} className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <FaCode className="text-purple-500" /> Tech Stack
              </motion.h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techStack.map((t, i) => (
                  <motion.div
                    variants={fadeIn}
                    custom={i}
                    key={t.name}
                    whileHover={{ y: -5 }}
                    className="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-purple-100 dark:bg-gradient-to-br dark:from-purple-500/20 dark:to-blue-500/20 text-purple-600 dark:text-purple-300">
                        <t.Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-800 dark:text-gray-200">{t.name}</div>
                        <div className="text-xs text-gray-500 mt-1">{t.note}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeIn} className="mt-8 pt-6 border-t border-gray-200 dark:border-white/5">
                <h4 className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                  Toolkit &amp; Platforms
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "AWS", "Git", "Figma", "Burp Suite", "Postgres", "Tailwind"].map((x) => (
                    <span
                      key={x}
                      className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-colors"
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Projects Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="mt-32"
        >
          <motion.div variants={fadeIn} className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2 max-w-lg">
                Selected works demonstrating security, performance, and design.
              </p>
            </div>
            <a href="/works" className="text-purple-600 dark:text-purple-400 hover:text-purple-500 dark:hover:text-purple-300 text-sm font-medium flex items-center gap-1">
              View All <FaArrowRight size={12} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard title="E-Commerce Core" img="/works/ecommerce.png" desc="Headless Shopify solution with Next.js." tags={["Next.js", "Stripe", "Security"]} />
            <ProjectCard title="EduManage System" img="/works/school.png" desc="Comprehensive portal for universities." tags={["React", "Node.js", "SQL"]} />
            <ProjectCard title="SecAudit Toolkit" img="/works/security.png" desc="Automated vulnerability scanner script." tags={["Python", "Pentest", "Automation"]} />
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          id="contact"
          className="mt-32 relative overflow-hidden rounded-3xl bg-[#111827] dark:bg-gradient-to-b dark:from-[#111827] dark:to-[#080c14] border border-gray-800 dark:border-white/10 p-10 md:p-16 text-center shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-purple-600/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-block p-3 rounded-full bg-white/10 mb-6">
              <FaEnvelope className="text-2xl text-purple-400" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to secure your next idea?</h3>
            <p className="text-gray-300 mb-8">
              Whether you need a full-stack application, a security audit, or technical consultation, I&apos;m here to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:musahakilu@email.com"
                className="px-8 py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-500 transition-colors shadow-lg shadow-purple-900/20"
              >
                Send an Email
              </a>
              <a
                href="/works"
                className="px-8 py-3.5 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white transition-colors"
              >
                Browse Portfolio
              </a>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 dark:text-gray-600 text-sm pb-10">
          © {new Date().getFullYear()} Musa Hakilu. All rights reserved.
        </div>
      </Container>
    </section>
  );
}

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

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white/80 dark:bg-[#111827]/50 backdrop-blur-sm border border-gray-200 dark:border-white/5 rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform duration-300 shadow-sm dark:shadow-none">
      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400 mb-1">
        {number}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-500 font-medium uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}



function ProjectCard({
  title,
  img,
  desc,
  tags,
}: {
  title: string;
  img: string;
  desc: string;
  tags: string[];
}) {
  return (
    <div className="group bg-white/80 dark:bg-[#111827]/50 backdrop-blur-md border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-md dark:shadow-none transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm leading-relaxed">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  org,
  desc,
}: {
  year: string;
  title: string;
  org: string;
  desc: string;
}) {
  return (
    <div className="relative pl-8 pb-10 border-l border-gray-300 dark:border-white/10">
      {/* Dot */}
      <span className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-purple-600 dark:bg-purple-400"></span>

      {/* Year */}
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
        {year}
      </p>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
        {title}
      </h4>

      {/* Organization */}
      <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-0.5">
        {org}
      </p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}