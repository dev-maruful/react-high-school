/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2b2f47",

          secondary: "#2f2f2f",

          accent: "#354abf",

          neutral: "#191B1F",

          "base-100": "#F5F3F7",

          info: "#5D9CEA",

          success: "#1C8254",

          warning: "#F5C25C",

          error: "#F56661",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
