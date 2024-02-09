/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        elevation: "#232323",
      },
      backgroundColor: {
        elevationOne: "#141414",
        elevationTwo: "#1D1D1D",
      },
      textColor: {
        primary: "#FFFFFF",
        secondary: "#B3B3B3",
      },
      fontSize: {
        hone: "28px",
        htwo: "22px",
        hthree: "20px",
        hfour: "18px",
        hfive: "18px",
        hsix: "16px",
        body: "14px",
      },

      borderRadius: {
        primary: "48px",
      },
    },
  },
  plugins: [],
};
