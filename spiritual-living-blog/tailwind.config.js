/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          light: "#fcf8f3",
          DEFAULT: "#f5efe3",
          dark: "#e7dec8"
        },
        spiritualBlue: {
          light: "#e9f3fb",
          DEFAULT: "#b5d1e7",
          dark: "#5c8ab2"
        }
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
