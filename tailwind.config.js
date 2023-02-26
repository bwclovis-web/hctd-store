module.exports = {
  content: [ './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}', ],
  theme: {
    fontFamily: {
      display: ['Chicle'],
      base: ['Libre Franklin']
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
        'dynamic-container-x': 'clamp(.75rem, 3vw, 1rem)',
      },
      fontSize: {
        'h4-dynamic': 'clamp(2.2rem, 6vw, 3rem)',
        'h3-dynamic': 'clamp(3rem, 6vw, 4rem)',
        'h2-dynamic': 'clamp(4rem, 6vw, 5.4rem)',
        'h1-dynamic': 'clamp(4.4rem, 6vw, 7.4rem)',
      },
    },
  },
  plugins: [],
}
