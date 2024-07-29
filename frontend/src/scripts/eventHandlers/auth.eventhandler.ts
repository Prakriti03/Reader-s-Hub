import render from "../render";
import handleLogin from "../../views/login/login";
import handleSignUp from "../../views/signup/signup";
import { homeEventListeners } from "./home.eventHandler";
import { writingsEventListeners } from "./writings.eventHandler";

export const addEventListeners = () => {
  writingsEventListeners();
  homeEventListeners();
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
  document
    .getElementById("signup-form")
    ?.addEventListener("submit", handleSignUp);
};

export const navigateTo = (path: string) => {
  window.history.pushState({}, "", path);
  render(path);
};
