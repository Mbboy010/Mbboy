// components/HomeBackground.tsx
"use client";

import { motion, useInView } from "framer-motion";
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

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-gray-50 dark:bg-[#050608] pointer-events-none">
      
      {/* 1. 🌫️ Noise Overlay (Adds texture/premium feel) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none z-[1]"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* 2. 🌙 Mobile Glow & Icons */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-full z-0">
        {[
          // Top Section
          { type: 'glow', class: "w-[300px] h-[300px] bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-full blur-3xl", top: "top-0 left-[-50px]" },
          { type: 'icon', icon: Shield, class: "text-purple-500/10 rotate-12", top: "top-[10rem] right-10", size: 48 },
          
          // Mid Sections
          { type: 'glow', class: "w-72 h-72 bg-pink-500/30 rounded-full blur-3xl", top: "top-[35rem] right-[-50px]" },
          { type: 'icon', icon: Code2, class: "text-blue-500/10 -rotate-12", top: "top-[60rem] left-10", size: 64 },
          
          { type: 'glow', class: "w-full h-[26rem] bg-[#00fafc]/20 rounded-full blur-3xl", top: "top-[80rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-purple-600/30 rounded-full blur-3xl", top: "top-[150rem] left-0" },
          
          { type: 'icon', icon: Lock, class: "text-pink-500/10 rotate-6", top: "top-[180rem] right-5", size: 56 },
          
          // Deep Sections
          { type: 'glow', class: "w-72 h-72 bg-pink-500/30 rounded-full blur-3xl", top: "top-[200rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-purple-600/30 rounded-bl-full blur-3xl", top: "top-[250rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-red-500/20 rounded-bl-full blur-3xl", top: "top-[310rem] left-0" },
          
          { type: 'icon', icon: Terminal, class: "text-purple-500/10 -rotate-6", top: "top-[350rem] left-10", size: 72 },

          // Footer Sections
          { type: 'glow', class: "w-full h-[26rem] bg-purple-500/30 rounded-full blur-3xl", top: "top-[370rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-[#00fafc]/20 blur-3xl", top: "top-[450rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-pink-500/30 rounded-bl-full blur-3xl", top: "top-[510rem] left-0" },
          { type: 'glow', class: "w-72 h-72 bg-purple-500/30 rounded-full blur-3xl", top: "top-[570rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-pink-500/30 rounded-tl-full blur-3xl", top: "top-[610rem] left-0" },
          { type: 'glow', class: "w-full h-[26rem] bg-purple-500/30 rounded-full blur-3xl", top: "top-[670rem] left-0" },
          { type: 'glow', class: "w-[500px] h-[500px] bg-sky-600/30 rounded-full blur-3xl", top: "top-[740rem] left-0" },
        ].map((item, i) => (
          <FadeInItem key={i} item={item} />
        ))}
      </div>

      {/* 3. 💻 Desktop Glow & Icons */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full z-0">
        {[
          // Hero Area
          { type: 'glow', top: "top-[-10%] left-[10%]", class: "w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 to-blue-500/30 rounded-full blur-[120px]" },
          { type: 'icon', icon: Shield, top: "top-[15vh] right-[15%]", size: 120, class: "text-purple-500/5 rotate-12" },

          // Section 2
          { type: 'glow', top: "top-[100vh] right-[10%]", class: "w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[160px]" },
          { type: 'icon', icon: Code2, top: "top-[110vh] left-[10%]", size: 80, class: "text-blue-500/5 -rotate-12" },

          // Section 3
          { type: 'glow', top: "top-[200vh] left-[10%]", class: "w-[700px] h-[700px] bg-[#00fafc]/10 rounded-full blur-[200px]" },
          { type: 'icon', icon: Server, top: "top-[220vh] right-[20%]", size: 100, class: "text-cyan-500/5 rotate-6" },

          // Section 4
          { type: 'glow', top: "top-[320vh] right-[15%]", class: "w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[180px]" },
          { type: 'icon', icon: Lock, top: "top-[330vh] left-[15%]", size: 90, class: "text-pink-500/5 -rotate-6" },

          // Section 5
          { type: 'glow', top: "top-[450vh] left-[20%]", class: "w-[600px] h-[600px] bg-pink-500/20 rounded-full blur-[200px]" },
          { type: 'icon', icon: Globe, top: "top-[460vh] right-[10%]", size: 110, class: "text-purple-500/5 rotate-12" },

          // Section 6
          { type: 'glow', top: "top-[580vh] right-[20%]", class: "w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[180px]" },
          { type: 'icon', icon: Cpu, top: "top-[590vh] left-[12%]", size: 85, class: "text-blue-500/5 -rotate-12" },

          // Footer Area
          { type: 'glow', top: "top-[700vh] left-[10%]", class: "w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[200px]" },
          { type: 'icon', icon: Zap, top: "top-[710vh] right-[15%]", size: 95, class: "text-yellow-500/5 rotate-12" },
          
          { type: 'glow', top: "top-[820vh] right-[10%]", class: "w-[550px] h-[550px] bg-[#00fafc]/15 rounded-full blur-[180px]" },
        ].map((item, i) => (
          <FadeInItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

// 👇 Reusable fade-in animation component
function FadeInItem({ item }: { item: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  // Render Logic
  if (item.type === 'icon' && item.icon) {
    const Icon = item.icon;
    return (
      <motion.div
        ref={ref}
        className={`absolute ${item.top} ${item.class}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: inView ? 1 : 0,
          scale: inView ? 1 : 0.8,
          y: inView ? 0 : 20
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Icon size={item.size} />
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={`absolute ${item.top} ${item.class}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      // Use mix-blend-mode for better color blending on dark backgrounds
      style={{ mixBlendMode: 'plus-lighter' }} 
    />
  );
}
