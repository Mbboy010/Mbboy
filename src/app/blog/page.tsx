"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import BackgroundGlow from "@/components/BackgroundGlow";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6, ease: "easeOut" },
  viewport: { once: false, amount: 0.2 },
});

const posts = [
  {
    id: 1,
    title: "Securing Next.js Applications — Best Practices",
    excerpt:
      "Learn how to secure your Next.js web applications against common vulnerabilities like XSS, CSRF, and data leaks.",
    image: "/blog/next-security.jpg",
    category: "Cybersecurity",
    date: "Nov 10, 2025",
    href: "/blog/next-security",
  },
  {
    id: 2,
    title: "Building Scalable APIs with Node.js and Express",
    excerpt:
      "A step-by-step guide to designing clean, efficient, and scalable REST APIs with Node.js and Express.",
    image: "/blog/node-api.jpg",
    category: "Development",
    date: "Oct 25, 2025",
    href: "/blog/node-api",
  },
  {
    id: 3,
    title: "Design Thinking in Tech — Why Branding Matters",
    excerpt:
      "Your product’s first impression often defines its success. Let’s explore how strong branding blends with user experience.",
    image: "/blog/design-thinking.jpg",
    category: "Branding",
    date: "Sept 30, 2025",
    href: "/blog/design-thinking",
  },
  {
    id: 4,
    title: "AI in Security — The Future of Threat Detection",
    excerpt:
      "Artificial Intelligence is changing how we detect, prevent, and respond to cyber threats. Here’s what the future looks like.",
    image: "/blog/ai-security.jpg",
    category: "AI & Security",
    date: "Aug 20, 2025",
    href: "/blog/ai-security",
  },
];

export default function BlogPage() {
  return (
    <section className="relative min-h-screen py-20 bg-white dark:bg-[#050608] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <BackgroundGlow />

      <Container>
        {/* ---------- Header ---------- */}
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & <span className="text-purple-500">Stories</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Articles and tutorials from Musa Hakilu (Mbboy) on cybersecurity,
            development, AI, and digital design.
          </p>
        </motion.div>

        {/* ---------- Featured Post ---------- */}
        <motion.div
          {...fadeUp(0.1)}
          className="relative mb-20 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#111827] to-[#0b1220]"
        >
          <Link href={posts[0].href}>
            <div className="relative w-full h-72 md:h-[26rem]">
              <Image
                src={posts[0].image}
                alt={posts[0].title}
                fill
                className="object-cover opacity-70 hover:opacity-90 transition-all duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="inline-block px-3 py-1 rounded-full text-xs bg-purple-600/80 mb-3">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                  {posts[0].title}
                </h2>
                <p className="mt-2 text-gray-200 max-w-2xl">
                  {posts[0].excerpt}
                </p>
                <p className="mt-3 text-sm text-gray-400">{posts[0].date}</p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* ---------- Blog Grid ---------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <motion.div key={post.id} {...fadeUp(0.15 + index * 0.1)}>
              <Link
                href={post.href}
                className="group block rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f1724] to-[#071026] hover:shadow-purple-500/30 transition-all"
              >
                <div className="relative w-full h-52">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs uppercase tracking-wider text-purple-400">
                    {post.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-3 text-xs text-gray-500">{post.date}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ---------- CTA Section ---------- */}
        <motion.div
          {...fadeUp(0.3)}
          className="mt-24 bg-gradient-to-br from-[#0b1220]/60 to-[#071026]/40 p-8 rounded-2xl text-center"
        >
          <h2 className="text-2xl font-semibold mb-3">
            Want to Stay Updated?
          </h2>
          <p className="text-gray-400 mb-6">
            Subscribe to get new cybersecurity and tech insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg w-full sm:flex-1 border border-purple-600/30 bg-transparent text-gray-200 focus:outline-none focus:border-purple-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}