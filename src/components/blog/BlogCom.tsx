"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/Container";
import {
  FaSearch,
  FaArrowRight,
  FaCalendarAlt,
  FaTag,
  FaRegClock,
  FaSadTear,
} from "react-icons/fa";

// --- Data ---
const categories = ["All", "Cybersecurity", "Development", "AI", "Branding"];

const posts = [
  {
    id: 1,
    title: "Securing Next.js Applications — The Modern Guide",
    excerpt:
      "A deep dive into preventing XSS, CSRF, and data leaks in Server Side Rendering environments.",
    image: "/blog/next-security.jpg",
    category: "Cybersecurity",
    date: "Nov 10, 2025",
    readTime: "8 min read",
    href: "/blog/next-security",
    featured: true, // This is the featured post
  },
  {
    id: 2,
    title: "Scalable APIs with Node.js & Express",
    excerpt:
      "Designing clean, efficient REST architectures that handle high concurrency.",
    image: "/blog/node-api.jpg",
    category: "Development",
    date: "Oct 25, 2025",
    readTime: "12 min read",
    href: "/blog/node-api",
  },
  {
    id: 3,
    title: "Design Thinking: Why Branding Matters",
    excerpt:
      "Your product’s first impression defines success. Blending aesthetics with UX.",
    image: "/blog/design-thinking.jpg",
    category: "Branding",
    date: "Sept 30, 2025",
    readTime: "5 min read",
    href: "/blog/design-thinking",
  },
  {
    id: 4,
    title: "AI in Security: Future of Threat Detection",
    excerpt:
      "How LLMs and heuristics are changing how we detect and respond to zero-day exploits.",
    image: "/blog/ai-security.jpg",
    category: "AI",
    date: "Aug 20, 2025",
    readTime: "10 min read",
    href: "/blog/ai-security",
  },
  {
    id: 5,
    title: "Postgres Optimization Techniques",
    excerpt:
      "Indexing strategies and query optimization for massive datasets.",
    image: "/blog/postgres.jpg",
    category: "Development",
    date: "July 15, 2025",
    readTime: "7 min read",
    href: "/blog/postgres-opt",
  },
  {
    id: 6,
    title: "The Zero Trust Architecture Model",
    excerpt:
      "Never trust, always verify. Implementing Zero Trust networks.",
    image: "/blog/zero-trust.jpg",
    category: "Cybersecurity",
    date: "June 10, 2025",
    readTime: "9 min read",
    href: "/blog/zero-trust",
  },
];

