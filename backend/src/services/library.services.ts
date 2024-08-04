import exp from "constants";
import { LibraryModel } from "../models/library.model";
import { ILibrary } from "../interfaces/library.intergace";
import { off } from "process";

export function addToLibrary(userId: string, library: ILibrary) {
  const data = LibraryModel.addToLibrary(userId, library);

  return data;
}
export function getLibrary(userId: string, limit: string, offset: string) {
  const data = LibraryModel.getLibrary(userId, limit, offset);

  return data;
}

export function deleteFromLibrary(userId: string, storyId: string) {
  const data = LibraryModel.deleteFromLibrary(userId, storyId);

  return data;
}

export function checkStoryInLibrary(userId: string, storyId: string) {
  const data = LibraryModel.checkStoryInLibrary(userId, storyId);

  return data;
}
