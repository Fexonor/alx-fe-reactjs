/** @type {import('tailwindcss').Config} */
export default {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

