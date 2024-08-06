import axios from "axios";
import { BASE_URL } from "../constants/urls";

export async function login(email: string, password: string) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function signup(formData: FormData) {
  try {
    const response = await axios.post(`${BASE_URL}/users/signup`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error)
    return error.response.data.error;
  }
}
