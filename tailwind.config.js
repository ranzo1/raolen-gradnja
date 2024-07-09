/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      white: "#fff",
      black: "#273029",
      background: "#F5F2ED",
      grey: {
        DEFAULT: "#888",
        secondary: "#fafafa",
      },
      gold: "#DABE9D",
      outline: "#f1f1f1",
      pink: "#f3d1d7",
      body: "#e5e5e5",
    },
    extend: {
      keyframes: {
        expand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "expand-left-right": "expand 0.4s forwards",
        "contract-left-right": "contract 0.4s forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    backgroundImage: {
      hero: "url(/hero/bg.png)",
      hero2: "url(/hero/bg-2.png)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
