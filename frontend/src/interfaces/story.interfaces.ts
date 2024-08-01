export interface IStories {
  id?: string;
  title: string;
  description: string;
  user_id?: string;
  cover_image_url: string;
  genre: string;
  reviews?: string[];
  ratings?: number;
}

export interface IParams {
  id?: string;
  number?: number;
}

export interface IChapterPayload {
  chapterTopic: string;
  content: string;
}

export interface IGenre {
  id: string;
  genre: string;
}

export interface IGenreStory {
  stories_id: string;
  genre_id: string;
}
