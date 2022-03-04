module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './public/icons/*.svg'
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dracula'],
    logs: false,
  },
}
