import { addStoryWritings } from "../../services/stories.services";
import { getGenres, mapGenreStory } from "../../services/genres.services";
import setLoading from "../../utils/loading";
import { navigateTo } from "../../scripts/eventHandlers/auth.eventhandler";

let listOfGenresId: string[];
let genreStoryMap: object;

export const addStory = async (event: Event) => {
  event.preventDefault();

  setLoading(true, "submitStoryButton");  

  genreStoryMap = {};

  const storyTitle = (
    document.getElementById("writings-story-title") as HTMLInputElement
  ).value;
  const storyDescription = (
    document.getElementById("writings-story-description") as HTMLInputElement
  ).value;

  const coverImage = (
    document.getElementById("coverImageInput") as HTMLInputElement
  ).files![0];

  const formData = new FormData();

  formData.append("title", storyTitle);
  formData.append("description", storyDescription);
  formData.append("coverImage", coverImage);

  console.log(`formdata is : ${formData}`)

  try {
    const response = await addStoryWritings(formData);
    console.log(response)
    const storyId = response[0].id;

    genreStoryMap = listOfGenresId.map((genreId) => ({
      stories_id: storyId,
      genre_id: genreId,
    }));

    await mapGenreStory(genreStoryMap);

    console.log(response)

    if(response[0].title){

      alert(`Story ${response[0].title} created`);
      navigateTo("/profile")
    }
    
  } catch (error) {
    console.log(error)
      alert(JSON.stringify(error))
    return error;
  }
  finally {
    setLoading(false,"submitStoryButton"); // Set loading state to false
  }
};

export const addGenre = () => {
  const genreSelect = document.getElementById(
    "genre-select"
  ) as HTMLSelectElement;
  const selectedOption = genreSelect.options[genreSelect.selectedIndex];
  const selectedGenreId = selectedOption.getAttribute("data-genre-id");

  if (selectedGenreId) {
    listOfGenresId.push(selectedGenreId);
  } else {
    console.log("No genre ID found for the selected option.");
  }

  const selectedGenresList = document.getElementById("selected-genres");
  const selectedGenre = genreSelect.value;
  const listItem = document.createElement("li");
  listItem.textContent = selectedGenre;
  selectedGenresList!.appendChild(listItem);
};

export const fetchGenres = async () => {
  listOfGenresId = [];
  try {
    const response = await getGenres();
    return response;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return error;
  }
};
