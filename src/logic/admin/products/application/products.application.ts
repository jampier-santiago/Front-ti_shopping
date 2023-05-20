// Packages
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

// Interfaces
import { ProductResponse } from "../data/product.data";

// Endpoints
import endpoint from "logic/api/api.adapter";

const useProductsAdminApplication = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  const { id, token } = useSelector((state: RootState) => state.auth);

  // States
  const [products, setProducts] = useState<Array<ProductResponse>>([]);
  const [showToast, setShowToast] = useState<boolean>(false);

  // Functions
  const handleStateModal = (name: string, id: number) => {
    MySwal.fire({
      title: "Eliminar producto",
      icon: "warning",
      text: `Esta seguro de que quiere eliminar el producto '${name}'`,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonText: "Eliminar",
      cancelButtonColor: "#F24236",
      confirmButtonColor: "#426E86",
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        endpoint()
          .deleteEndpoint({
            url: `/products/delete/${id}`,
            headers: { "x-token": token },
          })
          .then(() => {
            setShowToast(true);
          })
          .catch((error) => console.log(error));
      }
    });
  };

  const goToEdit = (id: number) => {
    navigate(`editar/${id}`);
  };

  const goToMakeProduct = () => {
    navigate("crear");
  };

  const getAllProducts = () => {
    endpoint()
      .get({ url: `/products/${id}` })
      .then((result) => {
        setProducts(result as unknown as Array<ProductResponse>);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    products,
    handleStateModal,
    showToast,
    setShowToast,
    goToEdit,
    goToMakeProduct,
  };
};

export default useProductsAdminApplication;
