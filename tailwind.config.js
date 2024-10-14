/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

export default {
  content: { files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], extract },
  theme: {
    screens,
    fontSize,
    extend: {
      backgroundImage: {
        'why-us': "url('/src/assets/grey_vector_curve.svg')",
        'our-team': "url('/src/assets/chair_holding.jpg')",
        'app-download': "url('/src/assets/stressless_movers.png')",
      },
      colors: {
        'red-primary': '#FF0000',
        'red-light': '#FF3333',
        'gray-neutral': '#9C9D9F',
        'gray-steel': '#6F7173',
        'gray-slate': '#282B2E;',
      },
      gridTemplateColumns: {
        four: 'repeat(4, minmax(16.38rem, 1fr))'
      },
      screens: {
        slg: '52rem',
      },
    },
  },
  plugins: [fluid],
};
