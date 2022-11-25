/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#fe8d19",
        sub: "#707A93",
        "gray-check-box": "#727272",
        "sps-gray": "#eee",
        "primary-bg": "#403f83",
        "orange-bg": "#fe8d19",
        brand: colors.violet,
      },
      padding: {
        "8px": "8px",
        "15px": "15px",
      },
      boxShadow: {
        "rise-sm": "2px 2px 20px 0px rgba(235,110,25,0.5)",
      },
      letterSpacing: {
        widest: ".1em",
      },
    },
  },
  plugins: [],
};
