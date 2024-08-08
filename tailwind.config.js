/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#111111",
        tertiary: "#A6A6A6",
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'],
        popins: ['Poppins'],
        round: ['M PLUS Rounded 1c'],
      },
    },
  },
  plugins: [],
}

