import { navigateTo } from "../../scripts/eventHandlers/auth.eventhandler";
import { addStoryWritings } from "../../services/writeStories.services";

export const addStory = async (event: Event) => {
  console.log("inside add story!!!");
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
  const coverImageUrl = (
    document.getElementById(
      "writings-story-cover-image-url"
    ) as HTMLInputElement
  ).value;

 const storyToAdd = {
    title: storyTitle,
    description: storyDescription,
    cover_image_url: coverImageUrl,
  }; 

  try {
    const response = await addStoryWritings(storyToAdd);
    alert(response.title);
    navigateTo("/writing-interface")
 
  } catch (error) {
    alert(error);
  }
};
