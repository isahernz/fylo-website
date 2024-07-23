import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans Variable", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway Variable", "sans-serif"],
      },
      container: {
        center: "true",
        padding: "1rem",
      },

      colors: {
        primary: {
          100: "hsl(217, 28%, 15%)",
          200: "hsl(218, 28%, 13%);",
          300: "hsl(216, 53%, 9%)",
          400: "hsl(219, 30%, 18%)",
        },

        accent: {
          100: "hsl(176, 68%, 64%)",
          200: "hsl(198, 60%, 50%)",
          300: "hsl(0, 100%, 63%)",
          400: "hsl(210, 20%, 83%)",
        },

        neutral: {
          white: "#fff",
        },
      },

      // screens: {
      //   sm: "36rem",
      //   md: "48rem",
      //   lg: "64rem",
      //   xl: "68.75rem",
      //   "2xl": "90rem",
      // },
    },
  },
};
plugins: [];
