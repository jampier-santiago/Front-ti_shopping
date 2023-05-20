import { useState, useEffect } from "react";
import { ResponseShopDetail } from "../data/shopsDetail.models";
import { useParams } from "react-router-dom";

// Endpoints
import endpoint from "logic/api/api.adapter";
const useShopDetailApplications = () => {
  const params = useParams();

  //states
  const [stores, setStores] = useState<ResponseShopDetail>();

  //functions
  const getAllStores = () => {
    endpoint()
      .get({
        url: `/stores/${params.id}`,
      })
      .then((result) => {
        setStores(result as unknown as ResponseShopDetail);
      })
      .catch((error) => console.log(error));
  };

  //efects
  useEffect(() => {
    getAllStores();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { stores };
};

export default useShopDetailApplications;
