/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(34, 131, 112, 1)',
        secondary: 'rgba(119, 181, 169, 1)',
        black: 'rgba(0, 0, 0, 1)',
        grayish: 'rgba(62, 62, 62, 1)',
        white: 'rgba(255, 255, 255, 1)'
      },
      fontWeight: {
        light: '300',
        regular: '400'
      },
      fontSize: {

      }
    }
  },
  plugins: []
}
