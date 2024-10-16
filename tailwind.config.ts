import { Config } from "tailwindcss"

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "border-primary": "#0f0f0f",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
