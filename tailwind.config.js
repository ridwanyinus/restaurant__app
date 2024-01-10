/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        small: "470px",
        widescreen: "1344px",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
        display: ["DM Serif Display", "serif"],
        sans: ["DM Sans", " sans-serif"],
        cinzel: ["Cinzel", "serif"],
      },

      colors: {
        yellow: "#FFC164",
        gold: "#FF9F0F",
        grey: "#272727",
        accentRed: "#FF5C5C",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
