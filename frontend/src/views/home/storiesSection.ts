import { GET_POST_STORIES } from "../../constants/urls";
import { IGenre } from "../../interfaces/story.interfaces";
import { getGenres } from "../../services/genres.services";
import { countStories } from "../../services/stories.services";
import { filterByGenre } from "../../services/stories.services";
import { populateTemplate } from "../../utils/populateTemplates";
import { fetchStories } from "../../services/stories.services";

export const showStories = async () => {
  try {
    const [data, genres] = await Promise.all([
      fetchStories(GET_POST_STORIES),
      getGenres(),
      countStories(),
    ]);

    const htmlFile = await fetch("/src/views/home/storiesSection.html").then(
      (response) => response.text()
    );

    const storyCardsHtml = populateTemplate(data, "About Story");

    const tempElement = document.createElement("div");

    tempElement.innerHTML = htmlFile;

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

    return tempElement.innerHTML;
  } catch (error) {
    return error;
  }
};

export const showStoriesByGenre = async () => {
  const genreSelect = document.getElementById(
    "genre-filter"
  ) as HTMLSelectElement;
  const ratingSelect = document.getElementById(
    "rating-filter"
  ) as HTMLSelectElement;

  const selectedGenre = genreSelect.value;
  const selectedRating = ratingSelect.value;

  console.log(`selected rating is : ${selectedRating}`);
  console.log(`selected genre is :${selectedGenre} `);

  if (selectedGenre === "All" && selectedRating === "All") {
    return;
  }


  try {
    const response = await filterByGenre(
      selectedGenre,
      parseInt(selectedRating),

    );

    const filteredStoryCardsHtml = populateTemplate(response, "About Story");

    const container = document.getElementById("story-cards-container");
    if (container) {
      container.innerHTML = filteredStoryCardsHtml;
    }

  } catch (error) {
    console.error("Error fetching filtered stories:", error);
  }
};

export const getStoriesFromSearch = async (event: Event) => {
  event.preventDefault();
  try {

    const storyToSearch = (
      document.getElementById("default-search") as HTMLInputElement
    ).value;

    console.log(`story to search : ${storyToSearch}`)

    const data = await fetchStories("/search", "0", "50", storyToSearch);

    console.log(`data from backend : ${data}`);
    const searchedStoryCardHtml = populateTemplate(data, "About Story");

    const container = document.getElementById("story-cards-container");
    if (container) {
      container.innerHTML = searchedStoryCardHtml;
    }

  } catch (error) {
    console.log(error);
  }
};
