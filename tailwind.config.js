/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f172a",
          sky: "#38bdf8",
          mist: "#e0f2fe",
          slate: "#475569",
          cloud: "#f8fafc",
        },
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        panel: "0 24px 60px -32px rgba(15, 23, 42, 0.35)",
      },
      backgroundImage: {
        "tech-grid":
          "linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
