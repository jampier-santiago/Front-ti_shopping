import { useState, useEffect } from "react";
import { ResponseShops } from "../data/shops.models";

// Endpoints
import endpoint from "logic/api/api.adapter";

const useShopsApplications = () => {
  //states
  const [stores, setStores] = useState<Array<ResponseShops | null>>([]);

  //functions
  const getAllStores = () => {
    endpoint()
      .get({
        url: "/stores/",
      })
      .then((result) => setStores(result as unknown as Array<ResponseShops>))
      .catch((error) => console.log(error));
  };

  //efects
  useEffect(() => {
    getAllStores();
  }, []);

  return { stores };
};

export default useShopsApplications;
