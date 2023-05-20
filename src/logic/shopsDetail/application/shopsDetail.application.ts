import { useState, useEffect } from "react";
import {
  ResponseShopDetail,
  ResponseProducts,
} from "../data/shopsDetail.models";
import { useParams } from "react-router-dom";

// Endpoints
import endpoint from "logic/api/api.adapter";
const useShopDetailApplications = () => {
  const params = useParams();

  //states
  const [stores, setStores] = useState<ResponseShopDetail>();
  const [products, setProducts] = useState<Array<ResponseProducts>>();

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

  //functions
  const getAllProducts = () => {
    endpoint()
      .get({
        url: `/products/store/${params.id}`,
      })
      .then((result) => {
        setProducts(result as unknown as Array<ResponseProducts>);
      })
      .catch((error) => console.log(error));
  };

  //efects
  useEffect(() => {
    getAllStores();
<<<<<<< HEAD
    getAllProducts();
=======
    // eslint-disable-next-line react-hooks/exhaustive-deps
>>>>>>> 580f7d9ff5cb19c42d9a458aacf67093bc86a0d9
  }, []);

  return { stores, products };
};

export default useShopDetailApplications;
