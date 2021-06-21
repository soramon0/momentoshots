module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Sora', 'sans-serif'],
        'body': ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
