/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6349",
        // secondary: "#ff4866",
        secondary: "#8c5bf2",
      },
    },
  },
  plugins: [],
};
