/** @type {import('tailwindcss').Config} */

import fluid, { extract, screens, fontSize } from 'fluid-tailwind';

module.exports = {
  content: {
    files: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    extract,
  },
  theme: {
    screens,
    fontSize,
    extend: {
      backgroundImage: {
        'why-us': "url('/grey_vector_curve.svg')",
        'our-team': "url('/chair_holding.jpg')",
        'app-download': "url('/stressless_movers.png')",
        footer: "url('/orange_vector_curve.svg')",
      },
      colors: {
        'red-primary': '#FF0000',
        'red-light': '#FF3333',
        'gray-neutral': '#9C9D9F',
        'gray-steel': '#6F7173',
        'gray-slate': '#282B2E;',
      },
      gridTemplateColumns: {
        four: 'repeat(4, minmax(16.38rem, 1fr))',
      },
      screens: {
        slg: '52rem',
      },
    },
  },
  plugins: [fluid],
};
