import { Request as ExpressRequest } from "express";
import { IUser } from "./user.interface";

export interface Request extends ExpressRequest {
  user ?: IUser;
  chapterTopic ?: string;
  content ?: string;
}
