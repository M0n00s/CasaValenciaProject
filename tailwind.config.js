/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          'url("https://res.cloudinary.com/dksz8cxlh/image/upload/v1688050622/casavalencia%20img/casaValencia2_d1ivju.jpg")',
      },
      colors: {
        primary: "#f3ab1f",
        // secondary: "#ff4866",
        secondary: "#2b2b2b",
      },
    },
  },
  plugins: [],
};
