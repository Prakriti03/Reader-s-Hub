import { Request, Response } from "express";
import * as UserService from "../services/user.services";
import {cloudinary} from "../config/cloudinary.config"
 
export async function createUser(req: Request, res: Response) {
  const { body } = req;
  const profilePicture = req.file

  try {
    console.log(`req q : ${req.file}`)
    if (profilePicture) {
  
      // const fileUrl = `uploads/${req.file.filename}`;
      const result = await cloudinary.uploader.upload(profilePicture.path, {
        folder: 'user-profiles',
      });

      const userData = {
        ...body,
        profilePictureUrl:  result.secure_url, 
      };
      const data = await UserService.createUser(userData);
    }
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
