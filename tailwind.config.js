export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: "#00ff9c",
      },
      boxShadow: {
        neon: "0 0 25px rgba(0,255,156,.35)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marqueeSlow: "marquee 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
