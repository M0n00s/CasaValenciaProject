/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          'url("https://www.shutterstock.com/image-photo/chongqing-fengjie-drought-kuimen-scenery-600w-2279194709.jpg")',
      },
      colors: {
        primary: "#ffe03d",
        // secondary: "#ff4866",
        secondary: "#2b2b2b",
      },
    },
  },
  plugins: [],
};
