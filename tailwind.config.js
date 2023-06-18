/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brandBg: '#282c34',
        brandText: '#abb2bf',
        brandComment: '#98c379',
        brandGreen: '#e5c07b',
        brandPurple: '#c678dd',
        brandRed: '#e06c75',
        brandBlue: '#61afef',
        brandYellow: '#e5c07b',
        brandOrange: '#d19a66',
      },
      fontFamily: {
        brandNexon: ['NEXON Lv2 Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
