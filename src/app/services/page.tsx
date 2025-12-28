"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Smartphone, 
  Cloud, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Lock,
  Search,
  Settings,
  Server
} from "lucide-react";
import Container from "@/components/Container";
import BackgroundGlow from "@/components/BackgroundGlow";

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Data ---
const services = [
  {
    title: "Full-Stack Development",
    icon: Code,
    desc: "Scalable, high-performance web applications built with modern frameworks.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    features: [
      "Custom React/Next.js Applications",
      "API Development & Integration",
      "E-commerce Platforms (Stripe/Shopify)",
      "SaaS Product MVP Development"
    ]
  },
  {
    title: "Cybersecurity & Audits",
    icon: ShieldCheck,
    desc: "Offensive and defensive security strategies to protect your digital assets.",
    color: "text-red-500",
    bg: "bg-red-500/10",
    features: [
      "Vulnerability Assessment & Penetration Testing",
      "Source Code Security Review",
      "Server Hardening & Firewall Setup",
      "Compliance Consulting (OWASP)"
    ]
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    desc: "Intelligent agents and automation workflows to optimize business logic.",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    features: [
      "Custom AI Chatbots (LLM Integration)",
      "Automated Workflows (n8n/Python)",
      "Data Analysis & Prediction Models",
      "Natural Language Processing (NLP)"
    ]
  },
  {
    title: "Mobile App Engineering",
    icon: Smartphone,
    desc: "Cross-platform mobile experiences that feel native and perform beautifully.",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    features: [
      "React Native Development",
      "iOS & Android Deployment",
      "Offline-First Architecture",
      "App Store Optimization"
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    desc: "Robust infrastructure setup ensuring 99.9% uptime and auto-scalability.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    features: [
      "CI/CD Pipeline Setup",
      "Docker & Kubernetes Orchestration",
      "AWS/Vercel/DigitalOcean Management",
      "Database Optimization"
    ]
  },
  {
    title: "Blockchain & Web3",
    icon: Database,
    desc: "Decentralized applications (dApps) and smart contract development.",
    color: "text-green-500",
    bg: "bg-green-500/10",
    features: [
      "Smart Contract Auditing",
      "dApp Frontend Integration",
      "Wallet Connection (Wagmi/Ethers)",
      "Token Deployment"
    ]
  }
];

const processSteps = [
  { num: "01", title: "Discovery", desc: "We map out your goals, requirements, and technical scope." },
  { num: "02", title: "Architecture", desc: "Designing a secure, scalable blueprint for the system." },
  { num: "03", title: "Development", desc: "Agile coding sprints with regular updates and feedback." },
  { num: "04", title: "Testing", desc: "Rigorous QA, security scans, and performance stress tests." },
  { num: "05", title: "Deployment", desc: "Live launch with monitoring and post-deployment support." },
];

export default function ServicesPage() {
  return (
    <div className="relative py-24 min-h-screen bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      
      {/* 🔮 Background Ambience */}
      <BackgroundGlow />
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <FloatingIcon icon={Server} top="15%" right="10%" delay={0} />
        <FloatingIcon icon={Lock} bottom="20%" left="5%" delay={2} />
      </div>

      <Container>
        
        {/* 1. Hero Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4 border border-purple-200 dark:border-purple-700/50">
            What I Do
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Engineering Digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Excellence & Security
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I don't just write code; I engineer secure, scalable, and intelligent solutions 
            tailored to solve complex business problems.
          </p>
        </motion.div>

        {/* 2. Services Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>

        {/* 3. The Process */}
        <div className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">The Engineering Process</h2>
            <p className="text-gray-600 dark:text-gray-400">From concept to secure deployment.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Connector Line (Desktop) */}
                {i !== processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-gray-200 dark:bg-white/10 -z-10" />
                )}
                
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#111] border-2 border-purple-500 text-purple-600 font-bold flex items-center justify-center mb-4 shadow-lg z-10 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 px-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Why Choose Me / Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-12 items-center mb-32 bg-white dark:bg-[#0b1220] p-8 md:p-12 rounded-3xl border border-gray-200 dark:border-white/5 shadow-2xl"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Trust Mbboy?</h2>
            <div className="space-y-6">
              <BenefitItem icon={Zap} title="Lightning Fast Performance" desc="Optimized code ensuring 99+ Lighthouse scores and instant load times." />
              <BenefitItem icon={Lock} title="Security First Approach" desc="Every line of code is written with OWASP security standards in mind." />
              <BenefitItem icon={Settings} title="Scalable Architecture" desc="Built to handle growth, from 100 users to 100,000 users without breaking." />
            </div>
          </div>
          <div className="relative h-full min-h-[300px] bg-gradient-to-br from-purple-900 to-black rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
             {/* Abstract Graphic */}
             <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
             <div className="text-center z-10">
                <div className="text-6xl font-bold text-white mb-2">100%</div>
                <div className="text-purple-300 uppercase tracking-widest text-sm">Project Completion Rate</div>
             </div>
             <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/30 blur-[60px]" />
             <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/30 blur-[60px]" />
          </div>
        </motion.div>

        {/* 5. FAQ Section */}
        <div className="mb-32 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: false }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-4">
            <FaqItem q="Do you work with startups?" a="Yes! I specialize in helping startups build MVPs quickly while maintaining high security and scalability standards." />
            <FaqItem q="What is your hourly rate?" a="I typically work on a project-based pricing model, which provides more value and predictability for clients. Check the Pricing page for estimates." />
            <FaqItem q="Do you provide post-launch support?" a="Absolutely. I offer maintenance packages to ensure your software remains secure and up-to-date." />
            <FaqItem q="Can you audit an existing website?" a="Yes, I perform comprehensive security audits and code reviews to identify vulnerabilities and performance bottlenecks." />
          </div>
        </div>

        {/* 6. CTA */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900 to-blue-900 p-12 text-center shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Have a project in mind?
            </h2>
            <p className="text-purple-200 mb-8 max-w-xl mx-auto">
              Let's discuss how we can engineer a solution that meets your business goals and security requirements.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/collaborate" className="px-8 py-4 bg-white text-gray-900 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link href="/works" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-xl font-bold hover:bg-white/10 transition flex items-center justify-center gap-2">
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}

// --- Sub-Components ---

function ServiceCard({ service }: { service: any }) {
  return (
    <motion.div
      variants={fadeInUp}
      viewport={{ once: false }}
      whileHover={{ y: -8 }}
      className="group p-8 rounded-3xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-full opacity-50 group-hover:scale-150 transition-transform duration-500`} />
      
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.bg} ${service.color}`}>
        <service.icon size={28} />
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
        {service.desc}
      </p>
      
      <ul className="space-y-3">
        {service.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-500 dark:text-gray-300">
            <CheckCircle size={14} className={`mt-0.5 ${service.color}`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function BenefitItem({ icon: Icon, title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string, a: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      className="p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-colors"
    >
      <h4 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
        <Search size={16} className="text-purple-500" />
        {q}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 pl-6">{a}</p>
    </motion.div>
  );
}

function FloatingIcon({ icon: Icon, top, left, right, bottom, delay }: any) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 5, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className="absolute text-purple-500 dark:text-white"
      style={{ top, left, right, bottom }}
    >
      <Icon size={30} />
    </motion.div>
  );
}
