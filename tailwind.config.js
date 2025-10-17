/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: { center: true, padding: "15px" },
    screens: { sm: "640px", md: "768px", lg: "960px", xl: "1200px" },
    extend: {
      colors: {
        white: "#fff",
        black: "#273029",
        background: "#F5F2ED",
        grey: { DEFAULT: "#888", secondary: "#fafafa" },
        gold: "#DABE9D",
        outline: "#f1f1f1",
        pink: "#f3d1d7",
        body: "#e5e5e5",
        red: "#fb5d3b",
      },
      keyframes: {
        expandFromLeft: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        contractToRight: {
          "0%": { transform: "scaleX(1)", transformOrigin: "right" },
          "100%": { transform: "scaleX(0)", transformOrigin: "right" },
        },
      },
      animation: {
        "expand-left": "expandFromLeft 200ms ease-out forwards",
        "contract-right": "contractToRight 200ms ease-in forwards",

        "accordion-down": "accordion-down 0.1s ease-out",
        "accordion-up": "accordion-up 0.1s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
