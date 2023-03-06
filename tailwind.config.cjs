/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "640px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
