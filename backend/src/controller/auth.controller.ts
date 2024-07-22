import { Request, Response } from "express";
import * as AuthService from "../services/auth.services";

export async function login(req: Request, res: Response) {
  const { body } = req;
  const data = await AuthService.login(body);
  res.json(data);
}
