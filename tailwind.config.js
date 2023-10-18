/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "blue-500": "#3b82f6", // Replace with your desired blue-500 color
      },
      borderColor: {
        black: "#000", // Replace with your desired border color
      },
    },
  },
  variants: {},
  plugins: [],
};
