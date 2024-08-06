import { NextFunction, Response, Request } from "express";
import { Schema } from "joi";
import { BadRequestError } from "../errors/badRequestError";


export function validateReqBody(schema: Schema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body);

    if (error) {
      next(new BadRequestError(error.message));
    }

    req.body = value;

    next();
  };
}
