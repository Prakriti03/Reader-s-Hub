import { Request } from "../interfaces/auth.interface";
import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import config from "../config/config";
import { IUser } from "../interfaces/user.interface";

export function authentication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;

  console.log(`authorization = ${authorization}`);

  if (!authorization) {
    res.json("Unauthenticated");
  }

  const token = authorization!.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    res.json("Unauthenticated");
  }

  try {
    const user = verify(token[1], config.jwt.secret!) as IUser;

    req.user = user;
    next();
  } catch (error) {
    console.log(error);

    res.json("Unauthenticated");
  }
}

export function authorize(role: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user!;
    if (!user.role.includes(role)) {
      res.json("Unauthorized");
      return;
    }

    next();
  };
}
