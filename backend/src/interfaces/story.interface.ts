export interface IStories {
  title: string;
  description: string;
  userId: string;
  coverImageUrl: string;
}

export interface IGenreStory {
  stories_id: string;
  genre_id: string;
}

export interface IReview {
  userId: string;
  storyId: string;
  rating: number;
  comment: string;
}
