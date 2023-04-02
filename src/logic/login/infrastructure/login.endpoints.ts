// Packages
import axios, { AxiosResponse } from "axios";

// Data
import { RequestLogin, ResponsetLogin } from "../data/login.models";

const useEndpointsLogin = () => {
  const makeLogin = ({
    email,
    password,
  }: RequestLogin): Promise<AxiosResponse<ResponsetLogin>> => {
    const params: RequestLogin = { email, password };

    return axios.post(`${process.env.REACT_APP_ENDPOINT_URL}/api/auth/login`, {
      params,
    });
  };

  return { makeLogin };
};

export default useEndpointsLogin;
