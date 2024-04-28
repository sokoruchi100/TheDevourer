/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["MedusaGothic", "sans-serif"],
        text: ["Gotham", "sans-serif"],
      },
      colors: {
        primary: "#463D3D", // Custom primary color
        secondary: "#281B18", // Custom secondary color
        tertiary: "#C8C0C0", // Custom tertiary color
      },
    },
  },
  plugins: [],
};
