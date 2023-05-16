// Packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

// Interfaces
import { ResponseProductDetail } from "../../../producDetail/data/productDetail.models";
import { ProductResponse } from "logic/home/data/product.data";
import { useActionsShoppingCart } from "redux/slices/store/thunk";

interface Product extends ResponseProductDetail {
  amount: number;
}

interface GroupStore {
  [x: string]: Array<Product>;
}

const useNavApplication = () => {
  const { products } = useSelector((state: RootState) => state.shoppingCart);

  // Actions
  const {
    addProductToShoppingCar: addProductToShoppingCarAction,
    removeProduct,
  } = useActionsShoppingCart();

  //State
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModalShopping, setShowModalShopping] = useState<boolean>(false);
  const [infoProducts, setInfoProductss] = useState<GroupStore>({});

  //function
  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleModalShopping = () => {
    setShowModalShopping((state) => !state);
  };

  const addProductToShoppingCar = (
    idStore: string,
    product: ProductResponse
  ) => {
    addProductToShoppingCarAction(product, idStore);
  };

  const removeProductOfShoppingCar = (
    product: ProductResponse,
    idStore: string
  ) => {
    removeProduct(product, idStore);
  };

  useEffect(() => {
    setInfoProductss(products);
  }, [products]);

  return {
    showModal,
    handleModal,
    showModalShopping,
    handleModalShopping,
    infoProducts,
    addProductToShoppingCar,
    removeProductOfShoppingCar,
  };
};
export default useNavApplication;
