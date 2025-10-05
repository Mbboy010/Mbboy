"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const icons = [
  { Icon: FaReact, color: "text-cyan-400", title: "React" },
  { Icon: SiNextdotjs, color: "text-white", title: "Next.js" },
  { Icon: FaPython, color: "text-yellow-400", title: "Python" },
  { Icon: FaNodeJs, color: "text-green-500", title: "Node.js" },
  { Icon: FaDatabase, color: "text-blue-400", title: "SQL / Database" },
  { Icon: FaShieldAlt, color: "text-red-400", title: "Security" },
];

// Parent container animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // icons appear one by one
    },
  },
};

// Each icon animation
const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

export default function Skills() {
  return (
    <section className="relative  text-white py-20 overflow-hidden">
      <BackgroundGlow />
      <Container>
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
          className="text-3xl lg:text-4xl font-bold text-center"
        >
          My <span className="text-purple-400">Tech Stack</span>
        </motion.h2>

        {/* Icons Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex flex-wrap justify-center gap-12 mt-12 text-6xl"
        >
          {icons.map(({ Icon, color, title }, i) => (
            <motion.div
              key={i}
              variants={iconVariants}
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 150, damping: 10 }}
              className={`${color} cursor-pointer transition-all`}
              title={title}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}