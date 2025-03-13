/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40", // Deep forest green
        secondary: "#A3B18A", // Soft sage green
        accent: "#DDBEA9", // Warm earthy beige
        background: "#EDEDE9", // Light cream background
      },
    },
  },
  plugins: [],
};
