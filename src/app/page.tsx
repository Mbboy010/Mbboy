"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightBackground text-foreground dark:bg-darkBackground dark:text-foreground transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-customPurple to-customPink text-transparent bg-clip-text">
        Welcome to Next.js 15 🚀
      </h1>
      
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        className="px-4 py-2 rounded-lg bg-customPurple text-customWhite hover:bg-customPink transition-colors duration-300"
      >
        {resolvedTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}