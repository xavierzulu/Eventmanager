/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '31.25': '31.25rem',
      },
      height: {
        '12.5': '12.5rem',
      },
    },
  },
  plugins: [],
}

