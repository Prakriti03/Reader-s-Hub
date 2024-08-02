import { IGenreStory } from "../interfaces/story.interface";
import { GenreModel } from "../models/genre.model";

export function getGenre() {
  const data = GenreModel.getGenres();

  return data;
}

export function addGenreStory(storyGenre : IGenreStory) {
  const data = GenreModel.addGenreStoryMap(storyGenre);

  return data;
}
