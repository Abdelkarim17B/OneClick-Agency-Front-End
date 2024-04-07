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
    extend: {
      zIndex: {
        '70': '70',
        '60': '60',
      },
      spacing: {
        '120': '30rem',
        '128': '34rem',
      },
      keyframes: {
        resizeToLarge: {
          '0%': { width: '9vw', height: '30vh' },
          '100%': { width: '18vw', height: '65vh' },
        },
        resizeToSmall: {
          '0%': { width: '18vw', height: '65vh' },
          '100%': { width: '9vw', height: '30vh' },
        },
        fadein: {
          '0%': {opacity: 0},
          '100%': {opacity: 1},
        },
        fadeout: {
          '0%': { opacity: 1},
          '100%': { opacity: 0},
        },
      },
      animation: {
        resizeToLarge: 'resizeToLarge 1s ease-in forwards',
        resizeToSmall: 'resizeToSmall 1s ease-in forwards',
        fadein: 'fadein 2s ease-in-out forwards',
        fadeout: 'fadeout 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}