/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        light: "url('../public/images/light.jpg')",
        dark: "url('../public/images/dark.jpg')",
      },
      colors: {
        primary: '#00bf76',
      },
      boxShadow: {
        'special-before': 'inset 0 0 5px white',
        special: '0px 0px 10px 1000px rgba(0,0,0, 0.5)',
      },
    },
  },
  plugins: [],
}
