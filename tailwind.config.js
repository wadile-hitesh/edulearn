/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700: "#ffffff",
          A700_b2: "#ffffffb2",
          A700_33: "#ffffff33",
          A700_87: "#ffffff87",
        },
        red: { 50: "#ffeee9", "300_01": "#d97356" },
        gray: {
          100: "#f7f7f7",
          300: "#dedde4",
          900: "#0a033c",
          "700_01": "#5d5a6f",
          "200_01": "#ececec",
          "700_99": "#5d5a6f99",
          "900_26": "#0a033c26",
          "400_01": "#c1ada4",
        },
        amber: { 500: "#ffc107" },
        deep_orange: { 400: "#ff6652", "400_87": "#ff665287" },
        black: {
          "900_02": "#000000",
          "900_01": "#170600",
          "900_87": "#00000087",
          "900_cc": "#000000cc",
        },
        orange: { "200_01": "#eebc74" },
        yellow: { 100: "#fff2ce" },
        blue_gray: { 900: "#283250", "900_03": "#263238" },
        deep_orange_400_7f: "#ff65517f",
      },
      boxShadow: {
        xs: "0px 2px  10px 0px #0000001e",
        sm: "0px 50px  50px 0px #00000019",
        md: "0px 50px  80px 0px #0000000c",
        lg: "0px 50px  170px 0px #0000000c",
        xl: "0px 15px  50px 0px #ff665233",
      },
      fontFamily: {
        inter: "Inter",
        metropolis: "Metropolis",
        airbnbcerealapp: "Airbnb Cereal App",
      },
      opacity: { 0.5: 0.5, 0.3: 0.3 },
      backgroundImage: {
        gradient: "linear-gradient(180deg, #0a023c00,#0a033c,#0a023c00)",
      },
    },
  },
};
