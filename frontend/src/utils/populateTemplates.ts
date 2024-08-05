import { GET_CHAPTER, GET_POST_STORIES } from "../constants/urls";
import {
  IChapterPayload,
  IGenre,
  IStories,
} from "../interfaces/story.interfaces";
import { fetchUserData } from "../services/user.services";
import { fetchGenres } from "../views/writings/addStory";

export function populateTemplate(stories: any, templatePurpose: string) {
  return stories
    .map(
      (story: IStories) => `
       <div class="bg-white rounded-lg shadow-md overflow-hidden" id= "story-card-${
         story.id
       }">
      <img class="w-full h-48 object-cover" src="${
        story.cover_image_url
      }" alt="${story.title}">
      <div class="p-4">
        <h3 class="text-lg font-semibold">${story.title}</h3>
        <p class="text-gray-600">Author : ${story.username}</p>
        <p class="text-gray-600">Genre : ${story.genres}</p>

        <div class="mt-2">
          ${createRatingStars(story.reviews?.avgRating)}
        </div>
      <a href="${GET_POST_STORIES}/${story.id}">${templatePurpose} </a>
      </div>
    </div>
    `
    )
    .join("");
}

export async function populateStoryTemplate(
  htmlFile: string,
  story: IStories,
  inLibrary: boolean
) {
  const { title, cover_image_url, username, genres, description, reviews } =
    story;
  const genreList = genres.join(", ");

  console.log(`cover image url : ${cover_image_url}`);

  let actionButtons = "";
  let reviewsSection = "";

  const userData = await fetchUserData();
  const loggedInUserId = userData.id;

  console.log(
    `logged in user's id : ${userData.id} and author's id : ${story.user_id}`
  );
  if (story.user_id === loggedInUserId) {
    actionButtons = `
      <button id="edit-story-button" class="bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 p-2 cursor-pointer">
        Edit Story
      </button>
      <button id="edit-chapters-button" class="bg-blue-500 text-white font-bold text-lg hover:bg-blue-700 p-2 cursor-pointer">
        Edit Chapters
      </button>
    `;
  } else {
    if (inLibrary) {
      actionButtons = `
        <button id="start-reading-button" class="bg-orange-700 text-white font-bold text-lg hover:bg-orange-900 p-2 cursor-pointer">
          Start Reading
        </button>
      `;
    } else {
      actionButtons = `
        <button id="add-to-library-button" class="bg-orange-700 text-white font-bold text-lg hover:bg-orange-900 p-2 cursor-pointer">
          Add to Library
        </button>
      `;
    }

    reviewsSection = `
      <h3 class="text-2xl font-bold mb-4 text-orange-600">Give a Review:</h3>
      <div id="rating-stars" class="flex justify-center mb-4">
        <span class="cursor-pointer text-2xl" data-rating="1">&#9733;</span>
        <span class="cursor-pointer text-2xl" data-rating="2">&#9733;</span>
        <span class="cursor-pointer text-2xl" data-rating="3">&#9733;</span>
        <span class="cursor-pointer text-2xl" data-rating="4">&#9733;</span>
        <span class="cursor-pointer text-2xl" data-rating="5">&#9733;</span>
      </div>
    `;
  }
  const template = htmlFile
    .replace(/{{coverImageUrl}}/g, cover_image_url)
    .replace(/{{topic}}/g, title)
    .replace(/{{author}}/g, username!)
    .replace(/{genreList}/g, genreList)
    .replace(/{ratings}/g, createRatingStars(reviews.avgRating))
    .replace(/{{description}}/g, description)
    .replace(/{actionButtons}/g, actionButtons)
    .replace(
      '<div id="reviews-section" class="mt-8"></div>',
      `<div id="reviews-section" class="mt-8">${reviewsSection}</div>`
    )
    .replace(
      /{comments}/g,
      reviews.comments
        .map(
          (comment) => `
       <div class="flex items-start bg-gray-100 p-4 rounded-lg shadow-md">
          <img src="${comment.userProfilePicture}" alt="profile-picture" class="w-10 h-10 rounded-full mr-4" />
      <div>
        <p class="text-gray-800">${comment.comment}</p>
      </div>
      </div>
    `
        )
        .join("")
    );

  return template;
}

export function populateChaptersList(
  storyId: string,
  chapterCount: number,
  userId: string,
  storyAuthorId: string
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
         ${
           userId === storyAuthorId
             ? `<button class="text-red-500 hover:text-red-700 focus:outline-none delete-chapter" data-story="${storyId}" data-chapter="${i}">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-1 12a2 2 0 01-2 2H8a2 2 0 01-2-2L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v2H5m14 0h-2M5 7h14" />
                  </svg>
                </button>`
             : ""
         }
                 
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

export function createRatingStars(rating: number = 0): string {
  const fullStars = Math.floor(rating);
  const partialStar = rating % 1;
  const roundedFullStars = partialStar >= 0.5 ? fullStars + 1 : fullStars;
  const emptyStars = 5 - roundedFullStars;

  return `
    ${'<span class="text-yellow-500">★</span>'.repeat(roundedFullStars)}
    ${'<span class="text-gray-400">★</span>'.repeat(emptyStars)}
  `;
}
