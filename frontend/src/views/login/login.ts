import { login } from "../../services/auth.services";
import { saveToken } from "../../utils/saveToken";

const handleLogin = async (event: Event) => {
  console.log("handleLogin function called"); 
  event.preventDefault();
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;

  try {
    const response = await login(email, password);
    alert(JSON.stringify(response));
    saveToken(response.accessToken);
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export default handleLogin;
