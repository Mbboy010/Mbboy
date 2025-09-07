"use client";

import type { RootState } from '../../components/redux/store';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";



export default function MyProject() {
  const isColor = useSelector((state: RootState) => state.color.value);

  const projects = [
    {
      title: "E-commerce Website",
      image: "clients/E-commerce.jpg",
      description: "A modern, scalable e-commerce platform with advanced cart features."
    },
    {
      title: "Logo Design Portfolio",
      image: "clients/LogAds.jpg",
      description: "A collection of my most creative and minimalistic logo designs."
    },
    {
      title: "3D Model Showcase",
      image: "clients/3DAds.jpg",
      description: "High-detail 3D models built for games, animations, and AR experiences."
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <section id="projects" className="py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-customPurple">My Projects</h2>

      <div className="grid md:grid-cols-3 gap-8 w-full mx-auto">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            ref={ref}
            style={{ scale }}
            className={`${isColor ? "bg-[#d7d7d719]" : "bg-[#72727236]"} rounded-2xl p-6 shadow-lg hover:scale-105 transition`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={project.image}
              alt={project.title}
              width={320}
              height={160}
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="text-xl text-customPurple dark:customDarkGray font-semibold">{project.title}</h3>
            <p className="mt-2 dark:text-background text-foreground">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}