import render from "./render";

window.addEventListener("popstate", () => {
  render(window.location.pathname);
});

render(window.location.pathname);