// Packages
import axios from "axios";

// Interfaces
import { HttpAdapter } from "./api.interfaces";

const endpoint = (): HttpAdapter => {
  async function get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }
  async function post<T>(url: string, info: any): Promise<T> {
    const { data } = await axios.post<T>(url, info);
    return data;
  }
  async function put<T>(url: string, info: any): Promise<T> {
    const { data } = await axios.put<T>(url, info);
    return data;
  }

  async function deleteEndpoint<T>(url: string): Promise<T> {
    const { data } = await axios.delete<T>(url);
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
