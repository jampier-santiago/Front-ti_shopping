// Packages
import { useState } from "react";

// Interfaces
import { ResponseProductDetail } from "../../../producDetail/data/productDetail.models";

interface Product extends ResponseProductDetail {
  idStore: string | number;
}

const useNavApplication = () => {
  //State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalShopping, setShowModalShopping] = useState<boolean>(false);

  //function
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalShopping = () => {
    setShowModalShopping((state) => !state);
  };

  return {
    showModal,
    handleModal,
    showModalShopping,
    handleModalShopping,
  };
};
export default useNavApplication;
