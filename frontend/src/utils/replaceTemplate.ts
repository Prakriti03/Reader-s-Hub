import { IStories } from "../interfaces/story.interfaces";

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
