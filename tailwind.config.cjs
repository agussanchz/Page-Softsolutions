/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'primary': ['#1f2028;'],
        'secondary': ['#191920c4'],
        'card': ['#2e3039']
      }
    },
  },
  plugins: [],
}
