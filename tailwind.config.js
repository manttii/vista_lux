/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFFFF',
        'matte-black': '#111111',
        'champagne-gold': '#BCA87F',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'diffused': '0 20px 40px -15px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  corePlugins: {
    borderRadius: false, // Enforce sharp edges everywhere
  },
  plugins: [],
}
