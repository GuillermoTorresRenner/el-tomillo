/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B463C",
        secondary: "#CDDFB7",
        neutral: "#F4F1E9",
        accent: "#EDDC50",
        dark: "#231F20",
        grey: "#3C3C3C",
        fondo: "#B9B9B9",
      },
      fontFamily: {
        urbanist: ["var(--urbanist)"],
        merryweather: ["var(--merryweather)"],
      },
      fontSize: {
        h1: "34pt",
        h2: "28pt",
        h3: "22pt",
        subhead: "20pt",
        caption: "16pt",
        button: "18pt",
      },
    },
  },
  plugins: [],
};
