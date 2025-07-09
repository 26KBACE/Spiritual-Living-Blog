module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#6D9886',
        secondary: '#F6F6F6',
        accent: '#FFB085',
        dark: '#22223b',
        light: '#f2e9e4',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};