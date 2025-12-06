"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
// Added IconType for strict TypeScript safety
import { IconType } from "react-icons";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaUserSecret,  
  FaNetworkWired,
  FaCode,
  FaTerminal
} from "react-icons/fa";
import { 
  SiBurpsuite, 
  SiWireshark, 
  SiKalilinux, 
  SiOwasp, 
  SiSplunk, 
  SiDocker 
} from "react-icons/si";

// --- Types ---
interface SkillItem {
  name: string;
  icon: IconType;
}

interface SecurityDomain {
  title: string;
  color: string;
  bg: string;
  border: string;
  skills: SkillItem[];
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    // FIXED: Added 'as const' to fix TypeScript error
    transition: { duration: 0.6, ease: "easeOut" as const } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

// --- Data: Categorized for structure ---
const securityDomains: SecurityDomain[] = [
  {
    title: "Offensive Security (Red Team)",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "group-hover:border-red-500/50",
    skills: [
      { name: "Penetration Testing", icon: FaBug },
      { name: "Ethical Hacking", icon: FaUserSecret },
      { name: "Burp Suite Pro", icon: SiBurpsuite },
      { name: "Kali Linux Toolset", icon: SiKalilinux },
    ]
  },
  {
    title: "Defensive Security (Blue Team)",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    skills: [
      { name: "Network Security", icon: FaNetworkWired },
      { name: "Threat Detection", icon: FaShieldAlt }, 
      { name: "SIEM (Splunk)", icon: SiSplunk },
      { name: "Wireshark Analysis", icon: SiWireshark },
    ]
  },
  {
    title: "AppSec & DevSecOps",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "group-hover:border-green-500/50",
    skills: [
      { name: "OWASP Top 10", icon: SiOwasp },
      { name: "Secure Coding", icon: FaCode },
      { name: "Container Security", icon: SiDocker },
      { name: "Data Encryption", icon: FaLock },
    ]
  }
];

export default function Cybersecurity() {
  return (
    <section className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* 🔮 Background & Radar Effect */}
      <BackgroundGlow />
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none" />
      
      <Container className="relative z-10">
        
        {/* Header with Terminal Widget */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-10">
          
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={staggerContainer}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-widest mb-4 border border-red-200 dark:border-red-800/50">
               <FaShieldAlt /> Cyber Defense
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-600 dark:from-red-500 dark:to-purple-500">
                Fortifying
              </span> Digital Assets
            </motion.h2>
            <motion.p variants={fadeInUp} className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              I specialize in securing applications and systems — utilizing advanced threat modeling and penetration testing to detect vulnerabilities before they can be exploited.
            </motion.p>
          </motion.div>

          {/* Fake Terminal Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            className="w-full lg:w-[450px] bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-700 font-mono text-xs md:text-sm"
          >
            <div className="bg-[#2d2d2d] px-4 py-2 flex gap-2 items-center border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-gray-400">root@mbboy:~</span>
            </div>
            <div className="p-4 text-green-400 space-y-2 h-40 flex flex-col justify-end">
              <p className="opacity-50">$ init security_protocol --level=high</p>
              <p className="text-blue-400">→ Loading modules...</p>
              <p>✓ Firewall: Active</p>
              <p>✓ Encryption: AES-256</p>
              <p className="flex items-center gap-2">
                <span className="animate-pulse">_</span> Scanning for vulnerabilities...
              </p>
            </div>
          </motion.div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityDomains.map((domain, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="space-y-4"
            >
              <h3 className={`text-xl font-bold flex items-center gap-2 ${domain.color}`}>
                <FaTerminal size={16} /> {domain.title}
              </h3>
              
              <div className="grid grid-cols-1 gap-3">
                {domain.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    whileHover={{ x: 5 }}
                    className={`group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 ${domain.border} transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className={`p-3 rounded-lg ${domain.bg} ${domain.color}`}>
                      <skill.icon size={20} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-200">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Verified Skill
                      </div>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className={`w-2 h-2 rounded-full ${domain.color.replace('text', 'bg')} animate-pulse`} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Certs/Compliance Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-white/5 text-center"
        >
          <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Security Standards & Compliance</p>
          <div className="flex flex-wrap justify-center gap-4 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {["NIST Framework", "ISO 27001", "GDPR Compliant", "SOC 2 Ready"].map((std) => (
               <span key={std} className="px-4 py-2 bg-gray-200 dark:bg-white/10 rounded-md text-xs font-bold text-gray-700 dark:text-gray-300">
                 {std}
               </span>
             ))}
          </div>
        </motion.div>

      </Container>
    </section>
  );
}
