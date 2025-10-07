"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import {
  FaShieldAlt,
  FaLock,
  FaBug,
  FaUserSecret,
  FaNetworkWired,
  FaDatabase,
} from "react-icons/fa";
import { SiBurpsuite, SiWireshark, SiKalilinux } from "react-icons/si";

export default function Cybersecurity() {
  const skills = [
    { name: "Application Security", icon: FaShieldAlt },
    { name: "Penetration Testing", icon: FaBug },
    { name: "Network Security", icon: FaNetworkWired },
    { name: "Data Encryption", icon: FaLock },
    { name: "Ethical Hacking", icon: FaUserSecret },
    { name: "Database Protection", icon: FaDatabase },
    { name: "Wireshark Analysis", icon: SiWireshark },
    { name: "Burp Suite", icon: SiBurpsuite },
    { name: "Kali Linux", icon: SiKalilinux },
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gray-50 text-gray-900 dark:bg-[#0B0B0F] dark:text-white transition-colors duration-500">
      <BackgroundGlow />
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="uppercase tracking-widest text-sm text-gray-600 dark:text-gray-400">
            CYBERSECURITY & ETHICAL HACKING
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-customPurple dark:text-customPurple">Protecting</span>{" "}
            What Matters Most
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            I specialize in securing applications and systems — detecting
            vulnerabilities before hackers do. My goal: create safer digital
            experiences for everyone.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
          {skills.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="flex flex-col items-center p-6 rounded-2xl border shadow-md transition-all duration-300
              bg-white border-gray-200 hover:border-purple-400/40
              dark:bg-gradient-to-br dark:from-[#1a1a2e] dark:to-[#111] dark:border-white/10 dark:hover:border-customPurple/40"
            >
              <div className="p-4 rounded-full mb-3 bg-purple-100 dark:bg-customPurple/20">
                <Icon className="text-4xl text-purple-600 dark:text-customPurple" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {name}
              </p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}