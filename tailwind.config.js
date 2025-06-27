/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        futura: ['Futura', 'Sans-Serif'],
        cursive: ['Abuget', 'Sans-Serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        main : "#151312",   // Custom color
        mainlight: "#353334",
        whitebg : "#F3F0EB" ,
        ownorange: "#CC5500 ",
      },
    },
  },
  plugins: [],
}