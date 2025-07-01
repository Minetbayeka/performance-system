
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#7F56D9",
        secondary: "#D92D20",
        tertiary: "#D2D3CD",
      },
       
        fontFamily:{
          poppins:['poppins', 'sans-serif']

        }
       
    },
  },
  plugins: [],
}


