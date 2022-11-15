/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
