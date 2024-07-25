
import render from "../render";

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
//   document
//     .getElementById("login-form")
//     ?.addEventListener("submit", handleLogin);
//   document
//     .getElementById("signUpUser-form")
//     ?.addEventListener("submit", handleSignUpUser);
//   document
//     .getElementById("signUpHealthCenter-form")
//     ?.addEventListener("submit", handleSignUpHealthCenter);
};

export const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  render(path);
};