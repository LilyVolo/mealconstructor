/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',   // Минимальная ширина экрана для sm: (работает с 640px и больше)
      md: '768px',   // Минимальная ширина экрана для md: (работает с 768px и больше)
      lg: '1024px',  // Минимальная ширина экрана для lg: (работает с 1024px и больше)
      xl: '1280px',  // Минимальная ширина экрана для xl: (работает с 1280px и больше)
    },    
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        heroGradient: 'linear-gradient(90deg, rgba(9,108,17,1) 3%, rgba(47,163,95,1) 15%, rgba(129,227,126,0.9892550770308123) 37%, rgba(220,227,126,0.9500393907563025) 75%);'
      },
      colors: {
        myGreen: '#01260A'
      }
    },
  },
  plugins: [],
}

