/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3F51B5',
          secondary: '#2c4e7f',
          light: '#d5e7ff',
          accent: '#acceff',
          white: '#ffffff',
        },
        dark: {
          bg: '#1a1f2e',
          card: '#252b3d',
          text: '#e1e7ef',
          border: '#374151',
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}

