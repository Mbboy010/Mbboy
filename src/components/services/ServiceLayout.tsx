"use client";

import React from "react";
// ✅ Added 'Variants' type import
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import Container from "@/components/Container";
import BackgroundGlow from "@/components/BackgroundGlow";

// --- Types ---
export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  features: ServiceFeature[];
  techStack: string[];
  ctaLink?: string; 
  ctaText?: string;
  // ✅ NEW VARIABLE: Allows custom animations to be passed in
  variants?: Variants; 
}

// --- Default Animation Variants ---
// ✅ Explicitly typed as Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.1 } 
  }
};

export default function ServiceLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  color,
  gradient,
  features,
  techStack,
  ctaLink = "/collaborate", 
  ctaText = "Get a Quote",
  // ✅ Destructure custom variants (default to fadeInUp)
  variants = fadeInUp
}: ServicePageProps) {
  return (
    <div className="relative py-24 min-h-screen bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      <BackgroundGlow />
      
      <Container>
        {/* 1. Hero Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, margin: "-100px" }} 
          // ✅ Use the variable here
          variants={variants}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className={`w-20 h-20 mx-auto mb-8 rounded-3xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-2xl shadow-purple-500/20`}>
            <Icon size={40} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            {title}
          </h1>
          <p className={`text-xl font-medium ${color} mb-6 uppercase tracking-widest`}>
            {subtitle}
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </motion.div>

        {/* 2. Features Grid */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, margin: "-100px" }} 
          variants={stagger}
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {features.map((feature, i) => (
            <motion.div 
              key={i} 
              // ✅ Use the variable here as well
              variants={variants}
              className="p-8 rounded-3xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 shadow-lg hover:border-purple-500/30 transition-colors"
            >
              <h3 className="text-xl font-bold mb-3 flex items-center gap-3">
                <CheckCircle className={color} size={20} />
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed ml-8">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Tech Stack / Tools */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, margin: "-50px" }} 
          // ✅ Use the variable here
          variants={variants}
          className="mb-24 text-center"
        >
          <h2 className="text-2xl font-bold mb-8">Technologies & Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 font-semibold text-sm hover:border-purple-500/50 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4. CTA */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: false, margin: "-50px" }} 
          // ✅ Use the variable here
          variants={variants}
          className={`rounded-3xl bg-gradient-to-r ${gradient} p-12 text-center shadow-2xl relative overflow-hidden`}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to start?</h2>
            
            <Link href={ctaLink} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:scale-105 transition-transform">
              {ctaText} <ArrowRight size={18} />
            </Link>
            
          </div>
        </motion.div>

      </Container>
    </div>
  );
}
