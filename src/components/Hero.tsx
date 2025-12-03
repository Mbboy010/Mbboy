"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Button from "./ui/Button";
import Container from "./Container";

// Prevent SSR crashes from browser APIs inside HeroDesign
const HeroDesign = dynamic(() => import("./home/HeroDesign"), { ssr: false });

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
    <section className="relative min-h-screen flex items-center text-gray-900 dark:text-gray-100 py-24 overflow-hidden transition-colors duration-500">
      
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <HeroDesign />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] opacity-50 dark:opacity-20" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 dark:opacity-20" />
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* LEFT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center lg:text-left max-w-2xl space-y-8"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="flex justify-center lg:justify-start">
              <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase border border-purple-200 dark:border-purple-700/50">
                🚀 Available for Hire
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
                  className="relative w-full sm:w-auto bg-gray-900 dark:bg-black text-white hover:bg-gray-800 dark:hover:bg-gray-900 font-semibold py-4 px-8 rounded-xl flex items-center justify-center gap-2"
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

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full lg:w-[45%]"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-4 bg-white/30 dark:bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 shadow-2xl"
            >
              <div className="relative rounded-[2rem] overflow-hidden aspect-square bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-black">
                <Image
                  src="/profile.png"
                  alt="Profile image"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <motion.div 
                className="absolute -right-6 top-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <span className="text-2xl">🛡️</span>
              </motion.div>

              <motion.div 
                className="absolute -left-6 bottom-10 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 blur-[80px] opacity-40 dark:opacity-30 -z-10 transform scale-90" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

// Stat Item — must stay OUTSIDE the Hero component
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center lg:items-start p-4 bg-white/50 dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
      <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">
        {number}
      </span>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide mt-1">
        {label}
      </span>
    </div>
  );
}