"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import Image from "next/image";

const projects = [
  { title: "E-Commerce Platform", img: "/works/ecommerce.png" },
  { title: "School Management System", img: "/works/school.png" },
  { title: "Business Website", img: "/works/business.png" },
  { title: "Mobile App (Expo)", img: "/works/mobile.png" },
];

export default function Portfolio() {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-dark text-gray-900 dark:text-white transition-colors duration-500">
      {/* 🔮 Background Glow */}
      <BackgroundGlow />

      <Container>
        {/* 🧭 Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 15,
            duration: 1,
          }}
          className="text-3xl lg:text-5xl font-extrabold text-center leading-snug"
        >
          Take a look at my{" "}
          <span className="text-purple-600 dark:text-purple-400">
            Recent Projects
          </span>
        </motion.h2>

        {/* 💼 Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {projects.map((p, i) => {
            const fromLeft = i % 2 === 0;
            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -150 : 150,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 18,
                  mass: 0.8,
                  delay: i * 0.1,
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group bg-gradient-to-br from-gray-100 to-white dark:from-[#1a1a2e] dark:to-[#111] rounded-2xl shadow-lg hover:shadow-purple-400/40 transition-all duration-700 overflow-hidden"
              >
                {/* 🖼️ Image Wrapper */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 120, damping: 15 }}
                  className="overflow-hidden rounded-t-2xl"
                >
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-2xl transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                {/* 📄 Project Info */}
                <div className="p-5 text-center bg-gray-50 dark:bg-[#151320] rounded-b-2xl">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {p.title}
                  </h3>
                </div>

                {/* ✨ Continuous Ring Pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 border-4 border-purple-500/20 rounded-2xl pointer-events-none"
                ></motion.div>

                {/* 🌈 Hover Glow */}
                <div className="absolute inset-0 bg-purple-400/10 dark:bg-purple-600/10 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 -z-10"></div>
              </motion.div>
            );
          })}
        </div>

        {/* 🌟 Subtle Glow Behind Grid */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[160px] rounded-full -z-10"></div>
      </Container>
    </section>
  );
}