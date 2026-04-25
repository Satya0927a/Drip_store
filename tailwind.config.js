/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50:  '#f5f5f4',
          100: '#e8e7e5',
          200: '#d2d0cc',
          300: '#b3afa9',
          400: '#8d8880',
          500: '#706b62',
          600: '#5c5850',
          700: '#4a4741',
          800: '#3e3c37',
          900: '#1a1917',
          950: '#0d0c0b',
        },
        gold: {
          300: '#f0d080',
          400: '#e8c04a',
          500: '#d4a017',
          600: '#b8870f',
          700: '#9a6e0c',
        },
        ivory: {
          50:  '#fdfcf8',
          100: '#faf8f0',
          200: '#f5f1e4',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
}
