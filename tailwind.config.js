/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans serif']
      },
      colors: {
        /** 
         * Material Design Dark Theme
        */
        background: "rgb(18, 20, 14)",                // Fondo principal oscuro
        primary: "rgb(177, 209, 138)",                // Color primario
        secondary: "rgb(191, 203, 173)",              // Color secundario
        onBackground: "rgb(226, 227, 216)",           // Texto sobre fondo oscuro
        onPrimary: "rgb(31, 55, 1)",                // Texto sobre color primario
        onSecondary: "rgb(42, 51, 30)",            // Texto sobre color secundario
        primaryContainer: "rgb(53, 78, 22)",       // Contenedor primario
        onPrimaryContainer: "rgb(205, 237, 163)",  // Texto sobre el contenedor primario
        onSurface: "rgb(226, 227, 216)",            // Texto sobre el color de superficie
      }
    },
  },
  plugins: [],
};