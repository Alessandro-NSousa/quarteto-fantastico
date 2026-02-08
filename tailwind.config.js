/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'quarteto-green': '#b4ff00',
        'quarteto-blue': '#1a1a4d',
        'quarteto-blue-light': '#2d2d6e',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
