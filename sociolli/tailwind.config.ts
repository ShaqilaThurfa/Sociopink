import type { Config } from "tailwindcss";
import daisyui from "daisyui"



const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'tahiti': {
        light: '#67e8f9',
        DEFAULT: '#06b6d4',
        dark: '#0e7490',
      },
      },
      fontFamily: {
        sans: ["'brandontext-regular'", "sans-serif"],
      },
      fontSize: {
        xs: ".875em",
      },
    },
  },
  plugins: [daisyui],
};
export default config;
