import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0A0E1A",
        flow: "#3B6FFF",
        "flow-bright": "#5B8BFF",
        signal: "#00D9A3",
        ash: "#8892A4",
        "ash-light": "#B8C2D4",
        "surface-raised": "#1C2235",
        wire: "#2A3349",
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Syne'", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
