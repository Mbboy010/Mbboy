"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaCheck, 
  FaChevronDown, 
  FaShieldAlt, 
  FaRocket, 
  FaCode, 
  FaMobileAlt 
} from "react-icons/fa";
import Container from "@/components/Container";

// --- Pricing Data ---
const pricingPlans = [
  {
    name: "Starter",
    price: "₦150,000",
    description: "Perfect for personal portfolios, blogs, or landing pages.",
    features: [
      "Responsive Website (1–3 pages)",
      "Basic UI/UX Design",
      "Fast Performance",
      "Mobile Friendly",
      "Basic Security Setup",
      "Email Support",
    ],
    highlight: false,
    icon: FaMobileAlt,
    buttonText: "Start Project",
  },
  {
    name: "Pro Business",
    price: "₦450,000",
    description: "For businesses needing a robust, high-converting online presence.",
    features: [
      "Up to 7 Pages Website",
      "Advanced UI/UX & Animations",
      "SEO Friendly Structure",
      "CMS Integration (Sanity/Strapi)",
      "Advanced Security (Firewall)",
      "Priority Support",
      "1 Month Maintenance",
    ],
    highlight: true,
    tag: "Most Popular",
    icon: FaRocket,
    buttonText: "Get Started",
  },
  {
    name: "Enterprise",
    price: "₦1.2M+",
    description: "Full-scale web applications, SaaS products, and portals.",
    features: [
      "Full Web App (Dashboards, Auth)",
      "Database Design (SQL/NoSQL)",
      "Real-Time Features",
      "Cloud Deployment (AWS/Vercel)",
      "Full Cybersecurity Suite",
      "24/7 Support + Maintenance",
      "Branding & Logo Design",
    ],
    highlight: false,
    icon: FaCode,
    buttonText: "Contact Sales",
  },
  {
    name: "SecAudit + Fix",
    price: "₦300,000",
    description: "Deep dive security audit and patching for existing apps.",
    features: [
      "Full Penetration Testing",
      "Vulnerability Scan Report",
      "Malware / Backdoor Removal",
      "SQLi, XSS, CSRF Patching",
      "Secure Auth Implementation",
      "API Security Hardening",
      "DDOS Protection Setup",
    ],
    highlight: false,
    special: true,
    icon: FaShieldAlt,
    buttonText: "Secure Now",
  },
];

// --- FAQ Data ---
const faqs = [
  {
    question: "Do you include hosting and domain?",
    answer:
      "I assist with setup of domains and hosting (Vercel, AWS), but hosting subscription is paid by the client.",
  },
  {
    question: "What is the payment structure?",
    answer:
      "I require a 60% deposit to begin the project, and 40% after completion before launch.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes! Pro & Enterprise plans include 1 month free support. After that, monthly retainers are available.",
  },
  {
    question: "Can I pay in installments?",
    answer:
      "Enterprise projects may use milestone-based payment (Deposit → Alpha → Launch).",
  },
];

