export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  profilePictureUrl: string;
  // permission : string[];
}

export interface IGetUserQuery {
  q?: string;
  page?: number;
  size?: number;
}
