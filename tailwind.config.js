module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  variants: {
    opacity: ['disabled'],
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
 }