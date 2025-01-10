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
        background: "#12140e",
        primary: "#b1d18a",
        secondary: "#bfcbad",
        onBackground: "#e2e3d8",
        onPrimary: "#1f3701",
        onSecondary: "#2a331e",
      }
    },
  },
  plugins: [],
};