"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Github, 
  ExternalLink, 
  Code, 
  Shield, 
  Cpu, 
  Layers, 
  Terminal, 
  ArrowRight,
  Trophy,
  GitCommit,
  Activity,
  Send,
  Sparkles,
  Binary,
  Globe,
  Lock,
  LucideIcon
} from "lucide-react";
import Container from "@/components/Container";

// --- Types ---
interface ProjectLink {
  demo: string;
  repo: string;
}

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  links: ProjectLink;
  image: string;
  featured: boolean;
}

interface Message { 
  role: "user" | "bot"; 
  text: string; 
}

// --- Data ---
const categories = [
  { id: "All", label: "All Projects", icon: Layers },
  { id: "Full-Stack", label: "Full-Stack", icon: Code },
  { id: "Cybersecurity", label: "Security & CTF", icon: Shield },
  { id: "AI", label: "AI & Tools", icon: Cpu },
];

const projects: Project[] = [
  {
    id: 1,
    title: "SecurePay FinTech Core",
    category: "Full-Stack",
    desc: "A banking dashboard with fraud detection algorithms, RBAC, and end-to-end encryption for transactions.",
    tags: ["Next.js", "PostgreSQL", "Redis", "Stripe API"],
    links: { demo: "#", repo: "#" },
    image: "/works/fintech.png", 
    featured: true
  },
  {
    id: 2,
    title: "VulnScanner Pro",
    category: "Cybersecurity",
    desc: "Automated Python script that scans web applications for SQL Injection and XSS vulnerabilities.",
    tags: ["Python", "OWASP", "Bash", "Automation"],
    links: { demo: "#", repo: "#" },
    image: "/works/security-tool.png",
    featured: false
  },
  {
    id: 3,
    title: "University Management",
    category: "Full-Stack",
    desc: "Comprehensive portal for students and faculty to manage grades, schedules, and assignments securely.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    links: { demo: "#", repo: "#" },
    image: "/works/uni-portal.png",
    featured: false
  },
  {
    id: 4,
    title: "Zero-Trust Auth System",
    category: "Cybersecurity",
    desc: "Implementation of a Zero Trust architecture using JWT, MFA, and device fingerprinting.",
    tags: ["Go", "Docker", "OAuth2", "Linux"],
    links: { demo: "#", repo: "#" },
    image: "/works/auth-system.png",
    featured: false
  },
  {
    id: 5,
    title: "NeuroBot AI Agent",
    category: "AI",
    desc: "An intelligent customer support agent trained on custom business data using RAG.",
    tags: ["OpenAI API", "LangChain", "Pinecone", "Python"],
    links: { demo: "#", repo: "#" },
    image: "/works/ai-bot.png",
    featured: false
  }
];

// --- Chat Bot Logic ---
const INITIAL_CHAT: Message[] = [{ role: "bot", text: "Hello! I'm Mbboy's AI Assistant. Ask me about cybersecurity, tech stack, or hiring!" }];

const getBotResponse = (input: string): string => {
  const lower = input.toLowerCase();
  if (lower.includes("secure") || lower.includes("security")) return "To secure your app, implement Rate Limiting, Input Validation, and JWTs.";
  if (lower.includes("hire") || lower.includes("contact")) return "You can hire Mbboy by visiting the 'Collaborate' page or emailing directly!";
  return "Interesting question! As a demo bot, I recommend asking Mbboy directly via the contact form.";
};

