/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-yellow': '#FFDE5B',
        'custom-tan': 'rgba(210,202,191)',
      }
    },
  },
  plugins: [],
}