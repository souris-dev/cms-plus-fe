/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'Montserrat, Arial, sans-serif'
      },
      backgroundColor: {
        'generic': '#edefff',
        'slate-black': '#272727',
        'primary': '#5905ce',
        'generic-dull': '#d4d6e5',
        'generic-light': '#f4f6ff'
      },
      colors: {
        'btn-start': '#9469fe',
        'btn-end': '#6841ff',
        'primary': '#5905ce',
        'generic-dull': '#d4d6e5',
        'generic-light': '#f4f6ff'
      }
    },
  },
  plugins: [],
}
