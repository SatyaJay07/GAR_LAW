/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
    theme: {
      extend: {
        keyframes: {
          colorChange: {
            '0%': { color: 'rgb(255, 0, 0)' },
            '25%': { color: 'rgb(0, 255, 0)' },
            '50%': { color: 'rgb(0, 0, 255)' },
            '75%': { color: 'rgb(255, 255, 0)' },
            '100%': { color: 'rgb(255, 0, 0)' },
          }
        },
        animation: {
          colorChange: 'colorChange 1s infinite',
        }
      }
    },
    variants: {},
    plugins: [],
  }
  


