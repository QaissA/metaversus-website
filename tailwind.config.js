/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      boxShadow: {
        "pink-glow":
          "0 0 20px rgba(203, 108,166, 0.8), 0 0 40px rgba(203, 108,166, 0.6), 0 0 80px rgba(203, 108,166, 0.4), 0 0 100px rgba(203, 108,166, 0.2)",
        "blue-glow":
          "0 0 20px rgba(48, 49, 147, 08), 0 0 40px rgba(48, 49, 147, 0.6), 0 0 80px rgba(48, 49, 147, 0.4), 0 0 100px rgba(48, 49, 147, 0.2)",
      },
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      transitionTimingFunction: {
        "out-flex": "cubic-bezier(0.05, 0.6, 0.4, 0.9)",
      },
    },
  },
  plugins: [],
};
