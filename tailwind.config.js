/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "344px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        pirata: ["Pirata One", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "eerie-black": "#1b1b1b",
        "brilliant-rose": "#fb53b6",
        verdigris: "#17bebb",
        saffron: "#e1bc29",
        parchment: "#f2e7c9",
        "light-grey": "#d9d9d9",
      },
    },
  },
  plugins: [],
};
