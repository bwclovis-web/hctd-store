module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'display': ['Chicle']
    },
    extend: {
      padding: {
        'dynamic-container-y': 'clamp(2.6rem, 6vw, 10rem)',
        'dynamic-container-x': 'clamp(1rem, 3vw, 2rem)'
      }
    },
  },
  plugins: [],
}
