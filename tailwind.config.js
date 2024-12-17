/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6d597a',
        secondary: {
          100: '#b56576',
          200: '#eaac8b',
          300: '#e56b6f',
        },
      },
    },
  },
  plugins: [],
}
