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
  transition: { delay, duration: 0.5, ease: "easeOut" },
  // FIXED: Changed to false so animation plays every time it enters view
  viewport: { once: false, amount: 0.1 }, 
});

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// --- Data ---
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
    buttonText: "Start Project", // Added
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
    buttonText: "Get Started", // Added
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
    buttonText: "Contact Sales", // Added
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
    buttonText: "Secure Now", // Added
  },
];

const faqs = [
  {
    question: "Do you include hosting and domain?",
    answer: "I assist with the technical setup of domains and hosting (Vercel, AWS, or Local Hosts), but the subscription cost is covered by the client to ensure you retain full ownership.",
  },
  {
    question: "What is the payment structure?",
    answer: "I typically require a 60% deposit to begin the project, with the remaining 40% due upon completion and final approval before launch.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer: "Yes! The Pro and Enterprise plans come with 1 month of free support. After that, I offer monthly retainer packages for updates and security monitoring.",
  },
  {
    question: "Can I pay in installments?",
    answer: "For Enterprise projects, we can discuss a milestone-based payment plan (e.g., Deposit, Alpha Release, Final Launch).",
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
    <section className="relative min-h-screen py-24 bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      <BackgroundGlow />

      <Container className="relative z-10">
        
        {/* --- Header --- */}
        <motion.div {...fadeUp(0)} className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Invest in Quality <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
               & Security
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            No hidden fees. Choose a package that fits your stage of growth. 
            Standard rates for professional Nigerian businesses.
          </p>
        </motion.div>

        {/* --- Pricing Grid --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }} // Stagger happens once, but children fadeUp will repeat
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 relative"
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUp(0)}
              className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 group
                ${
                  plan.highlight
                    ? "bg-white dark:bg-[#121212] border-2 border-purple-500 shadow-2xl shadow-purple-500/10 scale-100 md:scale-105 z-10"
                    : "bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10 hover:border-purple-500/50 hover:shadow-xl"
                }
                ${plan.special ? "dark:bg-gradient-to-b dark:from-[#0f172a] dark:to-[#0b1220]" : ""}
              `}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
                  {plan.tag}
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-xl
                  ${plan.highlight ? "bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300" : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400"}
                `}>
                  <plan.icon />
                </div>
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 min-h-[40px]">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{plan.price}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">/project</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <FaCheck className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-purple-500" : "text-gray-400"}`} size={12} />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button with Dynamic Text */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                  ${
                    plan.highlight
                      ? "bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-500/25"
                      : "bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600"
                  }
                `}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* --- Process Section --- */}
        <motion.div {...fadeUp(0.3)} className="mt-32">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-bold">How I Work</h2>
             <p className="text-gray-500 dark:text-gray-400 mt-2">Simple, transparent, and collaborative.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-6xl font-bold text-gray-200 dark:text-white/5 absolute -top-4 -left-2 z-0 group-hover:text-purple-500/10 transition-colors">
                  {step.num}
                </div>
                <div className="relative z-10 p-6 pt-8 border-l border-gray-200 dark:border-gray-800">
                   <h3 className="text-xl font-bold mb-2 group-hover:text-purple-500 transition-colors">{step.title}</h3>
                   <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- FAQ Section --- */}
        <motion.div {...fadeUp(0.4)} className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem key={index} faq={faq} />
            ))}
          </div>
        </motion.div>

        {/* --- Final CTA --- */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111827] to-[#000000] text-center relative overflow-hidden text-white"
        >
          {/* Abstract blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a custom quote?</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Have a unique idea or a complex security requirement? Let's chat about building a solution tailored specifically to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <button className="px-8 py-3.5 bg-white text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-colors">
                 Book a Call
               </button>
               <button className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                 Email Me
               </button>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}

/* -------------------------------------------------
   FAQ Item Component (Accordion)
   ------------------------------------------------- */
function FaqItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-white/5 overflow-hidden transition-all hover:border-purple-500/30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
      >
        <span className="font-medium text-lg">{faq.question}</span>
        <FaChevronDown
          className={`text-gray-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-purple-500" : ""
          }`}
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
            <div className="p-5 pt-0 text-gray-600 dark:text-gray-300 text-sm leading-relaxed border-t border-dashed border-gray-200 dark:border-gray-700/50 mt-2">
              <br />
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
