/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#0066CC',
        secondary: '#00D4FF',
        accent: '#FF6B35',
        dark: '#0F0E17',
        light: '#F5F8FF',
      },
    },
  },
  plugins: [],
}
