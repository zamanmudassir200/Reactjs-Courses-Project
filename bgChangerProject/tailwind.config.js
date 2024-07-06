// tailwind.config.js
module.exports = {
  content: [
    "./src//*.{js,jsx,ts,tsx,html}", // adjust this according to your project's file structure
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f3eae1",
          200: "#e0c9b8",
          300: "#ccab8f",
          400: "#b88e66",
          500: "#a3713d",
          600: "#85572f",
          700: "#684122",
          800: "#4a2b15",
          900: "#2d1708",
        },
      },
    },
  },
  plugins: [],
};
