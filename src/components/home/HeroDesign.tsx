"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

export default function HeroDesign() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress and visibility
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Rotation based on scroll
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 180]);

  // Slight opacity reduction while rotating
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 flex items-center justify-center w-full h-[200vh]"
    >
      {/* 3D perspective container */}
      <div className="[perspective:1000px] sticky top-1/2 translate-y-[-50%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{
            rotateY,
            rotateX,
            opacity,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[200px] h-[200px]"
        >
          {/* Cube Faces */}
          <CubeFace transform="translateZ(100px)" />
          <CubeFace transform="rotateY(180deg) translateZ(100px)" />
          <CubeFace transform="rotateX(90deg) translateZ(100px)" />
          <CubeFace transform="rotateX(-90deg) translateZ(100px)" />
          <CubeFace transform="rotateY(-90deg) translateZ(100px)" />
          <CubeFace transform="rotateY(90deg) translateZ(100px)" />
        </motion.div>
      </div>
    </div>
  );
}

function CubeFace({ transform }: { transform: string }) {
  return (
    <div
      className="absolute w-[200px] h-[200px] grid place-content-center bg-[#01b4f9] rounded-[10px] border-[3px] border-white shadow-[0_0_200px_#01b4f9,0_0_20px_#01b4f9,0_0_30px_#01b4f9]"
      style={{ transform }}
    />
  );
}