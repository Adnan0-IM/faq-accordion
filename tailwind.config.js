/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white : 'hsl(0, 0%, 100%)',
      'light-pink': 'hsl(275, 100%, 97%)',
      'grayish-purple': 'hsl(292, 16%, 49%)',
      'dark-purple': 'hsl(292, 42%, 14%)'
    },
    extend: {
      fontFamily: {
        'work-sans': 'Work Sans, serif'
      }
    },
  },
  plugins: [],
}

