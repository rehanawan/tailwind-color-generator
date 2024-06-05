/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FF6363',
        'secondary': {
          100: '#E2E2D5',
          200: '#888883',
        },
        'my-color': {
          '50': 'hsl(359, 99%, 97%)',
          '100': 'hsl(359, 70%, 88%)',
          '200': 'hsl(359, 48%, 79%)',
          '300': 'hsl(359, 32%, 71%)',
          '400': 'hsl(359, 22%, 62%)',
          '500': 'hsl(359, 19%, 53%)',
          '600': 'hsl(359, 22%, 44%)',
          '700': 'hsl(359, 32%, 36%)',
          '800': 'hsl(359, 48%, 27%)',
          '900': 'hsl(359, 70%, 18%)'
        }
      },
    },
  },
  plugins: [],
}