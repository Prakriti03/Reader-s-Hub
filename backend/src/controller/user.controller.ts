import { Request, Response } from "express";
import * as UserService from "../services/user.services";

export function createUser(req: Request, res: Response) {
  const { body } = req;

  try {
    const data = UserService.createUser(body);
    res.json(body);
  } catch (error) {
    res.json(error);
  }
}

export async function getUsers(req: Request, res: Response) {
  const data = await UserService.getUsers();

  res.json(data);
}

export async function updateUser(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;
  const data = await UserService.updateUser(id, body);

  res.json(data);
}
export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;
  const data = await UserService.deleteUser(id);

  res.json(data);
}
