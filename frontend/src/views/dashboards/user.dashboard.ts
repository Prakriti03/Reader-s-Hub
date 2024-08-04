import { displayLibrary } from "../../services/library.services";
import { fetchUserData } from "../../services/user.services";
import { showLibrary } from "../home/librarySection";
import { displayWritings } from "../writings/writingsSection";

export async function displayProfile() {
  const [userData, htmlFile] = await Promise.all([
    fetchUserData(),
    fetch("/src/views/dashboards/user.dashboard.html").then((response) =>
      response.text()
    ),
  ]);

  const tempElement = document.createElement("div");
  tempElement.innerHTML = htmlFile;

  (tempElement.querySelector("#profile-picture") as HTMLImageElement)!.src =
    userData.profilePictureUrl;
  tempElement.querySelector("#username")!.textContent = `@${userData.username}`;
  tempElement.querySelector("#user-bio")!.textContent = userData.bio;

  // // Populate writings
  // const writingsList = tempElement.querySelector("#writings-list");
  // userData.writings.forEach(writing => {
  //   const writingCard = createStoryCard(writing);
  //   writingsList.appendChild(writingCard);
  // });

  // Populate reading list
  const readingListContainer = tempElement.querySelector("#readings-list");
  const writingsListContainer = tempElement.querySelector("#writings-list");

  const libraryHtml = await showLibrary("3","0");
  const writingsHtml = await displayWritings("3","0");

  const libraryTempElement = document.createElement("div");
  libraryTempElement.innerHTML = libraryHtml as string;
  const libraryCards = libraryTempElement.querySelector(
    "#library-cards-container"
  )!.innerHTML;

  const writingsTempElement = document.createElement("div");
  writingsTempElement.innerHTML = writingsHtml as string;
  const writingsCards = writingsTempElement.querySelector(
    "#writings-cards-container"
  )!.innerHTML;

  readingListContainer!.innerHTML = libraryCards;
  writingsListContainer!.innerHTML = writingsCards;

  return tempElement.innerHTML;
}
