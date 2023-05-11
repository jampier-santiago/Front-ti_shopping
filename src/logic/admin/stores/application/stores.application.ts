// Packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

// Endpoints
import endpoint from "logic/api/api.adapter";

// Interfaces
import { StoreResponse } from "../data/store.interfaces";

const useStoresApplication = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  // States
  const [stores, setStores] = useState<Array<StoreResponse>>([]);
  const [showToast, setshowToast] = useState<boolean>(false);
  const [infoToast, setInfoToast] = useState<{
    msg: string;
    state: "error" | "success";
  }>({ msg: "", state: "error" });

  // Functions
  const getAllStores = () => {
    endpoint()
      .get({ url: "/stores/" })
      .then((result) => setStores(result as unknown as Array<StoreResponse>))
      .catch((error) => console.log(error));
  };

  const deleteStore = (id: string | number) => {
    endpoint()
      .deleteEndpoint({
        url: `/stores/delete/${id}`,
        headers: { "x-token": token },
      })
      .then(() => {
        setshowToast(true);
        setInfoToast({ msg: "Tienda eliminada con exito", state: "success" });
        getAllStores();
      })
      .catch((error) => {
        setshowToast(true);
        setInfoToast({ msg: error.response.data.error, state: "error" });
        console.log(error);
      });
  };

  useEffect(() => {
    getAllStores();
  }, []);

  return { stores, deleteStore, setshowToast, showToast, infoToast };
};

export default useStoresApplication;
