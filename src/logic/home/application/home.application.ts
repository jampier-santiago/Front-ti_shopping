// Packages
import { useState, useEffect } from "react";

// Endpoint
import endpoint from "logic/api/api.adapter";

// Interfaces
import { CategoryResponse } from "../data/category.data";
import { ProductResponse } from "../data/product.data";

const useHomeApplication = () => {
  // State
  const [categories, setCategories] = useState<Array<CategoryResponse>>([]);
  const [products, setProducts] = useState<Array<ProductResponse>>([]);

  // Function
  const getAllCategories = () => {
    endpoint()
      .get({ url: `/categories/` })
      .then((result) =>
        setCategories(result as unknown as Array<CategoryResponse>)
      )
      .catch((error) => console.log(error));
  };

  const getAllProducst = () => {
    endpoint()
      .get({ url: `products/store/1` })
      .then((result) =>
        setProducts(result as unknown as Array<ProductResponse>)
      )
      .catch((error) => console.log(error));
  };

  // Effects
  useEffect(() => {
    getAllCategories();
    getAllProducst();
  }, []);

  return { categories, products };
};

export default useHomeApplication;
