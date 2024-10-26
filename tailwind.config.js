/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      screens: {
        'sm' : {'min': '300px', 'max': '500px'},
        'md' : {'min': '500px', 'max': '800px'},
        'lg' : '800px',
      }
    },
  },
  plugins: [],
}