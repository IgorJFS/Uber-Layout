 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./**/*.js"],
   theme: {
     extend: {
      backgroundImage: {
        'uber': "url('/assets/bguber.png')",
        'city': "url('/assets/bg-city.png')",
      }
     },
   },
   plugins: [],
 }