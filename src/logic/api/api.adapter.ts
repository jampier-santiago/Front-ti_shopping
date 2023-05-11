// Packages
import axios from "axios";

// Interfaces
import { HttpAdapter, Props } from "./api.interfaces";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
});

const endpoint = (): HttpAdapter => {
  async function get<T>({ url, headers }: Props): Promise<T> {
    const { data } = await apiClient.get<T>(url, { headers });
    return data;
  }
  async function post<T>({ url, headers, data }: Props): Promise<T> {
    const { data: response } = await apiClient.post<T>(url, data, { headers });
    return response;
  }
  async function put<T>({ url, headers, data }: Props): Promise<T> {
    const { data: response } = await apiClient.put<T>(url, data, { headers });
    return response;
  }

  async function deleteEndpoint<T>({ url, headers }: Props): Promise<T> {
    const { data } = await apiClient.delete<T>(url, { headers });
    return data;
  }

  return {
    get,
    post,
    put,
    deleteEndpoint,
  };
};

export default endpoint;
