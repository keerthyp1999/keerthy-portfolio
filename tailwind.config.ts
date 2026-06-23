import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "ink": "#0A0E1A",
        "ink-soft": "#111827",
        "slate-deep": "#1E2538",
        "flow": "#3B6FFF",
        "flow-bright": "#5B8BFF",
        "flow-dim": "#1E3A8A",
        "signal": "#00D9A3",
        "signal-dim": "#00A07A",
        "ash": "#8892A4",
        "ash-light": "#B8C2D4",
        "surface": "#141929",
        "surface-raised": "#1C2235",
        "wire": "#2A3349",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-up": "slideUp 0.7s ease forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        scan: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(400%)" } },
      },
    },
  },
  plugins: [],
};
export default config;
