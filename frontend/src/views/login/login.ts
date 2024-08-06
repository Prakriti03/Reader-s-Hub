import { navigateTo } from "../../scripts/eventHandlers/auth.eventhandler";
import { login } from "../../services/auth.services";
import { saveToken } from "../../utils/token";

const handleLogin = async (event: Event) => {
  event.preventDefault();
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;

  try {
    const response = await login(email, password);
    saveToken(response.accessToken);

    const accessToken = response.accessToken;
    if (accessToken) {
      navigateTo("/home");
    }
    else{

      alert(JSON.stringify(response));
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default handleLogin;
