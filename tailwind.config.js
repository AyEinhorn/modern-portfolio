/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#030712',
        },
        dark: {
          50: '#171717',
          100: '#1a1a1a',
          200: '#2d2d2d',
          300: '#3d3d3d',
          400: '#5c5c5c',
          500: '#7e7e7e',
          600: '#a0a0a0',
          700: '#d4d4d4',
          800: '#e5e5e5',
          900: '#f5f5f5',
        },
        primary: {
          50: '#eefbff',
          100: '#c9f2ff',
          200: '#97e8ff',
          300: '#54d5ff',
          400: '#1ebcff',
          500: '#0099ff',
          600: '#0070cc',
          700: '#0057a3',
          800: '#004380',
          900: '#00284d',
        },
        accent: {
          50: '#fcf1ff',
          100: '#f5d9ff',
          200: '#eaafff',
          300: '#dc75ff',
          400: '#c941ff',
          500: '#b618fc',
          600: '#9b00db',
          700: '#7c03ae',
          800: '#640490',
          900: '#390152',
        },
        success: '#00c853',
        warning: '#ffab00',
        error: '#ff3d71',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.line-clamp-1': {
          display: '-webkit-box',
          '-webkit-line-clamp': '1',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-2': {
          display: '-webkit-box',
          '-webkit-line-clamp': '2',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-3': {
          display: '-webkit-box',
          '-webkit-line-clamp': '3',
          '-webkit-box-orient': 'vertical',
          overflow: 'hidden',
        },
        '.line-clamp-none': {
          '-webkit-line-clamp': 'unset',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    }
  ],
} 