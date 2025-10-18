"use client";

import { motion } from "framer-motion";

export default function CollaboratePage() {
  return (
    <main className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-purple-600 dark:text-purple-400">
          Collaborate with Me
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Let’s create something powerful together — apps, brands, or security systems.
        </p>
      </motion.div>
    </main>
  );
}