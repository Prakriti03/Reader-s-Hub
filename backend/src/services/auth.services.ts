import { IUser } from "../interfaces/user.interface";
import { getUserByEmail } from "./user.services";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";
import config from "../config";

export async function login(body: Pick<IUser, "email" | "password">) {
  const existingUser = await getUserByEmail(body.email);

  if (!existingUser) {
    return "Invalid email";
  }



  const isValidPassword = await bcrypt.compare(
    body.password,
    existingUser.password
  );

  console.log(`isValidPassword = ${isValidPassword}`);

  if (!isValidPassword) {
    return "Invalid credentials";
  }
  const payload = {
    id: existingUser.id,
    username: existingUser.username,
    email: existingUser.email,
    role: existingUser.role,
  };

  const accessToken = sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.accessTokenExpiryMS,
  });

  const refreshToken = sign(payload, config.jwt.secret!, {
    expiresIn: config.jwt.refreshTokenExpiryMS,
  });

  return {
    accessToken,
    refreshToken,
  };
}
