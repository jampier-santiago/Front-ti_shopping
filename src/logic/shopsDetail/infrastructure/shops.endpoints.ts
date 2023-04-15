// Packages
import axios, { AxiosResponse } from "axios";

//Data
import {
  ResponseShopDetail,
  RequestMakeShopDetail,
  ResponseMakeShopDetail,
} from "../data/shops.models";

const useEndpointsShops = () => {
  //peticion al endporint

  const getAllShops = (): Promise<AxiosResponse<Array<ResponseShopDetail>>> => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/api/stores/`);
  };
  const postShop = ({
    name,
    token,
  }: RequestMakeShopDetail): Promise<AxiosResponse<ResponseMakeShopDetail>> => {
    return axios.post(
      `${process.env.REACT_APP_ENDPOINT_URL}/api/sotres/new-store`
    );
  };

  return { getAllShops };
};

export default useEndpointsShops;
