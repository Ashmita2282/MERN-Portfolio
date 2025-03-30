/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#09090b",
        secondary: "#fca5a5",
        tertiary: "#bef264",
      }
    },
    screens: {
      'lg': {'max': '2023px'},
      
      'sm': {'max': '1000px'},
      
    }
  },
  plugins: [],
}