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
      },

      // ✅ gradients go here, not in colors
      backgroundImage: {
        darkBackground: "linear-gradient(135deg,#0F0716, #110819)",
        lightBackground: "linear-gradient(135deg, #F5F5F5, #E0E7FF)",
      },

      keyframes: {
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      animation: {
        bounce: "bounce 0.8s infinite ease-in-out",
      },
    },
  },

  plugins: [
    heroui(), // 👈 add HeroUI plugin here
  ],
};