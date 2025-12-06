// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], 
      },
      colors: {
        darkGreen: '#6b9080',
        darkGreen1: '#244e3cff',
      },
    },
  },
  plugins: [],
}
