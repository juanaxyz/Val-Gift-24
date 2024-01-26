/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Satisfy: ["Satisfy"],
        Montserrat: ["Montserrat"],
      },
      keyframes: {
        BounceIn: {
          '0%':{transform: 'translateY(-24px)'},
          '50%':{transform: 'translateY(0px)'},
          '100%':{transform: 'translateY(-24px)'}
        },
        BounceOut: {
          '0%':{transform: 'translateY(-24px)', scale : '.7'},
          '50%':{transform: 'translateY(0px)', scale : '1'},
          '100%':{transform: 'translateY(-24px)', scale : '.7'}
        },
        ButtonScale:{
          '0%':{scale:'1'},
          '100%':{scale:'1.7'},
        }
      },
      animation:{
        'BounceIn':'BounceIn 4s infinite forwards ease',
        'BounceOut':'BounceOut 4s infinite forwards ease',
        'Button':'ButtonScale 1s forwards ease',
      }
    },
  },
  plugins: [

  ],
};
