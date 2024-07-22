import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";

export async function createUser(user: IUser) {
  const password = await bcrypt.hash(user.password, 10);

  user.password = password;

  const data = UserModel.createUser(user);
  
  return data;
}

export function getUsers() {}

export function getUserByEmail(email: string) {
  const data = UserModel.getUserByEmail(email);
  return data;
}

export function updateUser() {}

export function deleteUser() {}
