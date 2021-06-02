const colors = require("tailwindcss/colors")

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem"
    },
    extend: {
      lineHeight: {
        "11": "3rem",
        "12": "3.5rem",
      },
      fontSize: {
        tiny: "0.94rem"
      },
      colors: {
        blueGray: colors.blueGray,
        blue: {
          light: "#56CCF2",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "white",
            pre: {
              margin: "0px -32px"
            },
            p: {
              color: "#acb5c3"
            },
            h1: {
              color: "white"
            },
            h2: {
              color: "white"
            },
            h3: {
              color: "white"
            },
            h4: {
              color: "white"
            },
            h5: {
              color: "white"
            },
            h6: {
              color: "white"
            },
          },
        },
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}
