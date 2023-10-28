/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif-display': ['"DM Serif Display"', 'serif']
      },
      backgroundColor: {
        'custom-gray': 'rgba(245,245,245)',
        'custom-tan': '#EBE2D5',
      }
    },
  },
  plugins: [],
}