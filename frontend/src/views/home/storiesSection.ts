import { LIMIT } from "../../constants/writings";
import { IGenre } from "../../interfaces/story.interfaces";
import { getGenres } from "../../services/genres.services";
import { countStories, displayStories } from "../../services/stories.services";
import { filterByGenre } from "../../services/stories.services";
import { updatePaginationControls } from "../../utils/pagination";
import { populateTemplate } from "../../utils/populateTemplates";

//talk of the town
export const showStories = async (page: number = 1) => {
  console.log(`page right now :${page}`)
  const offset = (page - 1) * parseInt(LIMIT);
  console.log(`offset : ${offset}`)
  try {
    const [data, genres, storiesCount] = await Promise.all([
      displayStories(offset),
      getGenres(),
      countStories(),
    ]);


    const htmlFile = await fetch("/src/views/home/storiesSection.html").then(
      (response) => response.text()
    );

    const storyCardsHtml = populateTemplate(data);

    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;

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

    const container = tempElement.querySelector("#story-cards-container");
    if (container) {
      container.innerHTML = storyCardsHtml;
    }


    updatePaginationControls(storiesCount, page, showStories);

    return tempElement.innerHTML;
  } catch (error) {
    return error;
  }
};

//too many repeated codes refactor here!
export const showStoriesByGenre = async (page: number = 1) => {
  // event.preventDefault();
  const genreSelect = document.getElementById(
    "genre-filter"
  ) as HTMLSelectElement;
  const selectedGenre = genreSelect.value;

  if (selectedGenre === "All") {
    return showStories(page);
  }

  const offset = (page - 1) * parseInt(LIMIT);

  try {
    const response = await filterByGenre(selectedGenre, offset);

    const filteredStoryCardsHtml = populateTemplate(response);

    const container = document.getElementById("story-cards-container");
    if (container) {
      container.innerHTML = filteredStoryCardsHtml;
    }

    updatePaginationControls(response.totalStories, page, (page) =>
      showStoriesByGenre(page)
    );
  } catch (error) {
    console.error("Error fetching filtered stories:", error);
  }
};
