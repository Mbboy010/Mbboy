"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  MessageSquare, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Code, 
  CheckCircle,
  Search,
  FileText,
  Rocket,
  Zap,
  LucideIcon
} from "lucide-react";
import Container from "@/components/Container";
import BackgroundGlow from "@/components/BackgroundGlow";

// --- Types ---
interface CollaborationCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bgColor: string;
}

interface ProcessStepProps {
  num: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface ContactBtnProps {
  href: string;
  icon: LucideIcon;
  label: string;
  sub: string;
  color: string;
}

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function CollaborationCom() {
  return (
    <div className="relative py-24 min-h-screen bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      
      {/* 🔮 Background Ambience */}
      <BackgroundGlow />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        
        {/* --- Header Section --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4 border border-purple-200 dark:border-purple-700/50">
            Open for Business
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Let’s Build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
              Extraordinary
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Whether you’re launching a startup, securing a network, or need a full-stack overhaul—
            I bring engineering precision and creative design to every partnership.
          </p>
        </motion.div>

        {/* --- Collaboration Grid --- */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8 mb-32"
        >
          {/* Service 1 */}
          <CollaborationCard 
            icon={Code}
            color="text-blue-500"
            bgColor="bg-blue-500/10"
            title="Full-Stack Engineering"
            desc="End-to-end development of scalable web and mobile applications using modern frameworks like Next.js and React Native."
          />

          {/* Service 2 */}
          <CollaborationCard 
            icon={ShieldCheck}
            color="text-purple-500"
            bgColor="bg-purple-500/10"
            title="Security Audits"
            desc="Comprehensive vulnerability assessments, penetration testing, and security hardening for your infrastructure."
          />

          {/* Service 3 */}
          <CollaborationCard 
            icon={Users}
            color="text-pink-500"
            bgColor="bg-pink-500/10"
            title="Tech Consultation"
            desc="Strategic guidance on architecture, tech stack selection, and DevOps best practices for growing teams."
          />
        </motion.div>

        {/* --- NEW SECTION: The Process (Workflow) --- */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work Together</h2>
            <p className="text-gray-600 dark:text-gray-400">A simple, transparent, and security-focused workflow.</p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 relative"
          >
            {/* Hidden Line for Desktop */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10" />

            <ProcessStep 
              num="01" 
              title="Discovery" 
              desc="We discuss your goals, audit existing systems, and define scope." 
              icon={Search}
            />
            <ProcessStep 
              num="02" 
              title="Strategy" 
              desc="I create a roadmap, architecture blueprint, and security protocols." 
              icon={FileText}
            />
            <ProcessStep 
              num="03" 
              title="Development" 
              desc="Coding begins with strict security standards and agile updates." 
              icon={Zap}
            />
            <ProcessStep 
              num="04" 
              title="Launch" 
              desc="Deployment, final penetration testing, and project handover." 
              icon={Rocket}
            />
          </motion.div>
        </div>

        {/* --- Why Work With Me? & Quick Contact --- */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Why Partner With Me?</h2>
            <div className="space-y-4">
              {[
                "Transparent Communication & Regular Updates",
                "Security-First Approach to Coding",
                "Scalable Architecture for Future Growth",
                "Post-Launch Support & Maintenance",
                "Strict Non-Disclosure (NDA) Compliance"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/about-me" className="text-purple-600 dark:text-purple-400 font-semibold hover:underline flex items-center gap-2">
                Learn more about my background <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Quick Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 p-8 rounded-3xl shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">Send a Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">YOUR EMAIL</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-500 mb-1">PROJECT DETAILS</label>
                <textarea rows={3} placeholder="I need a secure e-commerce site..." className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors" />
              </div>
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity">
                Send Request
              </button>
            </form>
          </motion.div>
        </div>

        {/* --- Contact Options --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-24"
        >
          <h2 className="text-2xl font-bold mb-8">Direct Channels</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <ContactBtn 
              href="mailto:musahakilu@email.com" 
              icon={Mail} 
              label="Email Me" 
              sub="For detailed inquiries"
              color="hover:border-purple-500 hover:text-purple-500"
            />
            <ContactBtn 
              href="https://wa.me/234XXXXXXXXXX" 
              icon={MessageSquare} 
              label="WhatsApp" 
              sub="For quick chats"
              color="hover:border-green-500 hover:text-green-500"
            />
          </div>
        </motion.div>

        {/* --- Final CTA Banner --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1a1a2e] to-[#0d0d0d] border border-white/10 p-12 text-center"
        >
          {/* Abstract blobs inside banner */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-[80px]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to execute your vision?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Check out my pricing packages to see how we can align your budget with your goals.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
            >
              View Pricing Plans <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}

// --- Sub-Components with Proper Types ---

function CollaborationCard({ icon: Icon, title, desc, color, bgColor }: CollaborationCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      // Added margin to viewport to prevent early triggering
      viewport={{ once: false }} 
      className="p-8 rounded-3xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${bgColor} ${color}`}>
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {desc}
      </p>
    </motion.div>
  );
}

function ProcessStep({ num, title, desc, icon: Icon }: ProcessStepProps) {
  return (
    <motion.div variants={fadeInUp} viewport={{ once: false }} className="relative flex flex-col items-center text-center p-4">
      <div className="w-16 h-16 rounded-full bg-white dark:bg-[#111] border-2 border-purple-100 dark:border-white/10 flex items-center justify-center mb-4 relative z-10 shadow-lg">
        <Icon className="text-purple-600 dark:text-purple-400 w-6 h-6" />
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-purple-600 text-white text-xs flex items-center justify-center font-bold">
          {num}
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
}

function ContactBtn({ href, icon: Icon, label, sub, color }: ContactBtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center gap-4 px-6 py-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 transition-all duration-300 shadow-sm hover:shadow-md ${color}`}
    >
      <div className="p-3 bg-gray-100 dark:bg-white/10 rounded-full group-hover:scale-110 transition-transform">
        <Icon size={24} />
      </div>
      <div className="text-left">
        <div className="font-bold text-gray-900 dark:text-white">{label}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{sub}</div>
      </div>
    </a>
  );
}
