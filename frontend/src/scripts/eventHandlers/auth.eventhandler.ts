import render from "../render";
import handleLogin from "../../views/login/login";

export const addEventListeners = () => {
  document
    .getElementById("home-link")
    ?.addEventListener("click", () => navigateTo("/home"));
  document
    .getElementById("signup-link")
    ?.addEventListener("click", () => navigateTo("/signup"));
  document
    .getElementById("login-link")
    ?.addEventListener("click", () => navigateTo("/login"));
  document
    .getElementById("login-form")
    ?.addEventListener("submit", handleLogin);
  //   document
  //     .getElementById("sigup-form")
  //     ?.addEventListener("submit", handleSignUpUser);

};

export const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  render(path);
};
