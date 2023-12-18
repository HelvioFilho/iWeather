/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        gray: {
          900: "#13131A",
          800: "#16161F",
          700: "#1C1C27",
          600: "#22222F",
          500: "#3B3B54",
          400: "#7F7F98",
          300: "#ABABC4",
          200: "#BFBFD4",
          100: "#FAFAFA",
        },
        blue: {
          light: "#8FB2F5",
        },
      },
      fontFamily: {
        regular: "Nunito_400Regular",
        bold: "Nunito_700Bold",
        extraBold: "Nunito_800ExtraBold",
      },
    },
  },
  plugins: [],
};
