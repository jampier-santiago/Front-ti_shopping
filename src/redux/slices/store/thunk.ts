// Actions
import { addNewProduct, removeProduct, resetShoppingCart } from "./slice";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "redux/store";

// Interfaces
import { ResponseProductDetail } from "logic/producDetail/data/productDetail.models";

export const useActionsShoppingCart = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.shoppingCart);

  const addProductToShoppingCar = (
    product: ResponseProductDetail,
    idStore: string
  ) => {
    let temporaryData = Object.assign({}, products);

    if (!temporaryData[idStore]) {
      temporaryData[idStore] = [];
    }

    const existProduct = temporaryData[idStore].find(
      (data) => data.Id_product === product.Id_product
    );

    if (existProduct) {
      const index = temporaryData[idStore].indexOf(existProduct);
      const temporaryStore = [...temporaryData[idStore]];
      temporaryStore[index] = {
        ...existProduct,
        amount: existProduct.amount + 1,
      };

      temporaryData[idStore] = [...temporaryStore];
    } else {
      temporaryData[idStore] = [
        ...temporaryData[idStore],
        { ...product, amount: 1 },
      ];
    }

    dispatch(addNewProduct(temporaryData));
  };

  const removeProduct = (product: ResponseProductDetail, idStore: string) => {
    let temporaryData = Object.assign({}, products);

    const existProduct = temporaryData[idStore].find(
      (data) => data.Id_product === product.Id_product
    );

    if (existProduct) {
      const index = temporaryData[idStore].indexOf(existProduct);
      const temporaryStore = [...temporaryData[idStore]];
      temporaryStore[index] = {
        ...existProduct,
        amount: existProduct.amount + 1,
      };

      temporaryData[idStore] = [...temporaryStore];
    }
  };

  return { addProductToShoppingCar, removeProduct };
};
