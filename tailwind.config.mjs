/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#506157',
          50: '#f0f2f1',
          100: '#dce0de',
          200: '#b9c2be',
          300: '#96a39e',
          400: '#73857e',
          500: '#506157', // Main primary color
          600: '#3c4a41',
          700: '#28322c',
          800: '#141916',
          900: '#000000',
        },
        accent: {
          DEFAULT: '#3c4a41',
          light: '#4a5a50',
          dark: '#2e3933',
        }
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'cormorant-bold': ['Cormorant Garamond Bold', 'serif'],
      },
    },
  },
  plugins: [],
}