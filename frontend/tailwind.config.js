/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        cyberPink: '#ff007a',  // Neon Pink
        cyberBlue: '#00f0ff',  // Neon Blue
        cyberGreen: '#0aff01', // Neon Green
        cyberDark: '#0d0d0d',  // Dark Background
        // Add more as needed
      },
      fontFamily: {
        cyber: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
