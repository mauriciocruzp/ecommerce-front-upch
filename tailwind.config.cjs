/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal-purple': '#6F39DD',
        'hover-purple': '#5822C7',
        'light-purple': '#8C60E4',
        'purple-white': '#DDD0F7',
        'light-white': '#C1A9F0',
        'intermidiate': '#A887EB',
        'input-purple': '#E8DFFA',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }

    },
  },
  plugins: [],
}