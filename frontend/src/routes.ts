import UniversalRouter from "universal-router";
import { login } from "./components/login/login";

const routes = [
  {
    path: "/login",
    action: () => login(),
  },

];

const router = new UniversalRouter(routes);

export default router;
