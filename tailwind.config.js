/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      med: "720px",
      max: "1280px",
    },
    extend: {},
  },
  plugins: [],
}