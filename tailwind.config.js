/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        crimsontext:"Crimson Text",
        lora:"Lora",
        ubuntu:"Ubuntu Sans Mono",
        orbitron:"Orbitron"
          }
    },
  },
  plugins: [],
}