"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
  FaPaperPlane,
  FaShieldAlt,
  FaHeart
} from "react-icons/fa"; 
import Container from "../Container"; // Assuming you have this
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/mbboy" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/musahakilu" },
    { icon: FaTwitter, href: "https://twitter.com/mbboy" },
    { icon: FaEnvelope, href: "mailto:musahakilu@email.com" },
  ];

  return (
    <footer className="relative bg-[#050608] text-gray-300 border-t border-fuchsia-800 overflow-hidden">
      
      {/* 🔮 Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* 1. Brand & Bio (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <span className="text-purple-500">Musa</span> Hakilu
            </Link>
            
            <p className="text-gray-400 leading-relaxed pr-4">
              A Cybersecurity Specialist and Full-Stack Engineer dedicated to building secure, scalable, and intelligent digital solutions.
            </p>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Services Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold mb-2">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services/web-development" className="hover:text-purple-400 transition-colors">Web Development</Link></li>
              <li><Link href="/services/security" className="hover:text-purple-400 transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services/ai" className="hover:text-purple-400 transition-colors">AI Integration</Link></li>
              <li><Link href="/services/mobile" className="hover:text-purple-400 transition-colors">Mobile Apps</Link></li>
            </ul>
          </div>

          {/* 3. Company Links (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-purple-400 transition-colors">About Me</Link></li>
              <li><Link href="/works" className="hover:text-purple-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-purple-400 transition-colors">Blog & Insights</Link></li>
              <li><Link href="/pricing" className="hover:text-purple-400 transition-colors">Pricing Plans</Link></li>
            </ul>
          </div>

          {/* 4. Newsletter (Span 4 cols) */}
          <div className="lg:col-span-4 bg-white/5 rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-2">Subscribe to Newsletter</h3>
            <p className="text-xs text-gray-400 mb-4">
              Get the latest updates on cybersecurity trends, tech stacks, and my recent projects.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors text-gray-200"
              />
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                Subscribe <FaPaperPlane size={12} />
              </button>
            </form>
          </div>

        </div>

        {/* --- Bottom Bar --- */}
        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Musa Hakilu. All rights reserved.
            </p>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-600">
              <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
            </div>
          </div>

          {/* Tech Stack Badge */}
          <div className="flex items-center gap-6">
             <div className="flex items-center gap-2 text-xs text-gray-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                <span>Built with</span>
                <SiNextdotjs className="text-white" />
                <SiTailwindcss className="text-sky-400" />
                <SiVercel className="text-white" />
             </div>

             {/* Back to Top */}
             <button 
                onClick={scrollToTop}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-purple-600 hover:text-white transition-colors border border-white/5"
             >
                <FaArrowUp size={12} />
             </button>
          </div>

        </div>
      </Container>
    </footer>
  );
}
