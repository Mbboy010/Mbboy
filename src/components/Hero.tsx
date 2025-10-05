"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundGlow from "./BackgroundGlow";
import Button from "./ui/Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative text-white py-24 overflow-hidden">
      {/* 🔮 Background Glow */}
      <BackgroundGlow />

      {/* 🌆 Container */}
      <Container>
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          
          {/* ✨ Left side content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center md:text-left max-w-xl space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight"
            >
              I’m <span className="text-purple-400">Musa Hakilu</span> 👋 <br />
              <span className="text-white">Building Brands & Digital Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-gray-300 text-lg leading-relaxed"
            >
              I’m a creative UI/UX designer and full-stack developer specializing
              in modern, secure, and high-performance web & mobile experiences.
              I’ve built products for <span className="text-purple-300">businesses</span>,
              <span className="text-purple-300"> schools</span>, and{" "}
              <span className="text-purple-300">e-commerce</span> platforms — turning
              ideas into reality with code and design.
            </motion.p>

            {/* 🎯 Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <Button variant="primary">View My Projects</Button>
              <Button variant="outline">Let’s Collaborate</Button>
            </motion.div>

            {/* 📊 Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center md:text-left"
            >
              <StatItem number="5+" label="Years Experience" />
              <StatItem number="150+" label="Projects Completed" />
              <StatItem number="90+" label="Happy Clients" />
              <StatItem number="12" label="Brands Built" />
            </motion.div>
          </motion.div>

          {/* 🖼️ Right side image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mt-16 md:mt-0 flex justify-center md:justify-end w-full md:w-auto"
          >
            <div className="relative">
              <Image
                src="/profile.png"
                alt="Musa Hakilu"
                height={400}
                width={400}
                className="rounded-3xl"
                priority
              />
            </div>

            {/* Glow behind image */}
            <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-purple-500/30 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

/* 🧩 Small component for stat items */
function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="transition-all duration-300"
    >
      <p className="text-3xl md:text-4xl font-bold text-purple-400">{number}</p>
      <p className="text-gray-400 text-sm md:text-base">{label}</p>
    </motion.div>
  );
}