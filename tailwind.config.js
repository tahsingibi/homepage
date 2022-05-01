const colors = require('tailwindcss/colors');

module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: colors.zinc
      },
      fontFamily:{
        'sans':['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
