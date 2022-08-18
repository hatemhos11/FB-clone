/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // fontFamily: 'Roboto, Segoe UI, Helvetica, Arial, sans-serif',
      screens: {
        'xs': '480px',
        'sm': '768px',
        'md': '899px',
        'lg': '1099px',
      },
      boxShadow:{
        'border': '0 1px 2px rgb(0 0 0 / 20%)'
      }
  
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}