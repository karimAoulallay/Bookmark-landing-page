/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../*.html"],
  theme: {
    extend: {
      colors: {
        SoftBlue: "hsl(231, 69%, 60%)",
        SoftRed: "hsl(0, 94%, 66%)",
        GrayishBlue: "hsl(229, 8%, 60%)",
        DarkBlue: "hsl(229, 31%, 21%)",
      },
    },
  },
  plugins: [],
};
