import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/badRequestError";
import { ForbiddenError } from "../errors/forbiddenError";
import { NotFoundError } from "../errors/notFoundError";
import { InternalServerError } from "../errors/internalServerError";
import { UnauthenticatedError } from "../errors/unauthenticatedError";
import { ConflictError } from "../errors/conflictError";

/**
 * The errorHandler function handles different types of errors and sends an appropriate response with
 * the corresponding status code and error message.
 * @param {Error} err - The `err` parameter in the `errorHandler` function is an Error object that
 * represents the error that occurred in the application. It can contain information about the error
 * such as the error message, stack trace, and other details.
 * @param {Request} req - Request object represents the HTTP request and contains properties for the
 * request query string, parameters, body, HTTP headers, and so on. It is used to access information
 * about the incoming request.
 * @param {Response} res - The `res` parameter in the `errorHandler` function represents the response
 * object in Express.js. It is used to send a response back to the client making the request. You can
 * use methods like `res.status()` to set the HTTP status code of the response and `res.json()` to send
 * @param {NextFunction} next - The `next` parameter in the `errorHandler` function is a callback
 * function that is used to pass control to the next middleware function in the stack. It is typically
 * used in Express.js middleware functions to pass control to the next middleware or route handler. If
 * an error occurs in the current middleware function
 */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let message = "";

  if (err instanceof BadRequestError) {
    statusCode = StatusCodes.BAD_REQUEST;
    message = err.message;
  } else if (err instanceof ForbiddenError) {
    statusCode = StatusCodes.FORBIDDEN;
    message = err.message;
  } else if (err instanceof NotFoundError) {
    statusCode = StatusCodes.NOT_FOUND;
    message = err.message;
  } else if (err instanceof InternalServerError) {
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    message = err.message;
  } else if (err instanceof UnauthenticatedError) {
    statusCode = StatusCodes.UNAUTHORIZED;
    message = err.message;
  }else if (err instanceof ConflictError){
    statusCode = StatusCodes.CONFLICT;
    message = err.message;
  }else{
    statusCode = StatusCodes.ACCEPTED;
    message = err.message
  }

  res.status(statusCode).json({ error: message });
}
