import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { token } from "../utils/authHelpers";

export const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const changeUserData = async (formData: FormData) => {
  try {
    const response = await axios.put(`${BASE_URL}/users`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteUserData = async () => {
  try {
    const response = await axios.delete(`${BASE_URL}/users/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
