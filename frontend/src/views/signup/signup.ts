import { signup } from "../../services/auth.services";

const handleSignUp = async (event: Event) => {
  event.preventDefault();
  console.log("Inside Handle Sign Up!!!")
  const username = (
    document.getElementById("usernameInput") as HTMLInputElement
  ).value;
  const email = (document.getElementById("emailInput") as HTMLInputElement)
    .value;
  const password = (
    document.getElementById("passwordInput") as HTMLInputElement
  ).value;
  const bio = (document.getElementById("bioInput") as HTMLInputElement).value;
  const profilePictureUrl = (
    document.getElementById("profilePictureInput") as HTMLInputElement
  ).value;

  try {
    const response = await signup(
      username,
      email,
      password,
      bio,
      profilePictureUrl
    );
    alert(JSON.stringify(response));
  } catch (error) {
    return error;
  }
};

export default handleSignUp;
