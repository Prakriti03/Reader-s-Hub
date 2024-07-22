import { createBrowserHistory } from "history";
import router from "./routes";

const history = createBrowserHistory();

function App() {
  const container = document.getElementById("app") as HTMLElement;

  const renderComponent = (componentHTML: string) => {
    container.innerHTML = componentHTML!;
  };

  history.listen(({ location }) => {
    router
      .resolve({ pathname: location.pathname })
      .then((result) => {
        if (typeof result === "string") {
          renderComponent(result);
        } else {
          renderComponent(`<div>Error: Route did not return a string</div>`);
        }
      })
      .catch((error) => renderComponent(`<div>Error: ${error.message}</div>`));
  });

  // Initial route resolution
  router
    .resolve({ pathname: window.location.pathname })
    .then((result) => {
      if (typeof result === "string") {
        renderComponent(result);
      } else {
        renderComponent(`<div>Error: Route did not return a string</div>`);
      }
    })
    .catch((error) => renderComponent(`<div>Error: ${error.message}</div>`));
}

export default App;
