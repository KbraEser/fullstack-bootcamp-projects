/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        normal: '#ffd9d4',
        urgent: '#d4d7ff',
      },
    },
  },
  plugins: [],
};
