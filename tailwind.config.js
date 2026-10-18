/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        willdo: {
          blue: {
            50: '#f0f5ff',
            100: '#e0ecfe',
            200: '#bae0fd',
            300: '#7cc8fb',
            400: '#36abf7',
            500: '#0c8fe6',
            600: '#0270c4',
            700: '#04589f',
            800: '#1b3b87', // Brand Logo primary navy
            900: '#13285c',
            950: '#0d1a3e',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e', // WhatsApp & Logo Vibrant Green
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          accent: {
            cyan: '#0284c7',
            teal: '#0d9488',
          }
        },
        wildo: {
          blue: {
            50: '#f0f5ff',
            100: '#e0ecfe',
            200: '#bae0fd',
            300: '#7cc8fb',
            400: '#36abf7',
            500: '#0c8fe6',
            600: '#0270c4',
            700: '#04589f',
            800: '#1b3b87',
            900: '#13285c',
            950: '#0d1a3e',
          },
          green: {
            50: '#f0fdf4',
            100: '#dcfce7',
            200: '#bbf7d0',
            300: '#86efac',
            400: '#4ade80',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d',
            800: '#166534',
            900: '#14532d',
          },
          accent: {
            cyan: '#0284c7',
            teal: '#0d9488',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(27, 59, 135, 0.08)',
        'card': '0 10px 30px -5px rgba(27, 59, 135, 0.07)',
        'card-hover': '0 20px 40px -8px rgba(27, 59, 135, 0.14)',
        'whatsapp': '0 8px 25px -4px rgba(34, 197, 94, 0.4)',
      }
    },
  },
  plugins: [],
}
