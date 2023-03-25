/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      'primary':'#79645B',
      'secondery':'#244262',
      'primary-blue':'#A0D8F0',
      'primary-orange':'#ECBA76',
      'primary-rose':'#DAB0A0',
      'white':'#ffffff',
      'bglight':'#F9F2EE',
      'secondery-rose':'#F4D7B0',
      'gradone':'#A0D8F0',
      'gradmiddel':'#9296A0',
    },
    fontFamily: {
      'philosopher': ['Philosopher', 'sans-serif'],
      'tenor':['Tenor Sans','sans-serif'],
    },
    fontSize: {
      '2xl':'32px',
      'xl':'24px',
      'lg':'20px',
      'base':'16px',
      'tiny':'14px',
    },
    fontWeight: {
      'regular': 400,
      'bold': 700,
    },
    extend: {},
  },
  plugins: [],
}
