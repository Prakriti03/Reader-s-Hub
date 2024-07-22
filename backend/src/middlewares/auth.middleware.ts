import { Request } from "../interfaces/auth.interface";
import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import config from "../config";
import { IUser } from "../interfaces/user.interface";

export function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  if (!authorization) {
    res.json("Unauthenticated");
  }

  const token = authorization!.split(" ");

  console.log(authorization);

  if (token.length !== 2 || token[0] !== "Bearer") {
    res.json("Unauthenticated");
  }

  try {
    const user = verify(token[1], config.jwt.secret!) as IUser;

    req.user = user;
    next();
  } catch (error) {
    res.json("Unauthenticated");
  }
}
