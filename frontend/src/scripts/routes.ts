import UniversalRouter from "universal-router";

const routes = [
  {
    path: "/home",
    action: async () =>
      "Reader's Hub",
  },
  {
    path: "/login",
    action: async () =>
      fetch("./src/views/login/login.html").then((response) => response.text()),
  },
  {
    path: "/signup",
    action: async () =>
      fetch("./src/views/signup/signup.html").then((response) =>
        response.text()
      ),
  },
];

const router = new UniversalRouter(routes);

export default router;