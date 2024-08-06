/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/views/login/login.html",
    "./src/views/signup/signup.html",
    "./src/views/home/home.html",
    "./src/views/dashboards/admin.dashboard.html",
    "./src/views/dashboards/user.dashboard.html",
    "./src/views/home/storiesSection.html",
    "./src/views/settings/user.settings.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4500",
        secondary: "#FF6347",
        tertiary: " 	#ff9c59",
        Text : "#f6f6f6"
      },
      animation: {
        typewriter: "typewriter 4s steps(44) 1s 1 normal  both",
      },
      keyframes: {
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [],
};
