"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Code2, 
  Terminal, 
  Lock, 
  Cpu, 
  Zap, 
  Globe, 
  Server,
  LucideIcon 
} from "lucide-react";

// --- Types ---
interface BackgroundItem {
  type: 'glow' | 'icon';
  top: string;
  class: string;
  icon?: LucideIcon;
  size?: number;
}

// --- Animation Variants ---
const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
  },
};

const glowVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 2, ease: "linear" } 
  },
};

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-gray-50 dark:bg-[#050608] pointer-events-none">
      
      {/* 1. 🌫️ Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[1]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 2. 🌙 Mobile Layout */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-full z-0">
        {[
          { type: 'glow', class: "w-[300px] h-[300px] bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-full blur-3xl", top: "top-0 left-[-50px]" },
          { type: 'icon', icon: Shield, class: "text-purple-500/10 rotate-12", top: "top-[10rem] right-10", size: 48 },
          { type: 'glow', class: "w-72 h-72 bg-pink-500/30 rounded-full blur-3xl", top: "top-[35rem] right-[-50px]" },
          { type: 'icon', icon: Code2, class: "text-blue-500/10 -rotate-12", top: "top-[60rem] left-10", size: 64 },
          { type: 'glow', class: "w-full h-[26rem] bg-[#00fafc]/20 rounded-full blur-3xl", top: "top-[80rem] left-0" },
          { type: 'icon', icon: Lock, class: "text-pink-500/10 rotate-6", top: "top-[180rem] right-5", size: 56 },
          { type: 'glow', class: "w-full h-[26rem] bg-purple-600/30 rounded-bl-full blur-3xl", top: "top-[250rem] left-0" },
          { type: 'icon', icon: Terminal, class: "text-purple-500/10 -rotate-6", top: "top-[350rem] left-10", size: 72 },
          { type: 'glow', class: "w-full h-[26rem] bg-sky-600/30 rounded-full blur-3xl", top: "top-[740rem] left-0" },
        ].map((item, i) => (
          <FadeInItem key={i} item={item as BackgroundItem} />
        ))}
      </div>

      {/* 3. 💻 Desktop Layout */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0">
        {[
          { type: 'glow', top: "top-[-10%] left-[10%]", class: "w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-full blur-[120px]" },
          { type: 'icon', icon: Shield, top: "top-[15vh] right-[15%]", size: 120, class: "text-purple-500/5 rotate-12" },
          { type: 'glow', top: "top-[100vh] right-[10%]", class: "w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[160px]" },
          { type: 'icon', icon: Code2, top: "top-[110vh] left-[10%]", size: 80, class: "text-blue-500/5 -rotate-12" },
          { type: 'glow', top: "top-[200vh] left-[10%]", class: "w-[700px] h-[700px] bg-[#00fafc]/10 rounded-full blur-[200px]" },
          { type: 'icon', icon: Server, top: "top-[220vh] right-[20%]", size: 100, class: "text-cyan-500/5 rotate-6" },
          { type: 'glow', top: "top-[320vh] right-[15%]", class: "w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[180px]" },
          { type: 'icon', icon: Lock, top: "top-[330vh] left-[15%]", size: 90, class: "text-pink-500/5 -rotate-6" },
          { type: 'glow', top: "top-[450vh] left-[20%]", class: "w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[200px]" },
          { type: 'icon', icon: Globe, top: "top-[460vh] right-[10%]", size: 110, class: "text-purple-500/5 rotate-12" },
          { type: 'glow', top: "top-[700vh] left-[10%]", class: "w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[200px]" },
          { type: 'icon', icon: Zap, top: "top-[710vh] right-[15%]", size: 95, class: "text-yellow-500/5 rotate-12" },
        ].map((item, i) => (
          <FadeInItem key={i} item={item as BackgroundItem} />
        ))}
      </div>
    </div>
  );
}

function FadeInItem({ item }: { item: BackgroundItem }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10%" });

  if (item.type === 'icon' && item.icon) {
    const Icon = item.icon;
    return (
      <motion.div
        ref={ref}
        className={`absolute ${item.top} ${item.class} will-change-transform`}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <Icon size={item.size} />
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`absolute ${item.top} ${item.class} will-change-opacity`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={glowVariants}
      style={{ mixBlendMode: 'plus-lighter' }} 
    />
  );
}
