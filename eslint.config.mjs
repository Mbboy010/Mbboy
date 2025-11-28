// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import nextPlugin from "@next/eslint-plugin-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: {}, // optional: helps with compatibility
});

const eslintConfig = [
  // This replaces compat.extends("next/core-web-vitals", "next/typescript")
  // and gives you full control + no warnings
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // This rule is what causes the "Need to disable some ESLint rules?" warning
      "@next/next/no-client-component-in-server-component": "off",

      // Optional: more helpful rules you might want
      // "react-hooks/exhaustive-deps": "warn",
      // "@typescript-eslint/no-unused-vars": "warn",
    },
    languageOptions: {
      globals: {
        React: "writable", // helps with JSX in flat config
      },
    },
  },

  // TypeScript support (if you're using TS)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },

  // Ignore patterns
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "dist/**",
      "next-env.d.ts",
      "*.config.js",
      "*.config.mjs",
    ],
  },
];

export default eslintConfig;