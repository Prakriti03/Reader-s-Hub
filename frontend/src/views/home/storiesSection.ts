import { GET_POST_STORIES } from "../../constants/urls";
import { LIMIT } from "../../constants/writings";
import { IGenre } from "../../interfaces/story.interfaces";
import { getGenres } from "../../services/genres.services";
import { countStories } from "../../services/stories.services";
import { filterByGenre } from "../../services/stories.services";
import { updatePaginationControls } from "../../utils/pagination";
import { populateTemplate } from "../../utils/populateTemplates";
import { fetchStories } from "../../services/stories.services";

export const showStories = async (page: number = 1) => {
  console.log(`page right now :${page}`);
  const offset = (page - 1) * parseInt(LIMIT);
  console.log(`offset : ${offset}`);
  try {
    const [data, genres, storiesCount] = await Promise.all([
      fetchStories(GET_POST_STORIES),
      getGenres(),
      countStories(),
    ]);

    const htmlFile = await fetch("/src/views/home/storiesSection.html").then(
      (response) => response.text()
    );

    const storyCardsHtml = populateTemplate(data,"About Story");

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

    const filteredStoryCardsHtml = populateTemplate(response, "About Story");

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

export const getStoriesFromSearch = async (event: Event) => {
  event.preventDefault();
  try {
    console.log("inside getStoriesFromSearch");

    const storyToSearch = (
      document.getElementById("default-search") as HTMLInputElement
    ).value;

    const data = await fetchStories("/search", "0","50",storyToSearch);

    console.log(`data from backend : ${data}`)
    const searchedStoryCardHtml = populateTemplate(data, "About Story");

    const container = document.getElementById("story-cards-container");
    if (container) {
      container.innerHTML = searchedStoryCardHtml;
    }

    // updatePaginationControls(response.totalStories, page, (page) =>
    //   showStoriesByGenre(page)
    // );
  } catch (error) {
    console.log(error);
  }
};
