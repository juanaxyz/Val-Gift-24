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
          "0%" :{
            opacity: "0",
            filter: "blur(1rem)",
            transform: "translate3d(0, 3rem, 0) rotate3d(0.25, -1, 0, 66.6deg)",
          },
          
          "60%" :{
            opacity: "1",
            filter: "blur(0px)",
            transform: "translate3d(0, 0, 0)",
          },
          "100%" :{
            opacity: "0",
            filter: "blur(1rem)",
            transform: "translate3d(0, -3rem, 0) rotate3d(-0.25, 1, 0, 66.6deg)",
          },
        },
      },
      animation:{
        'BounceIn':'BounceIn 4s infinite forwards ease',
        'BounceOut':'BounceOut 4s infinite forwards ease',
        'Button':'ButtonScale 4s once forwards ease',
      }
    },
  },
  plugins: [

  ],
}
