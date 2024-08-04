import { IUser } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";

export async function createUser(user: IUser) {
  const password = await bcrypt.hash(user.password, 10);

  user.password = password;

  const data = UserModel.createUser(user);

  return data;
}

export function getUsers() {
  const data = UserModel.getUsers();

  return data;
}

export function getUserByEmail(email: string) {
  const data = UserModel.getUserByEmail(email);
  return data;
}

export function getUserById(id: string) {
  const data = UserModel.getUserById(id);
  return data;
}

export function getLoggedInUser(userId: string) {
  const data = UserModel.getLoggedInUser(userId);

  return data;
}

export async function updateUser(userId: string, updatedUser: IUser) {
  if (updatedUser.password !== undefined) {
    const password = await bcrypt.hash(updatedUser.password, 10);

    updatedUser.password = password;
  }

  const data = UserModel.updateUser(userId, updatedUser);

  return data;
}

export function deleteUser(userId: string) {
  const data = UserModel.deleteUser(userId);

  return data;
}
