export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#4338ca",
        secondary: "#3730A3",
        text: "#6B7280",
        heading: "#1F2937",
        footer: "#F9F9F9",
      },
    },
  },
  plugins: [],
};
