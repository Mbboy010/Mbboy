"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaShieldAlt,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Musa Hakilu</h2>
          <p className="text-sm text-gray-400">
            Cybersecurity Expert • Full-Stack Developer • Software Engineer • AI Engineer
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Building secure, modern, and scalable web applications.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <Link href="/works" className="hover:text-purple-400 transition">Works</Link>
          <Link href="/collaborate" className="hover:text-purple-400 transition">Collaborate</Link>
          <Link href="/pricing" className="hover:text-purple-400 transition">Pricing</Link>
          <Link href="/blog" className="hover:text-purple-400 transition">Blog</Link>
          <Link href="/about" className="hover:text-purple-400 transition">About Me</Link>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaEnvelope className="text-purple-400" />
            <a href="mailto:musahakilu@email.com" className="hover:text-purple-400 transition">
              musahakilu@email.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaPhoneAlt className="text-purple-400" />
            <span>+234 812 345 6789</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <FaMapMarkerAlt className="text-purple-400" />
            <span>Kano, Nigeria</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <div className="flex space-x-5 text-xl">
            <a href="mailto:musahakilu@email.com" className="hover:text-purple-400 transition"><FaEnvelope /></a>
            <a href="https://github.com/mbboy" className="hover:text-purple-400 transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/musahakilu" className="hover:text-purple-400 transition"><FaLinkedin /></a>
            <a href="https://twitter.com/mbboy" className="hover:text-purple-400 transition"><FaTwitter /></a>
            <a href="#security" className="hover:text-purple-400 transition"><FaShieldAlt /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Musa Hakilu — All Rights Reserved.
        <br />
        <span className="text-purple-400">Secured with Python • SQL • Ethical Hacking</span>
      </div>
    </footer>
  );
}