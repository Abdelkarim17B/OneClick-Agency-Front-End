/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',    // Extra small devices
      'sm': '640px',    // Small devices
      'md': '768px',    // Medium devices (tablets)
      'lg': '1024px',   // Large devices (small laptops)
      'xl': '1280px',   // Extra large devices (laptops)
      '2xl': '1536px',  // 2X Extra large devices (large laptops and desktops)
      '3xl': '1920px',  // 3X Extra large devices (large monitors)
      '4xl': '2560px',  // 4X Extra large devices (ultra-wide monitors)
      // Legacy breakpoints for compatibility
      med: "768px",
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
        '144': '36rem',
        '160': '40rem',
        '192': '48rem',
        '256': '64rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        // Responsive fluid typography
        'fluid-xs': 'clamp(0.75rem, 2vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 2.5vw, 1rem)',
        'fluid-base': 'clamp(1rem, 3vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3.5vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 4vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4.5vw, 1.875rem)',
        'fluid-3xl': 'clamp(1.875rem, 5vw, 2.25rem)',
        'fluid-4xl': 'clamp(2.25rem, 6vw, 3rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 3.75rem)',
      },
      keyframes: {
        // 67% zoom animations
        resizeToLarge67: {
          '0%': { width: '11vw', height: '35vh' },
          '100%': { width: '22vw', height: '75vh' },
        },
        resizeToSmall67: {
          '0%': { width: '22vw', height: '75vh' },
          '100%': { width: '11vw', height: '35vh' },
        },
        // 90% zoom animations
        resizeToLarge90: {
          '0%': { width: '10vw', height: '32vh' },
          '100%': { width: '20vw', height: '70vh' },
        },
        resizeToSmall90: {
          '0%': { width: '20vw', height: '70vh' },
          '100%': { width: '10vw', height: '32vh' },
        },
        // 100% zoom animations (original)
        resizeToLarge: {
          '0%': { width: '9vw', height: '30vh' },
          '100%': { width: '18vw', height: '65vh' },
        },
        resizeToSmall: {
          '0%': { width: '18vw', height: '65vh' },
          '100%': { width: '9vw', height: '30vh' },
        },
        // 125% zoom animations - much smaller images
        resizeToLarge125: {
          '0%': { width: '5vw', height: '28vh' },
          '100%': { width: '10vw', height: '60vh' },
        },
        resizeToSmall125: {
          '0%': { width: '10vw', height: '60vh' },
          '100%': { width: '5vw', height: '28vh' },
        },
        // 133% zoom animations - very small images
        resizeToLarge133: {
          '0%': { width: '4vw', height: '26vh' },
          '100%': { width: '8vw', height: '55vh' },
        },
        resizeToSmall133: {
          '0%': { width: '8vw', height: '55vh' },
          '100%': { width: '4vw', height: '26vh' },
        },
        // 150% zoom animations - tiny images
        resizeToLarge150: {
          '0%': { width: '3.5vw', height: '24vh' },
          '100%': { width: '7vw', height: '50vh' },
        },
        resizeToSmall150: {
          '0%': { width: '7vw', height: '50vh' },
          '100%': { width: '3.5vw', height: '24vh' },
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
        // 67% zoom animations
        resizeToLarge67: 'resizeToLarge67 1s ease-in forwards',
        resizeToSmall67: 'resizeToSmall67 1s ease-in forwards',
        // 90% zoom animations
        resizeToLarge90: 'resizeToLarge90 1s ease-in forwards',
        resizeToSmall90: 'resizeToSmall90 1s ease-in forwards',
        // 100% zoom animations (original)
        resizeToLarge: 'resizeToLarge 1s ease-in forwards',
        resizeToSmall: 'resizeToSmall 1s ease-in forwards',
        // 125% zoom animations
        resizeToLarge125: 'resizeToLarge125 1s ease-in forwards',
        resizeToSmall125: 'resizeToSmall125 1s ease-in forwards',
        // 133% zoom animations
        resizeToLarge133: 'resizeToLarge133 1s ease-in forwards',
        resizeToSmall133: 'resizeToSmall133 1s ease-in forwards',
        // 150% zoom animations
        resizeToLarge150: 'resizeToLarge150 1s ease-in forwards',
        resizeToSmall150: 'resizeToSmall150 1s ease-in forwards',
        // Fade animations
        fadein: 'fadein 2s ease-in-out forwards',
        fadeout: 'fadeout 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}