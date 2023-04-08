/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  safelist: ["bg-*"],
  theme: {
    extend: {
      colors: {
        black: "#151616",
        while: "#FBFFFE",
        secondary: {
          200: "#F56F66",
          400: "#F24236",
          600: "#F24236",
          800: "#F02719",
          DEFAULT: "#F24236",
        },
        primary: {
          200: "#5B91AE",
          400: "#5B91AE",
          600: "#426E86",
          800: "#437089",
          DEFAULT: "#426E86",
        },
      },
    },
  },
  plugins: [],
  variants: {},
};
