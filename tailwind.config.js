module.exports = {
  content: [ './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', ],
  theme: {
    fontFamily: {
      display: ['Chicle'],
    },
    extend: {
      rotate: {
        '17': '17deg',
      },
      transitionProperty: {
        'animate': 'transform, opacity'
      },
      padding: {
        'dynamic-container-y': 'clamp(2.6rem, 6vw, 8rem)',
        'dynamic-container-x': 'clamp(1rem, 3vw, 2rem)',
      },
      fontSize: {
        'h3-dynamic': 'clamp(3.5rem, 6vw, 4.5rem)',
        'h2-dynamic': 'clamp(4rem, 6vw, 5.4rem)',
      },
    },
  },
  plugins: [],
}
