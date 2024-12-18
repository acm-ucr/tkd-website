/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inika: ["var(--font-inika)"],
        "caveat-brush": ["var(--font-caveat-brush)"],
        "jockey-one": ["var(--font-jockey-one)"],
      },
    },
  },
  plugins: [],
};
