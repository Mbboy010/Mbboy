"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import Button from "./ui/Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative text-gray-900 dark:text-white py-24 overflow-hidden transition-colors duration-500 bg-white dark:bg-dark">
      {/* 🔮 Background Glow */}
      <BackgroundGlow />

      {/* 🌆 Container */}
      <Container>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* ✨ Left side content */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-center md:text-left max-w-xl space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              I’m <span className="text-purple-500 dark:text-purple-400">Musa Hakilu</span> 👋 <br />
              <span className="text-gray-900 dark:text-white">
                Securing & Building Digital Experiences
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
            >
              I’m a <span className="text-purple-500 dark:text-purple-300">cybersecurity specialist </span> 
              and full-stack developer focused on building modern, secure, and high-performance web & mobile
              applications. I protect systems from vulnerabilities while creating powerful digital experiences
              for{" "}
              <span className="text-purple-500 dark:text-purple-300">businesses</span>,{" "}
              <span className="text-purple-500 dark:text-purple-300">schools</span>, and{" "}
              <span className="text-purple-500 dark:text-purple-300">e-commerce</span> platforms.
            </motion.p>

            {/* 🎯 Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full"
            >
              <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition-all duration-300"
                >
                  View My Projects
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-purple-500 text-purple-600 dark:text-purple-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 dark:hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                >
                  Let’s Collaborate
                </Button>
              </motion.div>
            </motion.div>

            {/* 📊 Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.9 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left"
            >
              <StatItem number="5+" label="Years Experience" />
              <StatItem number="150+" label="Projects Secured" />
              <StatItem number="90+" label="Happy Clients" />
              <StatItem number="12" label="Brands Protected" />
            </motion.div>
          </motion.div>

          {/* 🖼️ Right side image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative mt-16 md:mt-0 flex justify-center md:justify-end w-full md:w-auto"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <Image
                src="/profile.png"
                alt="Musa Hakilu"
                height={400}
                width={400}
                className="rounded-3xl relative z-10 "
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* 🧩 Stat Item Component */
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="transition-all duration-300"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400"
      >
        {number}
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-600 dark:text-gray-400 text-sm md:text-base"
      >
        {label}
      </motion.p>
    </motion.div>
  );
}