export default function BlogCom() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredPost = posts.find((p) => p.featured);

  // --- Logic Fix ---
  // Only show the "Big Featured Header" if we are in "All" and not searching
  const showFeaturedLayout = activeCategory === "All" && !searchQuery;

  const filteredPosts = posts.filter((p) => {
    const matchesCategory =
      activeCategory === "All" || p.category === activeCategory;
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    // If the featured layout is visible, hide that specific post from the grid
    // If we are filtering/searching, show the featured post in the grid along with everything else
    if (showFeaturedLayout && p.featured) return false;

    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative min-h-screen py-24 bg-gray-50 dark:bg-[#050608] text-gray-900 dark:text-gray-100 overflow-hidden">
      
      {/* 🔮 NEW GEOMETRIC BACKGROUND (Matches your images) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        
        {/* 1. Deep Gradient Base */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-black dark:from-[#1a0b2e] dark:via-[#0f0518] dark:to-black" />

        {/* 2. Top Left: Parallel Lines / Corner Shape */}
        <div className="absolute top-[5%] left-[5%] w-64 h-64 opacity-20 dark:opacity-30">
          <div className="absolute top-0 left-0 w-full h-full border-t-2 border-l-2 border-purple-500 dark:border-white rounded-tl-3xl" />
          <div className="absolute top-4 left-4 w-full h-full border-t-2 border-l-2 border-purple-500/50 dark:border-white/50 rounded-tl-2xl" />
          <div className="absolute top-8 left-8 w-full h-full border-t-2 border-l-2 border-purple-500/30 dark:border-white/30 rounded-tl-xl" />
        </div>

        {/* 3. Top Right: Intersecting Squares & Dots */}
        <div className="absolute top-[8%] right-[5%]">
          {/* Rotated Squares */}
          <div className="relative w-40 h-40">
             <div className="absolute inset-0 border border-pink-500/30 dark:border-white/20 transform rotate-12" />
             <div className="absolute inset-0 border border-purple-500/30 dark:border-white/20 transform -rotate-6 translate-x-4 translate-y-4" />
          </div>
          {/* Dot Grid */}
          <div className="absolute top-20 -left-20 grid grid-cols-4 gap-3 opacity-20 dark:opacity-40">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-purple-900 dark:bg-white rounded-full" />
            ))}
          </div>
        </div>

        {/* 4. Center/Left: Large Gradient Orb */}
        <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-[120px]" />

        {/* 5. Bottom Right: Circle Outlines & Glow */}
        <div className="absolute bottom-[5%] right-[5%]">
            <div className="w-80 h-80 border border-purple-400/20 dark:border-white/10 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 border border-pink-400/20 dark:border-white/10 rounded-full" />
            </div>
            {/* Glow */}
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-[100px]" />
        </div>

        {/* 6. Middle Right: Floating Rectangles */}
        <div className="absolute top-[40%] right-[10%] opacity-10 dark:opacity-20 flex flex-col gap-4">
             <div className="w-16 h-24 border border-purple-600 dark:border-white" />
             <div className="w-16 h-24 border border-purple-600 dark:border-white translate-x-8" />
        </div>

        {/* 7. Bottom Left: Dot Matrix */}
        <div className="absolute bottom-[10%] left-[10%] grid grid-cols-6 gap-4 opacity-10 dark:opacity-20">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-gray-900 dark:bg-white rounded-full" />
            ))}
        </div>
      </div>

      <Container className="relative z-10">
        {/* Header */}
        <div className="mb-16 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Re-animates on scroll
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-400 dark:to-pink-400">
                Chronicles
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Technical deep dives, security research, and design philosophies.
            </p>
          </motion.div>

          {/* Search + Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-2 rounded-2xl bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/5 backdrop-blur-md max-w-5xl mx-auto shadow-sm"
          >
            {/* Category Tabs */}
            <div className="flex overflow-x-auto pb-2 gap-2 w-full md:w-auto px-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64 px-2">
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-[#0b1220] border border-gray-200 dark:border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>

        {/* Featured Post (Only visible if default view) */}
        {featuredPost && showFeaturedLayout && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }} // Re-animates
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mb-20 relative group"
          >
            <Link
              href={featuredPost.href}
              className="block relative w-full h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-purple-600 text-white font-semibold">
                    Featured
                  </span>
                  <span className="flex items-center gap-2 text-gray-200 px-3 py-1 rounded-full bg-white/10 border border-white/10">
                    <FaCalendarAlt size={12} /> {featuredPost.date}
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6 line-clamp-2">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-2 text-purple-400 font-medium group-hover:translate-x-2 transition-transform">
                  Read Article <FaArrowRight />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                // Individual animation for every card
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-50px" }} // Re-animates on every scroll
                transition={{ duration: 0.5, delay: index * 0.1 }} // Slight stagger based on index
              >
                <Link
                  href={post.href}
                  className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white/80 dark:bg-[#0b1220]/80 backdrop-blur-md border border-gray-200 dark:border-white/5 transition-all hover:border-purple-500/30 shadow-sm hover:shadow-2xl"
                >
                  <div className="relative w-full h-56">
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 text-xs font-bold rounded-md bg-white/90 dark:bg-[#050608]/80 flex items-center gap-2 border border-gray-200 dark:border-white/10">
                        <FaTag size={10} className="text-purple-500" />
                        {post.category}
                      </span>
                    </div>

                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="100vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaRegClock /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex items-center justify-between text-sm">
                      <span className="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-300 transition-colors">
                        By Musa Hakilu
                      </span>
                      <FaArrowRight className="text-purple-600 dark:text-purple-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 bg-white/50 dark:bg-white/5 rounded-3xl border border-gray-200 dark:border-white/5"
          >
            <FaSadTear className="mx-auto text-4xl text-gray-400 mb-4" />
            <h3 className="text-xl font-bold">No articles found</h3>
            <p className="text-gray-500">
              Try adjusting your search or category filter.
            </p>
          </motion.div>
        )}

        {/* Load More */}
        {filteredPosts.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-3 rounded-full border border-gray-300 dark:border-white/10 bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/5 transition-all font-medium">
              Load More Articles
            </button>
          </motion.div>
        )}
      </Container>
    </section>
  );
}
