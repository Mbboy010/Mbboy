"use client";

import { motion, Variants } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { IconType } from "react-icons"; 
import { 
  SiPytorch, 
  SiOpenai, 
  SiScikitlearn, 
  SiHuggingface, 
  SiLangchain, 
  SiOpencv 
} from "react-icons/si";
import { FaBrain, FaRobot, FaDatabase, FaNetworkWired } from "react-icons/fa";

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// --- Types ---
interface AIAbility {
  name: string;
  icon: IconType;
  desc: string;
  color: string;
}

// --- Data ---
const aiCapabilities: AIAbility[] = [
  { 
    name: "Generative AI & LLMs", 
    icon: SiOpenai, 
    desc: "GPT-4, Claude & Llama integration via API.",
    color: "text-green-400"
  },
  { 
    name: "Orchestration", 
    icon: SiLangchain, 
    desc: "Building agents and chains with LangChain.",
    color: "text-white"
  },
  { 
    name: "Deep Learning", 
    icon: SiPytorch, 
    desc: "Neural network training with PyTorch & TF.",
    color: "text-orange-500"
  },
  { 
    name: "Model Hubs", 
    icon: SiHuggingface, 
    desc: "Fine-tuning open-source models.",
    color: "text-yellow-400"
  },
  { 
    name: "Computer Vision", 
    icon: SiOpencv, 
    desc: "Object detection and facial recognition.",
    color: "text-blue-400"
  },
  { 
    name: "RAG Systems", 
    icon: FaDatabase, 
    desc: "Vector databases (Pinecone) for context retrieval.",
    color: "text-purple-400"
  },
  { 
    name: "Predictive Analytics", 
    icon: SiScikitlearn, 
    desc: "Regression & classification algorithms.",
    color: "text-blue-300"
  },
  { 
    name: "AI Automation", 
    icon: FaRobot, 
    desc: "Autonomous agents and smart chatbots.",
    color: "text-pink-400"
  },
];

export default function AISkills() {
  return (
    <section className="relative py-24 overflow-hidden text-gray-900 dark:text-white transition-colors duration-500">
      
      {/* 🔮 Background Elements */}
      <BackgroundGlow />
      
      <Container className="relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeInUp}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-xs font-bold uppercase tracking-widest mb-4">
             <FaBrain className="text-purple-500" />
             Artificial Intelligence
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
            Building the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-400">
              Intelligent Future
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            I go beyond simple API calls. I engineer adaptive systems using state-of-the-art 
            LLMs, computer vision, and predictive models to solve complex real-world problems.
          </p>
        </motion.div>

        {/* AI Skill Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          // Keep viewport on parent for staggering
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {aiCapabilities.map(({ name, icon: Icon, desc, color }, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              // ✅ Added viewport once: false to each item as requested
              viewport={{ once: false }} 
              initial="hidden"
              whileInView="visible"
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/5 hover:border-purple-500/30 shadow-sm hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              {/* Inner Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`text-3xl ${color}`} />
              </div>

              {/* Text */}
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                {desc}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaNetworkWired className="text-purple-500/20 text-4xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </Container>
    </section>
  );
}
