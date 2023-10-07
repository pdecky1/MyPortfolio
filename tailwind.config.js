/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#000745',
        'dark-red' : '#750000',
        'dark-green' : '#007528',
        'choco' : '#755400',
      },
    },
    fontFamily:{
      montserrat:[ 'Montserrat', 'sans-serif']
    }
  },
  plugins: [],
}

