import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#2b2b2b",
          light: "#3f3f3f",
          dark: "#1a1a1a",
        },
        navy: {
          DEFAULT: "#122142",
          light: "#1c3260",
          dark: "#0b1730",
        },
        gold: {
          DEFAULT: "#a98a4d",
          light: "#c7ab6f",
          dark: "#8a6f37",
        },
        greige: {
          DEFAULT: "#e8e2d9",
          light: "#f4f1eb",
          dark: "#d8cfc0",
        },
      },
      fontFamily: {
        sans: [
          "'Noto Sans JP'",
          "'Hiragino Kaku Gothic ProN'",
          "'Yu Gothic'",
          "sans-serif",
        ],
        heading: [
          "'Noto Sans JP'",
          "'Hiragino Kaku Gothic ProN'",
          "sans-serif",
        ],
        display: ["'Cormorant Garamond'", "serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
