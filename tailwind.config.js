/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
    "./layouts/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{vue,js,ts,jsx,tsx}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        segoe: ['"Segoe UI"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
