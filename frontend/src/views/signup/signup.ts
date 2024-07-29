import { signup } from "../../services/auth.services";
import setLoading from "../../utils/loading";

const handleSignUp = async (event: Event) => {
  event.preventDefault();
  setLoading(true);
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

  console.log(`profile picture from front end : ${profilePicture}`);

  const formData = new FormData(); 

  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  formData.append("bio", bio);
  formData.append("profilePicture", profilePicture); 

  try {
    const response = await signup(
    formData
    );
    alert(JSON.stringify(response));
  } catch (error) {
    return error;
  }finally {
    setLoading(false); // Set loading state to false
  }
};

export default handleSignUp;
