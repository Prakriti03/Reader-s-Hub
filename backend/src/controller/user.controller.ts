import { Response } from "express";
import { Request } from "../interfaces/auth.interface";
import * as UserService from "../services/user.services";
import { cloudinary } from "../config/cloudinary.config";

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  const profilePicture = req.file;

  try {
    if (profilePicture) {
      // const fileUrl = `uploads/${req.file.filename}`;
      const result = await cloudinary.uploader.upload(profilePicture.path, {
        folder: "user-profiles",
      });

      const userData = {
        ...body,
        profilePictureUrl: result.secure_url,
      };
      const data = await UserService.createUser(userData);
    }
    res.json(body);
  } catch (error) {
    console.log("here");
    res.json(error);
  }
}

export async function getUsers(req: Request, res: Response) {
  const data = await UserService.getUsers();

  res.json(data);
}

export async function getUserById(req: Request, res: Response) {
  const { id } = req.params;
  const data = await UserService.getUserById(id);

  res.json(data);
}

export async function getLoggedInUser(req: Request, res: Response) {
  const userId = req.user?.id!;

  const data = await UserService.getLoggedInUser(userId);

  res.json(data);
}

export async function updateUser(req: Request, res: Response) {
  const userId = req.user?.id!;

  const profilePicture = req.file;

  console.log(`profile picture to be updated in backend :${profilePicture}`);

  const { body } = req;

  try {
    let userData = { ...body };

    if (profilePicture) {
      const result = await cloudinary.uploader.upload(profilePicture.path, {
        folder: "user-profiles",
      });
      userData.profilePictureUrl = result.secure_url;
    }

    const data = await UserService.updateUser(userId, userData);
    res.json(data);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}
export async function deleteUser(req: Request, res: Response) {
  const userId = req.user?.id!;
  const data = await UserService.deleteUser(userId);

  res.json(data);
}
