module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Be Vietnam Pro', 'Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dracula'],
    logs: false,
  },
}
