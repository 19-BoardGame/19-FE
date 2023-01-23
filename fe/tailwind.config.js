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
        scrolledTitle: "#EEF1FF",
        focus: "#AAC4FF",
      },
      dropShadow: {
        default: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      spacing: {
        45: "182px",
      },
      animation: {
        header: "header 0.2s ease-out",
        headerout: "headerout 0.2s ease-out",
        list: "list 0.2s ease-out",
      },
      keyframes: {
        header: {
          "0%": { transform: "translateY(-80px)" },
          "100%": { transform: "translateY(0)" },
        },
        headerout: {
          "0%": { transform: "translateY(80px)" },
          "100%": { transform: "translateY(0)" },
        },
        list: {
          "0%": { transform: "translateY(-80px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
