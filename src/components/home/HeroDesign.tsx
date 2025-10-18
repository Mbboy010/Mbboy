"use client";

import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function HeroDesign() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  // Start / stop cube rotation based on scroll visibility
  React.useEffect(() => {
    if (isInView) {
      controls.start({
        rotateX: [0, 360],
        rotateY: [0, 360],
        transition: {
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="absolute opacity-40 top-[-18rem] right-[-10rem] flex items-center justify-center w-full h-[200vh]"
    >
      {/* 3D perspective container */}
      <div className="[perspective:1000px] sticky top-1/2 translate-y-[-50%]">
        <motion.div
          animate={controls}
          className="relative w-[120px] h-[120px]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Cube Faces */}
          <CubeFace transform="translateZ(60px)" label="Front" />
          <CubeFace
            transform="rotateY(180deg) translateZ(60px)"
            label="AI"
          />
          <CubeFace
            transform="rotateX(90deg) translateZ(60px)"
            label="security"
          />
          <CubeFace
            transform="rotateX(-90deg) translateZ(60px)"
            label="mobile"
          />
          <CubeFace
            transform="rotateY(-90deg) translateZ(60px)"
            label="web"
          />
          <CubeFace
            transform="rotateY(90deg) translateZ(60px)"
            label="API"
          />
        </motion.div>
      </div>
    </div>
  );
}

function CubeFace({
  transform,
  label,
}: {
  transform: string;
  label: string;
}) {
  const color = "#ec4899"; // Tailwind pink-500

  return (
    <div
      className="absolute w-[120px] h-[120px] grid place-content-center text-white font-semibold text-base border-[2px] border-white"
      style={{
        background: color,
        transform,
        boxShadow: `0 0 20px ${color}, 0 0 50px ${color}`,
      }}
    >
      {label}
    </div>
  );
}