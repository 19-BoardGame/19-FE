/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#52BA00",
        border: "#D2D2D2",
        sky: "#3485FF",
        title: "#B1B2FF",
        focus: "#AAC4FF",
      },
      dropShadow: {
        default: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
