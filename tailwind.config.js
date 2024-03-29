/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'Light Cyan': 'hsl(193, 38%, 86%)',
      'Neon Green': 'hsl(150, 100%, 66%)',
      'Grayish Blue': 'hsl(217, 19%, 38%)',
      'Dark Grayish Blue': 'hsl(217, 19%, 24%)',
      'Dark Blue': 'hsl(218, 23%, 16%)',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}