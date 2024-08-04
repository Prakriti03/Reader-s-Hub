import { SearchModel } from "../models/search.model"

export function getStoriesFromSearch(searchString:string){
    const data =  SearchModel.getStories(searchString);
    
    return data
}