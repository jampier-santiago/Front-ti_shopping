import useHomeControllers from "./home.controllers";
import useLoginControllers from "./login.constrollers";
import useShopViewControllers from "./shopView.controllers";

const useControllers = () => {
  return { useHomeControllers, useLoginControllers, useShopViewControllers };
};

export default useControllers;
