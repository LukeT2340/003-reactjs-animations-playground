export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {},
      colors: {
        "bright-cyan": "#58F6F4",
        "dark-blue": "#192958",
        blue: "#002bff",
        "light-gray": "#efefef",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        drukWide: ["DrukWide"],
        wetPaint: ["WetPaint"],
        anton: ["Anton"],
        domain: ["Domain"],
      },

      fontSize: {
        clampHeading: "clamp(48px, 6vw, 92px)",
        clampHeading2: "clamp(30px, 5vw, 54px)",
        "19": ["19px", "36px"],
        "78": ["78px", "100px"],
        "100": ["100px", "135px"],
      },
      lineHeight: {
        tight: "1.00",
        normal: "1.35",
        custom: "1.5",
      },
      backgroundImage: {
        footer: "url('/src/assets/images/desktop/image-1.jpg')",
      },
    },
  },
  plugins: [],
}
