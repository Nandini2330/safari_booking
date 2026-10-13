/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest:    '#173B2A',
        woodland:  '#263D25',
        olive:     '#687348',
        sage:      '#A5AD8A',
        cream:     '#F6F0E2',
        gold:      '#DDB64C',
        darktext:  '#202A20',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans:  ['Manrope', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      aspectRatio: {
        '4/5': '4 / 5',
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [],
}
