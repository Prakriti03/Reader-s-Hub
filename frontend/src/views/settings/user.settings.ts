import { signup } from "../../services/auth.services";
import {
  changeUserData,
  deleteUserData,
  fetchUserData,
} from "../../services/user.services";

export const displayUserSettingsPage = async () => {
  const [userData, htmlFile] = await Promise.all([
    fetchUserData(),
    fetch("/src/views/settings/user.settings.html").then((response) =>
      response.text()
    ),
  ]);

  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlFile;

  if (userData.profilePictureUrl) {
    const img = document.createElement("img");
    img.src = userData.profilePictureUrl;
    img.alt = "Profile Picture";
    img.classList.add("mt-2", "w-20", "h-20", "object-cover", "rounded-full");
    const previewDiv = tempElement.querySelector("#profile-picture-preview");
    if (previewDiv) {
      previewDiv.appendChild(img);
    }
  }
  (
    tempElement.querySelector("#email") as HTMLInputElement
  ).placeholder = `${userData.email}`;
  (
    tempElement.querySelector("#username") as HTMLInputElement
  ).placeholder = `Current Username: @${userData.username}`;
  (tempElement.querySelector("#email") as HTMLInputElement).value =
    userData.email;
  (tempElement.querySelector("#password") as HTMLInputElement).placeholder =
    "Change Password";
  (
    tempElement.querySelector("#bio") as HTMLTextAreaElement
  ).placeholder = `Current Bio: ${userData.bio}`;

  return tempElement.innerHTML;
};

export async function saveUserData(setting: string) {
  const formData = new FormData();

  if (setting === "username") {
    const username = (document.getElementById("username") as HTMLInputElement)
      .value;
    formData.append("username", username);
  } else if (setting === "password") {
    const password = (document.getElementById("password") as HTMLInputElement)
      .value;
    if (password) formData.append("password", password);
  } else if (setting === "profilePicture") {
    const profilePicture = (
      document.getElementById("profile-picture") as HTMLInputElement
    ).files![0];
    if (profilePicture) formData.append("profilePicture", profilePicture);
  } else if (setting === "bio") {
    const bio = (document.getElementById("bio") as HTMLTextAreaElement).value;
    formData.append("bio", bio);
  }

  console.log(formData);
  try {
    const response = await changeUserData(formData);
    console.log(`response from backend is : ${response}`);
    alert(JSON.stringify(response));
  } catch (error) {
    return error;
  }
  //   finally {
  //     setLoading(false); // Set loading state to false
  //   }
}

export async function deleteUserAccount() {
  if (
    confirm(
      "Are you sure you want to delete your account? This action cannot be undone."
    )
  ) {
    try {
      await deleteUserData();
      alert("Account deleted successfully.");
    } catch (error) {
      console.error("Error deleting account:", error);
    }
  }
}