export default function PriceCon() {
  return (
    <section className="relative min-h-screen py-32 md:py-40 bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 overflow-hidden">
      
      {/* 🔮 ANIMATED GEOMETRIC BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* 1. Deep Gradient Base (Static) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10 dark:from-[#1a0b2e] dark:via-[#0f0518] dark:to-black" />

        {/* 2. Top Left: Parallel Lines (Increased Size) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 0.3, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-[-5%] left-[-5%] w-48 h-48 md:w-80 md:h-80 opacity-20 dark:opacity-30"
        >
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-purple-500 dark:border-white rounded-tl-[3rem]" />
          <div className="absolute top-4 left-4 md:top-6 md:left-6 w-full h-full border-t-2 border-l-2 border-purple-500/60 dark:border-white/60 rounded-tl-[2.5rem]" />
          <div className="absolute top-8 left-8 md:top-12 md:left-12 w-full h-full border-t-2 border-l-2 border-purple-500/30 dark:border-white/30 rounded-tl-[2rem]" />
        </motion.div>

        {/* 3. Top Right: Square Overlays & Dots (Increased Size) */}
        <motion.div 
          initial={{ opacity: 0, rotate: -20 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          className="absolute top-[2%] right-[2%] z-0"
        >
          {/* Intersecting Squares */}
          <div className="relative w-32 h-32 md:w-56 md:h-56 opacity-20 dark:opacity-40">
            <div className="absolute inset-0 border-2 border-purple-400 dark:border-white transform -rotate-12" />
            <div className="absolute inset-0 border-2 border-purple-400 dark:border-white transform rotate-12 translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8" />
          </div>
          {/* Dot Grid */}
          <div className="hidden md:grid absolute top-32 right-32 grid-cols-5 gap-4 opacity-15 dark:opacity-30">
             {[...Array(25)].map((_, i) => (
               <div key={i} className="w-1.5 h-1.5 bg-purple-900 dark:bg-white rounded-full" />
             ))}
          </div>
        </motion.div>

        {/* 4. Center: Massive Circle Outline */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[900px] md:h-[900px] border border-purple-500/10 dark:border-white/5 rounded-full" 
        />

        {/* 5. Center Left: Vertical Rectangle (Increased Size) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 0.3, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="absolute top-[25%] left-[-2%] md:left-[5%] w-24 h-48 md:w-32 md:h-64 border-2 border-purple-400/20 dark:border-white/10 opacity-30 transform rotate-12" 
        />

        {/* 6. Bottom Right: Solid Gradient Circle & Dots (Increased Size) */}
        <motion.div 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 1 }}
           className="absolute bottom-[-5%] right-[-5%]"
        >
            {/* Gradient Orb */}
            <div className="w-64 h-64 md:w-[500px] md:h-[500px] bg-gradient-to-tr from-purple-600/20 to-pink-500/20 rounded-full blur-3xl" />
            {/* Dot Grid Overlay */}
            <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 grid grid-cols-6 gap-3 md:gap-5 opacity-20 dark:opacity-40">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-900 dark:bg-white rounded-full" />
              ))}
            </div>
             {/* Outline */}
            <div className="absolute bottom-[-20px] right-[-20px] w-48 h-80 md:w-80 md:h-[600px] border border-purple-500/20 dark:border-white/10" />
        </motion.div>

        {/* 7. Bottom Left: Massive Gradient Orb */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1.5 }}
          className="absolute bottom-[-10%] left-[-15%] w-[400px] h-[400px] md:w-[800px] md:h-[800px] bg-blue-600/10 dark:bg-purple-900/20 rounded-full blur-[100px] md:blur-[150px]" 
        />
      </div>

      <Container className="relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4 border border-purple-200 dark:border-purple-700/50">
            Transparent Pricing
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Invest in Quality{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              & Security
            </span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            No hidden fees. Choose a package that fits your stage of growth.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }} // Re-animates every time
              transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger based on index
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 group
                ${
                  plan.highlight
                    ? "bg-white dark:bg-[#121212] border-2 border-purple-500 shadow-2xl scale-105 z-10"
                    : "bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-xl"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl transition-colors ${
                    plan.highlight
                      ? "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300"
                      : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30 group-hover:text-purple-500"
                  }`}
                >
                  <plan.icon />
                </div>

                <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/project</span>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <FaCheck 
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-purple-500" : "text-gray-400 group-hover:text-purple-500"}`} 
                      size={12} 
                    />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all shadow-md ${
                  plan.highlight
                    ? "bg-purple-600 text-white hover:bg-purple-700 hover:shadow-purple-500/25"
                    : "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-32 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}

/* -------------------------------------------------
   FAQ Item Component
-------------------------------------------------- */
function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white/80 dark:bg-white/5 backdrop-blur-sm overflow-hidden hover:border-purple-500/30 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? "text-purple-600 dark:text-purple-400" : ""}`}>
          {faq.question}
        </span>

        <FaChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-500" : "text-gray-400"}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700/50 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
