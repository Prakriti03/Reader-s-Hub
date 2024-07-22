import { IUser } from "../interfaces/user.interface";
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
  static async createUser(user: IUser) {
    const userToCreate = {
      username: user.username,
      email: user.email,
      password: user.password,
      bio: user.bio,
      profilePictureUrl: user.profilePictureUrl,
    };
    console.log(userToCreate)
    const query = this.queryBuilder().insert(userToCreate).table("Users");
    const data = await query;
    return data;
  }

  static async getUsers() {}

  static async updateUser() {}

  static async deleteUser() {}

  static async getUserByEmail(email: string) {
    const query = this.queryBuilder()
      .table("Users")
      .where("email", email)
      .first();

    const data = await query;

    return data;
  }
}
