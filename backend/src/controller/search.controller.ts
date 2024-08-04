import { Request } from "../interfaces/auth.interface";
import * as SearchService from "../services/search.services"
import { Response } from "express";

export async function getStoriesFromSearch(req: Request, res: Response) {
    const { searchString } = req.query;
    
    const data = await SearchService.getStoriesFromSearch(searchString as string)

    res.json(data);
  }
