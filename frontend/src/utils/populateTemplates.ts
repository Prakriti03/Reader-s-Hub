import {
  IChapterPayload,
  IGenre,
  IStories,
} from "../interfaces/story.interfaces";
import { fetchGenres } from "../views/writings/addStory";

export function populateTemplate(stories: IStories[]) {
  return stories
    .map(
      (story) => `
      <div class="bg-white p-4 rounded-lg shadow-md">
        <h3 class="text-lg font-semibold">${story.title}</h3>
        <p class="text-gray-600">${story.description}</p>
      </div>
    `
    )
    .join("");
}

export function populateStoryTemplate(
  template: string,
  story: IStories
): string {
  template = template
    .replace(/{{coverImage}}/g, story.cover_image_url)
    .replace(/{{topic}}/g, story.title)
    .replace(/{{author}}/g, story.user_id!)
    .replace(/{{genre}}/g, story.genre)
    // .replace(/{{ratings}}/g, getStarRating(story.ratings))
    .replace(/{{description}}/g, story.description);
  // .replace(/{{reviews}}/g, story.reviews.map(review => `<p>${review}</p>`).join(''));

  return template;
}

export function populateChaptersList(
  storyId: string,
  chapterCount: number
): string {
  let chaptersHtml = "";
  for (let i = 1; i <= chapterCount; i++) {
    chaptersHtml += `
            <div class="p-4 bg-orange-100 rounded-lg shadow-md flex items-center justify-between">
        <span class="text-lg font-medium text-gray-700">Chapter ${i}</span>
        <div class="flex items-center space-x-4">
          <button id="read-button-${storyId}-${i}" class="text-white bg-orange-500 hover:bg-orange-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline read-chapter" data-read-story="${storyId}" data-read-chapter="${i}">
            Read
          </button>
          <button class="text-red-500 hover:text-red-700 focus:outline-none delete-chapter"  data-story="${storyId}" data-chapter="${i}">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H5m14 0h-2M5 7h14" />
            </svg>
          </button>
        </div>
      </div>
      `;
  }
  return chaptersHtml;
}

export function populateChapterTemplate(
  template: string,
  chapter: IChapterPayload
): string {
  return template
    .replace(/{{topic}}/g, chapter.chapterTopic)
    .replace(/{{content_url}}/g, chapter.content);
}

export const populateGenreList = async () => {
  try {
    const genres = await fetchGenres();


    const htmlFile = await fetch("/src/views/writings/addStory.html").then(
      (response) => response.text()
    );
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlFile;

    const genreContainer = tempElement.querySelector("#genre-select");

    if (genreContainer) {
      genres.forEach((genre: IGenre) => {
        const genreItem = document.createElement("option");
        genreItem.textContent = genre.genre;
        genreItem.dataset.genreId = genre.id;
        console.log(`genre : ${genreItem.textContent}, genre_id :${genreItem.dataset.genreId}`)
        genreContainer.appendChild(genreItem);
      });
    }
    if (document.getElementById("genre-list-placeholder")) {
      document.getElementById("genre-list-placeholder")!.innerHTML =
        tempElement.innerHTML;
    }

    return tempElement.innerHTML;
  } catch (error) {
    console.error("Error populating genre list:", error);
  }
};

