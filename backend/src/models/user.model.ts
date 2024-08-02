import { IUser } from "../interfaces/user.interface";
import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {
  static async createUser(user: IUser) {
    `Profile picture inside model : ${user.profilePictureUrl}`;
    const userToCreate = {
      username: user.username,
      email: user.email,
      password: user.password,
      bio: user.bio,
      profilePictureUrl: user.profilePictureUrl,
      role: "user",
    };
    const query = this.queryBuilder().insert(userToCreate).table("Users");
    const data = await query;
    return data;
  }

  static async getUsers() {
    const query = this.queryBuilder().select("*").table("Users");

    const data = await query;

    return data;
  }

  static async updateUser(userId: string, user: IUser) {
    const updatedUser = {
      username: user.username,
      email: user.email,
      password: user.password,
      bio: user.bio,
      profilePicture: user.profilePictureUrl,
      updated_at: new Date().toISOString(), //convert to camel case
    };

    const query = this.queryBuilder().update(updatedUser).table("Users").where({
      id: userId,
    });

    const data = await query;

    return data;
  }

  static async deleteUser(userId: string) {
    const query = this.queryBuilder()
      .del()
      .table("Users")
      .where("id", userId)
      .returning("*");

    const data = await query;

    return data;
  }

  static async getUserByEmail(email: string) {
    const query = this.queryBuilder()
      .table("Users")
      .where("email", email)
      .first();

    const data = await query;

    return data;
  }
}
