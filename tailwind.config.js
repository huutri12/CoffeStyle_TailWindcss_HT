/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Karla :['Karla','serif']
      },
      colors:{
        'coffee':{
          50:'#E8D6D0',
          200:'#C89F84',
          400:'#A25F4B',
          600:'#744838',
        }
      },
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        slideDown: 'slideDown .4s ease-in-out',
      },
      backgroundImage: {
        'slide-bg':'url("./img/slider.jpg")'
      }
    },
  },
  plugins: [],
}

