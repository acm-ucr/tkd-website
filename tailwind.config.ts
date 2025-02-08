/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        tkd: {
          black: "#1B1A1A",
          "grey-100": "#D9D9D9",
          "blue-100": "#8FB1EB",
          "blue-200": "#5483E1",
          "blue-300": "#313547",
          "red-100": "#B25252",
          "red-200": "#7D0000",
          "red-300": "#440B0B",
        },
      },
      fontFamily: {
        inika: ["var(--font-inika)"],
        "caveat-brush": ["var(--font-caveat-brush)"],
        "jockey-one": ["var(--font-jockey-one)"],
      },
    },
  },
  plugins: [],
};
