/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  darkMode: "class",
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: [
      {
        seafood: {
          primary: "#1c2a35",
          secondary: "#24221c",
          accent: "#3d3d3d",
          neutral: "#999999",
          "base-100": "#ffffff",
        },
      },
    ],
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
