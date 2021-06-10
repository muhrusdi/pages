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
      borderRadius: {
        "5xl": "2.5rem"
      },
      lineHeight: {
        "11": "3rem",
        "12": "3.5rem",
      },
      fontSize: {
        tiny: "0.94rem"
      },
      colors: {
        blueGray: colors.blueGray,
        highlight: {
          remove: "#1b0204",
          add: "#132d03",
          line: "#0d2f4a",
        },
        blue: {
          light: "#56CCF2",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "white",
            pre: {
              margin: "0px -32px",
              padding: "1.1em 0",
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
        "xl": {
          css: {
            pre: {
              padding: "1.1em 0",
            },
          }
        }
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
}
