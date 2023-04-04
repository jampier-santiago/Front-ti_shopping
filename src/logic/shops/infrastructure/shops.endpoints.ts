// Packages
import axios, { AxiosResponse } from "axios";

//Data
import {
  ResponseShops,
  RequestMakeShop,
  ResponseMakeShop,
} from "../data/shops.models";

const useEndpointsShops = () => {
  //peticion al endporint

  const getAllShops = (): Promise<AxiosResponse<Array<ResponseShops>>> => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/api/stores/`);
  };
  const postShop = ({
    name,
    token,
  }: RequestMakeShop): Promise<AxiosResponse<RequestMakeShop>> => {
    return axios.post(
      `${process.env.REACT_APP_ENDPOINT_URL}/api/sotres/new-store`
    );
  };

  return { getAllShops };
};

export default useEndpointsShops;
