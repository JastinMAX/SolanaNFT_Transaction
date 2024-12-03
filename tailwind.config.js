/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        'primary': '#ffe600f5',
      },
      color:{
        "primary":"#ffe600f5"
      }
    },
  },
  plugins: [],
}
