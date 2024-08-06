import { displayStoriesById, updateStory } from "../../services/stories.services";
import { fetchStoryData } from "../readings/getStory";

export const displayEditStoryPage = async (storyId: string) => {
     const [storyData, htmlFile] = await Promise.all([
      displayStoriesById(storyId),
      fetch("/src/views/writings/updateStory.html").then((response) => response.text()),
    ]);
  
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlFile;
  
    if (storyData.cover_image_url) {
      const img = document.createElement("img");
      img.src = storyData.cover_image_url;
      img.alt = "Cover Image";
      img.classList.add("mt-2", "w-20", "h-20", "object-cover", "rounded-full");
      const previewDiv = tempElement.querySelector("#cover-image-preview");
      if (previewDiv) {
        previewDiv.appendChild(img);
      }
    }
    (
      tempElement.querySelector("#story-title") as HTMLInputElement
    ).placeholder = `current title : ${storyData.title}`;
    (
      tempElement.querySelector("#story-description") as HTMLTextAreaElement
    ).placeholder = `current description : ${storyData.description}`;
  
    return tempElement.innerHTML;
  };
  


export async function saveStoryData(setting: string, storyId: string) {
  const formData = new FormData();
  formData.append("storyId", storyId);

  if (setting === "title") {
    const title = (document.getElementById("story-title") as HTMLInputElement).value;
    formData.append("title", title);
  } else if (setting === "description") {
    const description = (document.getElementById("story-description") as HTMLTextAreaElement).value;
    formData.append("description", description);
  } else if (setting === "coverImage") {
    const coverImage = (document.getElementById("cover-image") as HTMLInputElement).files![0];
    if (coverImage) formData.append("coverImage", coverImage);
  }

  console.log(formData)
  try {
    const response = await updateStory(formData,storyId);
    console.log(response)
    alert("Changes saved successfully.");
  } catch (error) {
    console.error("Error saving changes:", error);
  }
}
  