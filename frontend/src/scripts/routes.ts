import UniversalRouter from "universal-router";

const routes = [
  {
    path: "/",
    action: async () =>
      fetch("./src/views/login/login.html").then((response) => response.text()),
  },
  {
    path: "/home",
    action: async () =>
      fetch("./src/views/home/home.html").then((response)=>response.text()),
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