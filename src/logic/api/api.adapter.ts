// Packages
import axios from "axios";

// Interfaces
import { HttpAdapter } from "./api.interfaces";

axios.create({
  baseURL: process.env.REACT_APP_ENDPOINT_URL,
});

const endpoint = (): HttpAdapter => {
  async function get<T>(url: string, headers?: any): Promise<T> {
    const { data } = await axios.get<T>(url, { headers });
    return data;
  }
  async function post<T>(url: string, info: any, headers?: any): Promise<T> {
    const { data } = await axios.post<T>(url, info, { headers });
    return data;
  }
  async function put<T>(url: string, info: any, headers?: any): Promise<T> {
    const { data } = await axios.put<T>(url, info, { headers });
    return data;
  }

  async function deleteEndpoint<T>(url: string, headers?: any): Promise<T> {
    const { data } = await axios.delete<T>(url, { headers });
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
