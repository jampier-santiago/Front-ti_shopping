// Packages
import { useState, useEffect } from "react";

const useProducDetailApplication = () => {
  //states
  const [currentPositionSlider, setCurrentPositionSlider] = useState<number>(0);

  const views = ["1", "2", "3"];

  //functions
  const handleCurrentPositionSlider = (position: number) => {
    const elements = document.querySelectorAll(".styled-view-slider");
    if (position <= elements.length - 1 && position >= 0) {
      setCurrentPositionSlider(position);
    }
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
  }, [currentPositionSlider]);

  return { currentPositionSlider, handleCurrentPositionSlider, views };
};
export default useProducDetailApplication;
