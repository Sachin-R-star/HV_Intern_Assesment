/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#faf4e6',
          200: '#f4e6c3',
          300: '#edd49b',
          400: '#e3be68',
          500: '#d5a73e',
          600: '#c28e2d',
          700: '#a37123',
          800: '#835720',
          900: '#6c461e',
        },
        champagne: {
          50: '#fcfbf8',
          100: '#f8f5ee',
          200: '#f2ece0',
          300: '#e8ddca',
          400: '#d7c4a7',
          500: '#c4ad87',
          600: '#ac916a',
          700: '#8c7353',
          800: '#715d45',
          900: '#5c4d3a',
        },
        dark: {
          DEFAULT: '#161413',
          card: '#1e1b18',
          border: '#2e2924',
          muted: '#8c827a'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', '"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 10px 30px -5px rgba(213, 167, 62, 0.35)',
        'gold-subtle': '0 4px 20px -2px rgba(213, 167, 62, 0.15)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(213, 167, 62, 0.15)',
        'float': '0 15px 35px rgba(184, 134, 11, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

