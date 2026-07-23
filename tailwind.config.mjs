/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — from 02-Assets/Brand/Color Palette.png
        ink: {
          DEFAULT: '#1b3c53', // deep navy — primary
          900: '#132b3c',
          800: '#1b3c53',
          700: '#234c6a',
          600: '#2d5c80',
          500: '#456882', // steel blue
          400: '#5e7f98',
          300: '#8ba4b6',
        },
        cream: {
          DEFAULT: '#fdf2d4', // warm cream — light accent
          50: '#fffdf7',
          100: '#fdf2d4',
          200: '#f6e6b8',
        },
        // Neutral scale tuned to sit calmly beside the navy
        paper: '#fbfaf6',
        line: '#e7e3d8',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['"Fraunces Variable"', 'Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        content: '72rem',
        prose: '46rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(19,43,60,0.04), 0 8px 30px -12px rgba(19,43,60,0.18)',
        lift: '0 12px 40px -12px rgba(19,43,60,0.28)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
