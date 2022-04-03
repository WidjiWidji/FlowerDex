const { toBePartiallyChecked } = require("@testing-library/jest-dom/dist/matchers");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['"Roboto Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
