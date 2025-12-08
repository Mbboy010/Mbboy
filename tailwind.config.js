/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}", // 👈 important for HeroUI
  ],

  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)",
        foreground: "hsl(222.2, 84%, 4.9%)",
        dark: {
          background: "hsl(222.2, 84%, 4.9%)",
          foreground: "hsl(210, 40%, 98%)",
        },
        // Custom solid colors
        customPurple: "#B266FF",
        customPink: "#FF66D9",
        customTeal: "#00C4B4",
        customYellow: "#FFD700",
        customDarkGray: "#1A1A1A",
        customWhite: "#FFFFFF",
        dark: "#0B0B14",
        primary: "#A855F7", // Neon purple
      },

      // ✅ gradients go here, not in colors
      backgroundImage: {
        darkBackground: "linear-gradient(135deg,#000000, #000000)",
        lightBackground: "linear-gradient(135deg, #F5F5F5, #E0E7FF)",
      },

      keyframes: {
        // Your existing bounce
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // 👇 NEW: Keyframes for the Loader
        'spin-reverse': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'pulse-core': {
          '0%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(0.8)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.2)' },
          '100%': { opacity: '0.5', transform: 'translate(-50%, -50%) scale(0.8)' },
        },
        'text-fade': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        },
      },

      animation: {
        // Your existing bounce
        bounce: "bounce 0.8s infinite ease-in-out",
        // 👇 NEW: Animation utilities for the Loader
        'spin-slow': 'spin 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite', // Uses default tailwind 'spin' keyframe
        'spin-reverse': 'spin-reverse 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        'pulse-core': 'pulse-core 2s ease-in-out infinite',
        'text-fade': 'text-fade 2s ease-in-out infinite',
      },
    },
  },

  plugins: [
    heroui(), // 👈 add HeroUI plugin here
  ],
};
