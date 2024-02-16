/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#ECECEC',
        'secondary': 'rgba(236, 236, 236, 0.65)',
        'off' : '#939393',
        'dark': '#0B081C',
      },
      backgroundColor: {
        'primary': 'rgba(11, 8, 28, 0.5)'
      }
    },
  },
  plugins: [],
}

