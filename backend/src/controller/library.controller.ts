import { Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as LibraryServices from "../services/library.services";

export async function getLibrary(req: Request, res: Response) {
  const userId = req.user?.id;

  const data = await LibraryServices.getLibrary(userId!);

  res.json(data);
}
export async function addToLibrary(req: Request, res: Response) {
  const userId = req.user?.id;
  const { body } = req;

  const data = await LibraryServices.addToLibrary(userId!, body);

  res.json(data);
}
export async function deleteFromLibrary(req: Request, res: Response) {}
