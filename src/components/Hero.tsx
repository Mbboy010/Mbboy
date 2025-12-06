"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Button from "./ui/Button";
import Container from "./Container";

// Prevent SSR crashes from browser APIs inside HeroDesign
const HeroDesign = dynamic(() => import("./home/HeroDesign"), { ssr: false });

// Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function Hero() {
  return (
    <section className="relative flex items-center text-gray-900 dark:text-gray-100 py-24 overflow-hidden transition-colors duration-500">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <HeroDesign />
        <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] opacity-40 dark:opacity-20" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-40 dark:opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* LEFT SIDE - TEXT Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }} // FIXED: Animation repeats on scroll
            variants={staggerContainer}
            className="text-center lg:text-left max-w-2xl space-y-8 lg:w-1/2"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase border border-purple-200 dark:border-purple-700/50">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                Available for Projects
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
              I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 dark:from-purple-400 dark:to-blue-400">Musa Hakilu</span>
              <br />
              <span className="text-gray-900 dark:text-white text-4xl md:text-6xl mt-2 block">
                Securing the Digital World.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeInUp} className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
              A <span className="font-semibold text-gray-900 dark:text-white">Cybersecurity Specialist</span> & Full-Stack Developer.  
              I fuse secure engineering with modern design to build bulletproof applications for  
              <span className="text-purple-600 dark:text-purple-400 font-medium"> Businesses</span>,  
              <span className="text-purple-600 dark:text-purple-400 font-medium"> Schools</span>, and  
              <span className="text-purple-600 dark:text-purple-400 font-medium"> E-commerce</span>.
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full pt-4">
              <div className="relative group w-full sm:w-auto">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200"></div>

                <Button
                  variant="primary"
                  className="relative w-full sm:w-auto  text-white hover:bg-gray-800 dark:hover:bg-gray-900 font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2"
                >
                  View Projects 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 dark:hover:border-purple-500 font-semibold py-4 px-8 rounded-xl transition-all duration-300 bg-transparent"
              >
                Let’s Collaborate
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <StatItem number="5+" label="Years Exp." />
              <StatItem number="150+" label="Projects" />
              <StatItem number="90+" label="Clients" />
              <StatItem number="12" label="Brands" />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - IMAGE SECTION (Replaced) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            viewport={{ once: false }} // FIXED: Animation repeats on scroll
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
          >
            <div className="relative w-96 h-[30rem] md:w-[29rem] md:h-[38rem]">
              
              {/* Background Glow/Blob behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-[2rem] rotate-6 opacity-20 blur-xl" />
              
              {/* Main Image Card */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white dark:bg-[#0b1220]">
                <Image
                  src="/profile.png"
                  alt="Musa Hakilu"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                  priority
                />
                {/* Gradient Overlay at bottom for depth */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* "Open for Work" Badge */}
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

// Stat Item Component
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start p-4 bg-white/60 dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/10 backdrop-blur-md hover:-translate-y-1 transition-transform duration-300 shadow-sm">
      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
        {number}
      </span>
      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
        {label}
      </span>
    </div>
  );
}
