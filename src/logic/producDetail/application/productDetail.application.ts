// Packages
import { useState, useEffect } from "react";
import { ResponseProductDetail } from "../data/productDetail.models";
import { useParams } from "react-router-dom";

// Endpoints
import endpoint from "logic/api/api.adapter";

const useProducDetailApplication = () => {
  const params = useParams();
  //states
  const [currentPositionSlider, setCurrentPositionSlider] = useState<number>(0);

  //states
  const [product, setProduct] = useState<ResponseProductDetail>();

  const views = ["1", "2", "3"];

  //functions
  const handleCurrentPositionSlider = (position: number) => {
    const elements = document.querySelectorAll(".styled-view-slider");
    if (position <= elements.length - 1 && position >= 0) {
      setCurrentPositionSlider(position);
    }
  };

  //functions
  const getAllProducts = () => {
    endpoint()
      .get({
        url: `/products/${params.id}`,
      })
      .then((result) => {
        setProduct((result as any)[0]);
      })
      .catch((error) => console.log(error));
  };

  const moveSlider = () => {
    const elements = document.querySelectorAll(".styled-view-slider");
    if (elements.length > 0) {
      if (
        currentPositionSlider <= elements.length - 1 &&
        currentPositionSlider >= 0
      ) {
        elements.forEach((element: any) => {
          element.style.transitionDuration = "0.3s";
          element.style.transform = `translateX(-${
            100 * currentPositionSlider
          }%)`;
        });
      }
    }
  };

  useEffect(() => {
    moveSlider();
    getAllProducts();
  }, [currentPositionSlider]);

  return { currentPositionSlider, handleCurrentPositionSlider, views, product };
};

export default useProducDetailApplication;
