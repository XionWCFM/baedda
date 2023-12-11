import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      'primary-100': '#D0A2F7',
      'primary-80': '#DCBFFF',
      'primary-60': '#E5D4FF',
      'primary-30': '#F1EAFF',
      'black-100': '#272829',
      'black-60': '#61677A',
      'black-30': '#D8D9DA',
      'black-10': '#EEEEEE',
      'gray-10': 'E0E0E0',
      white: '#FFFFFF',
      'negative-30': '#FF9999',
      'negative-60': '#FF6666',
    },
  },
  plugins: [],
};
export default config;
