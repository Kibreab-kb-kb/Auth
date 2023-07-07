module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        darkblue:'#071330',
        teal:'#007C7C',
        primary: '#007bff',
        
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
