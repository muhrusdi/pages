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
            color: "#acb5c3",
          },
        },
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/typography")
  ],
}
