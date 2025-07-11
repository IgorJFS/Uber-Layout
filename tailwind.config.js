 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./**/*.js"],
   theme: {
     extend: {
      backgroundImage: {
        'uber': "url('/Uber-Layout/assets/bguber.png')",
        'city': "url('/Uber-Layout/assets/bg-city.png')",
      }
     },
   },
   plugins: [],
 }