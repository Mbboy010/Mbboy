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
import BackgroundGlow from "@/components/BackgroundGlow";
import Container from "@/components/Container";

// --- Animations ---
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { 
    delay, 
    duration: 0.5, 
    ease: "easeOut" as const 
  },
  viewport: { once: false, amount: 0.1 } as const,
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

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

const steps = [
  { num: "01", title: "Discovery", desc: "We discuss your goals and requirements." },
  { num: "02", title: "Design", desc: "I create high-fidelity mockups for approval." },
  { num: "03", title: "Develop", desc: "I build the site using clean, secure code." },
  { num: "04", title: "Launch", desc: "Deployment, testing, and final handoff." },
];

export default function PricingPage() {
  return (
    <section className="relative min-h-screen py-24 bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 overflow-hidden">
      <BackgroundGlow />
      <Container className="relative z-10">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in Quality{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
              & Security
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            No hidden fees. Choose a package that fits your stage of growth.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUp(0)}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 group
                ${
                  plan.highlight
                    ? "bg-white dark:bg-[#121212] border-2 border-purple-500 shadow-2xl"
                    : "bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10 hover:border-purple-500/50"
                }
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg">
                  {plan.tag}
                </div>
              )}

              <div className="mb-6">
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl ${
                    plan.highlight
                      ? "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300"
                      : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <plan.icon />
                </div>

                <h3 className="text-xl font-bold">{plan.name}</h3>
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
                    <FaCheck className={`${plan.highlight ? "text-purple-500" : "text-gray-400"} mt-0.5`} size={12} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.highlight
                    ? "bg-purple-600 text-white hover:bg-purple-700"
                    : "bg-gray-100 dark:bg-white/5 hover:bg-purple-600 hover:text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ */}
        <motion.div {...fadeUp(0.4)} className="mt-32 max-w-3xl mx-auto">
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
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-lg font-medium">{faq.question}</span>

        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180 text-purple-500" : "text-gray-400"}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-sm text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700/50">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}