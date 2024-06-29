/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '50%' },
          '100%': { opacity: '100%' },
        }
      }
  },
  },
  plugins: [require('preline/plugin'), require('tailwind-typewriter')({
    wordsets: {
        title: {
            words: ["第63届食堂日", "Little Western", "《西域小调》"],
            repeat: 0,
            eraseSpeed: 0,
            caretWidth: 0,
            writeSpeed: 0.05
        }
    }
})],
}