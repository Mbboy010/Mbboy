"use client";

import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { motion } from "framer-motion";
import { FaCheckCircle, FaShieldAlt } from "react-icons/fa";

// --- Types ---
interface Plan {
  name: string;
  price: string;
  desc: string;
  features: string[];
  highlight?: boolean;
  isSecurity?: boolean;
}

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    // FIXED: Added 'as const' to fix TypeScript error
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
};

// --- Data ---
const plans: Plan[] = [
  {
    name: "Basic",
    price: "₦150,000",
    desc: "Perfect for personal blogs and portfolios.",
    features: [
      "3 Pages or Screens",
      "2 Revisions",
      "Responsive Design",
      "Source Code Included",
    ],
    highlight: false,
  },
  {
    name: "Standard",
    price: "₦350,000",
    desc: "Ideal for small businesses and startups.",
    features: [
      "10 Pages or Screens",
      "5 Revisions",
      "Backend Integration",
      "Basic SEO & Security Setup",
    ],
    highlight: true, // Tag as Popular
  },
  {
    name: "Premium",
    price: "₦700,000",
    desc: "For large scale applications and companies.",
    features: [
      "Unlimited Pages/Screens",
      "Unlimited Revisions",
      "Full Deployment",
      "Advanced Optimization",
    ],
    highlight: false,
  },
  {
    name: "Cyber Security",
    price: "₦500,000",
    desc: "Hardening and protecting existing systems.",
    features: [
      "Vulnerability Assessment",
      "Penetration Testing",
      "Firewall Configuration",
      "Incident Response Report",
    ],
    isSecurity: true, // Special styling
  },
];

export default function Pricing() {
  return (
    <section className="relative text-gray-900 dark:text-white py-24 overflow-hidden transition-colors duration-500">
      <BackgroundGlow />

      <Container className="relative z-10">
        {/* 🔥 Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">Power</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Fair prices for high-quality code and iron-clad security. 
            No hidden fees, just results.
          </p>
        </motion.div>

        {/* 💫 Pricing Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {plans.map((p, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              viewport={{ once: false }} 
              initial="hidden"
              whileInView="visible"
              className={`relative flex flex-col p-6 rounded-3xl border transition-all duration-300
                ${
                  p.isSecurity
                    ? "bg-[#1a1a2e] border-purple-500/50 shadow-2xl shadow-purple-500/20"
                    : "bg-white dark:bg-[#0b1220] border-gray-200 dark:border-white/10 hover:border-purple-400/50 hover:shadow-xl"
                }
                ${p.highlight ? "border-purple-500 ring-1 ring-purple-500/50" : ""}
              `}
            >
              {/* Most Popular Badge */}
              {p.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Security Badge */}
              {p.isSecurity && (
                <div className="absolute top-4 right-4 text-purple-400 opacity-20">
                  <FaShieldAlt size={40} />
                </div>
              )}

              <div className="mb-4">
                <h3 className={`text-xl font-bold ${p.isSecurity ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {p.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 h-8">
                  {p.desc}
                </p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-100 dark:border-white/5">
                <span className={`text-3xl font-bold ${p.isSecurity ? 'text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                  {p.price}
                </span>
                <span className="text-sm text-gray-500 ml-1">/project</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <FaCheckCircle className={`mt-0.5 flex-shrink-0 ${p.isSecurity ? "text-purple-400" : "text-green-500"}`} />
                    <span className="text-gray-600 dark:text-gray-300 leading-snug">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg
                  ${
                    p.isSecurity
                      ? "bg-purple-600 hover:bg-purple-500 text-white shadow-purple-900/20"
                      : p.highlight 
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
                        : "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/10"
                  }`}
              >
                {p.isSecurity ? "Secure Now" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
