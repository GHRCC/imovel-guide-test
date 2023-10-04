/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        laranja: "#FE6613",
        azul: "#1B2653",
        cinza: "#787878",
      },
    },
  },
  plugins: [],
};
