import { useNavigate } from "react-router-dom";
// Packages
import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const useProductsAdminApplication = () => {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();

  // States
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Computer",
      description: "Prueba de este endpoint",
      price: "2000",
      category: "1",
      store: "1",
      brand: "Apple",
    },
    {
      id: 2,
      name: "Computer 2",
      description: "Prueba de este endpoint",
      price: "2000",
      category: "1",
      store: "1",
      brand: "Apple",
    },
  ]);
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
        const temporaryData = [...products];

        const newData = temporaryData.filter((product) => product.id !== id);

        setProducts(newData);
      }
    });
  };

  const goToEdit = (id: number) => {
    navigate(`editar/${id}`);
  };

  const goToMakeProduct = () => {
    navigate("crear");
  };

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
