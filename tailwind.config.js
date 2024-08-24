/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1510px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "555px" },
      // => @media (max-width: 639px) { ... }

      smmin: "640px",
      // => @media (min-width: 640px) { ... }

      mdmin: "768px",
      // => @media (min-width: 768px) { ... }

      lgmin: "1024px",
      // => @media (min-width: 1024px) { ... }

      xlmin: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xlmin": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        spin: "tilt 10s infinite linear",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        tilt: {
          "0%": {
            transform: "rotate(0deg)",
          },

          "100%": {
            transform: "rotate(360deg)",
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },

          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
