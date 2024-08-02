import exp from "constants";
import { LibraryModel } from "../models/library.model";
import { ILibrary } from "../interfaces/library.intergace";

export function addToLibrary(userId: string, library : ILibrary ) {
  const data = LibraryModel.addToLibrary(userId, library);

  return data;
}
export function getLibrary(userId: string) {
  const data = LibraryModel.getLibrary(userId);

  return data;
}

export function deleteFromLibrary(userId: string, storyId: string) {
  const data = LibraryModel.deleteFromLibrary(userId, storyId);

  return data;
}
