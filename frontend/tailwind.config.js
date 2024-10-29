module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1a202c',
        secondary: '#2d3748',
        accent: '#ed64a6',
        background: '#f9f9f9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
