/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#00A6FF',   // Azul Rayo (botones y acentos)
        secondary: '#F4F4F4', // Gris Claro para detalles
        white: '#ffffff',     // Fondo principal
        black: '#000000',     // Texto
      },
    },
  },
  plugins: [],
}
