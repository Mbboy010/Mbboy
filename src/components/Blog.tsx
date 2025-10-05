"use client";

import Container from "./Container";
import BackgroundGlow from "./BackgroundGlow";
import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";

const blogs = [
  {
    title: "Top Strategies to Secure Modern Web Apps",
    date: "10th July, 2025",
    img: "/blog/security1.png",
    desc: "Explore the most effective web application security practices including encryption, authentication, and vulnerability testing.",
  },
  {
    title: "The Future of Ethical Hacking & Cyber Defense",
    date: "22nd August, 2025",
    img: "/blog/dev3.png",
    desc: "Dive into ethical hacking trends, penetration testing tools, and how businesses are leveraging them for protection.",
  },
  {
    title: "Building Robust APIs with Node.js and Next.js",
    date: "5th September, 2025",
    img: "/blog/security2.png",
    desc: "Learn to create secure and high-performing APIs that power modern full-stack applications.",
  },
];

export default function Blog() {
  return (
    <section className="relative bg-[#0B0B0F] text-white py-20 overflow-hidden">
      <BackgroundGlow />
      <Container>
        {/* ✨ Animated Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: false }}
            className="uppercase tracking-widest text-sm text-gray-400"
          >
            LATEST INSIGHTS
          </motion.h3>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl lg:text-4xl font-bold mt-2"
          >
            A journey to the science of{" "}
            <span className="text-purple-400">Cybersecurity & Development</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: false }}
            className="max-w-2xl mx-auto text-gray-400 mt-4"
          >
            Stay updated with trends, tutorials, and professional insights on
            secure development, ethical hacking, and digital innovation.
          </motion.p>
        </motion.div>

        {/* 🧠 Animated Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {blogs.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.3)",
              }}
              className="rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#111] shadow-lg overflow-hidden group transition-all"
            >
              {/* Image Section */}
              <div className="overflow-hidden">
                <motion.img
                  src={b.img}
                  alt={b.title}
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-52 object-cover transition-transform duration-500"
                />
              </div>

              {/* Blog Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false }}
                className="p-6"
              >
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaCalendarAlt className="text-purple-400" />
                  <span>{b.date}</span>
                </div>

                <h3 className="text-lg font-semibold mt-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                  {b.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}