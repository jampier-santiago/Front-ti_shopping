// Packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

// Endpionts
import endpoint from "logic/api/api.adapter";

// Interfaces
import { SalesResponse } from "../data/sales.data";

const useStoreApplication = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  // States
  const [sales, setSales] = useState<Array<SalesResponse>>([]);

  // Functions
  const getInfoStore = () => {};

  const getSales = () => {
    endpoint()
      .get({ url: `/sales/1`, headers: { "x-token": token } })
      .then((result) => {
        setSales(result as unknown as Array<SalesResponse>);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getInfoStore();
    getSales();
  }, []);

  return { sales };
};

export default useStoreApplication;
