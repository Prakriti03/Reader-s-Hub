import { navigateTo } from "../../scripts/eventHandlers/auth.eventhandler";
import { addStoryWritings } from "../../services/writeStories.services";

export const addStory = async (event: Event) => {
  console.log("inside add story!!!");
  // setLoading(true);
  event.preventDefault();
  const storyTitle = (
    document.getElementById("writings-story-title") as HTMLInputElement
  ).value;
  const storyDescription = (
    document.getElementById("writings-story-description") as HTMLInputElement
  ).value;
  //   const storyCoverImage = document.getElementById(
  //     "cover-image"
  //   ) as HTMLImageElement;
  const coverImage = (
    document.getElementById("coverImageInput") as HTMLInputElement
  ).files![0];

  const formData = new FormData();

  formData.append("title", storyTitle);
  formData.append("description", storyDescription);
  formData.append("coverImage", coverImage);

  try {
    const response = await addStoryWritings(formData);
    alert(JSON.stringify(response));
  } catch (error) {
    return error;
  } 
  // finally {
  //   setLoading(false); // Set loading state to false
  // }
};
