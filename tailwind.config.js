/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "120rem",
      },

      colors: {
        primary: "#CEA561",
        secondary: "#151515",
      },

    },
  },
  plugins: [require("daisyui")],
}

