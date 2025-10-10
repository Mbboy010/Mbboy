"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiKeras } from "react-icons/si";
import { FaBrain, FaRobot } from "react-icons/fa";

export default function AISkills() {
  const aiSkills = [
    { name: "Machine Learning", icon: FaBrain },
    { name: "Deep Learning", icon: SiTensorflow },
    { name: "PyTorch", icon: SiPytorch },
    { name: "OpenAI API", icon: SiOpenai },
    { name: "Scikit-Learn", icon: SiScikitlearn },
    { name: "Keras", icon: SiKeras },
    { name: "AI Chatbots", icon: FaRobot },
  ];

  return (
    <section className="relative py-20 overflow-hidden  text-gray-900  dark:text-white transition-colors duration-500">
      <BackgroundGlow />
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h3 className="uppercase tracking-widest text-sm text-gray-600 dark:text-gray-400">
            ARTIFICIAL INTELLIGENCE
          </h3>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            <span className="text-purple-600 dark:text-customPurple">AI</span>{" "}
            &{" "}
            <span className="text-pink-600 dark:text-customPink">Automation</span>{" "}
            Skills
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-600 dark:text-gray-400">
            I integrate AI into modern applications — building smart, adaptive,
            and data-driven systems that learn and evolve intelligently.
          </p>
        </motion.div>

        {/* AI Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-center">
          {aiSkills.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center p-6 rounded-2xl border shadow-md transition-all duration-300 
              bg-white border-gray-200 hover:border-purple-400/40 
              dark:bg-gradient-to-br dark:from-[#1a1a2e] dark:to-[#111] dark:border-white/10 dark:hover:border-customPurple/40"
            >
              <div className="p-4 rounded-full mb-3 bg-purple-100 dark:bg-customPurple/20">
                <Icon className="text-4xl text-purple-600 dark:text-customPurple" />
              </div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {name}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}