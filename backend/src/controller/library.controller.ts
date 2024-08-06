import { Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as LibraryServices from "../services/library.services";
import { off } from "process";

export async function getLibrary(req: Request, res: Response) {
  const userId = req.user?.id;

  const { limit, offset } = req.query;

  const data = await LibraryServices.getLibrary(
    userId!,
    limit as string,
    offset as string
  );

  res.json(data);
}
export async function addToLibrary(req: Request, res: Response) {
  const userId = req.user?.id;
  const { body } = req;

  const data = await LibraryServices.addToLibrary(userId!, body);

  res.json(data);
}
export async function deleteFromLibrary(req: Request, res: Response) {}
export async function checkStoryInLibrary(req: Request, res: Response) {
  const userId = req.user?.id;
  const storyId = req.params.storyId;

  const data = await LibraryServices.checkStoryInLibrary(userId!, storyId);

  res.json(data);
}
