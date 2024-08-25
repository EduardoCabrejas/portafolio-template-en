import type { Config } from "tailwindcss";
import { Sawarabi_Gothic, Dela_Gothic_One } from "next/font/google";
import tailwindcssAnimated from "tailwindcss-animated"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          "darkBg": "#040D23",
          "darkBlue2": "#043A5E",
          "lightBlue1": "#035D9B",
          "lightBlue2": "#35B4FE",
          "greenBlue1": "#01414a",
          "greenBlue2": "#005a5b",
        },
        light: {
          "lightBg": "#95B3FF",
          "darkBlue2": "#76C8FF",
          "lightBlue1": "#9AD7FF",
          "lightBlue2": "#BBE6FF",
          "greenBlue1": "#00A4BA",
          "greenBlue2": "#00D5D9",
        },
      },
      boxShadow: {
        lightBlue2: '0 4px 6px -1px rgba(173, 216, 230, 0.5), 0 2px 4px -1px rgba(173, 216, 230, 0.5)',
      },
      fontFamily: {
        Sawarabi: "Sawarabi_Gothic",
        Dela: "Dela_Gothic_One",
      },
      spacing: {
        '5rem': '5rem',
        '8rem': '8rem',
        '15rem': '15rem',
        '20rem': '20rem',
        '25rem': '25rem',
        '30rem': '30rem',
        'small': '1rem',
        'medium': '3rem',
        'large': '6rem',
      },
    },
  },
  plugins: [
    tailwindcssAnimated
  ],
};
export default config;
