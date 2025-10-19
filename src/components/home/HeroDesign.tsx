"use client";

import React from "react";

export default function HeroDesign() {
  return (
    <div
      className="absolute opacity-20 top-[-18rem] right-[-10rem] flex items-center justify-center w-full h-[200vh]"
    >
      {/* 3D perspective container */}
      <div className="[perspective:1000px] sticky top-1/2 translate-y-[-50%]">
        <div
          className="relative w-[120px] h-[120px]"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(20deg) rotateY(30deg)", // static 3D view
          }}
        >
          {/* Cube Faces */}
          <CubeFace transform="translateZ(60px)" label="Front" />
          <CubeFace transform="rotateY(180deg) translateZ(60px)" label="AI" />
          <CubeFace transform="rotateX(90deg) translateZ(60px)" label="Security" />
          <CubeFace transform="rotateX(-90deg) translateZ(60px)" label="Mobile" />
          <CubeFace transform="rotateY(-90deg) translateZ(60px)" label="Web" />
          <CubeFace transform="rotateY(90deg) translateZ(60px)" label="API" />
        </div>
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