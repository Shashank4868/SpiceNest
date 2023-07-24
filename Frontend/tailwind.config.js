/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      card: "0 2px 10px rgba(0, 0, 0, 0.2)",
      button: "0px 4px 6px rgba(0, 0, 0, 0.3)",
      buttonHover: " 0px 6px 8px rgba(0, 0, 0, 0.4)",
    },
    backgroundColor: {
      button: "#3F72AF",
      buttonHover: "#164c8f",
      DBE2EF: "#DBE2EF",
      white: "#fff",
      grey: "#f5f5f5",
      backdrop: "rgba(0, 0, 0, 0.75)",
      modal: "rgba(0, 0, 0, 0.25)",
    },
    colors: {
      _3F72AF: "#3F72AF",
      white: "#fff",
      _112D4E: "#112D4E",
      black: "#000",
      red: "#ff0000",
    },
    fontFamily: {
      sans: ["Ubuntu", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "&>*");
      addVariant("child-hover", "&>*:hover");
    },
    require("tailwind-scrollbar-hide"),
  ],
};
