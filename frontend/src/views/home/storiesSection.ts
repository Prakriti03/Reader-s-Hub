import { IGenre } from "../../interfaces/story.interfaces";
import { getGenres } from "../../services/genres.services";
import { displayStories } from "../../services/homePage.services";
import { filterByGenre } from "../../services/stories.services";
import { populateTemplate } from "../../utils/populateTemplates";

//talk of the town
export const showStories = async () => {
  try {
    const [data, genres] = await Promise.all([displayStories(), getGenres()]);

    const htmlFile = await fetch("/src/views/home/storiesSection.html").then(
      (response) => response.text()
    );
    console.log(`get genre : ${data[16].genres}`)
    const storyCardsHtml = populateTemplate(data);

    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;
    const container = tempElement.querySelector("#story-cards-container");
    if (container) {
      container.innerHTML = storyCardsHtml;
    }

    //populate the genre filter dropdown
    const genreSelect = tempElement.querySelector("#genre-filter");
    if (genreSelect) {
      genres.forEach((genre: IGenre) => {
        const option = document.createElement("option");
        option.value = genre.genre;
        option.textContent = genre.genre;
        genreSelect.appendChild(option);
      });
    }

    return tempElement.innerHTML;
  } catch (error) {
    return error;
  }
};

//too many repeated codes refactor here!
export const showStoriesByGenre = async (event: Event) => {
  event.preventDefault();
  const genreSelect = document.getElementById(
    "genre-filter"
  ) as HTMLSelectElement;
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "All") {
    return;
  }

  try {
    const response = await filterByGenre(selectedGenre);

    const filteredStoryCardsHtml = populateTemplate(response);

    const container = document.getElementById("story-cards-container");
    if (container) {
      container.innerHTML = filteredStoryCardsHtml;
    }
  } catch (error) {
    console.error("Error fetching filtered stories:", error);
  }
};
