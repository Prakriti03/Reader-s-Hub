import { Request } from "../interfaces/auth.interface";
import { Response, NextFunction } from "express";

export function authentication(req: Request, res: Response, next: NextFunction) {
    const {authorization} = req.headers;

    if(!authorization){
        return "Unauthenticated";
    }

    console.log(authorization);
}
