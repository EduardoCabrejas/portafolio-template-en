import type { Config } from "tailwindcss";

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
          bg: "#040D23",
          primary: "#043A5E",
          lightBlue1: "#035D9B",
          lightBlue2: "#35B4FE",
          greenBlue1: "#01414a",
          greenBlue2: "#005a5b",
          darkBlue2: "#012F4A",
        },
        light: {
          bg: "#95B3FF",
          primary: "#76C8FF",
          lightBlue1: "#9AD7FF",
          lightBlue2: "#BBE6FF",
          greenBlue1: "#00A4BA",
          greenBlue2: "#00D5D9",
          darkBlue2: "#045078",
        },
      },
      boxShadow: {
        'darkLightBlue2': '0 4px 12px rgba(154, 215, 255, 0.35)', 
        'lightLightBlue2': '0 4px 12px rgba(4, 58, 94, 0.35)',    
      },
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
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
  ],
};
export default config;
