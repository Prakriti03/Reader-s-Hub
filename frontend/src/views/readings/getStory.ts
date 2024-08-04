import { addComments } from "../../services/reviews.services";
import { displayStoriesById } from "../../services/stories.services";
import { populateStoryTemplate } from "../../utils/populateTemplates";

export const fetchStoryData = async (storyId: string) => {
  try {
    const response = await displayStoriesById(storyId);

    const htmlFile = await fetch("/src/views/readings/getStory.html").then(
      (response) => response.text()
    );

    const htmlString = populateStoryTemplate(htmlFile, response);
    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlString;
    return tempElement.innerHTML;
  } catch (error) {
    console.error("Error fetching story data:", error);
    throw error;
  }
};

export async function addReview(){
  const commentInput = (document.getElementById("comment-input")as HTMLInputElement).value;


  const reviewToAdd = {
    comment : commentInput
  };
  const storyId = ((window.location.pathname).split('/'))[2];

  const response = await addComments(storyId,reviewToAdd);

  console.log(response)


}

