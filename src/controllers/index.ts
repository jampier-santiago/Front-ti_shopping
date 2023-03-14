import useHome from "./home";
import useProducts from "./products";

const useControllers = () => {
  return { useHome, useProducts };
};

export default useControllers;
