const ms = (scale, ratio = 1.2, base = 16) => ratio ** scale * base;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif', 'arial'],
      },
      fontSize: {
        'min-1': `${ms(-1)}px`,
        base: `${ms(0)}px`,
        1: `${ms(1)}px`,
        2: `${ms(2)}px`,
        3: `${ms(3)}px`,
        4: `${ms(4)}px`,
      },
      colors: {
        liander: {
          blue: '#008CBD',
          purple: '#831E7D',
          'blue-bright': '#009FD6',
          'purple-bright': '#A3199B',
        },
      },
    },
  },
  plugins: [],
};
