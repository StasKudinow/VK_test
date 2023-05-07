/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      width: {
        '1024': '1024px',
        '768': '768px',
      },
      colors: {
        black: '#232323',
        white: '#F8F8F8',
        blue: '#4682B4',
        gray: '#D9D9D9',
        red: '#B22222',
      },
      fontFamily: {
        sans: ['Gill Sans', 'sans-serif'],
      },
      fontWeight: {
        'font-normal': 400,
        'font-light': 300,
      },
      fontSize: {
        'h1': '40px',
        'h2': '20px',
        'p': '15px',
      },
      boxShadow: {
        'button-shadow': 'inset 7px 6px 4px rgba(0, 0, 0, .25)',
      },
    },
  },
  plugins: [],
}
