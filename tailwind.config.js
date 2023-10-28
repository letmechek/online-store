/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'custom-gray': 'rgba(245,245,245)',
        'custom-tan': 'rgba(210,202,191)',
      }
    },
  },
  plugins: [],
}