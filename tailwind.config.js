/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-yellow': '#FFDE5B',
        'custom-blue': 'rgba(18, 45, 55)',
      }
    },
  },
  plugins: [],
}