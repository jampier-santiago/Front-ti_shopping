// Packages
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

// Endpoints
import endpoint from "logic/api/api.adapter";

// interfaces
import { ProductResponse } from "../data/editProduct.data";
import { CategoryResponse } from "../data/categories.data";

const useEditProductApplication = () => {
  const params = useParams();

  //form
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  // State
  const [categories, setCategories] = useState<
    Array<{ text: string; value: string }>
  >([]);

  // Function
  const onSubmit = (data: any) => {};

  const getCategories = () => {
    endpoint()
      .get({ url: `/categories` })
      .then((result) => {
        const temporaryData: Array<CategoryResponse> =
          result as unknown as Array<CategoryResponse>;

        const data = temporaryData.map((category) => ({
          text: category.name_categoria,
          value:
            typeof category.Id_categories === "number"
              ? category.Id_categories.toString()
              : category.Id_categories,
        }));

        setCategories(data);
      })
      .catch((error) => console.log(error));
  };

  const getInfoProduct = () => {
    endpoint()
      .get({ url: `/products/${params.id}` })
      .then((result) => {
        const data = (result as unknown as Array<ProductResponse>)[0];

        setValue("name", data.Name_product);
        setValue("description", data.Description_product);
        setValue("price", data.Price);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCategories();
    getInfoProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { register, handleSubmit, onSubmit, errors, categories };
};

export default useEditProductApplication;
