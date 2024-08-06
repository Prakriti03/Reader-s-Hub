import { navigateTo } from "../../scripts/eventHandlers/auth.eventhandler";
import { signup } from "../../services/auth.services";
import setLoading from "../../utils/loading";

const handleSignUp = async (event: Event) => {
  event.preventDefault();
  setLoading(true, "signUpButton");

  const username = (
    document.getElementById("usernameInput") as HTMLInputElement
  ).value;
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;
  const bio = (document.getElementById("bioInput") as HTMLInputElement).value;
  const profilePicture = (
    document.getElementById("profilePictureInput") as HTMLInputElement
  ).files![0];

  const formData = new FormData();

  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("bio", bio);
  formData.append("profilePicture", profilePicture);

  try {
    const response = await signup(formData);

    alert(response);
    if (response=="User successfully created") {
      navigateTo("/");
    }
  } catch (error: any) {
    alert(JSON.stringify(error.response.data));
  } finally {
    setLoading(false, "signUpButton"); // Set loading state to false
  }
};

export default handleSignUp;
