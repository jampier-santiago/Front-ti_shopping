// Packages
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useActionsShoppingCart } from "../../../redux/slices/store/thunk";

// Endpoint
import endpoint from "logic/api/api.adapter";

// Interfaces
import { ResponseProductDetail } from "logic/producDetail/data/productDetail.models";

interface Product extends ResponseProductDetail {
  amount: number;
}

interface GroupStore {
  [x: string]: Array<Product>;
}

const useViewPayApplication = () => {
  const { products } = useSelector((state: RootState) => state.shoppingCart);
  const { token } = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  const { restartDataSale } = useActionsShoppingCart();

  // Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // State
  const [dataProducts, setDataProducts] = useState<GroupStore>({});
  const [showToast, setShowToast] = useState<boolean>(false);

  // Function
  const submit = (data: any) => {
    const idProducts: Array<string> = [];

    Object.values(dataProducts).forEach((product, index) =>
      product.forEach((prod) => {
        idProducts.push(prod.Id_product.toString());
      })
    );

    endpoint()
      .post({
        url: `/sales`,
        data: { idStore: 1, products: idProducts, amount: 2000 },
        headers: { "x-token": token },
      })
      .then(() => setShowToast(true))
      .catch((error) => console.log(error));
  };

  const finishSale = () => {
    setShowToast(false);
    restartDataSale();

    navigate("/");
  };

  useEffect(() => {
    setDataProducts(products);
  }, [products]);

  return {
    dataProducts,
    register,
    handleSubmit,
    errors,
    submit,
    showToast,
    setShowToast,
    finishSale,
  };
};

export default useViewPayApplication;
