// components/HomeBackground.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomeBackground() {
  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
      {/* 🌙 Mobile Glow Style */}
      <div className="block md:hidden absolute top-0 left-0 w-full h-full">
        {[
          { class: "w-[300px] blur-3xl h-[300px] bg-purple-600/30 rounded-tl-full rounded-br-full", top: "top-0 left-0" },
          { class: "w-72 blur-3xl h-72 bg-pink-500/30 rounded-full", top: "top-[35rem] right-0" },
          { class: "w-full blur-3xl h-[26rem] bg-[#00fafc]/20 rounded-bl-full", top: "top-[80rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-purple-600/30 rounded-full", top: "top-[150rem] left-0" },
          { class: "w-72 blur-3xl h-72 bg-pink-500/30 rounded-full", top: "top-[200rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-purple-600/30 rounded-bl-full", top: "top-[250rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-red-500/30 rounded-bl-full", top: "top-[310rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-purple-500/30 rounded-full", top: "top-[370rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-[#00fafc]/20", top: "top-[450rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-pink-500/30 rounded-bl-full", top: "top-[510rem] left-0" },
          { class: "w-72 blur-3xl h-72 bg-purple-500/30 rounded-full", top: "top-[570rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-pink-500/30 rounded-tl-full", top: "top-[610rem] left-0" },
          { class: "w-full blur-3xl h-[26rem] bg-purple-500/30 rounded-full", top: "top-[670rem] left-0" },
          { class: "w-[500px] blur-3xl h-[500px] bg-sky-600/30 rounded-tl-full rounded-br-full", top: "top-[740rem] left-0" },
          { class: "w-[500px] blur-3xl h-[600px] bg-sky-600/30 rounded-tr-full", top: "top-[820rem] left-0" },
        ].map((glow, i) => (
          <FadeInOnScroll key={i} className={`absolute ${glow.top} ${glow.class}`} />
        ))}
      </div>

      {/* 💻 Desktop Glow Style */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full">
        {[
          { top: "top-10 left-[15%]", class: "w-[550px] blur-3xl h-[550px] bg-purple-600/30 rounded-full blur-[200px]" },
          { top: "top-[100vh] right-[10%]", class: "w-[400px] blur-3xl h-[400px] bg-pink-500/30 rounded-full blur-[160px]" },
          { top: "top-[200vh] left-[10%]", class: "w-[600px] blur-3xl h-[600px] bg-[#00fafc]/20 rounded-full blur-[200px]" },
          { top: "top-[320vh] right-[15%]", class: "w-[500px] blur-3xl h-[500px] bg-purple-600/30 rounded-full blur-[180px]" },
          { top: "top-[450vh] left-[20%]", class: "w-[600px] blur-3xl h-[600px] bg-pink-500/30 rounded-full blur-[200px]" },
          { top: "top-[580vh] right-[20%]", class: "w-[500px] blur-3xl h-[500px] bg-sky-500/30 rounded-full blur-[180px]" },
          { top: "top-[700vh] left-[10%]", class: "w-[600px] blur-3xl h-[600px] bg-purple-500/30 rounded-full blur-[200px]" },
          { top: "top-[820vh] right-[10%]", class: "w-[550px] blur-3xl h-[550px] bg-[#00fafc]/20 rounded-full blur-[180px]" },
        ].map((glow, i) => (
          <FadeInOnScroll key={i} className={`absolute ${glow.top} ${glow.class}`} />
        ))}
      </div>
    </div>
  );
}

// 👇 Reusable fade-in animation component
function FadeInOnScroll({ className }: { className: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    />
  );
}