export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  profilePictureUrl: string;
  role : string;
}

export interface IGetUserQuery {
  q?: string;
  page?: number;
  size?: number;
}
