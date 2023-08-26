/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: "neutral-500",
        yellow: "#f7ea33f1",
        green: '#13ff83',
        black: "#000000"
      },
    },

  },
  plugins: [],
}