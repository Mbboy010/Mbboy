"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const plans = [
  {
    name: "Basic",
    price: "₦150,000",
    features: [
      "3 Pages or Screens",
      "2 Revisions",
      "Responsive Design",
      "Source Code Included",
    ],
  },
  {
    name: "Standard",
    price: "₦350,000",
    features: [
      "10 Pages or Screens",
      "5 Revisions",
      "Backend Integration",
      "Basic SEO & Security Setup",
    ],
  },
  {
    name: "Premium",
    price: "₦700,000",
    features: [
      "Unlimited Pages or Screens",
      "Unlimited Revisions",
      "Full Deployment & Maintenance",
      "Advanced Security & Optimization",
    ],
  },
  {
    name: "Cybersecurity Plan",
    price: "₦500,000",
    features: [
      "Comprehensive Vulnerability Assessment",
      "Penetration Testing (Web & App)",
      "Firewall Configuration & Hardening",
      "Incident Response & Security Audit Report",
    ],
  },
];

export default function Pricing() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Apply theme to <html> tag for Tailwind dark mode
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <section className="relative text-gray-900 dark:text-white py-20 overflow-hidden transition-colors duration-500">
      <BackgroundGlow />



      <Container>
        {/* 🔥 Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="uppercase tracking-widest text-sm text-gray-500 dark:text-gray-400"
          >
            PRICING PLANS
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl lg:text-4xl font-bold mt-2"
          >
            Flexible <span className="text-purple-600 dark:text-purple-400">Pricing</span> for Every Project
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mt-4"
          >
            Choose a plan that fits your goals — whether you’re launching a website,
            building an app, or securing your systems from cyber threats.
          </motion.p>
        </motion.div>

        {/* 💫 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
              className={`rounded-2xl p-8 text-center shadow-lg border transition-all duration-300 
                ${
                  p.name === "Cybersecurity Plan"
                    ? "bg-gradient-to-br from-purple-100 to-gray-50 dark:from-purple-900 dark:to-[#111] border-purple-400 dark:border-purple-500 shadow-purple-400/30 dark:shadow-purple-500/50"
                    : "bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a2e] dark:to-[#111] border-gray-200 dark:border-gray-700 hover:shadow-purple-500/40"
                }`}
            >
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false }}
                className="text-xl font-semibold text-gray-800 dark:text-white"
              >
                {p.name}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: false }}
                className="text-3xl font-bold mt-4 text-purple-600 dark:text-purple-400"
              >
                {p.price}
              </motion.p>

              <ul className="mt-6 text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                {p.features.map((f, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: j * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-center justify-center gap-2"
                  >
                    <span>✔</span> {f}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(168, 85, 247, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`mt-8 px-6 py-2 rounded-lg font-medium transition-all duration-300 
                  ${
                    p.name === "Cybersecurity Plan"
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "bg-purple-500 hover:bg-purple-600 text-white"
                  }`}
              >
                {p.name === "Cybersecurity Plan"
                  ? "Secure My System"
                  : "Start Project"}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}