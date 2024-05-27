/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#005B41',
        secondary: '#232D3F',
        tertiary: '#F00',
      },
      keyframes: {
        zoom: {
          '0%, 100%': { transform: 'scale(1.2)' },
          '50%, 80%': { transform: 'scale(1)' },
        }
      },
    },
  },
  plugins: [],
}

