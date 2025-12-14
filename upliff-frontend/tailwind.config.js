// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'], 
      },
      colors: {
        darkGreen: '#6b9080',
        darkGreen1: '#244e3cff',
        cream: '#f5f2e8'
      },
    },
  },
  plugins: [],
}
