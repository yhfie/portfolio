/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js,jpg}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'inter': ['Inter']
      },
      colors:{
        'scarlet': {
          '50': '#fff1f0',
          '100': '#ffe0dd',
          '200': '#ffc6c0',
          '300': '#ff9e94',
          '400': '#ff6757',
          '500': '#ff3923',
          '600': '#ff1900',
          '700': '#d71500',
          '800': '#b11403',
          '900': '#92170a',
          '950': '#500800',
        },
        'darkBg':'#06060B',
        'darkBg2':'#131321',
        'darkBox':{
          '50': '#121220',
          '100': '#0C0C17'
        }
      }
    },
  },
  plugins: [],
}

