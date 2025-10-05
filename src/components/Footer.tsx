import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Musa Hakilu</h2>
          <p className="text-sm text-gray-400">
            Cybersecurity Expert • Full-Stack Developer • UI/UX Designer
          </p>
          <p className="mt-3 text-sm text-gray-500">
            Building secure, modern, and scalable web applications.
          </p>
        </div>

        {/* Center navigation */}
        <div className="flex flex-col space-y-3 md:items-center">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#about" className="hover:text-primary transition">About</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#pricing" className="hover:text-primary transition">Pricing</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>

        {/* Right section */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-lg font-semibold text-white mb-3">Stay Connected</h3>
          <div className="flex space-x-5 text-xl">
            <a href="mailto:your@email.com" className="hover:text-primary transition"><FaEnvelope /></a>
            <a href="https://github.com/yourusername" className="hover:text-primary transition"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-primary transition"><FaLinkedin /></a>
            <a href="https://twitter.com/yourusername" className="hover:text-primary transition"><FaTwitter /></a>
            <a href="#security" className="hover:text-primary transition"><FaShieldAlt /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Musa Hakilu — All Rights Reserved.
        <br />
        <span className="text-primary">Secured with Python • SQL • Ethical Hacking</span>
      </div>
    </footer>
  );
}