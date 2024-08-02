import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL } from "../constants/urls";
import { getToken } from "./token";

const createAuthHeaders = (
  token: string,
  addHeaders: string = ""
): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      addHeaders,
    },
  };
};

export const authPost = async (
  url: string,
  data: any,
  token: string,
  addHeaders :string
): Promise<AxiosResponse<any>> => {
  return await axios.post(`${BASE_URL}${url}`, data, createAuthHeaders(token,addHeaders));
};

export const authGet = async (
  url: string,
  token: string,
): Promise<AxiosResponse<any>> => {
  return await axios.get(`${BASE_URL}${url}`, createAuthHeaders(token));
};

export const token = getToken();
