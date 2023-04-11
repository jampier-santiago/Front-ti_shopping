import { useState, useEffect } from "react";
import { ResponseShops } from "../data/shops.models";
//Endporints
import useEndpointsShops from "../infrastructure/shops.endpoints";

const useShopsApplications = () => {
  //endpoints
  const { getAllShops } = useEndpointsShops();

  //states
  const [stores, setStores] = useState<Array<ResponseShops | null>>([]);

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

export default useShopsApplications;
