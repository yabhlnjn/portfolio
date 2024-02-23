import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "primary":"#3AA39F",
        "secondary-yellow":"#FFC41F",
        "secondary-red":"#E14B4B",
        "space-cadet":"#17183B",
        "cool-grey":"#A2A3B1",
        "french-grey":"#D1D1D8",
      }, 
      backgroundColor: {
        "primary":"#3AA39F",
      },
      borderColor: {
        "primary":"#3AA39F",
        "cool-grey":"#A2A3B1",
        "french-grey":"#D1D1D8",
      },
      borderRadius: {
        'md': '4px'
      }
    },
  },
  plugins: [],
};
export default config;
