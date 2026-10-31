/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Onest", "sans-serif"],
        display: ["Unbounded", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#0F6E6B",
          "primary-content": "#F3F7F7",
          secondary: "#C4842A",
          "secondary-content": "#1C1408",
          accent: "#0F6E6B",
          "accent-content": "#F3F7F7",
          neutral: "#17202A",
          "neutral-content": "#E8EEF1",
          "base-100": "#E8EEF1",
          "base-200": "#F7F9FA",
          "base-300": "#D5E0E6",
          "base-content": "#17202A",
          info: "#2F5D73",
          success: "#1F7A4D",
          warning: "#C4842A",
          error: "#9F2D2D",
        },
      },
      {
        dark: {
          primary: "#7DCFC9",
          "primary-content": "#062221",
          secondary: "#E0A45A",
          "secondary-content": "#1C1408",
          accent: "#7DCFC9",
          "accent-content": "#062221",
          neutral: "#E7EEF2",
          "neutral-content": "#141C24",
          "base-100": "#141C24",
          "base-200": "#1C2731",
          "base-300": "#243240",
          "base-content": "#E7EEF2",
          info: "#9BB8C9",
          success: "#7DCEA0",
          warning: "#E0A45A",
          error: "#F0A8A8",
        },
      },
    ],
  },
};
