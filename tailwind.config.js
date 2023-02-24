/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      roboto : ["Roboto"],
      oxygen : ["Oxygen"],
      robotoslab:["Roboto Slab"],
      lora:["Lora"]
    },
    
      screens: {
        'xsmx': '440px',
        // => @media (min-width: 640px) { ... }
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
  
      }
    
    // extend: {},
    // colors: {
    //   'blue': '#1fb6ff',
    //   'purple': '#7e5bef',
    //   'pink': '#ff49db',
    //   'orange': '#ff7849',
    //   'green': '#13ce66',
    //   'yellow': '#ffc82c',
    //   'gray-dark': '#273444',
    //   'gray': '#8492a6',
    //   'gray-light': '#d3dce6',
    // },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
   
  },
}