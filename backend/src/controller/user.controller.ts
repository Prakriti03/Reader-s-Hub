import { Request, Response } from "express";
import * as UserService from "../services/user.services";

export function createUser(req: Request, res: Response) {
  const { body } = req;

  try {
    const data=UserService.createUser(body);
    res.json(body);
  } catch (error) {
    res.json(error);
  }
}

export function getUsers() {}

export function updateUser() {}
export function deleteUser() {}
