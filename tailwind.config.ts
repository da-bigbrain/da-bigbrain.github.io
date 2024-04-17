import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    fontFamily: {
      body: ["Courier New", "monospace"],
      // brush: ["Brush Script MT", "cursive"],
      // mono: ["Liberation Mono", "ui-monospace"],
      sans: ["Ubuntu", "sans-serif"],
    },

    extend: {
      colors: {
        "soft-white": "#f9f9fb",
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      // keyframes: {
      //   bounceC: {
      //     "0%, 100%": {
      //       transform: "translateY(-25%)",
      //       animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
      //     },
      //     "50%": {
      //       transform: "translateY(0)",
      //       animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      //     },
      //   },
      // },
    },
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark"],
  // },
};
export default config;
