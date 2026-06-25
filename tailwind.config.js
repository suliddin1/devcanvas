/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        frame: "0 24px 80px rgba(0, 0, 0, 0.42)",
        soft: "0 18px 50px rgba(0, 0, 0, 0.24)",
      },
    },
  },
  plugins: [],
};
