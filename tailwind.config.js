/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        cusblue: "#0463FA",
        cusdarkblue: "#1B2C51",
        textcolor: "#8D8E92",
        boxcolor: "#EFF5FF",
        bglight: "#EFF5FF",
      },
      fontFamily: {
        roboto: "Roboto",
        opensans: "Open Sans",
      },
      screens: {
        ss: "100px",
      },
    },
  },
  plugins: [],
};
