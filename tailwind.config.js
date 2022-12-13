/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    backgroundImage: {
      hero: "url('../public/bg.webp')",
    },
    fontFamily: {
      serif: ["Safira March Personal Use", "serif"],
      sans: ["Glacial Indifference", "sans-serif"],
    },
    extend: {},
    colors: {
      primary: "#e7b09c",
      secondary: "#c89a8a",
      title: "#8d371c",
      pink: {
        100: "#dca998",
        200: "#ebdacc",
        300: "#ece0c4",
        400: "#f6f0e3",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