// --- Animations ---
const scrollVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
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
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function WorkCom() {
  const [activeTab, setActiveTab] = useState("All");
  
  // Chat State
  const [messages, setMessages] = useState<Message[]>(INITIAL_CHAT);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab || (activeTab === "AI" && p.category === "AI"));
  
  const featuredProjects = projects.filter(p => p.featured);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;
    const userMsg: Message = { role: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);
    setTimeout(() => {
      const botResponse: Message = { role: "bot", text: getBotResponse(userMsg.text) };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <div className="relative py-24 min-h-screen bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
      
      {/* 🔮 Background Decorations */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-pink-500/25 rounded-full blur-[100px]" />

        {/* Tech Grid Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 50 Q 25 25 50 50 T 100 50" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 60 Q 25 35 50 60 T 100 60" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <path d="M0 70 Q 25 45 50 70 T 100 70" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        {/* Floating Icons */}
        <FloatingIcon icon={Binary} top="10%" left="10%" delay={0} />
        <FloatingIcon icon={Globe} top="30%" right="15%" delay={2} />
        <FloatingIcon icon={Lock} bottom="20%" left="5%" delay={4} />
        <FloatingIcon icon={Cpu} bottom="40%" right="10%" delay={1} />
      </div>
      
      <Container className="relative z-10">
        
        {/* 1. Hero Section */}
        <motion.div 
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={scrollVariant} 
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4 border border-purple-200 dark:border-purple-700/50">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Secure</span> & 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500"> Intelligent</span> Solutions
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A curation of my best work across Full-Stack Engineering, Ethical Hacking, and Artificial Intelligence.
          </p>
        </motion.div>

        {/* 2. Filter Tabs */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ delay: 0.2 }}
           className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border backdrop-blur-md
                ${activeTab === cat.id 
                  ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-500/25 scale-105" 
                  : "bg-white/80 dark:bg-white/5 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
                }`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* 3. INTERACTIVE AI CHAT */}
        <AnimatePresence>
          {(activeTab === "AI" || activeTab === "All") && (
            <motion.div
              viewport={{ once: false }}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-24 max-w-3xl mx-auto"
            >
              <div className="bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-[500px]">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-4 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-lg"><Sparkles className="text-white w-5 h-5" /></div>
                    <div>
                      <h3 className="text-white font-bold text-sm">Mbboy AI Assistant</h3>
                      <div className="flex items-center gap-1.5 opacity-80">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-white">Online</span>
                      </div>
                    </div>
                  </div>
                  <Terminal size={18} className="text-white/50" />
                </div>

                {/* Chat Area */}
                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 dark:bg-[#050608]/50 space-y-4">
                  {messages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div className={`max-w-[80%] px-5 py-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                        msg.role === "user" 
                          ? "bg-purple-600 text-white rounded-br-none" 
                          : "bg-white dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-bl-none border border-gray-200 dark:border-white/5"
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-white dark:bg-white/10 px-4 py-3 rounded-2xl rounded-bl-none border border-gray-200 dark:border-white/5 flex gap-1 items-center">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75" />
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150" />
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 bg-white dark:bg-[#0b1220] border-t border-gray-200 dark:border-white/10 shrink-0">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask about security, stack, or hiring..."
                      className="flex-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-500 transition-colors text-gray-900 dark:text-gray-100"
                    />
                    <button type="submit" disabled={!inputValue.trim() || isTyping} className="bg-purple-600 hover:bg-purple-500 text-white p-3 rounded-xl">
                      <Send size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 4. Featured Projects (ANIMATED SCROLL) */}
        {(activeTab === "All" || activeTab === "Full-Stack") && featuredProjects.length > 0 && (
          <div className="space-y-16 mb-24">
            {featuredProjects.map((project) => (
              <motion.div 
                key={project.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={staggerContainer} // Stagger the children inside
                className="relative rounded-3xl overflow-hidden bg-gray-900 text-white shadow-2xl group border border-white/10"
              >
                {/* Background Image Parallax Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90 z-10" />
                
                {/* Note: In a real app, ensure this path exists in public/works/ */}
                <div className="absolute inset-0 z-0">
                   <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Content Container */}
                <div className="relative z-20 p-8 md:p-16 flex flex-col md:flex-row items-end justify-between gap-8">
                  <div className="max-w-2xl">
                    <motion.div variants={itemVariant} className="inline-block px-3 py-1 bg-yellow-500 text-black font-bold text-xs rounded-full mb-4 shadow-lg shadow-yellow-500/20">
                      FEATURED PROJECT
                    </motion.div>
                    
                    <motion.h2 variants={itemVariant} className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-md">
                      {project.title}
                    </motion.h2>
                    
                    <motion.p variants={itemVariant} className="text-gray-200 text-lg mb-6 leading-relaxed">
                      {project.desc}
                    </motion.p>
                    
                    <motion.div variants={itemVariant} className="flex gap-4">
                      <Link href={project.links.demo} className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition flex items-center gap-2 shadow-lg">
                        Live Demo <ExternalLink size={18} />
                      </Link>
                      <Link href={project.links.repo} className="px-6 py-3 bg-white/10 text-white font-bold rounded-xl hover:bg-white/20 transition flex items-center gap-2 backdrop-blur-md border border-white/10">
                        View Code <Github size={18} />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* 5. Project Grid */}
        <motion.div 
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24"
        >
          <AnimatePresence>
            {filteredProjects.filter(p => !p.featured || activeTab !== "All").map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 6. Stats Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 mb-24"
        >
          <StatCard icon={GitCommit} value="1,200+" label="Yearly Commits" sub="Consistent Contributor" color="text-green-500" />
          <StatCard icon={Trophy} value="Top 5%" label="TryHackMe Rank" sub="Cybersecurity CTF" color="text-red-500" />
          <StatCard icon={Activity} value="50+" label="Repositories" sub="Open Source & Private" color="text-blue-500" />
        </motion.div>

        {/* 7. CTA Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={scrollVariant}
          className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to build (or secure) your next project?
            </h2>
            <Link 
              href="/collaborate"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Start a Conversation <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>

      </Container>
    </div>
  );
}

// --- Sub-Components ---

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      viewport={{ once: false }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
      }}
      className="group bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
    >
      <div className="relative h-64 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60" />
        
        {/* Safe fallback for images */}
        <div className="absolute inset-0">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <Link href={project.links.repo} className="p-2 bg-white text-black rounded-full hover:bg-gray-200"><Github size={18} /></Link>
          <Link href={project.links.demo} className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-500"><ExternalLink size={18} /></Link>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <span className="text-xs font-bold uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded">
            {project.category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{project.desc}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
           {project.tags.map((tag, i) => (
             <span key={i} className="text-[10px] font-medium px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-md text-gray-600 dark:text-gray-400">
               {tag}
             </span>
           ))}
        </div>
      </div>
    </motion.div>
  );
}

interface StatProps {
  icon: LucideIcon;
  value: string;
  label: string;
  sub: string;
  color: string;
}

function StatCard({ icon: Icon, value, label, sub, color }: StatProps) {
  return (
    <motion.div 
      viewport={{ once: false }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      className="p-6 rounded-2xl bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur-md border border-gray-200 dark:border-white/5 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`w-12 h-12 rounded-full bg-gray-50 dark:bg-white/5 flex items-center justify-center ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <div className="text-2xl font-bold text-gray-900 dark:text-white">{value}</div>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">{label}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{sub}</div>
      </div>
    </motion.div>
  );
}

interface FloatingIconProps {
  icon: LucideIcon;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay: number;
}

function FloatingIcon({ icon: Icon, top, left, right, bottom, delay }: FloatingIconProps) {
  return (
    <motion.div
      animate={{ y: [0, -15, 0], opacity: [0.1, 0.3, 0.1] }}
      transition={{ duration: 5, repeat: Infinity, delay: delay, ease: "easeInOut" }}
      className="absolute text-purple-500 dark:text-white"
      style={{ top, left, right, bottom }}
    >
      <Icon size={40} />
    </motion.div>
  );
}
