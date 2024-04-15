module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_01: "#fcfbff", A700: "#ffffff" },
        blue_gray: {
          100: "#d9d9d9",
          900: "#27104e",
          "900_7f": "#27104e7f",
          "100_7f": "#d9d9d97f",
          "900_01": "#333333",
        },
        orange: { 900: "#e25f00" },
        deep_orange: { 100: "#fdd2b4", 300: "#fba465" },
        gray: { 100: "#f3f5f9", 500: "#92959e", "100_01": "#f5f2ff" },
        purple: { 100: "#ddacf5", 400: "#9854cb", "100_66": "#ddacf566" },
        black: { "900_66": "#00000066" },
        deep_purple: { 600: "#64379f", A200: "#7549ff" },
        indigo: { 50: "#dcdef9", 300: "#7580e8" },
      },
      boxShadow: { xs: "9.94px 14.91px 24px 0px #0000000c", sm: "0px 4px 4px 0px #9854cb19" },
      fontFamily: { poppins: "Poppins", helvetica: "Helvetica", avertaregular: "Averta-Regular" },
      textShadow: { ts: "0px 4px 4px #9854cb19" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
