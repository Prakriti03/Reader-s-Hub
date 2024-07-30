export interface IStories {
  id?: string;
  title: string;
  description: string;
  user_id?: string;
  cover_image_url: string;
  genre : string;
  reviews ?: string[];
  ratings ?: number;
}

export interface IParams{
  id?: string
}
