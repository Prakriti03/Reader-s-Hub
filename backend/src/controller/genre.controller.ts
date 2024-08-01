import { Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as GenreService from "../services/genre.services";

export async function getGenre(req: Request, res: Response) {
  const data = await GenreService.getGenre();

  res.json(data);
}

export async function addGenreStoryMap(req: Request, res: Response) {
  const { body } = req;

  const data = await GenreService.addGenreStory(body);

  res.json(data);
}
