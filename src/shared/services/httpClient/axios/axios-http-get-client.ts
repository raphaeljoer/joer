import axios, { AxiosRequestConfig } from 'axios';
import { HttpGetClient } from '../protocols/http-get-client';

class AxiosHttpGetClient implements HttpGetClient {
  async get<T>(url: string, options?: AxiosRequestConfig) {
    return axios.get<T>(url, options).then((res) => res.data);
  }
}

export const axiosHttpGetClient = new AxiosHttpGetClient();
