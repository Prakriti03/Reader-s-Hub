import axios from "axios";
import { baseUrl } from "../utils/baseURL";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function signup(
  username: string,
  email: string,
  password: string,
  bio: string,
  profilePictureUrl: string
) {
  try {
    const response = await axios.post(`${baseUrl}/users/signup`, {
      username,
      email,
      password,
      bio,
      profilePictureUrl,
    });
    return response.data;
  } catch (error) {
    return error;
  }
}
