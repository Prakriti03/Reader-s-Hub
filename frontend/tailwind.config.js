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
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
