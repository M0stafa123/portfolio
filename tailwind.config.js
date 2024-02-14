/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainText: "#5EEAD4",
        mainBG: "rgba(45,212,191,.1)",
      },
      backgroundColor: {
        mainBG: "rgba(45,212,191,.1)",
      },
    },
  },
  plugins: [],
};
