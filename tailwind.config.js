/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      fontSize: {
        base: '0.9375rem'
      },
      colors: {
        red: '#EA5353',
        cyan: '#45D3D3',
        orange: '#FCAF4A',
        blue: '#549EF2',
        'very-dark-blue': '#4C4E61',
        'grayish-blue': '#A3A5AE',
        'very-light-gray': '#FAFAFA'
      },
      borderWidth: {
        '5': '5px'
      },
      boxShadow: {
        card: '0 15px 20px 0 rgba(12, 24, 135, 0.1)'
      }
    },
  },
  plugins: [],
}

