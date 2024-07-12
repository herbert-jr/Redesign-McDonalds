import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mc-yellow': {
          '50': '#fffeea',
          '100': '#fffac5',
          '200': '#fff585',
          '300': '#ffe946',
          '400': '#ffd91b',
          '500': '#ffbc0d',
          '600': '#e28d00',
          '700': '#bb6402',
          '800': '#984d08',
          '900': '#7c3f0b',
          '950': '#482000',
        },
        'mc-red': {
          '50': '#fff0f1',
          '100': '#ffddde',
          '200': '#ffc1c3',
          '300': '#ff9599',
          '400': '#ff595f',
          '500': '#ff262e',
          '600': '#fc060f',
          '700': '#db0008',
          '800': '#af050b',
          '900': '#900c11',
          '950': '#500003',
        },
        'pricipal-bg': '#fefefe',
        'menu-bg': '#f6f6f6',
        'header-bd': '#fff',
        copy: '#292929',
      },
    },
  },
  plugins: [],
};
export default config;
