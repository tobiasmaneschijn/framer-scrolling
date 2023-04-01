const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
