import { Request } from "../interfaces/auth.interface";
import { Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import config from "../config";
import { IUser } from "../interfaces/user.interface";
import { error } from "console";

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

export function authorize(role: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      const user = req.user!;
      console.log(user);
      if (!user.role.includes(role)) {
        res.json("Unauthorized");
        return;
      }
  
      next();
    };
  }
