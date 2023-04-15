import { useState, useEffect } from "react";
import { ResponseShopDetail } from "../data/shops.models";
//Endporints
import useEndpointsShops from "../infrastructure/shops.endpoints";

const useShopDetailApplications = () => {
  //endpoints
  const { getAllShops } = useEndpointsShops();

  //states
  const [stores, setStores] = useState<Array<ResponseShopDetail | null>>([]);

  //efects
  useEffect(() => {
    getAllShops()
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        if (data.length > 0) {
          setStores(response.data);
        }
      })
      .catch(({ response }) => {
        console.error(response?.data?.msg);
      });
  }, []);

  return { stores };
};

export default useShopDetailApplications;
