import useHomeControllers from "./home.controllers";
import useLoginControllers from "./login.constrollers";

const useControllers = () => {
  return { useHomeControllers, useLoginControllers };
};

export default useControllers;
