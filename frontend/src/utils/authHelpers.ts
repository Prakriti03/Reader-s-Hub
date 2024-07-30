import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/urls';
import { getToken } from './token';

const createAuthHeaders = (token: string): AxiosRequestConfig => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const authPost = async (url: string, data: any, token: string): Promise<AxiosResponse<any>> => {
  return await axios.post(`${BASE_URL}${url}`, data, createAuthHeaders(token));
};

export const authGet = async (url: string, token: string): Promise<AxiosResponse<any>> => {
  return await axios.get(`${BASE_URL}${url}`, createAuthHeaders(token));
};

export const token = getToken();
