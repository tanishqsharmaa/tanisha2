/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F1E7',
        beige: '#E9DCC8',
        indigo: '#263B59',
        madder: '#A63D35',
        turmeric: '#D6A642',
        forest: '#526B50',
        terracotta: '#B86B4B',
        charcoal: '#352D28',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
