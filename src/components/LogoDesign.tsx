"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { PenTool, Layers, Sparkles, Palette } from "lucide-react";

export default function LogoDesign() {
  const steps = [
    {
      icon: PenTool,
      title: "Creative Research",
      desc: "Understanding your brand vision, audience, and goals to create a meaningful design direction.",
    },
    {
      icon: Layers,
      title: "Concept & Sketch",
      desc: "Developing logo sketches and digital drafts that align with your identity and message.",
    },
    {
      icon: Palette,
      title: "Color & Typography",
      desc: "Choosing the perfect color palette and typefaces that enhance your brand’s personality.",
    },
    {
      icon: Sparkles,
      title: "Final Design & Delivery",
      desc: "Polishing the final logo and delivering all formats (SVG, PNG, JPG, PDF) ready for use.",
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 text-gray-900 dark:bg-[#0B0B0F] dark:text-white transition-colors duration-500">
      <BackgroundGlow />
      <Container>
        {/* ✨ Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="uppercase tracking-widest text-sm text-gray-600 dark:text-gray-400">
            LOGO DESIGN
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            Crafting{" "}
            <span className="text-purple-600 dark:text-customPurple">
              Timeless Logos
            </span>{" "}
            That Speak for Brands
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            Every logo I design tells a story — simple, modern, and memorable.
            I blend creativity with strategy to deliver visuals that connect
            with your audience instantly.
          </p>
        </motion.div>

        {/* 🎨 Design Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl border shadow-md hover:shadow-lg bg-white border-gray-200 hover:border-purple-400/40 dark:bg-gradient-to-br dark:from-[#1a1a2e] dark:to-[#111] dark:border-white/10 dark:hover:border-customPurple/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-customPurple/20">
                  <Icon className="w-6 h-6 text-purple-600 dark:text-customPurple" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🖼️ Sample Logos */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {["/logos/logo1.png", "/logos/logo2.png", "/logos/logo3.png", "/logos/logo4.png"].map(
            (src, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="rounded-2xl overflow-hidden border bg-white border-gray-200 hover:border-purple-400/40 dark:bg-white/5 dark:border-white/10 dark:hover:border-customPurple/40 transition-all duration-300"
              >
                <img
                  src={src}
                  alt={`Logo ${i + 1}`}
                  className="w-full h-40 object-contain p-4 transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            )
          )}
        </motion.div>
      </Container>
    </section>
  );
}