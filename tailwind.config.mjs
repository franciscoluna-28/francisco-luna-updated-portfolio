/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        main: {
          "50": "#eefffc",
          "100": "#c6fff9",
          "200": "#8dfff5",
          "300": "#66fcf1",
          "400": "#18e9e1",
          "500": "#00cdc7",
          "600": "#00a5a4",
          "700": "#028283",
          "800": "#076768",
          "900": "#0c5455",
          "950": "#003134",
        },
        mainGray: "#b7b7b7",
        mainDark: "#131313",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
